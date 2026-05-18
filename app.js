const images = {
  ai: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=80",
  team: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80",
  code: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=80",
  data: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
  laptop: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
  docs: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80",
  security: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=80",
  office: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80",
  workshop: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80",
  dashboard: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80"
};

const palettes = [
  "#e7ff52", "#7dffcb", "#82d5ff", "#ff99df", "#ffb15e", "#c9a7ff",
  "#ffe45e", "#38d8ff", "#35f28f", "#ff6b6b", "#b6ff3d", "#8fd3ff"
];

const families = [
  {
    title: "1. Comprendre",
    text: "On pose le projet, le périmètre et la logique RAG sans jargon. Les apprenants doivent comprendre ce qu'ils construisent avant de toucher aux outils.",
    blocks: ["01", "02", "03", "04"]
  },
  {
    title: "2. Préparer",
    text: "On installe le cadre : comptes, rôles, abonnement, clés, documents de départ et consignes à donner à Codex Desktop.",
    blocks: ["05", "06", "07", "08"]
  },
  {
    title: "3. Construire",
    text: "On demande à Codex de créer l'application : interface du chatbot, pages, composants, ingestion de documents, logs et design propre.",
    blocks: ["09", "10", "11", "12", "13"]
  },
  {
    title: "4. Connecter",
    text: "On branche Supabase et OpenAI API proprement : tables, chunks, embeddings, récupération des bons contenus, sécurité des clés.",
    blocks: ["14", "15", "16", "17", "18"]
  },
  {
    title: "5. Défendre",
    text: "On transforme le prototype en argument commercial : tests, dashboard, valeur, négociation, soutenance et livrables finaux.",
    blocks: ["19", "20", "21", "22", "23"]
  }
];

