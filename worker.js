/**
 * Cloudflare Worker - Gemini API Proxy
 * -------------------------------------
 * الهدف: إخفاء مفتاح Gemini API عن المتصفح تمامًا.
 * المتصفح يرسل السؤال هنا، والـ Worker هو اللي يتواصل مع Gemini
 * باستخدام المفتاح المخزّن كـ Secret (وليس داخل الكود).
 *
 * كيفية الإعداد:
 * 1) ثبّت Wrangler CLI:  npm install -g wrangler
 * 2) سجّل دخول:          wrangler login
 * 3) خزّن المفتاح كسرّ:  wrangler secret put GEMINI_API_KEY
 *    (بيطلب منك تلصق المفتاح، ما راح يظهر بأي مكان بالكود)
 * 4) عدّل ALLOWED_ORIGIN تحت لدومين موقعك الحقيقي
 * 5) انشر:               wrangler deploy
 * 6) خذ الرابط اللي بيطلعلك (مثال: https://gemini-proxy.YOURNAME.workers.dev)
 *    وحطه في ملف ai.html مكان WORKER_URL
 */

// غيّر هاد لدومين موقعك الفعلي (بدون سلاش بالآخر)
const ALLOWED_ORIGIN = 'http://127.0.0.1:5500';

// أقصى عدد طلبات مسموحة لكل IP خلال دقيقة واحدة (حماية بسيطة من إساءة الاستخدام)
const RATE_LIMIT_MAX = 15;
const RATE_LIMIT_WINDOW_SECONDS = 60;

export default {
  async fetch(request, env, ctx) {
    // الرد على طلبات CORS المبدئية (preflight)
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders(request) });
    }

    if (request.method !== 'POST') {
      return jsonResponse({ error: { message: 'الطريقة غير مسموحة' } }, 405, request);
    }

    // تحقق من مصدر الطلب (اختياري لكن يقلل إساءة الاستخدام)
    const origin = request.headers.get('Origin') || '';
    if (ALLOWED_ORIGIN !== '*' && origin && origin !== ALLOWED_ORIGIN) {
      return jsonResponse({ error: { message: 'مصدر الطلب غير مسموح' } }, 403, request);
    }

    // تحقق من وجود المفتاح
    if (!env.GEMINI_API_KEY) {
      return jsonResponse({ error: { message: 'لم يتم إعداد مفتاح Gemini على الخادم' } }, 500, request);
    }

    // حماية بسيطة: تحديد عدد الطلبات لكل IP (تحتاج KV Namespace اسمه RATE_LIMIT_KV)
    if (env.RATE_LIMIT_KV) {
      const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
      const allowed = await checkRateLimit(env.RATE_LIMIT_KV, ip);
      if (!allowed) {
        return jsonResponse(
          { error: { message: 'عدد كبير من الطلبات، حاول بعد قليل.' } },
          429,
          request
        );
      }
    }

    let body;
    try {
      body = await request.json();
    } catch (e) {
      return jsonResponse({ error: { message: 'صيغة الطلب غير صحيحة' } }, 400, request);
    }

    // تحقق بسيط من شكل الطلب المتوقع (system_instruction + contents)
    if (!body || !Array.isArray(body.contents)) {
      return jsonResponse({ error: { message: 'بيانات الطلب ناقصة' } }, 400, request);
    }

    try {
      const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${env.GEMINI_API_KEY}`;

      const geminiRes = await fetch(geminiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await geminiRes.json();
      return jsonResponse(data, geminiRes.status, request);
    } catch (err) {
      return jsonResponse({ error: { message: 'تعذر الاتصال بخدمة Gemini' } }, 502, request);
    }
  },
};

function corsHeaders(request) {
  const origin = request.headers.get('Origin') || '';
  const allow = ALLOWED_ORIGIN === '*' ? '*' : (origin === ALLOWED_ORIGIN ? origin : ALLOWED_ORIGIN);
  return {
    'Access-Control-Allow-Origin': allow,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

function jsonResponse(obj, status, request) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...corsHeaders(request),
    },
  });
}

/**
 * حماية بسيطة من الإساءة باستخدام Cloudflare KV.
 * تحتاج تنشئ KV Namespace وتربطه بالـ Worker باسم RATE_LIMIT_KV
 * (اختياري - الكود يشتغل حتى بدونه)
 */
async function checkRateLimit(kv, ip) {
  const key = `rl:${ip}`;
  const current = await kv.get(key);
  const count = current ? parseInt(current, 10) : 0;

  if (count >= RATE_LIMIT_MAX) {
    return false;
  }

  await kv.put(key, String(count + 1), { expirationTtl: RATE_LIMIT_WINDOW_SECONDS });
  return true;
}
