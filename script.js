/* ==========================================================
   NEURAL.ARCHIVE — data
   ========================================================== */
// deploy trigger.
const CATEGORIES = [
  { id: "text",         label: "Текст и ассистенты",     tag: "CAT.01" },
  { id: "code",         label: "Код и разработка",        tag: "CAT.02" },
  { id: "image",        label: "Изображения",             tag: "CAT.03" },
  { id: "video",        label: "Видео",                   tag: "CAT.04" },
  { id: "audio",        label: "Аудио и музыка",          tag: "CAT.05" },
  { id: "search",       label: "Поиск и наука",           tag: "CAT.06" },
  { id: "design",       label: "Дизайн и презентации",    tag: "CAT.07" },
  { id: "productivity", label: "Продуктивность",          tag: "CAT.08" },
  { id: "3d",           label: "3D и аватары",            tag: "CAT.09" },
  { id: "translate",    label: "Перевод и транскрипция",  tag: "CAT.10" },
  { id: "marketing",    label: "Маркетинг и копирайтинг", tag: "CAT.11" },
  { id: "automation",   label: "Автоматизация и агенты",  tag: "CAT.12" },
];

const DATA = [
  // ---- TEXT / ASSISTANTS ----
  { name: "ChatGPT", url: "https://chatgpt.com", tag: "Универсальный чат-ассистент от OpenAI", cats: ["text","code","image"] },
  { name: "Claude", url: "https://claude.ai", tag: "Диалоговая модель Anthropic для текста и кода", cats: ["text","code"] },
  { name: "Gemini", url: "https://gemini.google.com", tag: "Мультимодальный ассистент Google", cats: ["text","image"] },
  { name: "Grok", url: "https://grok.com", tag: "Ассистент xAI с доступом к живым данным X", cats: ["text","image","video"] },
  { name: "Microsoft Copilot", url: "https://copilot.microsoft.com", tag: "AI-ассистент, встроенный в Windows и Office", cats: ["text","code","image"] },
  { name: "Meta AI", url: "https://meta.ai", tag: "Ассистент Meta в Instagram, WhatsApp и вебе", cats: ["text"] },
  { name: "DeepSeek", url: "https://chat.deepseek.com", tag: "Открытая китайская модель для текста и кода", cats: ["text","code"] },
  { name: "Mistral Le Chat", url: "https://chat.mistral.ai", tag: "Чат-ассистент от французской Mistral AI", cats: ["text","code"] },
  { name: "Poe", url: "https://poe.com", tag: "Агрегатор десятков языковых моделей в одном чате", cats: ["text"] },
  { name: "Jasper", url: "https://jasper.ai", tag: "AI-копирайтинг для маркетинговых команд", cats: ["text","marketing"] },
  { name: "Copy.ai", url: "https://copy.ai", tag: "Генерация маркетинговых текстов и воркфлоу", cats: ["text","marketing"] },
  { name: "Writer", url: "https://writer.com", tag: "Корпоративная платформа контента и AI-агентов", cats: ["text","marketing"] },
  { name: "Notion AI", url: "https://notion.so", tag: "AI прямо внутри заметок и баз данных Notion", cats: ["text","productivity"] },
  { name: "Grammarly", url: "https://grammarly.com", tag: "Проверка грамматики и стиля на лету", cats: ["text","marketing"] },
  { name: "Perplexity", url: "https://perplexity.ai", tag: "AI-поиск с указанием источников", cats: ["text","search"] },
  { name: "You.com", url: "https://you.com", tag: "Поисковик с настраиваемыми AI-режимами", cats: ["text","search"] },
  { name: "Phind", url: "https://phind.com", tag: "AI-поиск, заточенный под разработчиков", cats: ["text","code","search"] },
  { name: "Genspark", url: "https://genspark.ai", tag: "AI-поиск с автосборкой ответов из источников", cats: ["text","search"] },
  { name: "QuillBot", url: "https://quillbot.com", tag: "Перефразирование и проверка текста", cats: ["text","marketing"] },
  { name: "Character.AI", url: "https://character.ai", tag: "Чат с AI-персонажами и ролевыми ботами", cats: ["text"] },
  { name: "Claude Code", url: "https://claude.com/product/claude-code", tag: "Агентная разработка из терминала на базе Claude", cats: ["code"] },
  { name: "Manus AI", url: "https://manus.im", tag: "Автономный AI-агент для сложных многошаговых задач", cats: ["text","automation"] },
  { name: "Qwen Chat", url: "https://chat.qwen.ai", tag: "Чат-модель Alibaba с открытыми весами", cats: ["text"] },
  { name: "HuggingChat", url: "https://huggingface.co/chat", tag: "Чат с открытыми моделями от Hugging Face", cats: ["text"] },
  { name: "Kimi", url: "https://kimi.moonshot.cn", tag: "Ассистент Moonshot AI с длинным контекстом", cats: ["text"] },
  { name: "GigaChat", url: "https://giga.chat", tag: "Русскоязычная модель от Сбера", cats: ["text"] },
  { name: "YandexGPT / Алиса", url: "https://alice.yandex.ru", tag: "AI-ассистент Яндекса в экосистеме сервисов", cats: ["text"] },

  // ---- CODE ----
  { name: "Cursor", url: "https://cursor.com", tag: "AI-редактор кода поверх VS Code", cats: ["code"] },
  { name: "GitHub Copilot", url: "https://github.com/features/copilot", tag: "Автодополнение и агентный режим прямо в IDE", cats: ["code"] },
  { name: "Replit Agent", url: "https://replit.com", tag: "Сборка и деплой приложений AI-агентом в браузере", cats: ["code"] },
  { name: "Lovable", url: "https://lovable.dev", tag: "Генерация веб-приложений из текстового описания", cats: ["code","design"] },
  { name: "Bolt.new", url: "https://bolt.new", tag: "Полноценные веб-проекты из промпта в браузере", cats: ["code"] },
  { name: "v0 by Vercel", url: "https://v0.dev", tag: "Генерация UI-компонентов React по описанию", cats: ["code","design"] },
  { name: "Cline", url: "https://cline.bot", tag: "Открытый автономный AI-агент для кода в IDE", cats: ["code"] },
  { name: "Tabnine", url: "https://tabnine.com", tag: "Приватное автодополнение кода для команд", cats: ["code"] },
  { name: "Windsurf", url: "https://windsurf.com", tag: "AI-редактор с агентным режимом (экс-Codeium)", cats: ["code"] },
  { name: "Amazon Q Developer", url: "https://aws.amazon.com/q/developer", tag: "AI-помощник разработчика в экосистеме AWS", cats: ["code"] },
  { name: "Devin", url: "https://cognition.ai", tag: "Автономный AI-инженер для end-to-end задач", cats: ["automation","code"] },

  // ---- IMAGE ----
  { name: "Midjourney", url: "https://midjourney.com", tag: "Эталон качества генерации изображений", cats: ["image"] },
  { name: "DALL·E 3", url: "https://openai.com/dall-e-3", tag: "Генератор изображений от OpenAI", cats: ["image"] },
  { name: "Stable Diffusion", url: "https://stability.ai", tag: "Открытая модель генерации изображений", cats: ["image"] },
  { name: "Leonardo.Ai", url: "https://leonardo.ai", tag: "Гибкая генерация с обучаемыми стилями", cats: ["image"] },
  { name: "Adobe Firefly", url: "https://firefly.adobe.com", tag: "Генеративный AI, встроенный в Adobe Creative Cloud", cats: ["image","video"] },
  { name: "FLUX.1", url: "https://blackforestlabs.ai", tag: "Быстрая открытая модель от Black Forest Labs", cats: ["image"] },
  { name: "Ideogram", url: "https://ideogram.ai", tag: "Генерация изображений с точным текстом на них", cats: ["image"] },
  { name: "Canva Magic Studio", url: "https://canva.com", tag: "AI-инструменты дизайна внутри Canva", cats: ["image","design"] },
  { name: "Photoshop AI", url: "https://adobe.com", tag: "Generative Fill и AI-редактирование в Photoshop", cats: ["image"] },
  { name: "Playground", url: "https://playground.com", tag: "Бесплатный редактор с генерацией изображений", cats: ["image"] },
  { name: "ArtFlow AI", url: "https://artflow.ai", tag: "Генерация персонажей и аниме-арта", cats: ["image"] },
  { name: "Microsoft Designer", url: "https://designer.microsoft.com", tag: "AI-дизайн постов и графики от Microsoft", cats: ["image","design"] },
  { name: "Grok Imagine", url: "https://grok.com", tag: "Генерация изображений и видео внутри Grok", cats: ["image","video"] },
  { name: "NightCafe", url: "https://nightcafe.studio", tag: "Комьюнити-платформа для AI-арта", cats: ["image"] },
  { name: "Шедеврум", url: "https://shedevrum.ai", tag: "Генератор изображений от Сбера", cats: ["image"] },
  { name: "Kandinsky", url: "https://fusionbrain.ai", tag: "Российская модель генерации изображений", cats: ["image"] },
  { name: "Recraft", url: "https://recraft.ai", tag: "Генерация векторной графики и иконок", cats: ["image"] },

  // ---- VIDEO ----
  { name: "Runway", url: "https://runwayml.com", tag: "Генерация и AI-монтаж видео", cats: ["video"] },
  { name: "Pika", url: "https://pika.art", tag: "Быстрая генерация коротких видеороликов", cats: ["video"] },
  { name: "Luma Dream Machine", url: "https://lumalabs.ai", tag: "Видео и 3D-сцены из текста и фото", cats: ["video","3d"] },
  { name: "Kling AI", url: "https://klingai.com", tag: "Реалистичная генерация видео с физикой движения", cats: ["video"] },
  { name: "Sora", url: "https://sora.com", tag: "Видеогенератор OpenAI", cats: ["video"] },
  { name: "Google Veo", url: "https://deepmind.google/technologies/veo", tag: "Видеомодель DeepMind с синхронным звуком", cats: ["video"] },
  { name: "Hailuo AI", url: "https://hailuoai.video", tag: "Видеогенерация от MiniMax", cats: ["video"] },
  { name: "HeyGen", url: "https://heygen.com", tag: "AI-аватары и озвучка для видео на языках мира", cats: ["video"] },
  { name: "Synthesia", url: "https://synthesia.io", tag: "Корпоративные видео с AI-дикторами", cats: ["video"] },
  { name: "D-ID", url: "https://d-id.com", tag: "Оживление фото в говорящих аватаров", cats: ["video"] },
  { name: "Genmo", url: "https://genmo.ai", tag: "Открытая модель генерации видео", cats: ["video"] },
  { name: "Haiper", url: "https://haiper.ai", tag: "Генерация коротких видео из текста и изображений", cats: ["video"] },
  { name: "Captions AI", url: "https://captions.ai", tag: "AI-редактор видео с субтитрами и аватарами", cats: ["video","audio"] },

  // ---- AUDIO / MUSIC ----
  { name: "Suno", url: "https://suno.com", tag: "Полноценные песни с вокалом из текстового промпта", cats: ["audio"] },
  { name: "Udio", url: "https://udio.com", tag: "Генерация музыки и вокала по описанию", cats: ["audio"] },
  { name: "AIVA", url: "https://aiva.ai", tag: "Композитор для саундтреков и оркестровок", cats: ["audio"] },
  { name: "Soundraw", url: "https://soundraw.io", tag: "Конструктор бесшовных музыкальных треков", cats: ["audio"] },
  { name: "Mubert", url: "https://mubert.com", tag: "Генеративная фоновая музыка по API", cats: ["audio"] },
  { name: "Boomy", url: "https://boomy.com", tag: "Создание и релиз AI-треков на стримингах", cats: ["audio"] },
  { name: "Loudly", url: "https://loudly.com", tag: "Генератор музыки с обложками для роликов", cats: ["audio"] },
  { name: "Riffusion", url: "https://riffusion.com", tag: "Генерация музыки через диффузию спектрограмм", cats: ["audio"] },
  { name: "ElevenLabs", url: "https://elevenlabs.io", tag: "Синтез и клонирование голоса эталонного качества", cats: ["audio"] },
  { name: "Murf AI", url: "https://murf.ai", tag: "Студийная озвучка текста голосами на выбор", cats: ["audio"] },
  { name: "Play.ht", url: "https://play.ht", tag: "Реалистичный синтез речи по API", cats: ["audio"] },
  { name: "Resemble AI", url: "https://resemble.ai", tag: "Клонирование голоса и генеративный звук", cats: ["audio"] },
  { name: "Descript", url: "https://descript.com", tag: "Редактирование аудио и видео как текстового документа", cats: ["audio","video"] },
  { name: "Speechify", url: "https://speechify.com", tag: "Озвучка текста и статей естественным голосом", cats: ["audio"] },
  { name: "WellSaid Labs", url: "https://wellsaidlabs.com", tag: "AI-голоса для корпоративных видео и обучения", cats: ["audio"] },

  // ---- SEARCH / RESEARCH ----
  { name: "NotebookLM", url: "https://notebooklm.google", tag: "AI-заметки и подкасты по загруженным документам", cats: ["search"] },
  { name: "Consensus", url: "https://consensus.app", tag: "Поиск ответов по научным публикациям", cats: ["search"] },
  { name: "Elicit", url: "https://elicit.com", tag: "AI-помощник для литературных обзоров", cats: ["search"] },
  { name: "SciSpace", url: "https://scispace.com", tag: "Чтение и объяснение научных статей с AI", cats: ["search"] },
  { name: "Scite", url: "https://scite.ai", tag: "Анализ того, как статью цитируют другие", cats: ["search"] },
  { name: "Glean", url: "https://glean.com", tag: "Корпоративный AI-поиск по внутренним данным", cats: ["search","productivity"] },

  // ---- DESIGN / PRESENTATIONS ----
  { name: "Gamma", url: "https://gamma.app", tag: "Презентации и сайты из текста за минуты", cats: ["design"] },
  { name: "Tome", url: "https://tome.app", tag: "AI-сторителлинг для презентаций", cats: ["design"] },
  { name: "Beautiful.ai", url: "https://beautiful.ai", tag: "Слайды, которые сами держат баланс дизайна", cats: ["design"] },
  { name: "Figma AI", url: "https://figma.com", tag: "AI-инструменты внутри редактора интерфейсов Figma", cats: ["design"] },
  { name: "Framer AI", url: "https://framer.com", tag: "Генерация и публикация сайтов с AI", cats: ["design"] },
  { name: "Uizard", url: "https://uizard.io", tag: "Скетчи и скриншоты превращаются в макеты", cats: ["design"] },

  // ---- PRODUCTIVITY ----
  { name: "Otter.ai", url: "https://otter.ai", tag: "Расшифровка встреч и AI-заметки в реальном времени", cats: ["productivity"] },
  { name: "Fireflies.ai", url: "https://fireflies.ai", tag: "Запись, транскрипция и поиск по звонкам", cats: ["productivity"] },
  { name: "Motion", url: "https://usemotion.com", tag: "AI сам планирует день по задачам и встречам", cats: ["productivity"] },
  { name: "Reclaim.ai", url: "https://reclaim.ai", tag: "Умное распределение времени в календаре", cats: ["productivity"] },
  { name: "Superhuman AI", url: "https://superhuman.com", tag: "Почтовый клиент с AI-ускорением работы", cats: ["productivity"] },
  { name: "Clockwise", url: "https://getclockwise.com", tag: "Оптимизация расписания команды", cats: ["productivity"] },

  // ---- 3D / AVATARS ----
  { name: "Meshy", url: "https://meshy.ai", tag: "Генерация 3D-моделей из текста и изображений", cats: ["3d"] },
  { name: "Kaedim", url: "https://kaedim3d.com", tag: "Превращение 2D-скетчей в готовые 3D-ассеты", cats: ["3d"] },
  { name: "Ready Player Me", url: "https://readyplayer.me", tag: "Кроссплатформенные 3D-аватары для игр и метавселенных", cats: ["3d"] },
  { name: "Inworld AI", url: "https://inworld.ai", tag: "Движок для AI-персонажей в играх", cats: ["3d"] },
  { name: "Scenario", url: "https://scenario.com", tag: "Генерация игровых ассетов в собственном стиле", cats: ["3d","image"] },

  // ---- TRANSLATE ----
  { name: "DeepL", url: "https://deepl.com", tag: "Один из точнейших AI-переводчиков", cats: ["translate"] },
  { name: "Google Translate", url: "https://translate.google.com", tag: "Массовый переводчик с AI-режимом", cats: ["translate"] },
  { name: "Whisper", url: "https://openai.com/research/whisper", tag: "Открытая модель распознавания речи OpenAI", cats: ["translate","audio"] },
  { name: "Rev", url: "https://rev.com", tag: "Транскрипция, субтитры и перевод видео", cats: ["translate","audio"] },
  { name: "Trint", url: "https://trint.com", tag: "AI-расшифровка и редактирование текста из аудио", cats: ["translate","audio"] },

  // ---- MARKETING ----
  { name: "Writesonic", url: "https://writesonic.com", tag: "Генерация статей, лендингов и рекламных текстов", cats: ["marketing"] },
  { name: "Surfer SEO", url: "https://surferseo.com", tag: "AI-оптимизация текста под поисковики", cats: ["marketing"] },
  { name: "HubSpot AI", url: "https://hubspot.com", tag: "AI-агенты Breeze внутри CRM и маркетинга", cats: ["marketing","automation"] },
  { name: "Apollo.io", url: "https://apollo.io", tag: "AI-поиск лидов и автоматизация продаж", cats: ["marketing"] },
  { name: "Amplemarket", url: "https://amplemarket.com", tag: "AI-платформа для outbound-продаж", cats: ["marketing"] },
  { name: "6sense", url: "https://6sense.com", tag: "Предиктивная аналитика спроса в B2B", cats: ["marketing"] },

  // ---- AUTOMATION ----
  { name: "Zapier AI Agents", url: "https://zapier.com", tag: "AI-агенты для связки тысяч сервисов", cats: ["automation"] },
  { name: "Make", url: "https://make.com", tag: "Визуальный конструктор автоматизаций с AI-блоками", cats: ["automation"] },
  { name: "AutoGPT", url: "https://agpt.co", tag: "Открытый фреймворк автономных AI-агентов", cats: ["automation"] },
  { name: "n8n", url: "https://n8n.io", tag: "Open-source платформа автоматизации workflow", cats: ["automation"] },
  { name: "Blue Yonder", url: "https://blueyonder.com", tag: "AI для планирования цепочек поставок", cats: ["automation"] },
];

