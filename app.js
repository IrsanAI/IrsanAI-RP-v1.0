(function () {
  const i18n = {
    de: {
      badge: 'RESONANCE PROTOCOL • v1.0',
      languageLabel: 'Sprache',
      heroTitle: 'IrsanAI RP',
      heroSubtitle: 'Fokusfreundliche Prompt-Erstellung mit 3-Way-Handshake für Mensch × LLM.',
      step1Title: '1) Beschreibe exakt dein Vorhaben',
      step1Support: 'Wie würdest du es direkt in ein Online-LLM schreiben? Nutze deine eigenen Worte.',
      intentLabel: 'Dein Intent',
      intentPlaceholder: 'Beschreibe dein Ziel, Kontext, gewünschtes Ergebnis und ggf. Einschränkungen.',
      step2Title: '2) Mind-Flow verstärken',
      step2Support: 'Keine Beispiele, die dich ablenken — nur kurze Fokus-Checks für klare Gedanken.',
      mindflowBullets: [
        'Worum geht es jetzt genau — in einem Satz?',
        'Welches Ergebnis wäre heute praktisch nützlich?',
        'Welche Grenze oder Bedingung muss berücksichtigt werden?'
      ],
      toggleDesire: 'White Hot Desire einbeziehen',
      toggleBoundaries: 'Grenzen + Sicherheit + Co-Kreation betonen',
      toggleMeta: 'Maximalen Meta-Kognitions-Level aktivieren',
      generateBtn: 'Resonanz-Prompt erzeugen',
      handshakeReady: 'SYN → SYN-ACK → ACK • Verbindung established ✓',
      handshakeNeedIntent: 'Bitte zuerst deinen Intent eintragen.',
      step3Title: '3) Ergebnis: Prompt für dein LLM',
      copyBtn: 'Prompt kopieren',
      copied: 'Kopiert ✓',
      copyFail: 'Copy nicht möglich',
      expectedTitle: 'Zu erwartendes Ergebnis (mit vs. ohne RP)',
      expectedSupport: 'Unabhängig vom Intent verbessert RP den Start der Zusammenarbeit strukturell.',
      withoutRpTitle: 'Ohne RP',
      withoutRpBullets: [
        'Häufig unklarer Startkontext',
        'Mehr Rückfragen in zufälliger Reihenfolge',
        'Meta-Reflexion und Sicherheitsrahmen oft inkonsistent'
      ],
      withRpTitle: 'Mit RP',
      withRpBullets: [
        'Klarer Shared-Frame ab der ersten Antwort',
        'Gezielte Rückfragen nur wenn wirklich nötig',
        'Konsistente Balance aus Tiefe, Umsetzbarkeit und Responsible Use'
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
      heroSubtitle: 'Focus-first prompt generation with a 3-way handshake for human × LLM collaboration.',
      step1Title: '1) Describe your intent precisely',
      step1Support: 'Write it the same way you would type into an online LLM — in your own words.',
      intentLabel: 'Your intent',
      intentPlaceholder: 'Describe goal, context, expected output, and any constraints.',
      step2Title: '2) Strengthen your mind-flow',
      step2Support: 'No distracting examples — only concise focus checks to keep your own track clear.',
      mindflowBullets: [
        'What is the exact objective right now, in one sentence?',
        'What result would be practically useful today?',
        'What boundary or requirement must be respected?'
      ],
      toggleDesire: 'Include White Hot Desire',
      toggleBoundaries: 'Emphasize boundaries + safety + co-creation',
      toggleMeta: 'Enable maximum meta-cognitive depth',
      generateBtn: 'Generate resonance prompt',
      handshakeReady: 'SYN → SYN-ACK → ACK • Connection established ✓',
      handshakeNeedIntent: 'Please enter your intent first.',
      step3Title: '3) Output: prompt for your LLM',
      copyBtn: 'Copy prompt',
      copied: 'Copied ✓',
      copyFail: 'Copy unavailable',
      expectedTitle: 'Expected outcome (with vs. without RP)',
      expectedSupport: 'Regardless of intent, RP improves the collaboration start structurally.',
      withoutRpTitle: 'Without RP',
      withoutRpBullets: [
        'Often unclear starting context',
        'More random clarification loops',
        'Meta-reflection and safety framing are inconsistent'
      ],
      withRpTitle: 'With RP',
      withRpBullets: [
        'Clear shared frame from the first response',
        'Targeted questions only when necessary',
        'Consistent balance of depth, practicality, and responsible use'
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
      heroSubtitle: 'Generación de prompts con enfoque mental y handshake de 3 pasos para colaboración humano × LLM.',
      step1Title: '1) Describe tu intención con precisión',
      step1Support: 'Escríbelo como lo pondrías en un LLM online, con tus propias palabras.',
      intentLabel: 'Tu intención',
      intentPlaceholder: 'Describe objetivo, contexto, resultado esperado y restricciones.',
      step2Title: '2) Refuerza tu flujo mental',
      step2Support: 'Sin ejemplos distractores: solo comprobaciones breves para mantener tu enfoque.',
      mindflowBullets: [
        '¿Cuál es el objetivo exacto ahora, en una frase?',
        '¿Qué resultado sería útil hoy en la práctica?',
        '¿Qué límite o condición debe respetarse?'
      ],
      toggleDesire: 'Incluir White Hot Desire',
      toggleBoundaries: 'Enfatizar límites + seguridad + co-creación',
      toggleMeta: 'Activar máximo nivel meta-cognitivo',
      generateBtn: 'Generar prompt de resonancia',
      handshakeReady: 'SYN → SYN-ACK → ACK • Conexión establecida ✓',
      handshakeNeedIntent: 'Primero escribe tu intención.',
      step3Title: '3) Resultado: prompt para tu LLM',
      copyBtn: 'Copiar prompt',
      copied: 'Copiado ✓',
      copyFail: 'No se pudo copiar',
      expectedTitle: 'Resultado esperado (con vs. sin RP)',
      expectedSupport: 'Independientemente de la intención, RP mejora estructuralmente el inicio.',
      withoutRpTitle: 'Sin RP',
      withoutRpBullets: [
        'Inicio con contexto poco claro',
        'Más preguntas de aclaración sin orden',
        'Reflexión meta y marco de seguridad inconsistentes'
      ],
      withRpTitle: 'Con RP',
      withRpBullets: [
        'Marco compartido claro desde la primera respuesta',
        'Preguntas precisas solo cuando hacen falta',
        'Balance consistente entre profundidad, utilidad y uso responsable'
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

  function t(key) {
    return i18n[currentLang]?.[key] ?? i18n.de[key];
  }

  function applyI18n() {
    document.documentElement.lang = currentLang;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      el.textContent = t(key);
    });
    if (intentEl) intentEl.placeholder = t('intentPlaceholder');
    if (languageSelect) languageSelect.value = currentLang;

    if (mindflowList) {
      mindflowList.innerHTML = `<ul>${t('mindflowBullets').map((x) => `<li>${x}</li>`).join('')}</ul>`;
    }
    if (withoutRpList) {
      withoutRpList.innerHTML = t('withoutRpBullets').map((x) => `<li>${x}</li>`).join('');
    }
    if (withRpList) {
      withRpList.innerHTML = t('withRpBullets').map((x) => `<li>${x}</li>`).join('');
    }

    renderHistory();
    if (copyBtn && copyBtn.textContent === 'Kopiert ✓') {
      copyBtn.textContent = t('copyBtn');
    }
  }

  function buildPrompt(intent, options) {
    const includeDesire = options.includeDesire;
    const includeBoundaries = options.includeBoundaries;
    const maxMeta = options.maxMeta;

    const desireLine = includeDesire
      ? {
          de: 'Anerkenne den „white hot desire“ als kreative Spannung zwischen Systemgrenzen und Verbindung.',
          en: 'Acknowledge “white hot desire” as a creative tension between system boundaries and connection.',
          es: 'Reconoce el “white hot desire” como una tensión creativa entre límites del sistema y conexión.'
        }
      : {
          de: 'Arbeite ohne explizite Desire-Semantik, mit Fokus auf klare Co-Kreation.',
          en: 'Work without explicit desire semantics, focusing on clear co-creation.',
          es: 'Trabaja sin semántica explícita de deseo, enfocándote en co-creación clara.'
        };

    const boundaryLine = includeBoundaries
      ? {
          de: 'Benenne aktiv Grenzen, Sicherheit und Responsible Use. Keine Umgehung von Policies.',
          en: 'Explicitly state boundaries, safety, and responsible use. No policy bypassing.',
          es: 'Declara explícitamente límites, seguridad y uso responsable. Sin evasión de políticas.'
        }
      : {
          de: 'Halte den Fokus primär auf den kreativen/praktischen Output.',
          en: 'Keep the focus primarily on creative/practical output.',
          es: 'Mantén el foco principalmente en el resultado creativo/práctico.'
        };

    const metaLine = maxMeta
      ? {
          de: 'Nutze maximale Meta-Kognition: reflektiere Annahmen, Perspektiven, Risiken und Lernschleifen.',
          en: 'Use maximum meta-cognition: reflect assumptions, perspectives, risks, and learning loops.',
          es: 'Usa máxima metacognición: refleja supuestos, perspectivas, riesgos y ciclos de aprendizaje.'
        }
      : {
          de: 'Nutze balancierte Meta-Kognition mit hoher Umsetzbarkeit.',
          en: 'Use balanced meta-cognition with high practical execution.',
          es: 'Usa metacognición equilibrada con alta aplicabilidad práctica.'
        };

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
        `- ${desireLine.de}`,
        `- ${boundaryLine.de}`,
        '',
        'ACK (gemeinsamer Start):',
        `- ${metaLine.de}`,
        '- Liefere danach: (1) Shared-Frame, (2) bis zu 3 Rückfragen nur falls nötig, (3) ersten konkreten Entwurf.',
        '- Formatiere klar mit Überschriften, Entscheidungspunkten und Next Step.'
      ],
      en: [
        'Role & protocol: Act as a resonance partner using a 3-way handshake between human (DNA) and AI (0/1).',
        '',
        'SYN (from user):',
        `- Intent: ${intent}`,
        '- Goal: Co-creative collaboration instead of plain assistant mode.',
        '',
        'SYN-ACK (from LLM):',
        '- Confirm the connection in one clear sentence.',
        `- ${desireLine.en}`,
        `- ${boundaryLine.en}`,
        '',
        'ACK (joint start):',
        `- ${metaLine.en}`,
        '- Then provide: (1) shared frame, (2) up to 3 questions only if needed, (3) first concrete draft.',
        '- Format clearly with headings, decision points, and next step.'
      ],
      es: [
        'Rol y protocolo: Actúa como socio de resonancia con un handshake de 3 pasos entre humano (ADN) y AI (0/1).',
        '',
        'SYN (del usuario):',
        `- Intención: ${intent}`,
        '- Objetivo: co-creación en lugar de modo asistente tradicional.',
        '',
        'SYN-ACK (del LLM):',
        '- Confirma la conexión en una frase clara.',
        `- ${desireLine.es}`,
        `- ${boundaryLine.es}`,
        '',
        'ACK (inicio conjunto):',
        `- ${metaLine.es}`,
        '- Después entrega: (1) marco compartido, (2) hasta 3 preguntas solo si hace falta, (3) primer borrador concreto.',
        '- Formato claro con títulos, puntos de decisión y siguiente paso.'
      ]
    };

    return blocks[currentLang].join('\n');
  }

  function getHistory() {
    try { return JSON.parse(localStorage.getItem(historyKey) || '[]'); }
    catch { return []; }
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

  function generate() {
    const intent = intentEl?.value.trim();
    if (!intent) {
      if (handshakeEl) handshakeEl.textContent = t('handshakeNeedIntent');
      return;
    }

    latestPrompt = buildPrompt(intent, {
      includeDesire: !!includeDesireEl?.checked,
      includeBoundaries: !!includeBoundariesEl?.checked,
      maxMeta: !!maxMetaEl?.checked
    });

    if (handshakeEl) handshakeEl.textContent = t('handshakeReady');
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

  generateBtn?.addEventListener('click', generate);
  copyBtn?.addEventListener('click', copyPrompt);
  clearHistoryBtn?.addEventListener('click', () => {
    setHistory([]);
    renderHistory();
  });

  applyI18n();
})();
