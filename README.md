# IrsanAI-RP-v1.0 — Resonance Protocol

Fokusorientierter, statischer Prompt-Generator für bessere Mensch-LLM Zusammenarbeit über ein strukturiertes 3-Way-Handshake-Pattern.

## Korrektur des Kernprinzips

In dieser Version wurde ein Missverständnis aufgelöst:

- Das **RP-Frontend trifft keine Intent-Entscheidung** mehr.
- Das RP bleibt ein **Werkzeug / Brücke** zwischen Mensch und LLM.
- Die **autonome Routenwahl** (z. B. Direct-Shortcut, Resonanz-Route oder weiterer Weg) passiert erst im **Online-LLM nach Erhalt des RP-Prompts**.

## Neu ausgerichtetes RP-Verhalten

Der erzeugte RP-Prompt fordert vom Online-LLM in der **ersten Antwort**:

1. Menschliche, empathische Intent-Zusammenfassung
2. Probabilistische Verlaufseinschätzung (%)
3. Autonome Wahl des effizientesten Startwegs
4. Predictive Shortcut zur Ping-Pong-Reduktion
5. User-Cockpit/Dashboard-Gefühl (Option A/B/C)

Damit liegt die Intelligenz dort, wo sie hingehört: beim LLM mit seinem kognitiven Wissen — nicht im statischen RP-Frontend.

## UX-Prinzipien

- Keine klickbaren Intent-Beispiele (keine kognitive Ablenkung)
- Kein lokaler Intent-Entscheider im RP-Frontend
- 3-Schritt-Flow:
  1. Intent schreiben
  2. Resonanz-Parameter setzen
  3. RP-Protokoll erzeugen und im Online-LLM ausführen

## Features

- 100% static (HTML/CSS/JS), kein Backend
- Mehrsprachigkeit (Deutsch / Englisch / Spanisch)
- RP-Prompt mit LLM-autonomer Wegentscheidung
- User-zentrierte First-Reply-Cockpit-Anweisung
- Lokale Prompt-Historie (letzte 3)
- Copy-to-clipboard + responsive UI

## Dateien

- `index.html` — Hauptoberfläche
- `generator-standalone.html` — kompakte Generatoransicht
- `app.js` — I18n, RP-Prompt-Building, History, Copy
- `styles.css` — visuelles System und responsive Layouts
- `LICENSE` — MIT

## Nutzung

1. `index.html` öffnen
2. Sprache wählen (DE/EN/ES)
3. Intent eintragen
4. Resonanz-Parameter setzen
5. RP-Protokoll erzeugen, kopieren, in ein Online-LLM einfügen
6. LLM entscheidet autonom über den effizientesten Weg

## Lizenz

MIT
