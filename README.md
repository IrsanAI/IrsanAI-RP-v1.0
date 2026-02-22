# IrsanAI-RP-v1.0 — Resonance Protocol

Fokusorientierter, statischer Prompt-Generator für bessere Mensch-LLM Zusammenarbeit über ein strukturiertes 3-Way-Handshake-Pattern.

## Kern-Upgrade in dieser Version

Diese Version adressiert die zentrale Frage: **Wann sollte RP überhaupt verwendet werden — und wann nicht?**

### Neu: Intent-Check vor der Prompt-Erzeugung

Vor dem eigentlichen Prompt kann der Nutzer den Intent analysieren lassen:

- Intent-Klassifikation: eher **Ad-hoc/Direct** oder **Ko-kreativ/Resonanzfähig**
- Verständnisindikator in **Prozent**
- Modus-Empfehlung: **Direct** oder **RP**
- Override möglich: Auto / RP erzwingen / Direct erzwingen

Damit wird RP gezielt dort eingesetzt, wo es wirklich Mehrwert hat (iterative, tiefe, länger laufende Gespräche).

## UX-Prinzipien

- Keine klickbaren Intent-Beispiele (keine kognitive Ablenkung)
- Mind-Flow-Fragen statt Presets
- 4-Schritt-Flow:
  1. Intent schreiben
  2. Intent klassifizieren (RP vs Direct)
  3. Mind-Flow + RP-Parameter
  4. Finalen Prompt erzeugen und kopieren

## Features

- 100% static (HTML/CSS/JS), kein Backend
- Mehrsprachigkeit (Deutsch / Englisch / Spanisch)
- Intent Advisor + Modusumschaltung (Auto/RP/Direct)
- Lokale Prompt-Historie (letzte 3)
- Copy-to-clipboard + responsive UI

## Dateien

- `index.html` — Hauptoberfläche mit Intent-Advisor, Schritt-Flow und Erwartungswert-Sektion
- `generator-standalone.html` — kompakte Generatoransicht
- `app.js` — I18n, Intent-Klassifizierung, Prompt-Building, History, Copy
- `styles.css` — visuelles System und responsive Layouts
- `LICENSE` — MIT

## Nutzung

1. `index.html` öffnen
2. Sprache wählen (DE/EN/ES)
3. Intent eintragen
4. Intent analysieren (optional, empfohlen)
5. Modus bestätigen (Auto/RP/Direct)
6. Prompt erzeugen, kopieren, in ein Online-LLM einfügen

## Lizenz

MIT
