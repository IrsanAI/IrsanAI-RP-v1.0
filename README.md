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

## Hinweis für Entwickler (LOP – Liste offener Punkte)

Was aus meiner Sicht noch offen ist (fachlich, nicht technisch blockiert):

Auflistung der ToDos im aktuellen Repo:

1. **Cross-LLM Validierung der First-Reply-Cockpit-Qualität** — **Status: OFFEN**  
   Nächster Schritt: RP-Prompt in mehreren Zielsystemen (z. B. ChatGPT, Gemini, Claude, Grok) gegen identische Intents testen und dokumentieren, wie zuverlässig das LLM wirklich (a) probabilistische Einschätzung, (b) autonome Routenwahl und (c) user-zentrierten Ton einhält.

2. **Messbares Effizienz-Benchmarking (Token / Turns / Zeit)** — **Status: OFFEN**  
   Nächster Schritt: Für repräsentative Intent-Kategorien A/B-Vergleich „mit RP vs. ohne RP“ durchführen; KPI-Vorschlag: Antwort-Turns bis zum brauchbaren Ergebnis, geschätzte Token, subjektive Nutzerklarheit.

3. **Fachliche Kalibrierung der Wahrscheinlichkeits-Ausgaben** — **Status: TEILWEISE ERLEDIGT**  
   Aktueller Stand: Der Prompt verlangt explizit probabilistische Verlaufseinschätzungen.  
   Offen bleibt: ein klarer Rahmen, wie das LLM Unsicherheit kommunizieren soll (z. B. konservative Bandbreiten, keine Scheingenauigkeit).

4. **Kanonische Prompt-Beispiele pro Intent-Typ (nur Doku, nicht UI-Preload)** — **Status: OFFEN**  
   Nächster Schritt: Im README oder in einer separaten Doku-Datei 6–10 anonymisierte Beispiel-Intents mit erwarteten „guten“ First-Reply-Cockpit-Outputs ergänzen, damit Weiterentwicklung konsistent bleibt, ohne User im UI kognitiv abzulenken.

5. **Governance-Hinweise für produktiven Einsatz** — **Status: TEILWEISE ERLEDIGT**  
   Aktueller Stand: Safety-/Boundary-Hinweise sind im RP-Prompt enthalten.  
   Offen bleibt: kurze Governance-Policy im Repo (z. B. Umgang mit sensiblen Domänen, wann menschliche Freigabe Pflicht ist, wann RP nicht eingesetzt werden sollte).

6. **Standalone-Ansicht inhaltlich auf den identischen Leittext synchron prüfen** — **Status: ERLEDIGT**  
   Aktueller Stand: Die Standalone-Seite nutzt denselben Script-Stack (`app.js`) und damit dieselbe Prompt-Logik.

