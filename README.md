# IrsanAI-RP-v1.0 — Resonance Protocol

Fokusorientierter, statischer Prompt-Generator für eine bessere Mensch-LLM Zusammenarbeit über ein strukturiertes 3-Way-Handshake-Pattern.

## Was wurde verbessert?

Auf Basis von UX-Feedback wurde die Oberfläche bewusst auf **kognitive Klarheit** optimiert:

- **Keine anklickbaren Intent-Beispiele** mehr (keine mentale Ablenkung vom eigenen Vorhaben)
- **Mind-Flow Verstärker** statt Presets: kurze Fokusfragen, die den eigenen Gedankenkanal stabilisieren
- **3-Schritt-Flow**:
  1. Eigenes Vorhaben formulieren (wie in einem echten Online-LLM)
  2. Denkfokus stabilisieren + Protokollparameter setzen
  3. Resonanz-Prompt generieren und direkt nutzen
- **Erwartetes Ergebnis transparent**: Vergleich „ohne RP“ vs. „mit RP“
- **Mehrsprachig umschaltbar**: Deutsch, Englisch, Spanisch

## Features

- 100% static (HTML/CSS/JS), kein Backend
- Mehrsprachigkeit via UI-Switch + lokaler Speicherung
- Prompthistorie (lokal, letzte 3 Einträge)
- Copy-to-clipboard mit Feedback
- Responsive UI

## Dateien

- `index.html` — Hauptoberfläche mit Schritt-Flow + Erwartungswert-Sektion
- `generator-standalone.html` — kompakte Generatoransicht
- `app.js` — I18n, Prompt-Builder, History, Copy-Flow
- `styles.css` — visuelle Gestaltung und responsives Layout
- `LICENSE` — MIT

## Nutzung

1. `index.html` im Browser öffnen [https://irsanai.github.io/IrsanAI-RP-v1.0/]
2. Sprache wählen (DE/EN/ES)
3. Intent eintragen
4. Optionen in Schritt 2 setzen
5. Prompt generieren, kopieren, ins gewünschte LLM einfügen

## Lizenz

MIT