const blocks = [
  {
    id: "01",
    tag: "Projet",
    title: "Présentation du projet",
    card: "Un chatbot IA texte qui répond à partir des documents d'entreprise.",
    family: "Comprendre",
    image: images.ai,
    accent: palettes[0],
    layout: "poster",
    visual: "flow",
    visualTitle: "Le chemin simple",
    steps: ["Une question utilisateur", "Des documents utiles", "Des chunks retrouvés", "Une réponse claire"],
    sections: [
      {
        title: "La phrase à dire dès le début",
        text: "On construit un chatbot IA texte. Il ne parle pas en vocal. Il répond aux questions des utilisateurs à partir de documents que l'entreprise a fournis."
      },
      {
        title: "Ce que le chatbot doit savoir faire",
        bullets: [
          "Afficher une interface simple avec une zone de discussion.",
          "Recevoir une question en langage naturel.",
          "Chercher les morceaux de documents les plus utiles dans Supabase.",
          "Envoyer la question et les morceaux récupérés à l'API OpenAI.",
          "Répondre simplement, avec une limite claire quand l'information manque."
        ]
      },
      {
        title: "Ce que les apprenants doivent retenir",
        text: "Le prototype n'est pas là pour impressionner avec de la technique. Il sert à montrer une méthode : cadrer les données, construire proprement, tester, puis vendre la valeur."
      }
    ],
    deliverable: "Une slide très claire : problème, solution, utilisateurs, documents utilisés, valeur attendue."
  },
  {
    id: "02",
    tag: "Mission",
    title: "Ce qu'il faut construire",
    card: "Une mini-application, un vrai parcours utilisateur et une démonstration crédible.",
    family: "Comprendre",
    image: images.team,
    accent: palettes[1],
    layout: "lab",
    visual: "chat",
    visualTitle: "Démo attendue",
    sections: [
      {
        title: "Le périmètre volontairement simple",
        bullets: [
          "Une page d'accueil très courte.",
          "Un chatbot texte avec historique des messages.",
          "Une base Supabase avec documents, chunks et logs.",
          "Une réponse IA qui cite les contenus utilisés ou indique que la base ne suffit pas.",
          "Un petit dashboard pour suivre les questions, erreurs et sujets fréquents."
        ]
      },
      {
        title: "Ce qui n'est pas demandé",
        bullets: [
          "Pas de vocal.",
          "Pas de centre d'appel.",
          "Pas d'application parfaite en production.",
          "Pas de terminal à manipuler par les apprenants.",
          "Pas de promesse juridique ou technique impossible."
        ]
      }
    ],
    warning: "Il faut éviter le piège classique : partir trop large. Un bon POC répond très bien à 10 questions importantes plutôt que mal à 200 questions."
  },
  {
    id: "03",
    tag: "Architecture",
    title: "Comment ça marche",
    card: "Une architecture simple : interface, backend, Supabase, OpenAI.",
    family: "Comprendre",
    image: images.data,
    accent: palettes[2],
    layout: "checker",
    visual: "flow",
    visualTitle: "Architecture",
    steps: ["Utilisateur", "App chatbot", "Supabase", "OpenAI API"],
    sections: [
      {
        title: "La version simple à expliquer",
        text: "Le navigateur affiche le chatbot. L'application reçoit la question. Elle cherche dans Supabase les morceaux de documents utiles. Ensuite elle demande à OpenAI de répondre uniquement avec ce contexte."
      },
      {
        title: "La séparation importante",
        bullets: [
          "Supabase garde les données.",
          "OpenAI génère la réponse.",
          "Codex aide à construire l'application.",
          "Le Business Developer explique pourquoi cette organisation rassure le client."
        ]
      }
    ],
    prompt: "Explique-moi cette architecture comme si je devais la présenter à un client non technique. Fais simple : navigateur, application, Supabase, OpenAI, sécurité."
  },
  {
    id: "04",
    tag: "Planning",
    title: "Le plan des 3 jours",
    card: "Un rythme clair pour avancer sans se perdre.",
    family: "Comprendre",
    image: images.workshop,
    accent: palettes[3],
    layout: "timeline",
    visual: "dashboard",
    visualTitle: "Timing",
    steps: ["Jour 1 : brief et cadrage", "Jour 2 : construction et tests", "Jour 3 : démo et négociation", "Jury : role play final"],
    sections: [
      {
        title: "Jour 1",
        bullets: [
          "Comprendre le besoin client.",
          "Lister les documents à intégrer.",
          "Créer le prompt de départ pour Codex.",
          "Dessiner le parcours du chatbot."
        ]
      },
      {
        title: "Jour 2",
        bullets: [
          "Construire l'interface avec Codex Desktop.",
          "Créer la base Supabase.",
          "Brancher OpenAI API.",
          "Tester les premières questions."
        ]
      },
      {
        title: "Jour 3",
        bullets: [
          "Améliorer le design et la qualité des réponses.",
          "Préparer le dashboard et les KPI.",
          "Travailler la négociation : prix, objections, sécurité, ROI.",
          "Présenter une démo courte et défendable."
        ]
      }
    ]
  },
  {
    id: "05",
    tag: "Accès",
    title: "Les comptes nécessaires",
    card: "ChatGPT Plus, Codex Desktop, Supabase et OpenAI API.",
    family: "Préparer",
    image: images.laptop,
    accent: palettes[4],
    layout: "playbook",
    visual: "screen",
    visualTitle: "Compte de travail",
    sections: [
      {
        title: "Ce qu'il faut prévoir",
        bullets: [
          "Un compte ChatGPT avec accès à Codex. Le plan Plus est annoncé officiellement à 20 dollars par mois.",
          "L'application Codex Desktop installée et connectée au compte ChatGPT.",
          "Un compte Supabase pour créer la base.",
          "Un compte plateforme OpenAI pour créer une clé API.",
          "Un dossier projet local ouvert dans Codex Desktop."
        ]
      },
      {
        title: "Le point très important",
        text: "L'abonnement ChatGPT sert à utiliser Codex. L'API OpenAI est facturée séparément quand l'application appelle un modèle. Il faut le dire clairement aux apprenants."
      }
    ],
    warning: "Ne jamais présenter le Plus comme un forfait API illimité. Plus aide à construire avec Codex. La consommation API du chatbot est un autre sujet."
  },
  {
    id: "06",
    tag: "Codex",
    title: "Utiliser Codex Desktop",
    card: "On parle à Codex comme à un développeur, sans demander aux apprenants d'ouvrir le terminal.",
    family: "Préparer",
    image: images.code,
    accent: palettes[5],
    layout: "poster",
    visual: "screen",
    visualTitle: "Méthode Codex",
    sections: [
      {
        title: "Le geste de base",
        bullets: [
          "Ouvrir Codex Desktop.",
          "Choisir ou créer un dossier projet.",
          "Écrire une demande très précise.",
          "Laisser Codex créer ou modifier les fichiers.",
          "Lire les changements proposés.",
          "Demander une correction si quelque chose n'est pas clair."
        ]
      },
      {
        title: "Comment parler à Codex",
        text: "Il faut donner le contexte, l'objectif, les contraintes, le style attendu et le niveau de détail. Plus la demande est propre, plus Codex construit quelque chose d'exploitable."
      }
    ],
    prompt: "Tu es mon développeur. Crée une application web simple de chatbot IA texte pour un challenge pédagogique. Je veux une interface claire, un espace chat, une connexion Supabase préparée, une route serveur pour OpenAI, et des explications dans le code. Les apprenants ne doivent pas utiliser le terminal."
  },
  {
    id: "07",
    tag: "Dossier",
    title: "Créer le projet avec Codex",
    card: "Le bon prompt de départ évite 80 % des problèmes.",
    family: "Préparer",
    image: images.office,
    accent: palettes[6],
    layout: "checker",
    visual: "schema",
    visualTitle: "Structure cible",
    sections: [
      {
        title: "Ce que Codex doit créer",
        bullets: [
          "Une page principale avec le chatbot.",
          "Un fichier de configuration pour Supabase.",
          "Une route serveur pour appeler OpenAI sans exposer la clé dans le navigateur.",
          "Une fonction d'ingestion pour transformer les documents en chunks.",
          "Une page dashboard simple pour lire les questions posées."
        ]
      },
      {
        title: "La consigne à répéter",
        text: "À chaque étape, demander à Codex : explique ce que tu as créé, où je dois cliquer, et ce que je dois vérifier visuellement."
      }
    ],
    prompt: "Crée la V1 du projet avec une structure simple. Ajoute des commentaires courts aux endroits importants. Après chaque changement, explique-moi quoi tester dans le navigateur et quoi vérifier dans Supabase."
  },
  {
    id: "08",
    tag: "Brief Codex",
    title: "Le prompt maître",
    card: "Un prompt complet que les équipes peuvent adapter.",
    family: "Préparer",
    image: images.docs,
    accent: palettes[7],
    layout: "lab",
    visual: "screen",
    visualTitle: "Prompt de cadrage",
    sections: [
      {
        title: "Pourquoi il est important",
        text: "Le prompt maître donne la direction. Il évite que chaque groupe parte dans un style différent ou oublie la sécurité des clés."
      },
      {
        title: "Ce qu'il doit contenir",
        bullets: [
          "Le rôle de Codex.",
          "Le produit à construire.",
          "Les outils autorisés.",
          "Les limites : pas de vocal, pas de terminal côté apprenant, pas de clé exposée.",
          "Le niveau de design attendu.",
          "Les livrables finaux."
        ]
      }
    ],
    prompt: "Nous construisons un chatbot IA texte pour VISION IA. Le chatbot doit répondre à partir de documents d'entreprise stockés dans Supabase. Utilise Codex Desktop comme outil de construction, sans demander aux apprenants d'utiliser le terminal. Prépare une app claire, colorée, responsive, avec un chat, une ingestion de documents, des chunks, une recherche dans Supabase, une route serveur OpenAI, une page de tests et un mini-dashboard. Explique chaque étape avec des mots simples."
  },
  {
    id: "09",
    tag: "Design",
    title: "Créer le design du chatbot",
    card: "Une interface simple, rassurante et professionnelle.",
    family: "Construire",
    image: images.dashboard,
    accent: palettes[8],
    layout: "poster",
    visual: "chat",
    visualTitle: "Interface attendue",
    sections: [
      {
        title: "Les éléments à afficher",
        bullets: [
          "Une zone de conversation lisible.",
          "Un champ de question visible.",
          "Des suggestions de questions.",
          "Une indication de statut : recherche dans la base, réponse en cours, information non trouvée.",
          "Une zone sources ou contexte utilisé."
        ]
      },
      {
        title: "Le style recommandé",
        text: "Il faut un design amical, moderne et coloré, mais pas confus. Le chatbot doit donner confiance : couleurs franches, gros titres simples, boutons clairs, espaces respirants."
      }
    ],
    prompt: "Améliore le design du chatbot. Je veux une interface très visuelle, colorée, amicale et professionnelle. Ajoute des suggestions de questions, un état de chargement, une zone sources utilisées, et une page mobile propre. Ne mets pas de texte long inutile."
  },
  {
    id: "10",
    tag: "Supabase",
    title: "Créer le projet Supabase",
    card: "La base est le coffre du chatbot : documents, chunks et logs.",
    family: "Construire",
    image: images.data,
    accent: palettes[9],
    layout: "playbook",
    visual: "flow",
    visualTitle: "Dans Supabase",
    steps: ["New project", "SQL editor", "Tables", "API keys"],
    sections: [
      {
        title: "Les clics à expliquer",
        bullets: [
          "Créer un nouveau projet Supabase.",
          "Choisir une région cohérente avec le client si possible.",
          "Aller dans SQL Editor pour coller le schéma préparé par Codex.",
          "Aller dans Settings > API Keys pour récupérer les clés utiles.",
          "Aller dans Integrations > Data API pour retrouver l'URL API."
        ]
      },
      {
        title: "La logique simple",
        text: "Dès que les tables existent, Supabase génère automatiquement une API à partir du schéma. C'est ce qui permet à l'application de lire ou écrire dans la base."
      }
    ],
    warning: "La clé anon peut être utilisée côté client si les règles RLS sont propres. La clé service_role ne doit jamais être mise dans le navigateur."
  },
  {
    id: "11",
    tag: "BDD",
    title: "Générer la base avec Codex",
    card: "Codex prépare le SQL. Les apprenants collent le SQL dans Supabase.",
    family: "Construire",
    image: images.code,
    accent: palettes[10],
    layout: "checker",
    visual: "schema",
    visualTitle: "Tables de base",
    sections: [
      {
        title: "Les tables simples",
        bullets: [
          "documents : le fichier ou la source d'origine.",
          "chunks : les petits morceaux de texte exploitables.",
          "chat_logs : les questions, réponses et erreurs.",
          "feedback : les notes ou remarques après test.",
          "settings : quelques réglages simples du chatbot."
        ]
      },
      {
        title: "Comment le présenter aux apprenants",
        text: "Codex ne remplace pas Supabase. Codex prépare le schéma proprement. Ensuite l'humain colle le SQL dans Supabase, vérifie les tables, puis redonne les informations à Codex."
      }
    ],
    prompt: "Prépare un schéma Supabase simple pour un chatbot RAG. Je veux les tables documents, chunks, chat_logs, feedback et settings. Ajoute les champs utiles, les dates, les index, et une explication très simple pour chaque table."
  },
  {
    id: "12",
    tag: "Documents",
    title: "Importer les documents",
    card: "Le chatbot est aussi bon que les documents qu'on lui donne.",
    family: "Construire",
    image: images.docs,
    accent: palettes[11],
    layout: "lab",
    visual: "flow",
    visualTitle: "Préparer la matière",
    steps: ["FAQ", "Offres", "Process", "CGV"],
    sections: [
      {
        title: "Quels documents utiliser",
        bullets: [
          "Une FAQ commerciale.",
          "Une fiche offre.",
          "Un process interne simple.",
          "Des règles de réponse client.",
          "Un document prix ou conditions, si le cas s'y prête."
        ]
      },
      {
        title: "La règle de qualité",
        text: "Un document flou donne une réponse floue. Avant de parler d'IA, il faut nettoyer le contenu : titres clairs, phrases courtes, doublons supprimés."
      }
    ],
    deliverable: "Une liste des documents utilisés, avec leur rôle : vendre, rassurer, répondre, orienter, escalader."
  },
  {
    id: "13",
    tag: "Chunks",
    title: "Transformer en chunks",
    card: "Découper les documents pour que le chatbot retrouve vite le bon passage.",
    family: "Construire",
    image: images.ai,
    accent: palettes[0],
    layout: "timeline",
    visual: "flow",
    visualTitle: "Découpage",
    steps: ["Texte brut", "Nettoyage", "Chunks", "Métadonnées"],
    sections: [
      {
        title: "Un chunk, c'est quoi ?",
        text: "C'est un petit morceau de document. Il doit être assez court pour être précis, mais assez complet pour garder le sens."
      },
      {
        title: "Une règle simple pour le challenge",
        bullets: [
          "Un chunk fait environ 500 à 900 mots, ou une section courte.",
          "Chaque chunk garde le titre du document.",
          "Chaque chunk garde une catégorie : prix, support, produit, sécurité, process.",
          "On évite de couper une phrase en deux.",
          "On supprime les doublons évidents."
        ]
      }
    ],
    prompt: "Écris une fonction simple qui transforme un texte d'entreprise en chunks propres. Chaque chunk doit avoir un titre, une catégorie, le texte, la source, un numéro et une date d'import."
  },
  {
    id: "14",
    tag: "Recherche",
    title: "Retrouver les bons chunks",
    card: "Le coeur du chatbot : chercher le bon contexte avant de répondre.",
    family: "Connecter",
    image: images.data,
    accent: palettes[1],
    layout: "checker",
    visual: "schema",
    visualTitle: "Recherche",
    sections: [
      {
        title: "Deux niveaux possibles",
        bullets: [
          "Version simple : recherche par mots-clés dans Supabase.",
          "Version plus avancée : embeddings avec pgvector.",
          "Pour un challenge de 3 jours, les équipes peuvent expliquer les deux et construire au moins une version simple."
        ]
      },
      {
        title: "La version embeddings",
        text: "On transforme chaque chunk en vecteur. Quand l'utilisateur pose une question, on transforme aussi la question en vecteur. Supabase compare les vecteurs et retourne les chunks les plus proches."
      }
    ],
    prompt: "Ajoute une recherche de chunks. Si l'embedding est prêt, utilise pgvector et une fonction match_documents. Sinon, crée une recherche simple par mots-clés pour que la démo fonctionne quand même."
  },
  {
    id: "15",
    tag: "OpenAI",
    title: "Connecter l'API OpenAI",
    card: "La clé API sert à générer la réponse du chatbot.",
    family: "Connecter",
    image: images.laptop,
    accent: palettes[2],
    layout: "playbook",
    visual: "screen",
    visualTitle: "API",
    sections: [
      {
        title: "Les étapes à expliquer",
        bullets: [
          "Créer une clé API dans le dashboard OpenAI.",
          "Mettre la clé dans un fichier d'environnement ou un secret serveur.",
          "Créer une route serveur qui appelle OpenAI.",
          "Envoyer à OpenAI la question + les chunks utiles.",
          "Retourner la réponse au chatbot."
        ]
      },
      {
        title: "Le message de sécurité",
        text: "La clé OpenAI ne doit jamais apparaître dans le code visible par le navigateur. Le navigateur parle à votre serveur. Le serveur parle à OpenAI."
      }
    ],
    prompt: "Branche l'API OpenAI côté serveur. Ne mets jamais la clé dans le navigateur. Utilise une variable OPENAI_API_KEY. La route doit recevoir une question et des chunks, puis retourner une réponse simple."
  },
  {
    id: "16",
    tag: "Modèles",
    title: "Quel modèle choisir",
    card: "Un choix simple : un modèle pour répondre, un modèle pour les embeddings.",
    family: "Connecter",
    image: images.ai,
    accent: palettes[3],
    layout: "poster",
    visual: "dashboard",
    visualTitle: "Choix modèle",
    sections: [
      {
        title: "Pour le chatbot texte",
        bullets: [
          "Prototype économique : utiliser un modèle mini récent si disponible dans le compte API.",
          "Réponse plus qualitative : utiliser un modèle plus avancé comme GPT-5.5 quand la qualité compte plus que le coût.",
          "Toujours vérifier la page Models et Pricing avant le challenge, car les noms et prix changent."
        ]
      },
      {
        title: "Pour les embeddings",
        bullets: [
          "text-embedding-3-small est un bon choix pédagogique : simple, économique et fait pour la recherche.",
          "text-embedding-3-large peut être gardé pour des cas plus exigeants.",
          "Il faut garder le même modèle d'embedding pour les documents et les questions."
        ]
      }
    ],
    warning: "Ne pas figer une promesse commerciale sur un prix API sans revérifier le jour du lancement."
  },
  {
    id: "17",
    tag: "Sécurité",
    title: "Protéger les clés",
    card: "La sécurité doit être expliquée simplement, sans faire peur.",
    family: "Connecter",
    image: images.security,
    accent: palettes[4],
    layout: "lab",
    visual: "screen",
    visualTitle: "Clés",
    sections: [
      {
        title: "Les règles non négociables",
        bullets: [
          "Ne jamais partager une clé API dans un document public.",
          "Ne jamais mettre une clé OpenAI dans le navigateur.",
          "Ne jamais envoyer la clé service_role Supabase côté client.",
          "Utiliser des variables d'environnement ou les secrets de l'hébergeur.",
          "Changer la clé si elle a été exposée."
        ]
      },
      {
        title: "Comment le dire à un client",
        text: "Les clés sont comme des badges d'accès. On ne les affiche pas à l'entrée du bâtiment. On les garde côté serveur et on limite ce que chaque clé peut faire."
      }
    ],
    deliverable: "Une mini-charte sécurité : clés, données, accès, logs, validation humaine."
  },
  {
    id: "18",
    tag: "Réponse",
    title: "Construire la réponse IA",
    card: "La réponse doit être utile, sourcée et honnête.",
    family: "Connecter",
    image: images.office,
    accent: palettes[5],
    layout: "checker",
    visual: "chat",
    visualTitle: "Réponse idéale",
    sections: [
      {
        title: "Le prompt système du chatbot",
        bullets: [
          "Réponds uniquement avec les informations du contexte.",
          "Si l'information manque, dis-le simplement.",
          "Ne fais pas de promesse commerciale non validée.",
          "Propose une prochaine action utile.",
          "Garde un ton clair, naturel et professionnel."
        ]
      },
      {
        title: "Pourquoi c'est stratégique",
        text: "Un bon chatbot ne doit pas tout inventer pour avoir l'air intelligent. Il doit répondre quand il sait, et escalader quand il ne sait pas."
      }
    ],
    prompt: "Écris le prompt système du chatbot. Il doit répondre avec les chunks fournis, être clair, citer les sources internes quand possible, et dire franchement quand l'information manque."
  },
  {
    id: "19",
    tag: "Tests",
    title: "Tester le chatbot",
    card: "Une démo crédible repose sur des tests simples et visibles.",
    family: "Défendre",
    image: images.dashboard,
    accent: palettes[6],
    layout: "timeline",
    visual: "dashboard",
    visualTitle: "Qualité",
    steps: ["Question facile", "Question ambiguë", "Question hors base", "Question sensible"],
    sections: [
      {
        title: "La grille de test",
        bullets: [
          "La réponse est-elle correcte ?",
          "Le chatbot a-t-il utilisé le bon chunk ?",
          "Le ton est-il clair ?",
          "Le chatbot sait-il dire non quand il ne sait pas ?",
          "La question et la réponse sont-elles bien loguées ?"
        ]
      },
      {
        title: "Les questions à préparer",
        text: "Chaque groupe doit préparer 10 questions : 5 simples, 3 ambiguës, 1 piège, 1 hors périmètre. C'est suffisant pour montrer une vraie méthode."
      }
    ],
    deliverable: "Un tableau de tests avec question, résultat attendu, réponse obtenue, statut et correction à faire."
  },
  {
    id: "20",
    tag: "Dashboard",
    title: "Piloter l'activité",
    card: "Le dashboard transforme le chatbot en outil commercial.",
    family: "Défendre",
    image: images.data,
    accent: palettes[7],
    layout: "poster",
    visual: "dashboard",
    visualTitle: "KPI",
    sections: [
      {
        title: "Les KPI utiles",
        bullets: [
          "Nombre de questions posées.",
          "Sujets les plus fréquents.",
          "Taux de réponse trouvée dans la base.",
          "Questions sans réponse.",
          "Temps gagné estimé.",
          "Qualité moyenne après feedback."
        ]
      },
      {
        title: "Le lien avec le challenge Business Developer",
        text: "Ce dashboard sert à défendre le ROI. Il montre que le chatbot n'est pas juste une interface : c'est un outil de pilotage."
      }
    ],
    prompt: "Crée une page dashboard simple avec les KPI du chatbot : questions, sujets fréquents, réponses trouvées, questions sans réponse, feedback et prochaine action."
  },
  {
    id: "21",
    tag: "Valeur",
    title: "Défendre la valeur",
    card: "Le prototype doit aider à vendre sans brader.",
    family: "Défendre",
    image: images.team,
    accent: palettes[8],
    layout: "playbook",
    visual: "flow",
    visualTitle: "Argumentaire",
    steps: ["Problème", "Valeur", "Risque réduit", "Prix défendu"],
    sections: [
      {
        title: "Les arguments simples",
        bullets: [
          "Le chatbot réduit les questions répétitives.",
          "Il homogénéise les réponses.",
          "Il capitalise les documents internes.",
          "Il rend visibles les demandes fréquentes.",
          "Il garde une trace des questions et des limites."
        ]
      },
      {
        title: "La négociation",
        text: "Si le client demande une remise, les apprenants doivent répondre avec une contrepartie : durée d'engagement, périmètre réduit, témoignage client, paiement rapide ou pilote cadré."
      }
    ],
    warning: "Pas de remise gratuite. Pas de POC illimité. Pas d'engagement flou."
  },
  {
    id: "22",
    tag: "Role play",
    title: "Préparer le jury",
    card: "Les apprenants doivent savoir expliquer et négocier.",
    family: "Défendre",
    image: images.workshop,
    accent: palettes[9],
    layout: "checker",
    visual: "chat",
    visualTitle: "Objections",
    sections: [
      {
        title: "Les objections à simuler",
        bullets: [
          "Pourquoi payer si Codex peut aider à construire ?",
          "Pourquoi ne pas utiliser seulement ChatGPT ?",
          "Que se passe-t-il si la base est fausse ?",
          "Où vont les données ?",
          "Je veux un POC gratuit avant de signer.",
          "Votre concurrent est moins cher."
        ]
      },
      {
        title: "La bonne posture",
        text: "Rester calme, revenir au besoin, défendre le périmètre, expliquer la sécurité, puis demander une décision ou une prochaine étape claire."
      }
    ],
    prompt: "Joue le rôle d'un acheteur B2B exigeant. Challenge mon prix, la sécurité des données, le POC gratuit et l'intérêt du chatbot. Pose-moi des objections courtes et réalistes."
  },
  {
    id: "23",
    tag: "Livrables",
    title: "Ce qu'il faut rendre",
    card: "Une démo, une méthode, un dashboard et une négociation.",
    family: "Défendre",
    image: images.docs,
    accent: palettes[10],
    layout: "lab",
    visual: "flow",
    visualTitle: "Final",
    steps: ["Démo", "Dashboard", "Plan de négo", "Charte IA"],
    sections: [
      {
        title: "Les livrables finaux",
        bullets: [
          "Une démo du chatbot.",
          "Une explication de l'architecture.",
          "Une base Supabase structurée.",
          "Un exemple de documents transformés en chunks.",
          "Un dashboard de pilotage.",
          "Une matrice concessions / contreparties.",
          "Une charte d'usage responsable de l'IA.",
          "Un role play de négociation."
        ]
      },
      {
        title: "La phrase de conclusion",
        text: "Nous avons construit un prototype simple, mais surtout une méthode pour vendre et piloter un chatbot IA utile, sécurisé et mesurable."
      }
    ],
    deliverable: "Une soutenance courte : problème, solution, démo, résultats, risques, prix, négociation."
  }
];

