# AI-200 url:
https://expriviapaolo.github.io/AI-200Simulator/AI200-Quiz-Web.html

# AI-200 Exam Simulator (versione mobile)

Simulatore di quiz per **Exam AI-200: Developing AI Cloud Solutions on Azure** (Azure AI Cloud Developer Associate).
Stesso motore dell'app AI-901 (HTML/JS autosufficiente, offline, PWA installabile).

## Architettura a 3 file
- `AI200-Quiz-Web.html` - motore (non va modificato per aggiornare le domande).
- `exam-config.js` - nome, punteggio (700/1000), numeri di domande, nota dataset, consiglio di studio.
- `exam-questions.js` - `QUESTIONS` e `IMAGES` (attualmente VUOTI: da popolare).
- PWA: `manifest.webmanifest`, `sw.js` (cache `ai200-quiz-v1`, da incrementare a ogni pubblicazione), `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`.

## Schema di una domanda
```js
{
  "question": "testo EN", "questionIt": "testo IT",
  "description": "spiegazione in italiano. Fonte: https://learn.microsoft.com/it-IT/...",
  "answers": [ { "text": "EN", "textIt": "IT", "correct": true|false } ],
  "category": "una delle 4 categorie sotto",
  "fonte": "origine della domanda, es. IA | Sito ufficiale Microsoft | Sito XYZ",
  "image": "1.jpg"            // opzionale; il dato base64 va in IMAGES["1.jpg"]
}
```
`fonte` e' facoltativo: se presente compare come prefisso "(fonte) " all'inizio del testo della domanda, in EN e IT (quiz, Rivedi risposte, Domande in ripasso), es. "(IA) What is ...?". Non va confuso con il link "Fonte: URL" a Microsoft Learn dentro `description`.
Scelta multipla = piu' risposte con `correct: true`.

## Categorie (domini skills outline AI-200)
1. `Container su Azure` (20-25%)
2. `Servizi dati Azure per l'IA` (25-30%) - Cosmos DB NoSQL, PostgreSQL/pgvector, Managed Redis
3. `Connessione e consumo di servizi Azure` (20-25%) - Service Bus, Event Grid, Functions
4. `Sicurezza, monitoraggio e troubleshooting` (20-25%) - Key Vault, App Configuration, OpenTelemetry, KQL

## Chiavi localStorage
Prefisso `ai200_` (indipendenti da quelle di AI-901 anche se ospitate sullo stesso dominio).
