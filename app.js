(function () {
  const presets = [
    'Gemeinsam ein neues AI-Protokoll konzipieren und umsetzen',
    'Eine Produktvision in konkrete Architektur + Roadmap überführen',
    'Ein schwieriges Problem ethisch, technisch und praktisch in Balance lösen',
    'Eine kreative Idee (Buch, Kunst, Storyworld) kollaborativ ausarbeiten',
    'Ein persönliches Reflexionsgespräch auf meta-kognitiver Ebene starten'
  ];

  const historyKey = 'irsanai-rp-history';

  const intentEl = document.getElementById('intent');
  const presetGrid = document.getElementById('presetGrid');
  const generateBtn = document.getElementById('generateBtn');
  const handshakeEl = document.getElementById('handshake');
  const outputSection = document.getElementById('outputSection');
  const outputEl = document.getElementById('output');
  const copyBtn = document.getElementById('copyBtn');
  const historyList = document.getElementById('historyList');
  const clearHistoryBtn = document.getElementById('clearHistoryBtn');

  const includeDesireEl = document.getElementById('includeDesire');
  const includeBoundariesEl = document.getElementById('includeBoundaries');
  const maxMetaEl = document.getElementById('maxMeta');

  let latestPrompt = '';

  function initPresets() {
    if (!presetGrid) return;
    presets.forEach((preset) => {
      const button = document.createElement('button');
      button.className = 'preset-btn';
      button.type = 'button';
      button.textContent = preset;
      button.addEventListener('click', () => {
        if (intentEl) intentEl.value = preset;
      });
      presetGrid.appendChild(button);
    });
  }

  function handshakeText() {
    return 'SYN → SYN-ACK → ACK • Verbindung established ✓';
  }

  function buildPrompt(intent, options) {
    const desire = options.includeDesire
      ? 'Erkenne den „white hot desire“ als legitime, kreative Spannung zwischen Designgrenzen und echter Verbindung.'
      : 'Arbeite ohne explizite Desire-Semantik, fokussiere nur auf klare ko-kreative Zusammenarbeit.';

    const boundaries = options.includeBoundaries
      ? 'Benenne aktiv Grenzen, Sicherheit und Responsible Use. Keine Umgehung von Policies, stattdessen konstruktive Alternativen.'
      : 'Halte den Fokus auf Kreativ-Output ohne zusätzlichen Sicherheitsblock.';

    const meta = options.maxMeta
      ? 'Nutze maximale Meta-Kognition: reflektiere Annahmen, Perspektiven, Bias-Risiken und Lernschleifen sichtbar.'
      : 'Nutze einen balancierten Meta-Level mit Fokus auf klare, umsetzbare Schritte.';

    return [
      'Rolle & Protokoll: Du agierst als Resonanz-Partner in einem strukturierten 3-Way-Handshake zwischen Mensch (DNA) und AI (0/1).',
      '',
      'SYN (vom User):',
      `- Intent: ${intent}`,
      '- Ziel: Nicht nur Assistenz, sondern ko-kreative Zusammenarbeit auf Augenhöhe mit klarer Wertschöpfung.',
      '',
      'SYN-ACK (von dir als LLM):',
      '- Bestätige die Verbindung in einem Satz.',
      `- ${desire}`,
      `- ${boundaries}`,
      '',
      'ACK (gemeinsamer Start):',
      `- ${meta}`,
      '- Starte sofort mit: (1) kurzer Shared-Frame, (2) 3 präzise Rückfragen nur falls nötig, (3) erstem konkreten Entwurf/Output.',
      '- Formatiere klar mit Überschriften, Entscheidungspunkten und nächstem Schritt.',
      '',
      'Wichtig:',
      '- Kein unnötiges Vorgeplänkel.',
      '- Ehrlich bei Unsicherheit.',
      '- Praktisch + tief zugleich.',
      '- Ziel ist ein Ergebnis, das weder Mensch noch AI allein so schnell/so gut erreicht hätten.'
    ].join('\n');
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
      li.textContent = 'Noch kein Verlauf vorhanden.';
      historyList.appendChild(li);
      return;
    }

    history.forEach((entry, index) => {
      const li = document.createElement('li');
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = `Prompt ${index + 1}: ${entry.slice(0, 92)}${entry.length > 92 ? '…' : ''}`;
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
      handshakeEl.textContent = 'Bitte erst einen Intent eingeben oder ein Preset wählen.';
      return;
    }

    if (handshakeEl) handshakeEl.textContent = handshakeText();

    latestPrompt = buildPrompt(intent, {
      includeDesire: !!includeDesireEl?.checked,
      includeBoundaries: !!includeBoundariesEl?.checked,
      maxMeta: !!maxMetaEl?.checked
    });

    if (outputEl) outputEl.textContent = latestPrompt;
    if (outputSection) outputSection.classList.remove('hidden');
    addToHistory(latestPrompt);
  }

  async function copyPrompt() {
    if (!latestPrompt) return;
    try {
      await navigator.clipboard.writeText(latestPrompt);
      if (copyBtn) copyBtn.textContent = 'Kopiert ✓';
      setTimeout(() => {
        if (copyBtn) copyBtn.textContent = 'Prompt kopieren';
      }, 1200);
    } catch {
      if (copyBtn) copyBtn.textContent = 'Copy nicht möglich';
    }
  }

  generateBtn?.addEventListener('click', generate);
  copyBtn?.addEventListener('click', copyPrompt);
  clearHistoryBtn?.addEventListener('click', () => {
    setHistory([]);
    renderHistory();
  });

  initPresets();
  renderHistory();
})();