/* ==========================================================
   State
   ========================================================== */
let activeCategory = null; // null = all
let searchTerm = "";

/* ==========================================================
   DOM refs
   ========================================================== */
const chipRow      = document.getElementById("chipRow");
const archive       = document.getElementById("archive");
const searchInput  = document.getElementById("searchInput");
const emptyState   = document.getElementById("emptyState");
const statTotal    = document.getElementById("statTotal");
const statCats     = document.getElementById("statCats");
const statShown    = document.getElementById("statShown");

/* ==========================================================
   Build filter chips
   ========================================================== */
function buildChips(){
  const allChip = document.createElement("button");
  allChip.className = "chip active";
  allChip.dataset.cat = "";
  allChip.innerHTML = `ВСЕ <span class="chip-count">${DATA.length}</span>`;
  allChip.addEventListener("click", () => setActiveCategory(null));
  chipRow.appendChild(allChip);

  CATEGORIES.forEach(cat => {
    const count = DATA.filter(d => d.cats.includes(cat.id)).length;
    const chip = document.createElement("button");
    chip.className = "chip";
    chip.dataset.cat = cat.id;
    chip.innerHTML = `${cat.label} <span class="chip-count">${count}</span>`;
    chip.addEventListener("click", () => setActiveCategory(cat.id));
    chipRow.appendChild(chip);
  });
}