const blockById = new Map(blocks.map((block) => [block.id, block]));

function home() {
  const template = document.querySelector("#home-template");
  const node = template.content.cloneNode(true);
  const familiesRoot = node.querySelector("#families");

  families.forEach((family) => {
    const section = document.createElement("section");
    section.className = "family-section";
    section.innerHTML = `
      <div class="family-head">
        <div class="family-label">${family.title}</div>
        <div class="family-text">${family.text}</div>
      </div>
      <div class="block-grid"></div>
    `;

    const grid = section.querySelector(".block-grid");
    family.blocks.forEach((id, index) => {
      const block = blockById.get(id);
      const card = document.createElement("button");
      card.type = "button";
      card.className = "block-card";
      card.dataset.openBlock = block.id;
      card.style.background = block.accent || palettes[index % palettes.length];
      card.innerHTML = `
        <div>
          <span class="num">${block.id}</span>
          <p class="eyebrow">${block.tag}</p>
          <h3>${block.title}</h3>
          <p>${block.card}</p>
        </div>
        <span class="open">Lire le bloc <i>↗</i></span>
      `;
      grid.appendChild(card);
    });

    familiesRoot.appendChild(section);
  });

  mount(node);
}

function mount(node) {
  const app = document.querySelector("#app");
  app.innerHTML = "";
  app.appendChild(node);
  bindActions();
}

