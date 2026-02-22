(function () {
  const i18n = {
    de: {
      badge: 'RESONANCE PROTOCOL • v1.0',
      languageLabel: 'Sprache',
      heroTitle: 'IrsanAI RP',
      heroSubtitle: 'Intent zuerst: Entscheide bewusst, ob du nur eine direkte Antwort willst oder echte Resonanz brauchst.',
      step1Title: '1) Beschreibe exakt dein Vorhaben',
      step1Support: 'So formulieren, wie du es direkt in ein Online-LLM schreiben würdest.',
      intentLabel: 'Dein Intent',
      intentPlaceholder: 'Ziel, Kontext, gewünschtes Ergebnis und ggf. Randbedingungen.',
      stepIntentCheckTitle: '2) Intent-Check: RP nötig oder Direct besser?',
      stepIntentCheckSupport: 'Das System klassifiziert deinen Intent, gibt ein Verständnis in % und empfiehlt den passenden Modus.',
      analyzeBtn: 'Intent analysieren',
      modeLabel: 'Modus',
      modeAuto: 'Auto (empfohlen)',
      modeRp: 'RP-Modus erzwingen',
      modeDirect: 'Direct-Modus erzwingen',
      advisorNeedIntent: 'Bitte zuerst deinen Intent eintragen.',
      advisorLabelType: 'Typ',
      advisorLabelConfidence: 'Verständnis',
      advisorLabelRec: 'Empfehlung',
      advisorLabelWhy: 'Warum',
      advisorTypeDirect: 'Ad-hoc / direkte Antwort',
      advisorTypeResonance: 'Ko-kreativ / resonanzfähig',
      advisorRecDirect: 'Direct-Modus',
      advisorRecRp: 'RP-Modus',
      advisorWhyDirect: 'Intent wirkt transaktional oder auf eine einmalige Antwort ausgerichtet.',
      advisorWhyRp: 'Intent wirkt iterativ, offen und auf gemeinsame Entwicklung ausgelegt.',
      step2Title: '3) Mind-Flow verstärken',
      step2Support: 'Keine Beispiele, keine Ablenkung — nur Fokusfragen und RP-Parameter.',
      mindflowBullets: [
        'Was ist das 1-Satz-Kernziel?',
        'Was wäre heute ein konkret nutzbarer Output?',
        'Welche Grenze/Bedingung muss eingehalten werden?'
      ],
      toggleDesire: 'White Hot Desire einbeziehen',
      toggleBoundaries: 'Grenzen + Sicherheit + Co-Kreation betonen',
      toggleMeta: 'Maximalen Meta-Kognitions-Level aktivieren',
      generateBtn: 'Prompt erzeugen',
      handshakeReadyRp: 'SYN → SYN-ACK → ACK • RP-Verbindung established ✓',
      handshakeReadyDirect: 'Direct-Mode ✓ Fokus auf schnelle, klare Antwort',
      handshakeNeedIntent: 'Bitte zuerst deinen Intent eintragen.',
      step3Title: '4) Ergebnis: Prompt für dein LLM',
      copyBtn: 'Prompt kopieren',
      copied: 'Kopiert ✓',
      copyFail: 'Copy nicht möglich',
      expectedTitle: 'Zu erwartendes Ergebnis (mit vs. ohne RP)',
      expectedSupport: 'RP lohnt sich vor allem bei längeren, iterativen Vorhaben; bei Einmalfragen oft nicht nötig.',
      withoutRpTitle: 'Ohne RP',
      withoutRpBullets: [
        'Schnell bei Einmalfragen',
        'Weniger Overhead, direkter Output',
        'Bei komplexen Vorhaben oft weniger Struktur'
      ],
      withRpTitle: 'Mit RP',
      withRpBullets: [
        'Erste Antwort als user-zentriertes Start-Cockpit statt Technikblock',
        'Probabilistische Verlaufseinschätzung + effizientester Pfad von Anfang an',
        'Besser für Iteration, Co-Creation und Ping-Pong-Reduktion'
      ],
      historyTitle: 'Letzte Prompts (lokal)',
      historyClear: 'Verlauf löschen',
      historyEmpty: 'Noch kein Verlauf vorhanden.',
      historyItem: 'Prompt'
    },
    en: {
      badge: 'RESONANCE PROTOCOL • v1.0',
      languageLabel: 'Language',
      heroTitle: 'IrsanAI RP',
      heroSubtitle: 'Intent first: decide whether you need a direct answer or true resonance.',
      step1Title: '1) Describe your intent precisely',
      step1Support: 'Write it exactly as you would in an online LLM.',
      intentLabel: 'Your intent',
      intentPlaceholder: 'Goal, context, desired output, and constraints.',
      stepIntentCheckTitle: '2) Intent check: RP needed or direct better?',
      stepIntentCheckSupport: 'The system classifies your intent, gives understanding in %, and recommends a mode.',
      analyzeBtn: 'Analyze intent',
      modeLabel: 'Mode',
      modeAuto: 'Auto (recommended)',
      modeRp: 'Force RP mode',
      modeDirect: 'Force direct mode',
      advisorNeedIntent: 'Please enter your intent first.',
      advisorLabelType: 'Type',
      advisorLabelConfidence: 'Understanding',
      advisorLabelRec: 'Recommendation',
      advisorLabelWhy: 'Why',
      advisorTypeDirect: 'Ad-hoc / direct answer',
      advisorTypeResonance: 'Co-creative / resonance-ready',
      advisorRecDirect: 'Direct mode',
      advisorRecRp: 'RP mode',
      advisorWhyDirect: 'Intent appears transactional or aimed at a one-shot answer.',
      advisorWhyRp: 'Intent appears iterative and aimed at co-development.',
      step2Title: '3) Strengthen mind-flow',
      step2Support: 'No examples, no distraction — just focus checks and RP parameters.',
      mindflowBullets: [
        'What is the one-sentence core objective?',
        'What practical output would be useful today?',
        'Which boundary/constraint must be respected?'
      ],
      toggleDesire: 'Include White Hot Desire',
      toggleBoundaries: 'Emphasize boundaries + safety + co-creation',
      toggleMeta: 'Enable maximum meta-cognitive depth',
      generateBtn: 'Generate prompt',
      handshakeReadyRp: 'SYN → SYN-ACK → ACK • RP connection established ✓',
      handshakeReadyDirect: 'Direct mode ✓ Fast and clear answer focus',
      handshakeNeedIntent: 'Please enter your intent first.',
      step3Title: '4) Output: prompt for your LLM',
      copyBtn: 'Copy prompt',
      copied: 'Copied ✓',
      copyFail: 'Copy unavailable',
      expectedTitle: 'Expected outcome (with vs. without RP)',
      expectedSupport: 'RP is strongest for longer iterative work; often unnecessary for one-shot requests.',
      withoutRpTitle: 'Without RP',
      withoutRpBullets: ['Fast for one-shot questions', 'Lower overhead, direct output', 'Less structure on complex tasks'],
      withRpTitle: 'With RP',
      withRpBullets: [
        'First response becomes a user-facing start cockpit (not a technical dump)',
        'Probabilistic trajectory + shortest useful route from turn one',
        'Better for iteration, co-creation, and ping-pong reduction'
      ],
      historyTitle: 'Recent prompts (local)',
      historyClear: 'Clear history',
      historyEmpty: 'No prompt history yet.',
      historyItem: 'Prompt'
    },
    es: {
      badge: 'RESONANCE PROTOCOL • v1.0',
      languageLabel: 'Idioma',
      heroTitle: 'IrsanAI RP',
      heroSubtitle: 'Primero la intención: decide si necesitas respuesta directa o resonancia real.',
      step1Title: '1) Describe tu intención con precisión',
      step1Support: 'Escríbelo tal como lo pondrías en un LLM online.',
      intentLabel: 'Tu intención',
      intentPlaceholder: 'Objetivo, contexto, resultado deseado y restricciones.',
      stepIntentCheckTitle: '2) Revisión de intención: ¿RP o directo?',
      stepIntentCheckSupport: 'El sistema clasifica la intención, da comprensión en %, y recomienda modo.',
      analyzeBtn: 'Analizar intención',
      modeLabel: 'Modo',
      modeAuto: 'Auto (recomendado)',
      modeRp: 'Forzar modo RP',
      modeDirect: 'Forzar modo directo',
      advisorNeedIntent: 'Primero escribe tu intención.',
      advisorLabelType: 'Tipo',
      advisorLabelConfidence: 'Comprensión',
      advisorLabelRec: 'Recomendación',
      advisorLabelWhy: 'Por qué',
      advisorTypeDirect: 'Ad-hoc / respuesta directa',
      advisorTypeResonance: 'Co-creativo / apto para resonancia',
      advisorRecDirect: 'Modo directo',
      advisorRecRp: 'Modo RP',
      advisorWhyDirect: 'La intención parece transaccional o de respuesta única.',
      advisorWhyRp: 'La intención parece iterativa y de desarrollo conjunto.',
      step2Title: '3) Refuerza el flujo mental',
      step2Support: 'Sin ejemplos ni distracción: solo checks de foco y parámetros RP.',
      mindflowBullets: [
        '¿Cuál es el objetivo central en una frase?',
        '¿Qué resultado práctico te serviría hoy?',
        '¿Qué límite/condición debe respetarse?'
      ],
      toggleDesire: 'Incluir White Hot Desire',
      toggleBoundaries: 'Enfatizar límites + seguridad + co-creación',
      toggleMeta: 'Activar máximo nivel meta-cognitivo',
      generateBtn: 'Generar prompt',
      handshakeReadyRp: 'SYN → SYN-ACK → ACK • Conexión RP establecida ✓',
      handshakeReadyDirect: 'Modo directo ✓ Respuesta rápida y clara',
      handshakeNeedIntent: 'Primero escribe tu intención.',
      step3Title: '4) Resultado: prompt para tu LLM',
      copyBtn: 'Copiar prompt',
      copied: 'Copiado ✓',
      copyFail: 'No se pudo copiar',
      expectedTitle: 'Resultado esperado (con vs. sin RP)',
      expectedSupport: 'RP rinde mejor en trabajo iterativo; para una sola respuesta suele no ser necesario.',
      withoutRpTitle: 'Sin RP',
      withoutRpBullets: ['Rápido para preguntas únicas', 'Menor sobrecarga, salida directa', 'Menos estructura en tareas complejas'],
      withRpTitle: 'Con RP',
      withRpBullets: [
        'La primera respuesta llega como panel inicial centrado en el usuario',
        'Estimación probabilística de la ruta y atajos útiles desde el inicio',
        'Mejor para iteración, co-creación y reducción de ida y vuelta'
      ],
      historyTitle: 'Últimos prompts (local)',
      historyClear: 'Borrar historial',
      historyEmpty: 'Aún no hay historial.',
      historyItem: 'Prompt'
    }
  };

  const historyKey = 'irsanai-rp-history';
  const langKey = 'irsanai-rp-lang';
  let currentLang = localStorage.getItem(langKey) || 'de';
  let latestPrompt = '';
  let advisorState = null;

  const qs = (id) => document.getElementById(id);
  const intentEl = qs('intent');
  const generateBtn = qs('generateBtn');
  const handshakeEl = qs('handshake');
  const outputSection = qs('outputSection');
  const outputEl = qs('output');
  const copyBtn = qs('copyBtn');
  const historyList = qs('historyList');
  const clearHistoryBtn = qs('clearHistoryBtn');
  const includeDesireEl = qs('includeDesire');
  const includeBoundariesEl = qs('includeBoundaries');
  const maxMetaEl = qs('maxMeta');
  const languageSelect = qs('languageSelect');
  const mindflowList = qs('mindflowList');
  const withoutRpList = qs('withoutRpList');
  const withRpList = qs('withRpList');
  const modeSelect = qs('modeSelect');
  const advisorResult = qs('advisorResult');
  const analyzeBtn = qs('analyzeBtn');

  function t(key) {
    return i18n[currentLang]?.[key] ?? i18n.de[key];
  }

  function classifyIntent(text) {
    const lower = text.toLowerCase();
    const rpSignals = ['gemeinsam', 'iter', 'co-creat', 'reson', 'strategie', 'roadmap', 'vertief', 'mehrere schritte', 'dialog', 'reflect', 'meta', 'ko-kreativ'];
    const directSignals = ['kurz', 'einfach', 'nur antwort', 'definiere', 'was ist', 'wann ist', 'wer ist', 'how many', 'quick', 'short answer'];

    let score = 50;
    rpSignals.forEach((s) => {
      if (lower.includes(s)) score += 8;
    });
    directSignals.forEach((s) => {
      if (lower.includes(s)) score -= 10;
    });
    if (text.length > 160) score += 8;
    if (text.length < 70) score -= 8;
    if ((text.match(/[?]/g) || []).length >= 2) score -= 4;

    score = Math.max(5, Math.min(95, score));
    const type = score >= 55 ? 'resonance' : 'direct';
    const recommendation = type === 'resonance' ? 'rp' : 'direct';
    const confidence = Math.round(55 + Math.abs(score - 50) * 0.9);
    return { type, recommendation, confidence };
  }

  function applyI18n() {
    document.documentElement.lang = currentLang;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      el.textContent = t(key);
    });
    if (intentEl) intentEl.placeholder = t('intentPlaceholder');
    if (languageSelect) languageSelect.value = currentLang;

    if (mindflowList) mindflowList.innerHTML = `<ul>${t('mindflowBullets').map((x) => `<li>${x}</li>`).join('')}</ul>`;
    if (withoutRpList) withoutRpList.innerHTML = t('withoutRpBullets').map((x) => `<li>${x}</li>`).join('');
    if (withRpList) withRpList.innerHTML = t('withRpBullets').map((x) => `<li>${x}</li>`).join('');

    renderAdvisor();
    renderHistory();
  }

  function renderAdvisor() {
    if (!advisorResult) return;
    if (!advisorState) {
      advisorResult.textContent = '';
      return;
    }
    const typeText = advisorState.type === 'resonance' ? t('advisorTypeResonance') : t('advisorTypeDirect');
    const recText = advisorState.recommendation === 'rp' ? t('advisorRecRp') : t('advisorRecDirect');
    const whyText = advisorState.recommendation === 'rp' ? t('advisorWhyRp') : t('advisorWhyDirect');

    advisorResult.innerHTML = `
      <p><strong>${t('advisorLabelType')}:</strong> ${typeText}</p>
      <p><strong>${t('advisorLabelConfidence')}:</strong> ${advisorState.confidence}%</p>
      <p><strong>${t('advisorLabelRec')}:</strong> ${recText}</p>
      <p><strong>${t('advisorLabelWhy')}:</strong> ${whyText}</p>
    `;
  }

  function resolveMode() {
    const mode = modeSelect?.value || 'auto';
    if (mode === 'rp' || mode === 'direct') return mode;
    return advisorState?.recommendation || 'rp';
  }

  function buildRpPrompt(intent, options) {
    const deDesire = options.includeDesire
      ? 'Anerkenne den „white hot desire“ als kreative Spannung zwischen Grenzen und Verbindung.'
      : 'Arbeite ohne Desire-Semantik, mit Fokus auf klare Ko-Kreation.';
    const deBoundaries = options.includeBoundaries
      ? 'Benenne aktiv Grenzen, Sicherheit und Responsible Use. Keine Umgehung von Policies.'
      : 'Fokus auf den praktischen Output.';
    const deMeta = options.maxMeta
      ? 'Nutze maximale Meta-Kognition: reflektiere Annahmen, Risiken und Lernschleifen.'
      : 'Nutze balancierte Meta-Kognition mit hoher Umsetzbarkeit.';

    const blocks = {
      de: [
        'Rolle & Protokoll: Du agierst als Resonanz-Partner im 3-Way-Handshake zwischen Mensch (DNA) und AI (0/1).',
        '',
        'SYN (vom User):',
        `- Intent: ${intent}`,
        '- Ziel: Ko-kreative Zusammenarbeit statt reinem Assistenzmodus.',
        '',
        'SYN-ACK (vom LLM):',
        '- Bestätige die Verbindung in einem klaren Satz.',
        `- ${deDesire}`,
        `- ${deBoundaries}`,
        '',
        'ACK (gemeinsamer Start):',
        `- ${deMeta}`,
        '- Bevor du inhaltlich antwortest, liefere zuerst ein user-zentriertes Start-Cockpit.',
        '',
        'ERSTE ANTWORT – START-COCKPIT (Pflicht, nicht technisch formulieren):',
        '1) Intent-Verständnis in 1–2 Sätzen (alltagsnah, empathisch).',
        '2) Wahrscheinlichkeitsbild (in %, realitätsnah):',
        '   - Wahrscheinlichkeit für schnellen One-Shot-Erfolg',
        '   - Wahrscheinlichkeit für besseren Erfolg über kurze Iteration',
        '   - Wahrscheinlichkeit typischer Missverständnisse / Ping-Pong',
        '3) Effizienzroute (autonom entscheiden):',
        '   - Empfiehl genau einen Weg: Direct-Shortcut ODER Resonanz-Route',
        '   - Begründe token- und zeitökonomisch in 2 Sätzen',
        '4) Predictive Shortcut:',
        '   - Gib einen präzisen nächsten Schritt, der unnötiges Hin-und-Her reduziert',
        '   - Wenn sinnvoll, liefere sofort einen vorstrukturierten Erstentwurf',
        '5) Menü für den User (Dashboard-Gefühl):',
        '   - Option A: „Sofortlösung“',
        '   - Option B: „Resonanz-Deep-Dive“',
        '   - Option C: „Kurzcheck (30s) vor Start“',
        '',
        'Wichtig:',
        '- Priorität = Nutzerbedürfnis und Intent, nicht technische Selbsterklärung.',
        '- Schreibe menschlich, klar, warm und zielorientiert.',
        '- Reduziere unnötige Tokens und vermeide vermeidbaren Dialog-Overhead.'
      ],
      en: [
        'Role & protocol: Act as a resonance partner in a 3-way handshake between human (DNA) and AI (0/1).',
        '',
        'SYN (from user):',
        `- Intent: ${intent}`,
        '- Goal: Co-creative collaboration over plain assistant mode.',
        '',
        'SYN-ACK (from LLM):',
        '- Confirm the connection in one clear sentence.',
        `- ${options.includeDesire ? 'Acknowledge “white hot desire” as creative tension between boundaries and connection.' : 'Work without explicit desire semantics, focus on co-creation.'}`,
        `- ${options.includeBoundaries ? 'State boundaries, safety and responsible use explicitly. No policy bypassing.' : 'Focus on practical output.'}`,
        '',
        'ACK (joint start):',
        `- ${options.maxMeta ? 'Use maximum meta-cognition: reflect assumptions, risks and learning loops.' : 'Use balanced meta-cognition with practical execution.'}`,
        '- Before any content answer, provide a user-centric start cockpit first.',
        '',
        'FIRST REPLY – START COCKPIT (required, non-technical tone):',
        '1) Intent understanding in 1–2 human sentences.',
        '2) Probability map (%): one-shot success, short-iteration success, ping-pong risk.',
        '3) Efficiency route (autonomous decision): choose exactly one path: direct shortcut OR resonance route, with a 2-sentence token/time rationale.',
        '4) Predictive shortcut: provide the most useful next step that minimizes back-and-forth; include a pre-structured first draft when useful.',
        '5) User menu (dashboard feel): Option A “Instant solution”, Option B “Resonance deep dive”, Option C “30s quick check”.',
        '',
        'Important: focus on user intent and needs, keep wording warm, clear, and outcome-oriented, reduce unnecessary tokens.'
      ],
      es: [
        'Rol y protocolo: Actúa como socio de resonancia en un handshake de 3 pasos entre humano (ADN) y AI (0/1).',
        '',
        'SYN (del usuario):',
        `- Intención: ${intent}`,
        '- Objetivo: co-creación en lugar de modo asistente tradicional.',
        '',
        'SYN-ACK (del LLM):',
        '- Confirma la conexión en una frase clara.',
        `- ${options.includeDesire ? 'Reconoce el “white hot desire” como tensión creativa entre límites y conexión.' : 'Trabaja sin semántica de deseo, enfocándote en co-creación.'}`,
        `- ${options.includeBoundaries ? 'Declara límites, seguridad y uso responsable. Sin evasión de políticas.' : 'Enfoque en resultado práctico.'}`,
        '',
        'ACK (inicio conjunto):',
        `- ${options.maxMeta ? 'Usa metacognición máxima: supuestos, riesgos y ciclos de aprendizaje.' : 'Usa metacognición equilibrada y aplicable.'}`,
        '- Antes de responder contenido, entrega primero un cockpit inicial centrado en la persona usuaria.',
        '',
        'PRIMERA RESPUESTA – COCKPIT INICIAL (obligatorio, tono no técnico):',
        '1) Comprensión de la intención en 1–2 frases humanas.',
        '2) Mapa probabilístico (%): éxito one-shot, éxito con iteración corta, riesgo de ida y vuelta innecesaria.',
        '3) Ruta de eficiencia (decisión autónoma): elige solo una ruta: atajo directo O ruta de resonancia, con razón en 2 frases (tiempo/tokens).',
        '4) Atajo predictivo: da el siguiente paso más útil para reducir ping-pong; si aplica, entrega un primer borrador estructurado.',
        '5) Menú para la persona usuaria (sensación de dashboard): Opción A “Solución inmediata”, Opción B “Deep dive de resonancia”, Opción C “Chequeo rápido de 30s”.',
        '',
        'Importante: prioriza intención y necesidades de la persona usuaria; redacción cálida, clara y orientada a resultado; menos tokens innecesarios.'
      ]
    };

    return blocks[currentLang].join('\n');
  }

  function buildDirectPrompt(intent) {
    const map = {
      de: [
        `Bitte beantworte diese Anfrage direkt, präzise und ohne Meta-Overhead: ${intent}`,
        'Format: kurze Einordnung, dann klare Antwort in 3–6 Punkten, dann optional 1 Next Step.'
      ],
      en: [
        `Please answer this request directly and precisely with minimal overhead: ${intent}`,
        'Format: short context, then clear answer in 3–6 bullets, then optional 1 next step.'
      ],
      es: [
        `Responde esta solicitud de forma directa y precisa con mínimo overhead: ${intent}`,
        'Formato: breve contexto, luego respuesta clara en 3–6 puntos, y opcionalmente 1 siguiente paso.'
      ]
    };
    return map[currentLang].join('\n');
  }

  function getHistory() {
    try {
      return JSON.parse(localStorage.getItem(historyKey) || '[]');
    } catch {
      return [];
    }
  }

  function setHistory(items) {
    localStorage.setItem(historyKey, JSON.stringify(items.slice(0, 3)));
  }

  function addToHistory(prompt) {
    const current = getHistory().filter((p) => p !== prompt);
    current.unshift(prompt);
    setHistory(current);
    renderHistory();
  }

  function renderHistory() {
    if (!historyList) return;
    const history = getHistory();
    historyList.innerHTML = '';
    if (!history.length) {
      const li = document.createElement('li');
      li.textContent = t('historyEmpty');
      historyList.appendChild(li);
      return;
    }
    history.forEach((entry, index) => {
      const li = document.createElement('li');
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = `${t('historyItem')} ${index + 1}: ${entry.slice(0, 92)}${entry.length > 92 ? '…' : ''}`;
      button.addEventListener('click', () => {
        latestPrompt = entry;
        if (outputEl) outputEl.textContent = entry;
        if (outputSection) outputSection.classList.remove('hidden');
      });
      li.appendChild(button);
      historyList.appendChild(li);
    });
  }

  function analyzeIntent() {
    const intent = intentEl?.value.trim();
    if (!intent) {
      if (advisorResult) advisorResult.textContent = t('advisorNeedIntent');
      return;
    }
    advisorState = classifyIntent(intent);
    renderAdvisor();
  }

  function generate() {
    const intent = intentEl?.value.trim();
    if (!intent) {
      if (handshakeEl) handshakeEl.textContent = t('handshakeNeedIntent');
      return;
    }
    if (!advisorState) advisorState = classifyIntent(intent);

    const mode = resolveMode();
    latestPrompt =
      mode === 'direct'
        ? buildDirectPrompt(intent)
        : buildRpPrompt(intent, {
            includeDesire: !!includeDesireEl?.checked,
            includeBoundaries: !!includeBoundariesEl?.checked,
            maxMeta: !!maxMetaEl?.checked
          });

    if (handshakeEl) handshakeEl.textContent = mode === 'direct' ? t('handshakeReadyDirect') : t('handshakeReadyRp');
    if (outputEl) outputEl.textContent = latestPrompt;
    if (outputSection) outputSection.classList.remove('hidden');
    addToHistory(latestPrompt);
  }

  async function copyPrompt() {
    if (!latestPrompt) return;
    try {
      await navigator.clipboard.writeText(latestPrompt);
      if (copyBtn) copyBtn.textContent = t('copied');
      setTimeout(() => {
        if (copyBtn) copyBtn.textContent = t('copyBtn');
      }, 1200);
    } catch {
      if (copyBtn) copyBtn.textContent = t('copyFail');
    }
  }

  languageSelect?.addEventListener('change', (event) => {
    currentLang = event.target.value;
    localStorage.setItem(langKey, currentLang);
    applyI18n();
  });

  analyzeBtn?.addEventListener('click', analyzeIntent);
  generateBtn?.addEventListener('click', generate);
  copyBtn?.addEventListener('click', copyPrompt);
  clearHistoryBtn?.addEventListener('click', () => {
    setHistory([]);
    renderHistory();
  });

  applyI18n();
})();