function setActiveCategory(catId){
  activeCategory = catId;
  [...chipRow.children].forEach(chip => {
    chip.classList.toggle("active", (chip.dataset.cat || null) === catId);
  });
  render();
}

/* ==========================================================
   Render archive
   ========================================================== */
function matchesSearch(item){
  if(!searchTerm) return true;
  const haystack = (item.name + " " + item.tag).toLowerCase();
  return haystack.includes(searchTerm);
}

function cardHTML(item, index){
  const catsLabel = item.cats
    .map(id => CATEGORIES.find(c => c.id === id)?.label.split(" ")[0])
    .join(" · ");
  return `
    <article class="card">
      <div class="card-head">
        <span class="card-index">NODE.${String(index).padStart(3,"0")}</span>
        <span class="card-cats">${catsLabel}</span>
      </div>
      <h3 class="card-name">${item.name}</h3>
      <p class="card-tagline">${item.tag}</p>
      <a class="card-link" href="${item.url}" target="_blank" rel="noopener">ACCESS_NODE →</a>
    </article>
  `;
}

function render(){
  archive.innerHTML = "";
  let shownCount = 0;

  if(activeCategory === null){
    // grouped view
    CATEGORIES.forEach(cat => {
      const items = DATA.filter(d => d.cats.includes(cat.id) && matchesSearch(d));
      if(items.length === 0) return;
      shownCount += items.length;

      const section = document.createElement("section");
      section.className = "category-section";
      section.innerHTML = `
        <div class="category-head">
          <span class="category-tag">${cat.tag}</span>
          <h2 class="category-title">${cat.label}</h2>
          <span class="category-total">${items.length} узлов</span>
        </div>
        <div class="card-grid">
          ${items.map((item) => cardHTML(item, DATA.indexOf(item) + 1)).join("")}
        </div>
      `;
      archive.appendChild(section);
    });
  } else {
    // flat filtered view
    const cat = CATEGORIES.find(c => c.id === activeCategory);
    const items = DATA.filter(d => d.cats.includes(activeCategory) && matchesSearch(d));
    shownCount = items.length;

    const section = document.createElement("section");
    section.className = "category-section";
    section.innerHTML = `
      <div class="category-head">
        <span class="category-tag">${cat.tag}</span>
        <h2 class="category-title">${cat.label}</h2>
        <span class="category-total">${items.length} узлов</span>
      </div>
      <div class="card-grid">
        ${items.map((item) => cardHTML(item, DATA.indexOf(item) + 1)).join("")}
      </div>
    `;
    archive.appendChild(section);
  }

  emptyState.hidden = shownCount !== 0;
  statShown.textContent = String(shownCount).padStart(3, "0");
}