function detail(id) {
  const block = blockById.get(id) || blocks[0];
  const template = document.querySelector("#detail-template");
  const node = template.content.cloneNode(true);
  const shell = node.querySelector(".detail-shell");
  shell.classList.add(`detail-layout-${block.layout || "default"}`);
  shell.style.setProperty("--accent", block.accent || palettes[0]);

  shell.innerHTML = `
    <div class="back-row">
      <button type="button" class="back-btn" data-home>← Retour aux blocs</button>
      <div class="crumb">${block.family} / Bloc ${block.id}</div>
    </div>
    <section class="detail-hero">
      <div class="detail-copy">
        <p class="eyebrow">${block.tag}</p>
        <h1>${block.title}</h1>
        <p>${block.card}</p>
      </div>
      <div class="detail-media">
        <img src="${block.image}" alt="${block.title}">
        <div class="media-label">${block.visualTitle || "Visuel pédagogique"}</div>
      </div>
    </section>
    <section class="detail-content">
      <aside class="detail-aside">
        <div class="aside-top">
          <h2>À montrer</h2>
          <p>${block.visualTitle || "Le point clé du bloc"}</p>
        </div>
        <div class="visual-stack">
          ${renderVisual(block)}
        </div>
      </aside>
      <div class="detail-main">
        ${renderSections(block)}
        ${renderPrompt(block)}
        ${renderWarning(block)}
        ${renderDeliverable(block)}
      </div>
    </section>
    <nav class="detail-nav" aria-label="Navigation entre blocs">
      ${renderPrevNext(block.id)}
    </nav>
  `;

  mount(node);
  window.scrollTo({ top: 0, behavior: "instant" });
}

