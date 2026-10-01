// ============================================================================
// FILE DI CONFIGURAZIONE DELLA CERTIFICAZIONE
// ============================================================================
// Per adattare questa pagina a un'altra certificazione, modifica SOLO questo
// file e "exam-questions.js" (che contiene le domande). Non serve toccare
// AI200-Quiz-Web.html.
// ============================================================================
const SETTINGS = {
  "passingScore": 700,
  "maxScore": 1000,
  "availableQuestionCounts": [10, 30, 50, 70, 100],

  "certificationName": "AI-200 Exam Simulator",
  "certificationSubtitle": "Developing AI Cloud Solutions on Azure · versione web",
  "examCode": "AI-200",

  // Testo mostrato in fondo alla Home, dopo il conteggio automatico delle domande
  // (es. "120 domande disponibili · <datasetNote>"). Aggiornalo quando cambi il dataset.
  "datasetNote": "generato il 01/10/2026",

  // Card "Link utili" in Home: ogni voce si apre in una nuova scheda (target _blank).
  // Per aggiungere link basta aggiungere un oggetto { title, url, description } all'elenco.
  "usefulLinksTitle": "Link utili",
  "usefulLinks": [
    {
      "title": "Pagina ufficiale della certificazione + Practice Assessment",
      "url": "https://learn.microsoft.com/it-it/credentials/certifications/azure-ai-cloud-developer-associate/?practice-assessment-type=certification",
      "description": "Pagina Microsoft Learn della certificazione Azure AI Cloud Developer Associate: panoramica, requisiti, percorsi di studio e prova di valutazione (practice assessment) gratuita per testare la preparazione."
    },
    {
      "title": "Guida allo studio dell'esame AI-200",
      "url": "https://learn.microsoft.com/it-it/credentials/certifications/resources/study-guides/ai-200",
      "description": "Study guide ufficiale: competenze misurate con pesi percentuali per ciascun dominio, sotto-argomenti dettagliati e risorse consigliate per prepararsi all'esame."
    }
  ],

  // Consiglio di studio mostrato in Home (facoltativo: rimuovi o metti null per nasconderlo).
  "studyTip": {
    "title": "Consiglio di studio",
    "intro": "Se impari ad associare rapidamente:",
    "items": [
      { "term": "Container Apps + KEDA", "meaning": "scalare in base agli eventi" },
      { "term": "Cosmos DB / PostgreSQL (pgvector)", "meaning": "dati + ricerca vettoriale per RAG" },
      { "term": "Managed Redis", "meaning": "cache veloce e indice vettoriale" },
      { "term": "Service Bus", "meaning": "code, topic, dead-letter" },
      { "term": "Event Grid", "meaning": "eventi reattivi con filtri e retry" },
      { "term": "Key Vault / App Configuration", "meaning": "segreti / configurazioni" }
    ],
    "conclusion": "hai già eliminato gran parte delle risposte sbagliate."
  }
};
