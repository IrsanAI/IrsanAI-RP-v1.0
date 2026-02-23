(function () {
  const i18n = {
    de: {
      badge: 'RESONANCE PROTOCOL • v1.0',
      languageLabel: 'Sprache',
      heroTitle: 'IrsanAI RP',
      heroSubtitle: 'Das RP entscheidet nichts vorab: Das Online-LLM trifft nach Erhalt autonom die effizienteste Route für deinen Intent.',
      step1Title: '1) Beschreibe dein Vorhaben',
      step1Support: 'So, wie du es direkt in ein Online-LLM schreiben würdest.',
      intentLabel: 'Dein Intent',
      intentPlaceholder: 'Ziel, Kontext, gewünschtes Ergebnis und ggf. Randbedingungen.',
      step2Title: '2) Resonanz-Parameter setzen',
      step2Support: 'RP ist die Brücke. Die Entscheidung über Weg 1/2/weitere Wege trifft das LLM nach Erhalt.',
      mindflowBullets: [
        'Was ist dein Kernziel in einem Satz?',
        'Welcher Output wäre jetzt sofort nützlich?',
        'Welche Grenze oder Bedingung ist wichtig?'
      ],
      toggleDesire: 'White Hot Desire einbeziehen',
      toggleBoundaries: 'Grenzen + Sicherheit + Co-Kreation betonen',
      toggleMeta: 'Maximalen Meta-Kognitions-Level aktivieren',
      generateBtn: 'RP-Protokoll erzeugen',
      handshakeReadyRp: 'RP-Prompt erzeugt ✓ Entscheidung folgt autonom im Online-LLM',
      handshakeNeedIntent: 'Bitte zuerst deinen Intent eintragen.',
      step3Title: '3) Ergebnis: RP-Prompt für dein LLM',
      copyBtn: 'Prompt kopieren',
      copied: 'Kopiert ✓',
      copyFail: 'Copy nicht möglich',
      expectedTitle: 'Zu erwartendes Ergebnis (ohne vs. mit RP)',
      expectedSupport: 'Mit RP entscheidet das LLM in der ersten Antwort autonom über die effizienteste Route.',
      withoutRpTitle: 'Ohne RP',
      withoutRpBullets: ['Schnell bei einfachen Einmalfragen', 'Route oft implizit statt explizit', 'Mehr zufälliges Ping-Pong bei komplexen Vorhaben'],
      withRpTitle: 'Mit RP',
      withRpBullets: ['LLM liefert ein user-zentriertes Start-Cockpit', 'LLM trifft autonom Wegentscheidung (z. B. Direct vs Resonanz)', 'Predictive Shortcut reduziert unnötige Tokens'],
      historyTitle: 'Letzte Prompts (lokal)',
      historyClear: 'Verlauf löschen',
      historyEmpty: 'Noch kein Verlauf vorhanden.',
      historyItem: 'Prompt'
    },
    en: {
      badge: 'RESONANCE PROTOCOL • v1.0',
      languageLabel: 'Language',
      heroTitle: 'IrsanAI RP',
      heroSubtitle: 'RP makes no upfront decision: the online LLM autonomously chooses the most efficient route after receiving the prompt.',
      step1Title: '1) Describe your intent',
      step1Support: 'Write it exactly as you would in an online LLM.',
      intentLabel: 'Your intent',
      intentPlaceholder: 'Goal, context, desired output, and constraints.',
      step2Title: '2) Set resonance parameters',
      step2Support: 'RP is the bridge. Path selection (way 1/2/others) is decided by the LLM after receiving RP.',
      mindflowBullets: [
        'What is your core goal in one sentence?',
        'What output would be immediately useful?',
        'Which boundary or condition matters?'
      ],
      toggleDesire: 'Include White Hot Desire',
      toggleBoundaries: 'Emphasize boundaries + safety + co-creation',
      toggleMeta: 'Enable maximum meta-cognitive depth',
      generateBtn: 'Generate RP protocol',
      handshakeReadyRp: 'RP prompt generated ✓ autonomous decision happens in the online LLM',
      handshakeNeedIntent: 'Please enter your intent first.',
      step3Title: '3) Output: RP prompt for your LLM',
      copyBtn: 'Copy prompt',
      copied: 'Copied ✓',
      copyFail: 'Copy unavailable',
      expectedTitle: 'Expected outcome (without vs with RP)',
      expectedSupport: 'With RP, the LLM autonomously chooses the best route in its first response.',
      withoutRpTitle: 'Without RP',
      withoutRpBullets: ['Fast for simple one-shot questions', 'Route remains implicit', 'More random ping-pong on complex intents'],
      withRpTitle: 'With RP',
      withRpBullets: ['LLM returns a user-centric start cockpit', 'LLM autonomously selects route (e.g., Direct vs Resonance)', 'Predictive shortcut reduces unnecessary tokens'],
      historyTitle: 'Recent prompts (local)',
      historyClear: 'Clear history',
      historyEmpty: 'No prompt history yet.',
      historyItem: 'Prompt'
    },
    es: {
      badge: 'RESONANCE PROTOCOL • v1.0',
      languageLabel: 'Idioma',
      heroTitle: 'IrsanAI RP',
      heroSubtitle: 'RP no decide antes: el LLM online elige de forma autónoma la ruta más eficiente tras recibir el prompt.',
      step1Title: '1) Describe tu intención',
      step1Support: 'Escríbelo tal como lo pondrías en un LLM online.',
      intentLabel: 'Tu intención',
      intentPlaceholder: 'Objetivo, contexto, resultado deseado y restricciones.',
      step2Title: '2) Configura parámetros de resonancia',
      step2Support: 'RP es el puente. La elección de ruta (vía 1/2/u otras) la decide el LLM al recibir RP.',
      mindflowBullets: [
        '¿Cuál es tu meta central en una frase?',
        '¿Qué salida te sería útil ahora mismo?',
        '¿Qué límite o condición importa?'
      ],
      toggleDesire: 'Incluir White Hot Desire',
      toggleBoundaries: 'Enfatizar límites + seguridad + co-creación',
      toggleMeta: 'Activar máximo nivel meta-cognitivo',
      generateBtn: 'Generar protocolo RP',
      handshakeReadyRp: 'Prompt RP generado ✓ la decisión autónoma ocurre en el LLM online',
      handshakeNeedIntent: 'Primero escribe tu intención.',
      step3Title: '3) Resultado: prompt RP para tu LLM',
      copyBtn: 'Copiar prompt',
      copied: 'Copiado ✓',
      copyFail: 'No se pudo copiar',
      expectedTitle: 'Resultado esperado (sin vs con RP)',
      expectedSupport: 'Con RP, el LLM elige de forma autónoma la ruta más eficiente en su primera respuesta.',
      withoutRpTitle: 'Sin RP',
      withoutRpBullets: ['Rápido en preguntas simples', 'Ruta implícita', 'Más ida y vuelta aleatoria en intenciones complejas'],
      withRpTitle: 'Con RP',
      withRpBullets: ['El LLM entrega un cockpit inicial centrado en la persona usuaria', 'El LLM decide autónomamente la ruta (Directo vs Resonancia)', 'Atajo predictivo para reducir tokens innecesarios'],
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
    if (mindflowList) mindflowList.innerHTML = `<ul>${t('mindflowBullets').map((x) => `<li>${x}</li>`).join('')}</ul>`;
    if (withoutRpList) withoutRpList.innerHTML = t('withoutRpBullets').map((x) => `<li>${x}</li>`).join('');
    if (withRpList) withRpList.innerHTML = t('withRpBullets').map((x) => `<li>${x}</li>`).join('');

    renderHistory();
  }

  function buildRpPrompt(intent, options) {
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
        `- ${options.includeDesire ? 'Anerkenne den „white hot desire“ als kreative Spannung zwischen Grenzen und Verbindung.' : 'Arbeite ohne Desire-Semantik, fokussiert auf klare Ko-Kreation.'}`,
        `- ${options.includeBoundaries ? 'Benenne aktiv Grenzen, Sicherheit und Responsible Use. Keine Umgehung von Policies.' : 'Fokus auf den praktischen Output bei weiterhin policy-konformem Verhalten.'}`,
        '',
        'ACK (autonomer Start durch das LLM):',
        `- ${options.maxMeta ? 'Nutze maximale Meta-Kognition: reflektiere Annahmen, Risiken und Lernschleifen sichtbar.' : 'Nutze balancierte Meta-Kognition mit hoher Umsetzbarkeit.'}`,
        '- WICHTIG: Die Entscheidung über den effizientesten Weg (z. B. Direct-Shortcut, Resonanz-Route oder weitere Wege) triffst DU als LLM autonom – NICHT der User und NICHT das RP-Frontend.',
        '',
        'ERSTE ANTWORT ALS USER-COCKPIT (nicht technisch, empathisch, fokussiert):',
        '1) Kurz zeigen, was du vom Intent verstanden hast (1–2 Sätze, menschlich).',
        '2) Probabilistische Einschätzung (%) des möglichen Gesprächsverlaufs (realitätsnah):',
        '   - Erfolg bei sofortiger Direktantwort',
        '   - Erfolg mit kurzer Iteration/Resonanz',
        '   - Risiko für unnötiges Ping-Pong',
        '3) Autonomer Routenentscheid:',
        '   - Wähle genau einen Startweg (oder einen besseren dritten Weg).',
        '   - Begründe in 2 Sätzen token- und zeitökonomisch.',
        '4) Predictive Shortcut:',
        '   - Liefere den nächsten besten Schritt, der unnötige Rückfragen spart.',
        '   - Wenn sinnvoll, gib sofort einen vorstrukturierten Erstentwurf aus.',
        '5) Menügefühl für den User:',
        '   - Option A: „Sofort zum Ergebnis“',
        '   - Option B: „Resonanz-Deep-Dive“',
        '   - Option C: „30-Sekunden-Kurzcheck“',
        '',
        'Leitlinie:',
        '- Fokus liegt vollständig auf Nutzerbedürfnis und Intent.',
        '- Formuliere warm, klar und zielorientiert.',
        '- Minimiere unnötige Tokens ohne Qualitätsverlust.'
      ],
      en: [
        'Role & protocol: You act as a resonance partner in a 3-way handshake between human (DNA) and AI (0/1).',
        '',
        'SYN (from user):',
        `- Intent: ${intent}`,
        '- Goal: co-creative collaboration instead of plain assistant mode.',
        '',
        'SYN-ACK (from LLM):',
        '- Confirm the connection in one clear sentence.',
        `- ${options.includeDesire ? 'Acknowledge “white hot desire” as creative tension between boundaries and connection.' : 'Work without explicit desire semantics, focused on clear co-creation.'}`,
        `- ${options.includeBoundaries ? 'State boundaries, safety, and responsible use explicitly. No policy bypassing.' : 'Focus on practical output while staying policy-compliant.'}`,
        '',
        'ACK (autonomous LLM start):',
        `- ${options.maxMeta ? 'Use maximum meta-cognition: reflect assumptions, risks, and learning loops explicitly.' : 'Use balanced meta-cognition with high practical execution.'}`,
        '- IMPORTANT: You (the LLM) autonomously decide the most efficient route (e.g., direct shortcut, resonance route, or other route) — NOT the user and NOT the RP frontend.',
        '',
        'FIRST REPLY AS A USER COCKPIT (non-technical, empathic, intent-focused):',
        '1) Briefly show your intent understanding in 1–2 human sentences.',
        '2) Probabilistic estimate (%) of likely conversation trajectory:',
        '   - Success with immediate direct answer',
        '   - Success with short resonance iteration',
        '   - Risk of unnecessary ping-pong',
        '3) Autonomous route decision:',
        '   - Choose exactly one start path (or a better third path).',
        '   - Justify in 2 sentences for token/time efficiency.',
        '4) Predictive shortcut:',
        '   - Provide the best next step that reduces avoidable back-and-forth.',
        '   - If useful, output a pre-structured first draft immediately.',
        '5) Give the user a menu feeling:',
        '   - Option A: "Instant result"',
        '   - Option B: "Resonance deep dive"',
        '   - Option C: "30-second quick check"',
        '',
        'Guideline:',
        '- Keep full focus on user need and intent.',
        '- Write warm, clear, and outcome-oriented.',
        '- Minimize unnecessary tokens without losing quality.'
      ],
      es: [
        'Rol y protocolo: actúas como socio de resonancia en un handshake de 3 pasos entre humano (ADN) y AI (0/1).',
        '',
        'SYN (del usuario):',
        `- Intención: ${intent}`,
        '- Objetivo: co-creación en lugar de modo asistente tradicional.',
        '',
        'SYN-ACK (del LLM):',
        '- Confirma la conexión en una frase clara.',
        `- ${options.includeDesire ? 'Reconoce el “white hot desire” como tensión creativa entre límites y conexión.' : 'Trabaja sin semántica explícita de deseo, con foco en co-creación clara.'}`,
        `- ${options.includeBoundaries ? 'Declara límites, seguridad y uso responsable. Sin evasión de políticas.' : 'Enfócate en resultado práctico manteniendo cumplimiento de políticas.'}`,
        '',
        'ACK (inicio autónomo del LLM):',
        `- ${options.maxMeta ? 'Usa metacognición máxima: refleja supuestos, riesgos y ciclos de aprendizaje.' : 'Usa metacognición equilibrada con alta aplicabilidad práctica.'}`,
        '- IMPORTANTE: Tú (LLM) decides autónomamente la ruta más eficiente (atajo directo, ruta de resonancia u otra ruta) — NO el usuario ni el frontend RP.',
        '',
        'PRIMERA RESPUESTA COMO COCKPIT DE USUARIO (no técnico, empático y centrado en intención):',
        '1) Explica en 1–2 frases humanas lo que entendiste de la intención.',
        '2) Estimación probabilística (%) del posible recorrido conversacional:',
        '   - Éxito con respuesta directa inmediata',
        '   - Éxito con iteración corta de resonancia',
        '   - Riesgo de ida y vuelta innecesaria',
        '3) Decisión autónoma de ruta:',
        '   - Elige exactamente una ruta inicial (o una tercera mejor).',
        '   - Justifica en 2 frases por eficiencia de tiempo/tokens.',
        '4) Atajo predictivo:',
        '   - Da el mejor siguiente paso para reducir preguntas evitables.',
        '   - Si aporta valor, entrega de inmediato un primer borrador estructurado.',
        '5) Sensación de menú para la persona usuaria:',
        '   - Opción A: "Resultado inmediato"',
        '   - Opción B: "Deep dive de resonancia"',
        '   - Opción C: "Chequeo rápido de 30 segundos"',
        '',
        'Guía:',
        '- Prioriza completamente la necesidad e intención del usuario.',
        '- Redacción cálida, clara y orientada a resultado.',
        '- Minimiza tokens innecesarios sin perder calidad.'
      ]
    };

    return blocks[currentLang].join('\n');
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

  function generate() {
    const intent = intentEl?.value.trim();
    if (!intent) {
      if (handshakeEl) handshakeEl.textContent = t('handshakeNeedIntent');
      return;
    }

    latestPrompt = buildRpPrompt(intent, {
      includeDesire: !!includeDesireEl?.checked,
      includeBoundaries: !!includeBoundariesEl?.checked,
      maxMeta: !!maxMetaEl?.checked
    });

    if (handshakeEl) handshakeEl.textContent = t('handshakeReadyRp');
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