/* ==========================================================
   Search wiring
   ========================================================== */
searchInput.addEventListener("input", (e) => {
  searchTerm = e.target.value.trim().toLowerCase();
  render();
});

/* ==========================================================
   Stats
   ========================================================== */
function initStats(){
  statTotal.textContent = String(DATA.length).padStart(3, "0");
  statCats.textContent = String(CATEGORIES.length).padStart(2, "0");
  statShown.textContent = String(DATA.length).padStart(3, "0");
}

/* ==========================================================
   Hero canvas — drifting neural network
   ========================================================== */
function initNetCanvas(){
  const canvas = document.getElementById("netCanvas");
  const ctx = canvas.getContext("2d");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let w, h, nodes;

  function resize(){
    w = canvas.width = canvas.offsetWidth * devicePixelRatio;
    h = canvas.height = canvas.offsetHeight * devicePixelRatio;
  }

  function makeNodes(){
    const count = Math.min(70, Math.floor((w * h) / 55000));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25 * devicePixelRatio,
      vy: (Math.random() - 0.5) * 0.25 * devicePixelRatio,
      r: Math.random() * 1.6 + 0.6,
    }));
  }

  function step(){
    ctx.clearRect(0, 0, w, h);

    nodes.forEach(n => {
      n.x += n.vx; n.y += n.vy;
      if(n.x < 0 || n.x > w) n.vx *= -1;
      if(n.y < 0 || n.y > h) n.vy *= -1;
    });

    const maxDist = 150 * devicePixelRatio;
    for(let i = 0; i < nodes.length; i++){
      for(let j = i + 1; j < nodes.length; j++){
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if(dist < maxDist){
          const alpha = (1 - dist / maxDist) * 0.35;
          ctx.strokeStyle = `rgba(23,247,224,${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    nodes.forEach(n => {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r * devicePixelRatio, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,46,196,0.75)";
      ctx.fill();
    });

    if(!reduceMotion) requestAnimationFrame(step);
  }

  resize();
  makeNodes();
  step();

  window.addEventListener("resize", () => {
    resize();
    makeNodes();
    if(reduceMotion) step();
  });
}

/* ==========================================================
   GoatCounter — live view count in the footer (optional)
   Requires "Allow adding visitor counts on your website"
   enabled in your GoatCounter site settings.
   ========================================================== */
function initGoatCounter(){
  const el = document.getElementById("goatCount");
  if(!el) return;
   const site = "neural-archive"; // сайт-код с goatcounter.com
   
  const path = encodeURIComponent(location.pathname || "/");

  fetch(`https://${site}.goatcounter.com/counter/${path}.json`)
    .then(r => { if(!r.ok) throw new Error("no data"); return r.json(); })
    .then(data => {
      const count = data.count_unique ?? data.count;
      if(count) el.textContent = `Просмотров страницы: ${count}`;
      else el.remove();
    })
    .catch(() => el.remove());
}

/* ==========================================================
   Init
   ========================================================== */
buildChips();
initStats();
render();
initNetCanvas();
initGoatCounter();