function renderVisual(block) {
  if (block.visual === "flow") {
    const items = (block.steps || ["Codex", "Supabase", "OpenAI", "Chatbot"])
      .map((step) => `<span>${step}</span>`)
      .join("");
    return `<div class="flow-visual">${items}</div>${fakeScreen(block)}`;
  }

  if (block.visual === "schema") {
    return `
      <div class="schema-visual"><code>create table documents (
  id uuid primary key,
  title text,
  source_url text
);

create table chunks (
  id uuid primary key,
  document_id uuid,
  content text,
  category text,
  embedding vector
);</code></div>
      ${fakeScreen(block)}
    `;
  }

  if (block.visual === "chat") {
    return `
      <div class="chat-visual">
        <div class="bubble user">Quels documents faut-il pour démarrer ?</div>
        <div class="bubble bot">Il faut une FAQ, une fiche offre, un process et quelques règles de réponse.</div>
        <div class="bubble user">Et si l'information manque ?</div>
        <div class="bubble bot">Je le dis clairement et je propose une action humaine.</div>
      </div>
      ${fakeScreen(block)}
    `;
  }

  if (block.visual === "dashboard") {
    return `
      <div class="dashboard-visual">
        <div><b>42</b>questions</div>
        <div><b>81%</b>trouvées</div>
        <div><b>9</b>hors base</div>
        <div><b>4.6</b>qualité</div>
      </div>
      ${fakeScreen(block)}
    `;
  }

  return fakeScreen(block);
}

