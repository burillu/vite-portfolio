import { reactive } from "vue";

export const store = reactive({
    message: 'tu sorella',
    apiUrl: 'http://127.0.0.1:8000/api',
    imgUrl: 'http://127.0.0.1:8000/storage/',
    projects: [
        {
            id: 1,
            title: "laravel-comics-2",
            user_id: 1,
            type_id: 2,
            image: "images\/XW5hGO4os2XnS0KLAltCJ29lZxhad85dyY4EWYg0.png",
            slug: "laravel-comics-2",
            body: "Descrizione:\r\n            Milestone 1\r\n            Tramite gli appositi comandi artisan create un model con relativa migration e seeder e resource controller. Editate la resource route\r\n            \r\n            Milestone 2\r\n            Iniziate a definire le prime operazioni CRUD con le relative view dove necessarie:\r\n            \r\n            index()\r\n            show()\r\n            create()\r\n            store() (solo dump dei dati)\r\n            Milestone 3\r\n            Completare le operazioni CRUD.\r\n            \r\n            Milestone 4\r\n            Sempre lavorando sulla repo di ieri, potete aggiungere le validazioni in modo da rendere pi\u00f9 stabile il vostro gestionale di fumetti.\r\n            \r\n            Validare gli input ricevuti in fase di creazione e modifica, rispondendo con errori chiari e in italiano.\r\n            Bonus:\r\n            Procedere con il salvataggio dei dati sul db\r\n            Aggiungere validazioni e messaggi di errore e alla cancellazione messaggio di conferma all'utente\r\n            utilizzare le Request personalizzate per validare i dati\r\n            aggiungere conferma alla cancellazione degli elementi\r\n            aggiungere un filtro a vostra scelta per i dati dei comics",
            created_at: "2024-01-12T14:46:48.000000Z",
            updated_at: "2024-01-17T14:28:33.000000Z",
            type: {
                id: 2,
                name: "Back-end",
                slug: "back-end",
                created_at: "2024-01-16T11:16:50.000000Z",
                updated_at: "2024-01-16T11:16:50.000000Z"
            },
            technologies: [
                {
                    id: 3,
                    name: "Bootstrap",
                    slug: "bootstrap",
                    created_at: "2024-01-17T09:10:52.000000Z",
                    updated_at: "2024-01-17T09:10:52.000000Z",
                    pivot: {
                        project: 1,
                        technology: 3,
                        created_at: null,
                        updated_at: null
                    }
                },
                {
                    id: 4,
                    name: "SASS",
                    slug: "sass",
                    created_at: "2024-01-17T09:10:52.000000Z",
                    updated_at: "2024-01-17T09:10:52.000000Z",
                    pivot: {
                        project: 1,
                        technology: 4,
                        created_at: null,
                        updated_at: null
                    }
                },
                {
                    id: 7,
                    name: "PHP8",
                    slug: "php8",
                    created_at: "2024-01-17T09:10:52.000000Z",
                    updated_at: "2024-01-17T09:10:52.000000Z",
                    pivot: {
                        project: 1,
                        technology: 7,
                        created_at: null,
                        updated_at: null
                    }
                },
                {
                    id: 9,
                    name: "Laravel",
                    slug: "laravel",
                    created_at: "2024-01-17T09:10:52.000000Z",
                    updated_at: "2024-01-17T09:10:52.000000Z",
                    pivot: {
                        project: 1,
                        technology: 9,
                        created_at: null,
                        updated_at: null
                    }
                }
            ]
        },
        {
            id: 2,
            title: "vite-boolfix",
            user_id: 1,
            type_id: 1,
            image: "images\/Lhk5XBj6JpbJy6uQldJFVGEqOwpTOzf5goMMtcp1.png",
            slug: "vite-boolfix",
            body: "In questo esercizio iniziamo a replicare la logica che sta dietro a tantissimi siti che permettono la visione di film e telefilm.\r\n            Per fare questo, come fanno siti molto più rinomati, utilizzeremo un API che ci permette di avere un insieme di risultati congrui alla nostra ricerca.\r\n            Milestone 0:\r\nProgettare la struttura del global state sulla linea degli esercizi svolti nei giorni precedenti.\r\n\r\nMilestone 1:\r\nCreare un layout base con una searchbar (una input e un button) in cui possiamo scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il  bottone, cercare sull\u2019API tutti i film che contengono ci\u00f2 che ha scritto l\u2019utente.\r\nVogliamo dopo la risposta dell\u2019API visualizzare a schermo i seguenti valori per ogni film trovato: \r\nTitolo\r\nTitolo Originale\r\nLingua\r\nVoto\r\n\r\nMilestone 2:\r\nTrasformiamo la stringa statica della lingua in una vera e propria bandiera della nazione corrispondente, gestendo il caso in cui non abbiamo la bandiera della nazione ritornata dall\u2019API (le flag non ci sono in FontAwesome).\r\n\r\nAllarghiamo poi la ricerca anche alle serie tv. Con la stessa azione di ricerca dovremo prendere sia i film che corrispondono alla query, sia le serie tv, stando attenti ad avere alla fine dei valori simili (le serie e i film hanno campi nel JSON di risposta diversi, simili ma non sempre identici)\r\nQui un esempio di chiamata per le serie tv:\r\nhttps:\/\/api.themoviedb.org\/3\/search\/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=scrubs\r\n\r\n\r\nMilestone 3:\r\nIn questa milestone come prima cosa aggiungiamo la copertina del film o della serie al nostro elenco. Ci viene passata dall\u2019API solo la parte finale dell\u2019URL, questo perch\u00e9 poi potremo generare da quella porzione di URL tante dimensioni diverse. Dovremo prendere quindi l\u2019URL base delle immagini di TMDB: https:\/\/image.tmdb.org\/t\/p\/ per poi aggiungere la dimensione che vogliamo generare (troviamo tutte le dimensioni possibili a questo link: https:\/\/www.themoviedb.org\/talk\/53c11d4ec3a3684cf4006400) per poi aggiungere la parte finale dell\u2019URL passata dall\u2019API.\r\nEsempio di URL:\r\nhttps:\/\/image.tmdb.org\/t\/p\/w342\/wwemzKWzjKYJFfCeiB57q3r4Bcm.png\r\n\r\nTrasformiamo poi il voto da 1 a 10 decimale in un numero intero da 1 a 5, cos\u00ec da permetterci di stampare a schermo un numero di stelle piene che vanno da 1 a 5, lasciando le restanti vuote (troviamo le icone in FontAwesome).\r\nArrotondiamo sempre per eccesso all\u2019unit\u00e0 successiva, non gestiamo icone mezze piene (o mezze vuote :P)\r\n\r\nMilestone 4:\r\nTrasformiamo quello che abbiamo fatto fino ad ora in una vera e propria webapp, creando un layout completo simil-Netflix:\r\nUn header che contiene logo e search bar\r\nDopo aver ricercato qualcosa nella searchbar, i risultati appaiono sotto forma di \u201ccard\u201d in cui lo sfondo \u00e8 rappresentato dall\u2019immagine di copertina (consiglio la poster_path con w342)\r\nAndando con il mouse sopra una card (on hover), appaiono le informazioni aggiuntive gi\u00e0 prese nei punti precedenti pi\u00f9 la overview.\r\n\r\nConsigli:\r\nAndate in fila, seguendo le milestone, non pensate all\u2019interfaccia grafica fino al punto 4\r\nNon pensate all\u2019interfaccia grafica fino al punto 4 (si, l\u2019ho scritto due volte), tutto pu\u00f2 essere risolto con una <ul> non stilizzata\r\nRicordatevi quanto imparato finora con le diverse esercitazioni:\r\nAffrontate sempre prima il caso base minimo, senza complicazioni (ad es. \u201cSe il titolo originale \u00e8 uguale al titolo, magari dovrei nasconderlo\u201d, \u201cSe faccio una ricerca che non ha nessun risultato dovrei scrivere qualcosa\u201d sono domande da NON FARSI fino a quando non si \u00e8 fatto completamente un caso base)\r\nSe ti viene volta di copiare\/incollare codice, NON FARLO, fai una funzione! Quei pochi minuti risparmiati renderanno il tuo codice meno leggibile ed ogni volta che dovrai intervenire su quella parte perderai molto pi\u00f9 tempo\r\nPrima di andare avanti, assicurati di aver risolto quella parte nel miglior modo possibile (codice non ripetuto, minimo codice possibile, funzioni chiare e riutilizzabili). Risparmierai tantissimo tempo risolvendo gli esercizi successivi\r\nMeglio risolvere una milestone in meno, ma con codice scritto bene.\r\n\r\nSE HAI FINITO LE MILESTONE PRECEDENTI E VUOI ANDARE OLTRE, PUOI FARE LE MILESTONE SUCCESSIVE, MA SONO FACOLTATIVE:\r\n\r\nMilestone 5 (Opzionale):\r\nPartendo da un film o da una serie, richiedere all'API quali sono gli attori che fanno parte del cast aggiungendo alla nostra scheda Film \/ Serie SOLO i primi 5 restituiti dall\u2019API con Nome e Cognome, e i generi associati al film con questo schema: \u201cGenere 1, Genere 2, \u2026\u201d.\r\n\r\nMilestone 6 (Opzionale):\r\nCreare una lista di generi richiedendo quelli disponibili all'API e creare dei filtri con i generi tv e movie per mostrare\/nascondere le schede ottenute con la ricerca.",
            created_at: "2024-01-12T14:46:48.000000Z",
            updated_at: "2024-01-16T15:58:47.000000Z",
            type: {
                id: 1,
                name: "Front-end",
                slug: "front-end",
                created_at: "2024-01-16T11:16:50.000000Z",
                updated_at: "2024-01-16T11:16:50.000000Z"
            },
            technologies: [
                {
                    id: 3,
                    name: "Bootstrap",
                    slug: "bootstrap",
                    created_at: "2024-01-17T09:10:52.000000Z",
                    updated_at: "2024-01-17T09:10:52.000000Z",
                    pivot: {
                        project: 2,
                        technology: 3,
                        created_at: null,
                        updated_at: null
                    }
                },
                {
                    id: 4,
                    name: "SASS",
                    slug: "sass",
                    created_at: "2024-01-17T09:10:52.000000Z",
                    updated_at: "2024-01-17T09:10:52.000000Z",
                    pivot: {
                        project: 2,
                        technology: 4,
                        created_at: null,
                        updated_at: null
                    }
                },
                {
                    id: 6,
                    name: "Vue.js",
                    slug: "vuejs",
                    created_at: "2024-01-17T09:10:52.000000Z",
                    updated_at: "2024-01-17T09:10:52.000000Z",
                    pivot: {
                        project: 2,
                        technology: 6,
                        created_at: null,
                        updated_at: null
                    }
                }
            ]
        },
        {
            id: 3,
            title: "proj-html-vuejs",
            user_id: 1,
            type_id: 1,
            image: "images\/D8ArRHvLIfDtmqlz5POBWaJ6gZTpNWTRuPqJdTJh.jpg",
            slug: "proj-html-vuejs",
            body: "Milestone 0\r\n            Progettazione con Figma (preparazione delle variabili, schema del layout con la suddivisione delle varie sezioni);\r\n            creazione della repo : proj-html-vuejs\r\n            Scaffolding con vite;\r\n            impostazione del font (Chakra Petch); -caricamento di Bootstrap e fontawesome;\r\n            Milestone 1\r\n            Creazione delle macroaree (header, main, footer);\r\n            impostazione della struttura base di ogni macroarea e successivamente suddividere in componenti;\r\n            cercare la posizione approsimativa dei vari oggetti che compongono l\u2019hero(senza pensare alle animazioni);\r\n            impostare i caroselli;\r\n            Fine Primo giorno;\r\n            \r\n            Milestone 2\r\n            impostare dei dati (array di oggetti ) per poter creare dinamicamente l\u2019header ed il footer\r\n            stessa cosa per i caroselli creati come componenti a parte;\r\n            Milestone 3\r\n            riprodurre animating counter (https:\/\/css-tricks.com\/animating-number-counters\/);\r\n            l\u2019header appare da 50vh in gi\u00f9 con classe bg diversa;\r\n            Fine secondo giorno;\r\n            \r\n            Milestone 4\r\n            migliorare la grafica;\r\n            aggiunta degli effetti di comparsa quando la sezione \u00e8 in primo piano;\r\n            Milestone 5\r\n            la freccetta che comparir\u00e0 in basso a destra riporter\u00e0 il primo piano sulla prima pagina;\r\n            riprodurre i vari effetti hover sulle immagini, e sui pulsanti;\r\n            riprodurre animazioni dei pianeti rotanti e omini che fluttuano\r\n            animazione dei bottoni play che pulsano;",
            created_at: "2024-01-12T14:46:48.000000Z",
            updated_at: "2024-01-16T16:11:41.000000Z",
            type: {
                id: 1,
                name: "Front-end",
                slug: "front-end",
                created_at: "2024-01-16T11:16:50.000000Z",
                updated_at: "2024-01-16T11:16:50.000000Z"
            },
            technologies: [
                {
                    id: 3,
                    name: "Bootstrap",
                    slug: "bootstrap",
                    created_at: "2024-01-17T09:10:52.000000Z",
                    updated_at: "2024-01-17T09:10:52.000000Z",
                    pivot: {
                        project: 3,
                        technology: 3,
                        created_at: null,
                        updated_at: null
                    }
                },
                {
                    id: 4,
                    name: "SASS",
                    slug: "sass",
                    created_at: "2024-01-17T09:10:52.000000Z",
                    updated_at: "2024-01-17T09:10:52.000000Z",
                    pivot: {
                        project: 3,
                        technology: 4,
                        created_at: null,
                        updated_at: null
                    }
                },
                {
                    id: 6,
                    name: "Vue.js",
                    slug: "vuejs",
                    created_at: "2024-01-17T09:10:52.000000Z",
                    updated_at: "2024-01-17T09:10:52.000000Z",
                    pivot: {
                        project: 3,
                        technology: 6,
                        created_at: null,
                        updated_at: null
                    }
                }
            ]
        },
        {
            id: 4,
            title: "vue-boolzapp",
            user_id: 1,
            type_id: 1,
            image: "images\/8YWdCpUnZi4viusBWVJet2sJVjr1za6MEhZpDsvV.png",
            slug: "vue-boolzapp",
            body: "Milestone 1\r\n            Replica della grafica con la possibilit\u00e0 di avere messaggi scritti dall\u2019utente (verdi) e dall\u2019interlocutore (bianco) assegnando due classi CSS diverse\r\n            Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto\r\n            Milestone 2\r\n            Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all\u2019interno del pannello della conversazione\r\n            Click sul contatto mostra la conversazione del contatto cliccato\r\n            \r\n            \r\n            Milestone 3\r\n            Aggiunta di un messaggio: l\u2019utente scrive un testo nella parte bassa e digitando \u201center\u201d il testo viene aggiunto al thread sopra, come messaggio verde\r\n            Risposta dall\u2019interlocutore: ad ogni inserimento di un messaggio, l\u2019utente ricever\u00e0 un \u201cok\u201d come risposta, che apparir\u00e0 dopo 1 secondo.\r\n            Milestone 4\r\n            Ricerca utenti: scrivendo qualcosa nell\u2019input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo \u201cmar\u201d rimangono solo Marco e Martina)\r\n            Milestone 5 - opzionale\r\n            Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato.\r\n            Visualizzazione ora e ultimo messaggio inviato\/ricevuto nella lista dei contatti \r\n\r\nConsigli utili:\r\nSi possono trascurare le scrollbar verticali, sia nel pannello dei messaggi, che nella lista dei contatti\r\nI pulsanti e le icone possono non funzionare (a parte l\u2019invio del messaggio)\r\nPer gestire le date, pu\u00f2 essere utile la libreria Luxon\r\nLa struttura dell\u2019array dei contatti potrebbe avere questa forma:",
            created_at: "2024-01-12T14:46:48.000000Z",
            updated_at: "2024-01-17T13:51:33.000000Z",
            type: {
                id: 1,
                name: "Front-end",
                slug: "front-end",
                created_at: "2024-01-16T11:16:50.000000Z",
                updated_at: "2024-01-16T11:16:50.000000Z"
            },
            technologies: [
                {
                    id: 1,
                    name: "HTML",
                    slug: "html",
                    created_at: "2024-01-17T09:10:52.000000Z",
                    updated_at: "2024-01-17T09:10:52.000000Z",
                    pivot: {
                        project: 4,
                        technology: 1,
                        created_at: null,
                        updated_at: null
                    }
                },
                {
                    id: 3,
                    name: "Bootstrap",
                    slug: "bootstrap",
                    created_at: "2024-01-17T09:10:52.000000Z",
                    updated_at: "2024-01-17T09:10:52.000000Z",
                    pivot: {
                        project: 4,
                        technology: 3,
                        created_at: null,
                        updated_at: null
                    }
                },
                {
                    id: 4,
                    name: "SASS",
                    slug: "sass",
                    created_at: "2024-01-17T09:10:52.000000Z",
                    updated_at: "2024-01-17T09:10:52.000000Z",
                    pivot: {
                        project: 4,
                        technology: 4,
                        created_at: null,
                        updated_at: null
                    }
                },
                {
                    id: 6,
                    name: "Vue.js",
                    slug: "vuejs",
                    created_at: "2024-01-17T09:10:52.000000Z",
                    updated_at: "2024-01-17T09:10:52.000000Z",
                    pivot: {
                        project: 4,
                        technology: 6,
                        created_at: null,
                        updated_at: null
                    }
                }
            ]
        },
        {
            id: 5,
            title: "html-css-bootstrap-dashboard",
            user_id: 1,
            type_id: 1,
            image: "images\/jDhWT3A2Rwra3owaFdWjl10YNVLIlRO2oeSxVFfY.png",
            slug: "html-css-bootstrap-dashboard",
            body: "Descrizione\r\n    Ricreiamo il layout responsive di una dashboard, ovvero il pannello di controllo di una ipotetica applicazione web, seguendo gli screenshot allegati. La richiesta \u00e8 realizzarlo utilizzando Bootstrap 5. Teniamo sempre sotto mano la documentazione della libreria per usare le caratteristiche principali nel modo corretto. Potrebbero tornarci utili anche classi helper, utilities etc. Avrete due giorni per completare il layout, come sempre partite dall\u2019analisi delle macroaree. Di questo cercate anche di capire cosa \u00e8 uguale o molto simile e quindi realizzabile una volta per poi essere riciclato, ottimizzando tempo e codice.\r\n    \r\n    Consigli:\r\n    Ricordiamo che lavorando in responsive ogni blocco e sezione va pensato in quell\u2019ottica da subito.\r\n    \r\n    Tenete un approccio ordinato ma non strafate anche con l\u2019ottimizzazione durante il primo sviluppo di ogni blocco. Prima di passare al prossimo potete sempre tornarci e ripulire\/ottimizzare\/aggiustare. Soprattutto in ottica di riciclo, questo approccio, sul lungo termine vi far\u00e0 risparmiare tempo.\r\n    \r\n    Questa volta essendo un layout composto da vari componenti, concentriamoci a portare a termine sezione per sezione anche in formato responsive, quando una macroarea funziona allora passiamo alla successiva. L\u2019ordine di sviluppo dei blocchi lo possiamo decidere anche in ottica di ottimizzazione. Partite comunque sempre semplici e fate un passo alla volta.\r\n    \r\n    Come sempre cercate di capire quello che state facendo, cercate di finirlo ma non puntate a finirlo a tutti i costi, se ci\u00f2 vuol dire non capirci pi\u00f9 nulla.\r\n    \r\n    Ricordiamo anche che Bootstrap ha gi\u00e0 molti componenti pronti all\u2019uso che potete utilizzare direttamente come sono (as-is) o con qualche personalizzazione (customized). Molti li avete gi\u00e0 usati, altri li trovate come sempre nella documentazione ufficiale del framework. Ogni volta che volete usare un componente di Bootstrap fate sempre una prova su un altro file, copiate il codice di esempio dalla documentazione, osservate il comportamento, e solo quando siete sicuri che tutto funzioni come volete, integratelo nel vostro layout. Cos\u00ec facendo il codice CSS custom che scriverete risulter\u00e0 abbastanza ridotto.",
            created_at: "2024-01-12T14:46:48.000000Z",
            updated_at: "2024-01-17T14:03:28.000000Z",
            type: {
                id: 1,
                name: "Front-end",
                slug: "front-end",
                created_at: "2024-01-16T11:16:50.000000Z",
                updated_at: "2024-01-16T11:16:50.000000Z"
            },
            technologies: [
                {
                    id: 1,
                    name: "HTML",
                    slug: "html",
                    created_at: "2024-01-17T09:10:52.000000Z",
                    updated_at: "2024-01-17T09:10:52.000000Z",
                    pivot: {
                        project: 5,
                        technology: 1,
                        created_at: null,
                        updated_at: null
                    }
                },
                {
                    id: 2,
                    name: "CSS",
                    slug: "css",
                    created_at: "2024-01-17T09:10:52.000000Z",
                    updated_at: "2024-01-17T09:10:52.000000Z",
                    pivot: {
                        project: 5,
                        technology: 2,
                        created_at: null,
                        updated_at: null
                    }
                },
                {
                    id: 3,
                    name: "Bootstrap",
                    slug: "bootstrap",
                    created_at: "2024-01-17T09:10:52.000000Z",
                    updated_at: "2024-01-17T09:10:52.000000Z",
                    pivot: {
                        project: 5,
                        technology: 3,
                        created_at: null,
                        updated_at: null
                    }
                }
            ]
        },
        {
            id: 12,
            title: "tua sorella laravel",
            user_id: 1,
            type_id: 1,
            image: "images\/la1lcBoTe9K3JRQ3hljVJXvj8Y3kYPKPECQpd1vO.png",
            slug: "tua-sorella-laravel",
            body: "Milestone 1\r\ntua sorella\r\nMilestone 2\r\nLaravel",
            created_at: "2024-01-16T16:56:53.000000Z",
            updated_at: "2024-01-16T16:56:53.000000Z",
            type: {
                id: 1,
                name: "Front-end",
                slug: "front-end",
                created_at: "2024-01-16T11:16:50.000000Z",
                updated_at: "2024-01-16T11:16:50.000000Z"
            },
            technologies: [
                {
                    id: 3,
                    name: "Bootstrap",
                    slug: "bootstrap",
                    created_at: "2024-01-17T09:10:52.000000Z",
                    updated_at: "2024-01-17T09:10:52.000000Z",
                    pivot: {
                        project: 12,
                        technology: 3,
                        created_at: null,
                        updated_at: null
                    }
                },
                {
                    id: 5,
                    name: "JavaScript",
                    slug: "javascript",
                    created_at: "2024-01-17T09:10:52.000000Z",
                    updated_at: "2024-01-17T09:10:52.000000Z",
                    pivot: {
                        project: 12,
                        technology: 5,
                        created_at: null,
                        updated_at: null
                    }
                },
                {
                    id: 6,
                    name: "Vue.js",
                    slug: "vuejs",
                    created_at: "2024-01-17T09:10:52.000000Z",
                    updated_at: "2024-01-17T09:10:52.000000Z",
                    pivot: {
                        project: 12,
                        technology: 6,
                        created_at: null,
                        updated_at: null
                    }
                },
                {
                    id: 8,
                    name: "SQL",
                    slug: "sql",
                    created_at: "2024-01-17T09:10:52.000000Z",
                    updated_at: "2024-01-17T09:10:52.000000Z",
                    pivot: {
                        project: 12,
                        technology: 8,
                        created_at: null,
                        updated_at: null
                    }
                },
                {
                    id: 9,
                    name: "Laravel",
                    slug: "laravel",
                    created_at: "2024-01-17T09:10:52.000000Z",
                    updated_at: "2024-01-17T09:10:52.000000Z",
                    pivot: {
                        project: 12,
                        technology: 9,
                        created_at: null,
                        updated_at: null
                    }
                }
            ]
        },
        {
            id: 13,
            title: "tua cugina javascript",
            user_id: 1,
            type_id: 1,
            image: "images\/O4zd8wi2s6EgCoa2Ycg3Cbz3qfdF5DWaMbBUUhBM.png",
            slug: "tua-cugina-javascript",
            body: "Milestone1\r\ntua cugina\r\nMilestone 2\r\njavascript",
            created_at: "2024-01-16T16:57:48.000000Z",
            updated_at: "2024-01-16T16:57:48.000000Z",
            type: {
                id: 1,
                name: "Front-end",
                slug: "front-end",
                created_at: "2024-01-16T11:16:50.000000Z",
                updated_at: "2024-01-16T11:16:50.000000Z"
            },
            technologies: [
                {
                    id: 1,
                    name: "HTML",
                    slug: "html",
                    created_at: "2024-01-17T09:10:52.000000Z",
                    updated_at: "2024-01-17T09:10:52.000000Z",
                    pivot: {
                        project: 13,
                        technology: 1,
                        created_at: null,
                        updated_at: null
                    }
                },
                {
                    id: 2,
                    name: "CSS",
                    slug: "css",
                    created_at: "2024-01-17T09:10:52.000000Z",
                    updated_at: "2024-01-17T09:10:52.000000Z",
                    pivot: {
                        project: 13,
                        technology: 2,
                        created_at: null,
                        updated_at: null
                    }
                },
                {
                    id: 5,
                    name: "JavaScript",
                    slug: "javascript",
                    created_at: "2024-01-17T09:10:52.000000Z",
                    updated_at: "2024-01-17T09:10:52.000000Z",
                    pivot: {
                        project: 13,
                        technology: 5,
                        created_at: null,
                        updated_at: null
                    }
                }
            ]
        },
        {
            id: 14,
            title: "laravel-many-to-many",
            user_id: 1,
            type_id: 2,
            image: "images\/jPFti4EpSY4sRZ4DsiwZ167qgQbBIcZR8uJCwfck.png",
            slug: "laravel-many-to-many",
            body: "giogiogiogigoidfkdsdofkapmVasdfasds",
            created_at: "2024-01-17T13:45:19.000000Z",
            updated_at: "2024-01-17T13:45:19.000000Z",
            type: {
                id: 2,
                name: "Back-end",
                slug: "back-end",
                created_at: "2024-01-16T11:16:50.000000Z",
                updated_at: "2024-01-16T11:16:50.000000Z"
            },
            technologies: [
                {
                    id: 1,
                    name: "HTML",
                    slug: "html",
                    created_at: "2024-01-17T09:10:52.000000Z",
                    updated_at: "2024-01-17T09:10:52.000000Z",
                    pivot: {
                        project: 14,
                        technology: 1,
                        created_at: null,
                        updated_at: null
                    }
                },
                {
                    id: 3,
                    name: "Bootstrap",
                    slug: "bootstrap",
                    created_at: "2024-01-17T09:10:52.000000Z",
                    updated_at: "2024-01-17T09:10:52.000000Z",
                    pivot: {
                        project: 14,
                        technology: 3,
                        created_at: null,
                        updated_at: null
                    }
                },
                {
                    id: 4,
                    name: "SASS",
                    slug: "sass",
                    created_at: "2024-01-17T09:10:52.000000Z",
                    updated_at: "2024-01-17T09:10:52.000000Z",
                    pivot: {
                        project: 14,
                        technology: 4,
                        created_at: null,
                        updated_at: null
                    }
                },
                {
                    id: 5,
                    name: "JavaScript",
                    slug: "javascript",
                    created_at: "2024-01-17T09:10:52.000000Z",
                    updated_at: "2024-01-17T09:10:52.000000Z",
                    pivot: {
                        project: 14,
                        technology: 5,
                        created_at: null,
                        updated_at: null
                    }
                },
                {
                    id: 7,
                    name: "PHP8",
                    slug: "php8",
                    created_at: "2024-01-17T09:10:52.000000Z",
                    updated_at: "2024-01-17T09:10:52.000000Z",
                    pivot: {
                        project: 14,
                        technology: 7,
                        created_at: null,
                        updated_at: null
                    }
                },
                {
                    id: 9,
                    name: "Laravel",
                    slug: "laravel",
                    created_at: "2024-01-17T09:10:52.000000Z",
                    updated_at: "2024-01-17T09:10:52.000000Z",
                    pivot: {
                        project: 14,
                        technology: 9,
                        created_at: null,
                        updated_at: null
                    }
                }
            ]
        },
        {
            id: 15,
            title: "laravel-one-to-many",
            user_id: 1,
            type_id: 2,
            image: "images\/NNwuywr8QPXbf91TGSSUvO1IkiU24zCHEmmYwVsM.png",
            slug: "laravel-one-to-many",
            body: "rere rereradadf\u0107 Nik\u0161i\u0107",
            created_at: "2024-01-17T13:58:10.000000Z",
            updated_at: "2024-01-17T13:58:10.000000Z",
            type: {
                id: 2,
                name: "Back-end",
                slug: "back-end",
                created_at: "2024-01-16T11:16:50.000000Z",
                updated_at: "2024-01-16T11:16:50.000000Z"
            },
            technologies: [
                {
                    id: 3,
                    name: "Bootstrap",
                    slug: "bootstrap",
                    created_at: "2024-01-17T09:10:52.000000Z",
                    updated_at: "2024-01-17T09:10:52.000000Z",
                    pivot: {
                        project: 15,
                        technology: 3,
                        created_at: null,
                        updated_at: null
                    }
                },
                {
                    id: 4,
                    name: "SASS",
                    slug: "sass",
                    created_at: "2024-01-17T09:10:52.000000Z",
                    updated_at: "2024-01-17T09:10:52.000000Z",
                    pivot: {
                        project: 15,
                        technology: 4,
                        created_at: null,
                        updated_at: null
                    }
                },
                {
                    id: 5,
                    name: "JavaScript",
                    slug: "javascript",
                    created_at: "2024-01-17T09:10:52.000000Z",
                    updated_at: "2024-01-17T09:10:52.000000Z",
                    pivot: {
                        project: 15,
                        technology: 5,
                        created_at: null,
                        updated_at: null
                    }
                },
                {
                    id: 9,
                    name: "Laravel",
                    slug: "laravel",
                    created_at: "2024-01-17T09:10:52.000000Z",
                    updated_at: "2024-01-17T09:10:52.000000Z",
                    pivot: {
                        project: 15,
                        technology: 9,
                        created_at: null,
                        updated_at: null
                    }
                }
            ]
        }
    ],
    navBarHeader: {
        classText: 'my-text-secondary',
        srcLogo: 'https://png.pngtree.com/png-clipart/20200709/original/pngtree-initial-letter-me-logo-template-png-image_3580872.jpg',
        tabs: [
            {
                title: 'Home',
                href: 'home',
            },
            {
                title: 'Projects',
                href: 'projects',
            },
            {
                title: 'Contacts',
                href: 'contacts',
            },
            // {
            //     title: 'Our Process',
            //     href: 'home',
            // },
            // {
            //     title: 'Pricing',
            //     href: 'home',
            // },
            // {
            //     title: 'Blog',
            //     href: 'home',
            // },
            // {
            //     title: 'Contact',
            //     href: 'home',
            // },

        ],
        // btn: {
        //     title: 'Get a Quote',
        //     classBg: 'my-btn-light'
        // }
    },
    navBarFooter: {
        classText: 'my-text-primary',
        srcLogo: 'https://png.pngtree.com/png-clipart/20200709/original/pngtree-initial-letter-me-logo-template-png-image_3580872.jpg',
        tabs: [

            {
                title: 'Home',
                href: 'home',
            },
            {
                title: 'Projects',
                href: 'projects',
            },

            {
                title: 'Contacts',
                href: 'contacts',
            },
            // {
            //     title: 'Career',
            //     href: 'home',
            // },
            // {
            //     title: 'Contact',
            //     href: 'home',
            // },

        ],

    },
})