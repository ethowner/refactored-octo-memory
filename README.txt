
Telegram Protect — лендинг под UZ трафик (двуязычный UZ/RU)

Быстрый старт:
1) Замените ссылку на Telegram:
   - В файле index.html найдите window.TELEGRAM_URL_B64 и вставьте base64 от вашей ссылки.
   - Сейчас там base64 от: https://t.me/your_channel_or_post
   - Пример: ссылка https://t.me/your_channel => base64: aHR0cHM6Ly90Lm1lL3lvdXJfY2hhbm5lbA==

2) Залейте на GitHub Pages или свой хостинг.
3) Лучше использовать свой домен через Cloudflare (чтобы не светить github.io).
4) На странице ссылка на t.me скрыта в JS и открывается с небольшой задержкой (120ms), чтобы повысить доставку в FB.

FAQ:
— Где поменять язык по умолчанию? В assets/script.js (логика saved/lang).
— Как поменять тексты? Все тексты хранятся в i18n внутри assets/script.js и в data-i18n атрибутах index.html.
— Почему так мало блоков? Это намеренно — меньше отвлечения, выше CTR/CR.