function fakeScreen(block) {
  return `
    <div class="fake-screen">
      <div class="fake-top"><i></i><i></i><i></i></div>
      <div class="fake-body">
        <span class="fake-pill">${block.tag}</span>
        <span class="fake-line"></span>
        <span class="fake-line w70"></span>
        <span class="fake-line w50"></span>
        <span class="fake-line w35"></span>
      </div>
    </div>
  `;
}

function renderSections(block) {
  const sections = (block.sections || []).map((section) => {
    const body = section.bullets
      ? `<ul>${section.bullets.map((item) => `<li>${item}</li>`).join("")}</ul>`
      : `<p>${section.text}</p>`;
    return `<section><h2>${section.title}</h2>${body}</section>`;
  }).join("");

  const steps = block.steps?.length
    ? `<section><h2>Le chemin à retenir</h2><div class="step-strip">${block.steps.map((step) => `<span>${step}</span>`).join("")}</div></section>`
    : "";

  return sections + steps;
}

function renderPrompt(block) {
  if (!block.prompt) return "";
  return `
    <section>
      <h2>Prompt prêt à utiliser</h2>
      <div class="prompt-box">
        <h3>À coller dans Codex Desktop</h3>
        <pre>${escapeHtml(block.prompt)}</pre>
      </div>
    </section>
  `;
}

