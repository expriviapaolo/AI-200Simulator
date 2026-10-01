// ============================================================================
// FILE DELLE DOMANDE (domande, risposte, spiegazioni, immagini) - AI-200
// ============================================================================
// Categorie (campo "category") usate dall'app, dalla skills outline ufficiale:
//   "Container su Azure"
//   "Servizi dati Azure per l'IA"
//   "Connessione e consumo di servizi Azure"
//   "Sicurezza, monitoraggio e troubleshooting"
// Stessa struttura dell'app AI-901: vedi README.md.
// ============================================================================
const QUESTIONS = 
[
/* ===== INIZIO DOMANDE GENERATE DA IA (20 domande, 01/10/2026) ===== */

 {
  "question": "[Develop containerized solutions on Azure] You need to build a container image from a local Dockerfile and push it to Azure Container Registry. Docker is not installed on your workstation. Which command should you use?",
  "questionIt": "[Sviluppare soluzioni containerizzate su Azure] Devi compilare un'immagine di container da un Dockerfile locale e inviarla ad Azure Container Registry. Docker non è installato sulla tua workstation. Quale comando devi usare?",
  "description": "Il comando az acr build invia il contesto di compilazione ad Azure Container Registry (ACR Tasks), compila l'immagine nel cloud e la pubblica nel registro al termine, senza richiedere Docker in locale. docker build e docker push richiedono invece il motore Docker locale, mentre az acr import copia immagini già esistenti da un altro registro senza compilarle. Fonte: https://learn.microsoft.com/it-it/container-registry/container-registry-quickstart-task-cli",
  "answers": [
   {
    "text": "az acr build --registry <registry> --image app:v1 .",
    "textIt": "az acr build --registry <registry> --image app:v1 .",
    "correct": true
   },
   {
    "text": "docker build -t app:v1 . && docker push app:v1",
    "textIt": "docker build -t app:v1 . && docker push app:v1",
    "correct": false
   },
   {
    "text": "az acr import --name <registry> --source app:v1",
    "textIt": "az acr import --name <registry> --source app:v1",
    "correct": false
   },
   {
    "text": "az acr repository update --name <registry> --image app:v1",
    "textIt": "az acr repository update --name <registry> --image app:v1",
    "correct": false
   }
  ],
  "category": "Container su Azure",
  "fonte": "IA"
 },
 {
  "question": "[Develop containerized solutions on Azure] Which two triggers can automatically start an Azure Container Registry task? Each correct answer presents a complete solution.",
  "questionIt": "[Sviluppare soluzioni containerizzate su Azure] Quali due trigger possono avviare automaticamente un'attività di Azure Container Registry? Ogni risposta corretta rappresenta una soluzione completa.",
  "description": "Le ACR Tasks possono essere avviate da un commit di codice sorgente o da una pull request (GitHub/Azure DevOps), dall'aggiornamento di un'immagine di base (per applicare automaticamente patch a OS e framework) oppure da un timer. Gli avvisi di Azure Monitor e il change feed di Cosmos DB non sono trigger di ACR Tasks. Fonte: https://learn.microsoft.com/it-it/container-registry/container-registry-tasks-overview",
  "answers": [
   {
    "text": "A commit to a source code repository",
    "textIt": "Un commit in un repository di codice sorgente",
    "correct": true
   },
   {
    "text": "An update to the base image of the application image",
    "textIt": "L'aggiornamento dell'immagine di base dell'immagine dell'applicazione",
    "correct": true
   },
   {
    "text": "An Azure Monitor metric alert",
    "textIt": "Un avviso di metrica di Azure Monitor",
    "correct": false
   },
   {
    "text": "A new item in an Azure Cosmos DB change feed",
    "textIt": "Un nuovo elemento nel change feed di Azure Cosmos DB",
    "correct": false
   }
  ],
  "category": "Container su Azure",
  "fonte": "IA"
 },
 {
  "question": "[Develop containerized solutions on Azure] A container app processes messages from an Azure Service Bus queue. It must scale out based on the number of queued messages and scale to zero replicas when the queue is empty. What should you configure?",
  "questionIt": "[Sviluppare soluzioni containerizzate su Azure] Un'app contenitore elabora i messaggi di una coda di Azure Service Bus. Deve scalare orizzontalmente in base al numero di messaggi in coda e ridursi a zero repliche quando la coda è vuota. Cosa devi configurare?",
  "description": "Azure Container Apps usa KEDA per il ridimensionamento basato su eventi: una regola di scalabilità personalizzata di tipo azure-servicebus (con queueName e messageCount) fa aumentare le repliche in base ai messaggi in coda, e minReplicas pari a 0 (valore predefinito) consente la riduzione a zero. Le regole HTTP e TCP scalano in base a richieste e connessioni, non alla lunghezza della coda, e con minReplicas pari a 1 non si scende a zero. Fonte: https://learn.microsoft.com/it-it/container-apps/scale-app",
  "answers": [
   {
    "text": "A custom scale rule of type azure-servicebus with minReplicas set to 0",
    "textIt": "Una regola di scalabilità personalizzata di tipo azure-servicebus con minReplicas impostato su 0",
    "correct": true
   },
   {
    "text": "An HTTP scale rule with concurrentRequests set to 100",
    "textIt": "Una regola di scalabilità HTTP con concurrentRequests impostato su 100",
    "correct": false
   },
   {
    "text": "A TCP scale rule with minReplicas set to 1",
    "textIt": "Una regola di scalabilità TCP con minReplicas impostato su 1",
    "correct": false
   },
   {
    "text": "A CPU scale rule with maxReplicas set to 0",
    "textIt": "Una regola di scalabilità sulla CPU con maxReplicas impostato su 0",
    "correct": false
   }
  ],
  "category": "Container su Azure",
  "fonte": "IA"
 },
 {
  "question": "[Develop containerized solutions on Azure] A container app in Azure Container Apps runs in single revision mode. Which change causes a new revision to be created?",
  "questionIt": "[Sviluppare soluzioni containerizzate su Azure] Un'app contenitore in Azure Container Apps viene eseguita in modalità revisione singola. Quale modifica causa la creazione di una nuova revisione?",
  "description": "Le modifiche con ambito revisione, cioè quelle in properties.template (immagine del contenitore, configurazione dei container, regole di scalabilità), creano una nuova revisione. Le modifiche con ambito applicazione (valori dei segreti, configurazione dell'ingress, regole di suddivisione del traffico, credenziali del registro) si applicano globalmente senza creare una nuova revisione. Fonte: https://learn.microsoft.com/it-it/container-apps/revisions",
  "answers": [
   {
    "text": "Updating the container image tag",
    "textIt": "Aggiornare il tag dell'immagine del contenitore",
    "correct": true
   },
   {
    "text": "Updating the value of a secret",
    "textIt": "Aggiornare il valore di un segreto",
    "correct": false
   },
   {
    "text": "Changing the ingress configuration",
    "textIt": "Modificare la configurazione dell'ingress",
    "correct": false
   },
   {
    "text": "Changing the traffic splitting rules",
    "textIt": "Modificare le regole di suddivisione del traffico",
    "correct": false
   }
  ],
  "category": "Container su Azure",
  "fonte": "IA"
 },
 {
  "question": "[Develop containerized solutions on Azure] You deploy an application to Azure Kubernetes Service (AKS) by using a manifest file that defines a Deployment. The front-end pods must be reachable from the internet through a public IP address. What should you add to the manifest, and how should you deploy it?",
  "questionIt": "[Sviluppare soluzioni containerizzate su Azure] Distribuisci un'applicazione in Azure Kubernetes Service (AKS) usando un file manifest che definisce un Deployment. I pod del front-end devono essere raggiungibili da Internet tramite un indirizzo IP pubblico. Cosa devi aggiungere al manifest e come devi distribuirlo?",
  "description": "Un Service di tipo LoadBalancer espone il front-end con un indirizzo IP esterno pubblico, e il manifest YAML si distribuisce con kubectl apply -f. Un Service ClusterIP è raggiungibile solo dall'interno del cluster e un Deployment non assegna da solo un IP pubblico. kubectl get mostra le risorse ma non le crea. Fonte: https://learn.microsoft.com/it-it/aks/tutorial-kubernetes-deploy-application",
  "answers": [
   {
    "text": "A Service of type ClusterIP, deployed with kubectl apply -f",
    "textIt": "Un Service di tipo ClusterIP, distribuito con kubectl apply -f",
    "correct": false
   },
   {
    "text": "A Service of type LoadBalancer, deployed with kubectl apply -f",
    "textIt": "Un Service di tipo LoadBalancer, distribuito con kubectl apply -f",
    "correct": true
   },
   {
    "text": "A second Deployment with replicas set to 2, deployed with kubectl get",
    "textIt": "Un secondo Deployment con replicas impostato su 2, distribuito con kubectl get",
    "correct": false
   },
   {
    "text": "A ConfigMap named public-ip, deployed with kubectl describe",
    "textIt": "Un ConfigMap denominato public-ip, distribuito con kubectl describe",
    "correct": false
   }
  ],
  "category": "Container su Azure",
  "fonte": "IA"
 },
 {
  "question": "[Develop AI solutions by using Azure data management services] Which two Azure Cosmos DB for NoSQL consistency levels consume about twice the request units (RUs) for read operations compared to the other levels? Each correct answer presents part of the solution.",
  "questionIt": "[Sviluppare soluzioni di IA con i servizi di gestione dati di Azure] Quali due livelli di coerenza di Azure Cosmos DB for NoSQL consumano circa il doppio delle unità richiesta (RU) per le operazioni di lettura rispetto agli altri livelli? Ogni risposta corretta rappresenta una parte della soluzione.",
  "description": "Con coerenza Strong e Bounded Staleness le letture interrogano un quorum locale di minoranza (2 repliche), quindi costano circa 2 volte le RU. Session, Consistent Prefix ed Eventual leggono da una singola replica e costano 1 volta. Session è il livello predefinito e garantisce la lettura delle proprie scritture all'interno di una sessione. Fonte: https://learn.microsoft.com/it-it/cosmos-db/consistency-levels",
  "answers": [
   {
    "text": "Strong",
    "textIt": "Strong",
    "correct": true
   },
   {
    "text": "Session",
    "textIt": "Session",
    "correct": false
   },
   {
    "text": "Bounded Staleness",
    "textIt": "Bounded Staleness",
    "correct": true
   },
   {
    "text": "Eventual",
    "textIt": "Eventual",
    "correct": false
   }
  ],
  "category": "Servizi dati Azure per l'IA",
  "fonte": "IA"
 },
 {
  "question": "[Develop AI solutions by using Azure data management services] An Azure Cosmos DB for NoSQL container stores documents that include a large, rarely queried property named /rawPayload. Write operations consume too many RUs. You must reduce RU consumption without changing queries on other properties. What should you do?",
  "questionIt": "[Sviluppare soluzioni di IA con i servizi di gestione dati di Azure] Un container Azure Cosmos DB for NoSQL archivia documenti che includono una proprietà grande e raramente interrogata denominata /rawPayload. Le operazioni di scrittura consumano troppe RU. Devi ridurre il consumo di RU senza modificare le query sulle altre proprietà. Cosa devi fare?",
  "description": "Per impostazione predefinita Cosmos DB indicizza tutti i percorsi, e ogni percorso indicizzato aumenta le RU consumate in scrittura. Mantenendo includedPaths su /* e aggiungendo /rawPayload/* a excludedPaths si elimina l'indicizzazione della proprietà inutilizzata, riducendo le RU di scrittura senza influire sulle altre query. Impostare indexingMode su none disabiliterebbe l'indicizzazione per tutte le proprietà e comprometterebbe le query. Fonte: https://learn.microsoft.com/it-it/cosmos-db/index-policy",
  "answers": [
   {
    "text": "Set the indexing mode to none",
    "textIt": "Impostare la modalità di indicizzazione su none",
    "correct": false
   },
   {
    "text": "Add /rawPayload/* to excludedPaths and keep /* in includedPaths",
    "textIt": "Aggiungere /rawPayload/* a excludedPaths e mantenere /* in includedPaths",
    "correct": true
   },
   {
    "text": "Add a composite index that includes /rawPayload",
    "textIt": "Aggiungere un indice composito che includa /rawPayload",
    "correct": false
   },
   {
    "text": "Change the consistency level to Strong",
    "textIt": "Cambiare il livello di coerenza in Strong",
    "correct": false
   }
  ],
  "category": "Servizi dati Azure per l'IA",
  "fonte": "IA"
 },
 {
  "question": "[Develop AI solutions by using Azure data management services] You store 500,000 embeddings with 1,536 dimensions in an Azure Cosmos DB for NoSQL container and run similarity searches by using VectorDistance. You need an efficient vector index for this large dataset. Which index type should you configure in the container's indexing policy?",
  "questionIt": "[Sviluppare soluzioni di IA con i servizi di gestione dati di Azure] Archivi 500.000 embedding con 1.536 dimensioni in un container Azure Cosmos DB for NoSQL ed esegui ricerche di similarità con VectorDistance. Ti serve un indice vettoriale efficiente per questo grande set di dati. Quale tipo di indice devi configurare nei criteri di indicizzazione del container?",
  "description": "Per più di 50.000 vettori è consigliato l'indice diskANN, che supporta fino a 4.096 dimensioni ed è efficiente su grandi volumi. L'indice flat offre recall del 100% ma supporta al massimo 505 dimensioni, mentre quantizedFlat è indicato per al massimo circa 50.000 vettori. Il tipo range non è un indice vettoriale. Fonte: https://learn.microsoft.com/it-it/cosmos-db/nosql/vector-search",
  "answers": [
   {
    "text": "flat",
    "textIt": "flat",
    "correct": false
   },
   {
    "text": "quantizedFlat",
    "textIt": "quantizedFlat",
    "correct": false
   },
   {
    "text": "diskANN",
    "textIt": "diskANN",
    "correct": true
   },
   {
    "text": "range",
    "textIt": "range",
    "correct": false
   }
  ],
  "category": "Servizi dati Azure per l'IA",
  "fonte": "IA"
 },
 {
  "question": "[Develop AI solutions by using Azure data management services] You use the change feed processor in .NET to react to new and updated items in an Azure Cosmos DB for NoSQL container. Which component stores the processor's state and coordinates the work across multiple instances?",
  "questionIt": "[Sviluppare soluzioni di IA con i servizi di gestione dati di Azure] Usi il change feed processor in .NET per reagire agli elementi nuovi e aggiornati in un container Azure Cosmos DB for NoSQL. Quale componente archivia lo stato del processor e coordina il lavoro tra più istanze?",
  "description": "Il lease container conserva lo stato e i checkpoint per ogni intervallo di partizioni e coordina l'assegnazione del lavoro tra le istanze del processor che usano lo stesso processorName, permettendo la scalabilità orizzontale. Il container monitorato contiene i dati di origine, il delegate è il codice utente che elabora i batch di modifiche e la compute instance ospita il processor. Fonte: https://learn.microsoft.com/it-it/cosmos-db/nosql/change-feed-processor",
  "answers": [
   {
    "text": "The monitored container",
    "textIt": "Il container monitorato",
    "correct": false
   },
   {
    "text": "The lease container",
    "textIt": "Il lease container",
    "correct": true
   },
   {
    "text": "The delegate",
    "textIt": "Il delegate",
    "correct": false
   },
   {
    "text": "The partition key",
    "textIt": "La chiave di partizione",
    "correct": false
   }
  ],
  "category": "Servizi dati Azure per l'IA",
  "fonte": "IA"
 },
 {
  "question": "[Develop AI solutions by using Azure data management services] You plan to store embeddings in Azure Database for PostgreSQL flexible server by using the vector data type. Which two actions must you perform before you can create a column of type vector? Each correct answer presents part of the solution.",
  "questionIt": "[Sviluppare soluzioni di IA con i servizi di gestione dati di Azure] Prevedi di archiviare gli embedding in Azure Database for PostgreSQL flexible server usando il tipo di dato vector. Quali due azioni devi eseguire prima di poter creare una colonna di tipo vector? Ogni risposta corretta rappresenta una parte della soluzione.",
  "description": "In Azure Database for PostgreSQL l'estensione deve prima essere inserita nell'elenco consentito (parametro del server azure.extensions) e poi abilitata nel database con CREATE EXTENSION vector; il nome dell'estensione è vector. Solo allora è possibile definire colonne di tipo vector(n) ed eseguire query di similarità con operatori come <=> (distanza coseno). Fonte: https://learn.microsoft.com/it-it/postgresql/extensions/how-to-use-pgvector",
  "answers": [
   {
    "text": "Allow-list the vector extension in the azure.extensions server parameter",
    "textIt": "Inserire l'estensione vector nell'elenco consentito del parametro del server azure.extensions",
    "correct": true
   },
   {
    "text": "Run CREATE EXTENSION vector in the target database",
    "textIt": "Eseguire CREATE EXTENSION vector nel database di destinazione",
    "correct": true
   },
   {
    "text": "Create a Cosmos DB account with the vector capability",
    "textIt": "Creare un account Cosmos DB con la funzionalità vector",
    "correct": false
   },
   {
    "text": "Enable the RediSearch module on the server",
    "textIt": "Abilitare il modulo RediSearch sul server",
    "correct": false
   }
  ],
  "category": "Servizi dati Azure per l'IA",
  "fonte": "IA"
 },
 {
  "question": "[Develop AI solutions by using Azure data management services] You use Azure Managed Redis as a cache for a RAG application and also want to run vector similarity searches on embeddings stored in Redis. Which Redis module provides vector search?",
  "questionIt": "[Sviluppare soluzioni di IA con i servizi di gestione dati di Azure] Usi Azure Managed Redis come cache per un'applicazione RAG e vuoi anche eseguire ricerche di similarità vettoriale sugli embedding archiviati in Redis. Quale modulo Redis fornisce la ricerca vettoriale?",
  "description": "Azure Managed Redis, basato su Redis Enterprise, supporta il modulo RediSearch, che include la funzionalità di ricerca vettoriale. RedisJSON gestisce documenti JSON, RedisBloom le strutture dati probabilistiche e RedisTimeSeries le serie temporali: nessuno di questi fornisce da solo la ricerca di similarità tra vettori. Fonte: https://learn.microsoft.com/it-it/redis/overview",
  "answers": [
   {
    "text": "RedisJSON",
    "textIt": "RedisJSON",
    "correct": false
   },
   {
    "text": "RedisBloom",
    "textIt": "RedisBloom",
    "correct": false
   },
   {
    "text": "RedisTimeSeries",
    "textIt": "RedisTimeSeries",
    "correct": false
   },
   {
    "text": "RediSearch",
    "textIt": "RediSearch",
    "correct": true
   }
  ],
  "category": "Servizi dati Azure per l'IA",
  "fonte": "IA"
 },
 {
  "question": "[Connect to and consume Azure services] A message processor reads messages from an Azure Service Bus queue by using the default settings. A message repeatedly fails processing and is abandoned each time. Where does Service Bus move the message after the maximum number of delivery attempts is exceeded?",
  "questionIt": "[Connettersi ai servizi Azure e utilizzarli] Un processore di messaggi legge i messaggi da una coda di Azure Service Bus con le impostazioni predefinite. Un messaggio non viene elaborato correttamente più volte e viene ogni volta abbandonato. Dove sposta Service Bus il messaggio dopo il superamento del numero massimo di tentativi di recapito?",
  "description": "Quando il numero di recapiti supera MaxDeliveryCount (10 per impostazione predefinita) il messaggio viene spostato nella coda dei messaggi non recapitabili (dead-letter queue, sottocoda <coda>/$deadletterqueue) con il motivo MaxDeliveryCountExceeded. La DLQ viene creata automaticamente, non può essere eliminata e i suoi messaggi non vengono rimossi in automatico. Fonte: https://learn.microsoft.com/it-it/service-bus-messaging/service-bus-dead-letter-queues",
  "answers": [
   {
    "text": "It is deleted from the queue",
    "textIt": "Viene eliminato dalla coda",
    "correct": false
   },
   {
    "text": "It is moved to the dead-letter queue",
    "textIt": "Viene spostato nella coda dei messaggi non recapitabili",
    "correct": true
   },
   {
    "text": "It is moved to a new topic named failed",
    "textIt": "Viene spostato in un nuovo argomento denominato failed",
    "correct": false
   },
   {
    "text": "It remains in the queue and is redelivered indefinitely",
    "textIt": "Rimane nella coda e viene recapitato all'infinito",
    "correct": false
   }
  ],
  "category": "Connessione e consumo di servizi Azure",
  "fonte": "IA"
 },
 {
  "question": "[Connect to and consume Azure services] An order service publishes order messages. A billing service, a shipping service, and an analytics service must each receive a copy of every order message and process it independently. Which Azure Service Bus design meets the requirement?",
  "questionIt": "[Connettersi ai servizi Azure e utilizzarli] Un servizio ordini pubblica messaggi d'ordine. Un servizio di fatturazione, uno di spedizione e uno di analisi devono ricevere ciascuno una copia di ogni messaggio d'ordine ed elaborarla in modo indipendente. Quale progettazione di Azure Service Bus soddisfa il requisito?",
  "description": "Un argomento (topic) con una sottoscrizione per ogni servizio implementa il modello publish-subscribe: ogni sottoscrizione riceve una copia di ogni messaggio ed è elaborata in modo indipendente. In una coda singola ogni messaggio viene consumato da un solo consumer (point-to-point), quindi i tre servizi si contenderebbero i messaggi. Fonte: https://learn.microsoft.com/it-it/service-bus-messaging/service-bus-queues-topics-subscriptions",
  "answers": [
   {
    "text": "One queue read by all three services",
    "textIt": "Una coda letta da tutti e tre i servizi",
    "correct": false
   },
   {
    "text": "One topic with a separate subscription for each service",
    "textIt": "Un argomento con una sottoscrizione separata per ogni servizio",
    "correct": true
   },
   {
    "text": "Three queues with the same name in the same namespace",
    "textIt": "Tre code con lo stesso nome nello stesso namespace",
    "correct": false
   },
   {
    "text": "One queue with the receive mode set to ReceiveAndDelete",
    "textIt": "Una coda con la modalità di ricezione impostata su ReceiveAndDelete",
    "correct": false
   }
  ],
  "category": "Connessione e consumo di servizi Azure",
  "fonte": "IA"
 },
 {
  "question": "[Connect to and consume Azure services] You create an Azure Event Grid subscription on a storage account. The handler must be invoked only when a new .jpg blob is created. What should you configure on the event subscription?",
  "questionIt": "[Connettersi ai servizi Azure e utilizzarli] Crei una sottoscrizione di Azure Event Grid su un account di archiviazione. Il gestore deve essere richiamato solo quando viene creato un nuovo BLOB .jpg. Cosa devi configurare nella sottoscrizione di eventi?",
  "description": "I filtri di Event Grid si applicano a livello di sottoscrizione: includedEventTypes impostato su Microsoft.Storage.BlobCreated limita il tipo di evento, mentre subjectEndsWith impostato su .jpg limita l'oggetto agli URL dei BLOB .jpg. Il filtro sul tipo di evento da solo recapiterebbe anche gli altri formati, e la logica di filtro nel gestore farebbe comunque consegnare ed elaborare ogni evento. Fonte: https://learn.microsoft.com/it-it/event-grid/event-filtering",
  "answers": [
   {
    "text": "A filter on event type BlobCreated only",
    "textIt": "Un filtro solo sul tipo di evento BlobCreated",
    "correct": false
   },
   {
    "text": "A filter on event type BlobCreated and subjectEndsWith set to .jpg",
    "textIt": "Un filtro sul tipo di evento BlobCreated e subjectEndsWith impostato su .jpg",
    "correct": true
   },
   {
    "text": "A filter on event type BlobDeleted and subjectBeginsWith set to .jpg",
    "textIt": "Un filtro sul tipo di evento BlobDeleted e subjectBeginsWith impostato su .jpg",
    "correct": false
   },
   {
    "text": "No filter; check the file extension in the handler code",
    "textIt": "Nessun filtro; controllare l'estensione del file nel codice del gestore",
    "correct": false
   }
  ],
  "category": "Connessione e consumo di servizi Azure",
  "fonte": "IA"
 },
 {
  "question": "[Connect to and consume Azure services] Which two statements about the default retry policy of an Azure Event Grid event subscription are true? Each correct answer presents part of the solution.",
  "questionIt": "[Connettersi ai servizi Azure e utilizzarli] Quali due affermazioni sui criteri di ripetizione dei tentativi predefiniti di una sottoscrizione di eventi di Azure Event Grid sono vere? Ogni risposta corretta rappresenta una parte della soluzione.",
  "description": "Event Grid ripete il recapito con backoff esponenziale; per impostazione predefinita i tentativi massimi sono 30 e il time-to-live dell'evento è 1.440 minuti (24 ore), e il recapito si interrompe al primo limite raggiunto. Se è configurata una destinazione di dead-letter (Blob Storage), gli eventi non recapitati vengono archiviati lì. Non esistono tentativi a intervalli fissi di 1 secondo né un limite predefinito di 3 tentativi. Fonte: https://learn.microsoft.com/it-it/event-grid/delivery-and-retry",
  "answers": [
   {
    "text": "Delivery is retried with exponential backoff for up to 30 attempts",
    "textIt": "Il recapito viene ripetuto con backoff esponenziale fino a 30 tentativi",
    "correct": true
   },
   {
    "text": "The default event time-to-live is 1,440 minutes",
    "textIt": "Il time-to-live predefinito dell'evento è 1.440 minuti",
    "correct": true
   },
   {
    "text": "Delivery is retried every second until the endpoint responds",
    "textIt": "Il recapito viene ripetuto ogni secondo finché l'endpoint non risponde",
    "correct": false
   },
   {
    "text": "An event is dropped after 3 failed delivery attempts",
    "textIt": "Un evento viene scartato dopo 3 tentativi di recapito non riusciti",
    "correct": false
   }
  ],
  "category": "Connessione e consumo di servizi Azure",
  "fonte": "IA"
 },
 {
  "question": "[Connect to and consume Azure services] You are building an Azure Function that must run whenever a message arrives in a storage queue and must write the result to Azure Cosmos DB without writing explicit SDK connection code. Which configuration should you use?",
  "questionIt": "[Connettersi ai servizi Azure e utilizzarli] Stai creando una funzione di Azure che deve essere eseguita ogni volta che arriva un messaggio in una coda di archiviazione e deve scrivere il risultato in Azure Cosmos DB senza scrivere codice esplicito di connessione tramite SDK. Quale configurazione devi usare?",
  "description": "Ogni funzione ha esattamente un trigger (qui il trigger della coda, che avvia la funzione) e può avere zero o più binding di input e di output (qui un binding di output per Cosmos DB), che consentono di accedere ai servizi in modo dichiarativo senza codice di connessione. Non è possibile avere due trigger nella stessa funzione, e un binding di input non scrive dati. Fonte: https://learn.microsoft.com/it-it/azure-functions/functions-triggers-bindings",
  "answers": [
   {
    "text": "A queue trigger and a Cosmos DB input binding",
    "textIt": "Un trigger di coda e un binding di input di Cosmos DB",
    "correct": false
   },
   {
    "text": "A queue trigger and a Cosmos DB output binding",
    "textIt": "Un trigger di coda e un binding di output di Cosmos DB",
    "correct": true
   },
   {
    "text": "A queue trigger and a Cosmos DB trigger in the same function",
    "textIt": "Un trigger di coda e un trigger di Cosmos DB nella stessa funzione",
    "correct": false
   },
   {
    "text": "A timer trigger and a queue input binding",
    "textIt": "Un trigger timer e un binding di input di coda",
    "correct": false
   }
  ],
  "category": "Connessione e consumo di servizi Azure",
  "fonte": "IA"
 },
 {
  "question": "[Secure, monitor, and troubleshoot Azure solutions] A secret in Azure Key Vault has an expiration date. You must automatically generate a new secret version before the secret expires. Which solution should you implement?",
  "questionIt": "[Proteggere, monitorare e risolvere i problemi delle soluzioni Azure] Un segreto in Azure Key Vault ha una data di scadenza. Devi generare automaticamente una nuova versione del segreto prima che scada. Quale soluzione devi implementare?",
  "description": "Key Vault pubblica l'evento SecretNearExpiry su Event Grid 30 giorni prima della scadenza; una sottoscrizione Event Grid può richiamare una funzione di Azure che genera la nuova versione del segreto e aggiorna la risorsa che lo usa (tutorial di rotazione dei segreti). Un avviso di Azure Monitor che elimina il segreto o un test di disponibilità non generano una nuova versione del segreto. Fonte: https://learn.microsoft.com/it-it/key-vault/secrets/tutorial-rotation",
  "answers": [
   {
    "text": "An Azure Monitor alert that deletes the secret",
    "textIt": "Un avviso di Azure Monitor che elimina il segreto",
    "correct": false
   },
   {
    "text": "An Event Grid subscription to SecretNearExpiry that triggers an Azure Function",
    "textIt": "Una sottoscrizione Event Grid a SecretNearExpiry che avvia una funzione di Azure",
    "correct": true
   },
   {
    "text": "An Application Insights availability test",
    "textIt": "Un test di disponibilità di Application Insights",
    "correct": false
   },
   {
    "text": "A Key Vault access policy with the Rotate permission on the application",
    "textIt": "Un criterio di accesso di Key Vault con l'autorizzazione Rotate per l'applicazione",
    "correct": false
   }
  ],
  "category": "Sicurezza, monitoraggio e troubleshooting",
  "fonte": "IA"
 },
 {
  "question": "[Secure, monitor, and troubleshoot Azure solutions] An application needs centralized, non-secret settings and feature flags that can change without redeploying the app. Database passwords must be stored securely. Which combination should you recommend?",
  "questionIt": "[Proteggere, monitorare e risolvere i problemi delle soluzioni Azure] Un'applicazione richiede impostazioni non segrete e flag di funzionalità centralizzati, modificabili senza ridistribuire l'app. Le password del database devono essere archiviate in modo sicuro. Quale combinazione devi consigliare?",
  "description": "Azure App Configuration gestisce in modo centralizzato impostazioni e feature flag con aggiornamento dinamico senza ridistribuzione, ma non è pensato per archiviare segreti: questi vanno in Azure Key Vault, a cui App Configuration può fare riferimento. Archiviare le password in App Configuration o in app settings in chiaro non rispetta la separazione consigliata tra configurazione e segreti. Fonte: https://learn.microsoft.com/it-it/azure-app-configuration/overview",
  "answers": [
   {
    "text": "Azure App Configuration for settings and flags, Azure Key Vault for passwords",
    "textIt": "Azure App Configuration per impostazioni e flag, Azure Key Vault per le password",
    "correct": true
   },
   {
    "text": "Azure Key Vault for settings and flags, Azure App Configuration for passwords",
    "textIt": "Azure Key Vault per impostazioni e flag, Azure App Configuration per le password",
    "correct": false
   },
   {
    "text": "Azure App Configuration for everything, including passwords",
    "textIt": "Azure App Configuration per tutto, comprese le password",
    "correct": false
   },
   {
    "text": "Plain-text values in the appsettings.json file for everything",
    "textIt": "Valori in chiaro nel file appsettings.json per tutto",
    "correct": false
   }
  ],
  "category": "Sicurezza, monitoraggio e troubleshooting",
  "fonte": "IA"
 },
 {
  "question": "[Secure, monitor, and troubleshoot Azure solutions] You need to trace requests across several ASP.NET Core microservices and send the telemetry to Azure Monitor Application Insights by using OpenTelemetry. Which approach should you use?",
  "questionIt": "[Proteggere, monitorare e risolvere i problemi delle soluzioni Azure] Devi tracciare le richieste tra più microservizi ASP.NET Core e inviare la telemetria ad Azure Monitor Application Insights usando OpenTelemetry. Quale approccio devi usare?",
  "description": "Con il pacchetto Azure.Monitor.OpenTelemetry.AspNetCore si chiama builder.Services.AddOpenTelemetry().UseAzureMonitor() e si fornisce la stringa di connessione (ad esempio tramite la variabile APPLICATIONINSIGHTS_CONNECTION_STRING): la distribuzione raccoglie tracce, metriche e log e supporta il contesto di traccia W3C per il tracciamento distribuito. Scrivere log con Console.WriteLine o abilitare VM Insights non produce tracce distribuite correlate tra i servizi. Fonte: https://learn.microsoft.com/it-it/azure-monitor/app/opentelemetry-enable",
  "answers": [
   {
    "text": "Call AddOpenTelemetry().UseAzureMonitor() and set APPLICATIONINSIGHTS_CONNECTION_STRING",
    "textIt": "Chiamare AddOpenTelemetry().UseAzureMonitor() e impostare APPLICATIONINSIGHTS_CONNECTION_STRING",
    "correct": true
   },
   {
    "text": "Write custom log lines with Console.WriteLine in each service",
    "textIt": "Scrivere righe di log personalizzate con Console.WriteLine in ogni servizio",
    "correct": false
   },
   {
    "text": "Enable Azure Monitor VM Insights on the host",
    "textIt": "Abilitare Azure Monitor VM Insights sull'host",
    "correct": false
   },
   {
    "text": "Create a Key Vault diagnostic setting for each service",
    "textIt": "Creare un'impostazione di diagnostica di Key Vault per ogni servizio",
    "correct": false
   }
  ],
  "category": "Sicurezza, monitoraggio e troubleshooting",
  "fonte": "IA"
 },
 {
  "question": "[Secure, monitor, and troubleshoot Azure solutions] A Log Analytics workspace contains the AppRequests table. You must show the average request duration (DurationMs) in 5-minute intervals for the last hour. Which KQL query should you run?",
  "questionIt": "[Proteggere, monitorare e risolvere i problemi delle soluzioni Azure] Un'area di lavoro Log Analytics contiene la tabella AppRequests. Devi mostrare la durata media delle richieste (DurationMs) a intervalli di 5 minuti nell'ultima ora. Quale query KQL devi eseguire?",
  "description": "Si filtra con where TimeGenerated > ago(1h) e si aggrega con summarize avg(DurationMs) by bin(TimeGenerated, 5m): bin() raggruppa i valori temporali in intervalli di 5 minuti e ago() definisce l'intervallo relativo. take e top limitano il numero di righe ma non aggregano, mentre project seleziona solo colonne. Fonte: https://learn.microsoft.com/it-it/azure-monitor/logs/get-started-queries",
  "answers": [
   {
    "text": "AppRequests | where TimeGenerated > ago(1h) | summarize avg(DurationMs) by bin(TimeGenerated, 5m)",
    "textIt": "AppRequests | where TimeGenerated > ago(1h) | summarize avg(DurationMs) by bin(TimeGenerated, 5m)",
    "correct": true
   },
   {
    "text": "AppRequests | take 5 | project DurationMs",
    "textIt": "AppRequests | take 5 | project DurationMs",
    "correct": false
   },
   {
    "text": "AppRequests | top 5m by DurationMs",
    "textIt": "AppRequests | top 5m by DurationMs",
    "correct": false
   },
   {
    "text": "AppRequests | project avg(DurationMs) by 5m",
    "textIt": "AppRequests | project avg(DurationMs) by 5m",
    "correct": false
   }
  ],
  "category": "Sicurezza, monitoraggio e troubleshooting",
  "fonte": "IA"
 }
/* ===== FINE DOMANDE GENERATE DA IA ===== */
];
const IMAGES = {};