function renderWarning(block) {
  if (!block.warning) return "";
  return `
    <section>
      <h2>Point d'attention</h2>
      <div class="warning-box">
        <h3>À ne pas oublier</h3>
        <p>${block.warning}</p>
      </div>
    </section>
  `;
}

function renderDeliverable(block) {
  if (!block.deliverable) return "";
  return `
    <section>
      <h2>Livrable attendu</h2>
      <div class="deliverable-box">
        <h3>Ce que l'équipe doit rendre</h3>
        <p>${block.deliverable}</p>
      </div>
    </section>
  `;
}

function renderPrevNext(id) {
  const index = blocks.findIndex((block) => block.id === id);
  const prev = blocks[index - 1];
  const next = blocks[index + 1];
  return `
    ${prev ? `<button type="button" class="detail-cta" data-open-block="${prev.id}">← Bloc ${prev.id}</button>` : `<span></span>`}
    ${next ? `<button type="button" class="detail-cta" data-open-block="${next.id}">Bloc ${next.id} →</button>` : `<button type="button" class="detail-cta" data-home>Finir</button>`}
  `;
}

function bindActions() {
  document.querySelectorAll("[data-home]").forEach((button) => {
    button.addEventListener("click", () => {
      history.pushState(null, "", location.pathname);
      home();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  document.querySelectorAll("[data-open-block]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.openBlock;
      history.pushState(null, "", `#bloc-${id}`);
      detail(id);
    });
  });

  document.querySelectorAll("[data-scroll]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.getElementById(button.dataset.scroll);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function route() {
  const match = location.hash.match(/^#bloc-(\d{2})$/);
  if (match) {
    detail(match[1]);
  } else {
    home();
  }
}

window.addEventListener("popstate", route);
route();
