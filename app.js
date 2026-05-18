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

const photoBank = [
  { src: images.ai, caption: "L'IA comme moteur de réponse, pas comme promesse floue." },
  { src: images.team, caption: "Le projet reste collectif : commercial, data, métier, client." },
  { src: images.code, caption: "Codex aide à produire l'application et à corriger les détails." },
  { src: images.data, caption: "Supabase range les informations utiles au chatbot." },
  { src: images.laptop, caption: "L'interface doit rester simple pour l'utilisateur final." },
  { src: images.docs, caption: "Les documents propres font la qualité des réponses." },
  { src: images.security, caption: "La sécurité des clés et des données se prépare dès le départ." },
  { src: images.office, caption: "Le cas doit être expliqué comme un projet d'entreprise réel." },
  { src: images.workshop, caption: "Vous avancez en atelier, étape par étape." },
  { src: images.dashboard, caption: "Le dashboard transforme la démo en outil de pilotage." }
];

const demoScenarios = {
  orientation: {
    question: "Je reçois beaucoup de demandes sur mon site, quelle automatisation choisir ?",
    chunks: [
      { title: "Offres VISION IA", score: "95%", text: "VISION IA peut aider avec un chatbot site web, un assistant de qualification, une prise de rendez-vous et un résumé envoyé au CRM." },
      { title: "Profil prospect", score: "90%", text: "Le prospect reçoit beaucoup de demandes entrantes, perd du temps à trier les messages et veut répondre plus vite sans perdre le contact humain." },
      { title: "Règle d'orientation", score: "86%", text: "Quand le besoin concerne le tri des demandes, commencer par un chatbot de qualification relié à un formulaire, un email ou un CRM." }
    ],
    answer: "Je vous orienterais vers un chatbot de qualification sur le site. Il pose quelques questions simples, comprend le besoin du visiteur, classe la demande, puis envoie un résumé à votre équipe. La prochaine étape serait de lister vos 10 questions les plus fréquentes et les informations à récupérer avant un rendez-vous.",
    score: "95%",
    time: "1.2s"
  },
  hotel: {
    question: "Je suis un hôtel, qu'est-ce que VISION IA peut automatiser pour moi ?",
    chunks: [
      { title: "Cas hôtel", score: "93%", text: "Un hôtel reçoit souvent des questions sur les chambres, horaires, services, accès, parking, petit-déjeuner, annulations et demandes spéciales." },
      { title: "Automatisation adaptée", score: "88%", text: "Le chatbot peut répondre aux questions fréquentes, préparer une demande de réservation, récupérer les dates et transférer les cas particuliers à l'équipe." },
      { title: "Limite humaine", score: "82%", text: "Les demandes sensibles, les litiges et les cas très personnalisés doivent être transmis à une personne." }
    ],
    answer: "Pour un hôtel, je commencerais par un assistant client sur le site. Il répond aux questions simples, récupère les dates de séjour, le nombre de personnes et les besoins particuliers, puis transmet la demande à votre équipe quand il faut une réponse humaine. Le but est de réduire les messages répétitifs sans enlever la qualité d'accueil.",
    score: "93%",
    time: "1.4s"
  },
  visionia: {
    question: "Comment le chatbot récupère les informations sur VISION IA ?",
    chunks: [
      { title: "Sources VISION IA", score: "96%", text: "Les sources utiles sont les pages du site, les offres, les exemples d'automatisation, les FAQ, les messages commerciaux et les limites à respecter." },
      { title: "Préparation Supabase", score: "91%", text: "Chaque source est découpée en chunks avec un titre, une catégorie, une URL, une date et un niveau de confiance." },
      { title: "Usage dans la réponse", score: "87%", text: "Le chatbot utilise ces chunks pour expliquer ce que VISION IA peut faire, puis croise cette base avec le besoin du prospect." }
    ],
    answer: "On commence par récupérer les informations publiques et validées de VISION IA : pages du site, offres, exemples, FAQ et ton de réponse. Ensuite on transforme tout en chunks dans Supabase. Quand un prospect pose une question, le chatbot cherche les bons chunks VISION IA et les relie à son contexte pour proposer une piste d'automatisation.",
    score: "96%",
    time: "1.1s"
  }
};

const chapterData = {
  "01": {
    scene: "Le client arrive avec une demande simple en apparence : il veut un chatbot pour répondre plus vite aux questions répétitives. La bonne réaction n'est pas de parler tout de suite de modèle, de code ou d'API. Il faut commencer par raconter le besoin : des utilisateurs posent souvent les mêmes questions, les réponses sont dispersées dans des documents, et les équipes perdent du temps à retrouver la bonne information.",
    purpose: "Ce bloc sert à installer le cadre mental. Vous devez comprendre que le chatbot n'est pas une boîte noire. C'est une interface qui applique une méthode : lire la question, retrouver le bon contexte, produire une réponse claire, puis garder une trace.",
    method: "On commence par écrire le scénario utilisateur avant de construire l'application. Une bonne phrase de cadrage suffit : un visiteur pose une question, l'application cherche dans les documents validés, l'IA répond seulement avec ce qu'elle a trouvé, et si elle ne sait pas elle le dit.",
    example: "Exemple : un utilisateur demande « Quels documents faut-il pour démarrer le projet ? ». Le chatbot ne doit pas inventer. Il doit retrouver le chunk qui décrit la liste des documents, répondre en langage simple, puis proposer une prochaine action.",
    business: "Commercialement, ce bloc permet de défendre la valeur : le client n'achète pas une fenêtre de chat, il achète une capacité à rendre son savoir interne utilisable.",
    risk: "Le risque est de partir sur une démonstration trop large. Si le périmètre n'est pas clair, le chatbot répondra mal et la négociation deviendra fragile."
  },
  "02": {
    scene: "Après l'introduction, l'équipe doit transformer l'idée en mission précise. On passe de « on veut un chatbot IA » à « voici exactement ce que nous allons construire en trois jours ». Cette transition est essentielle, car un projet IA flou devient vite trop grand, trop technique et difficile à défendre.",
    purpose: "Ce bloc sert à poser le contrat pédagogique. Vous devez savoir ce qui est attendu, ce qui ne l'est pas, et ce que vous devrez montrer à la fin. Baptiste doit sentir que votre équipe maîtrise son périmètre.",
    method: "On découpe la mission en objets visibles : une interface de chat, une base Supabase, une route OpenAI, quelques documents transformés en chunks, un tableau de tests et un dashboard simple. Chaque objet doit avoir une utilité dans la démonstration.",
    example: "Exemple : si le groupe promet de traiter tous les documents d'une entreprise, il se perd. S'il promet de répondre à dix questions clés à partir de quatre documents propres, il peut réussir et expliquer la méthode.",
    business: "La force commerciale vient du cadrage. Un POC limité, mesurable et bien expliqué se vend mieux qu'une promesse énorme.",
    risk: "Le piège est de vouloir faire une application complète. En trois jours, il faut construire un prototype crédible, pas une plateforme finale."
  },
  "03": {
    scene: "Le moment architecture arrive souvent trop tôt dans les projets IA. Ici, il faut le rendre très simple. Un utilisateur pose une question dans le navigateur. L'application reçoit cette question. Supabase fournit les morceaux de documents utiles. OpenAI transforme ce contexte en réponse lisible.",
    purpose: "Ce bloc sert à rassurer. Vous devez pouvoir expliquer l'architecture à quelqu'un qui n'est pas développeur. Si vous ne savez pas la raconter simplement, vous aurez du mal à défendre le prix et la sécurité.",
    method: "On dessine quatre boîtes : utilisateur, application, Supabase, OpenAI. Puis on ajoute les flèches : question, recherche de contexte, génération, réponse, log. Ce schéma suffit pour comprendre l'essentiel.",
    example: "Exemple : le client demande où sont stockées les données. La réponse est claire : les documents et les logs restent dans Supabase ; OpenAI reçoit uniquement la question et les extraits nécessaires pour répondre.",
    business: "Cette architecture aide à vendre parce qu'elle sépare les responsabilités. On peut parler sécurité, coût, qualité et maintenance sans mélanger tous les sujets.",
    risk: "Le risque est d'employer trop de jargon. Si Baptiste entend uniquement API, embeddings et backend, il décroche."
  },
  "04": {
    scene: "Le projet dure trois jours, donc le planning doit protéger les équipes. Le premier jour sert à comprendre et cadrer. Le deuxième sert à construire et brancher. Le troisième sert à tester, améliorer et préparer la soutenance commerciale.",
    purpose: "Ce bloc sert à éviter la panique. Vous avez besoin d'un chemin. Vous devez savoir quoi faire maintenant, quoi garder pour plus tard, et comment décider si une idée est trop ambitieuse.",
    method: "On travaille par jalons. À la fin du jour 1, le scénario, les documents et le prompt maître sont prêts. À la fin du jour 2, la démo répond à quelques questions. À la fin du jour 3, le groupe sait présenter, tester et négocier.",
    example: "Exemple : si l'équipe n'a pas de réponse IA fiable à midi le jour 2, elle réduit le périmètre. Elle garde trois documents, cinq questions et une version simple par mots-clés.",
    business: "Le planning devient un argument de pilotage. Une équipe qui sait découper un POC montre qu'elle saura aussi gérer un déploiement client.",
    risk: "Le risque est de passer deux jours sur le design avant d'avoir une réponse fonctionnelle."
  },
  "05": {
    scene: "Avant de construire, il faut préparer les comptes. Codex Desktop sert à construire. Supabase sert à stocker. OpenAI API sert à générer les réponses. ChatGPT Plus donne accès à Codex selon les conditions du plan, mais l'API reste une facturation séparée.",
    purpose: "Ce bloc sert à clarifier les outils et les coûts. Vous devez éviter une confusion fréquente : payer ChatGPT Plus ne veut pas dire que l'application peut utiliser l'API OpenAI sans coût.",
    method: "On vérifie quatre accès : compte ChatGPT, Codex Desktop ouvert, projet Supabase, plateforme OpenAI avec possibilité de créer une clé API. Ensuite on note les identifiants utiles sans jamais exposer les secrets.",
    example: "Exemple : l'équipe peut dire « Nous utilisons Codex pour construire plus vite, Supabase pour stocker les chunks, et l'API OpenAI pour répondre aux questions dans l'application. »",
    business: "La clarté des outils rassure le client. On sait ce qui est inclus, ce qui est variable, et ce qui doit être sécurisé.",
    risk: "Le risque est de vendre l'abonnement ChatGPT comme s'il couvrait tous les coûts API du chatbot."
  },
  "06": {
    scene: "Codex Desktop devient le compagnon de construction. Vous n'avez pas besoin de penser comme des développeurs experts. Vous devez apprendre à formuler une demande claire, lire ce que Codex propose, tester visuellement, puis demander une correction.",
    purpose: "Ce bloc sert à leur donner une méthode de dialogue avec Codex. Ils ne doivent pas cliquer au hasard ni accepter du code sans comprendre le résultat.",
    method: "Chaque demande à Codex doit contenir le contexte, l'objectif, les contraintes, le style souhaité, les fichiers concernés et le test attendu. Ensuite, l'équipe demande une explication courte de ce qui a changé.",
    example: "Exemple : au lieu d'écrire « fais un chatbot », on écrit « crée une interface de chatbot texte avec une zone messages, un champ question, trois suggestions, un état de chargement et une zone sources ». La deuxième demande est exploitable.",
    business: "Codex devient un accélérateur, pas une excuse. La valeur reste dans le cadrage, les tests, la sécurité et la capacité à expliquer.",
    risk: "Le risque est d'accepter une réponse de Codex sans vérifier dans le navigateur."
  },
  "07": {
    scene: "Le projet doit avoir une structure simple. Vous ouvrez un dossier dans Codex Desktop et vous demandez une application lisible : une page de chat, une configuration Supabase, une route serveur OpenAI, une ingestion de documents et une page dashboard.",
    purpose: "Ce bloc sert à éviter le désordre. Si les fichiers sont mal rangés, l'équipe ne saura plus où modifier le design, où mettre la clé, où lire les logs ou où corriger la recherche.",
    method: "On demande à Codex de créer une structure en petites zones : interface, services, API, données, styles. Puis on lui demande d'expliquer le rôle de chaque fichier en français simple.",
    example: "Exemple : un dossier peut contenir une page chatbot, un module Supabase, un module OpenAI, un fichier de prompts et une page dashboard. Ce n'est pas obligatoire de faire compliqué.",
    business: "Une structure claire aide à défendre la maintenabilité. Le client comprend que le prototype peut évoluer.",
    risk: "Le risque est d'avoir une démo qui marche une fois, mais que personne ne sait corriger."
  },
  "08": {
    scene: "Le prompt maître est le brief que l'équipe donne à Codex. C'est comme un brief créatif pour un designer ou un brief projet pour un développeur. S'il est vague, Codex devine. S'il est précis, Codex construit dans la bonne direction.",
    purpose: "Ce bloc sert à faire gagner du temps. Vous devez apprendre à écrire le bon brief avant de demander des écrans ou des fonctions.",
    method: "Le prompt maître précise le produit, les utilisateurs, les outils, les limites, le style visuel, les règles de sécurité, les livrables et le niveau d'explication attendu.",
    example: "Exemple : « vous n'avez pas besoin d'utiliser le terminal » est une contrainte importante. Codex doit donc expliquer les actions en langage naturel et préparer ce qui peut être copié dans Supabase.",
    business: "Un bon prompt maître montre une posture professionnelle : on cadre avant d'exécuter.",
    risk: "Le risque est de laisser Codex choisir seul l'architecture, le ton et le niveau de sécurité."
  },
  "09": {
    scene: "Le design du chatbot est la première chose que Baptiste voit. Même si le coeur du projet est la donnée, une interface confuse donne l'impression d'un produit fragile. Le design doit aider l'utilisateur à poser une question et à comprendre la réponse.",
    purpose: "Ce bloc sert à transformer la démo en expérience. Vous devez penser aux messages, aux états, aux sources, aux boutons et aux retours d'erreur.",
    method: "On construit une interface avec trois zones : conversation, action, preuve. La conversation affiche les messages. L'action permet de poser une question. La preuve montre les sources ou les chunks utilisés.",
    example: "Exemple : après une réponse, le chatbot peut afficher « Sources utilisées : FAQ onboarding, section documents à fournir ». Cela rassure immédiatement.",
    business: "Un bon design aide à vendre parce qu'il rend la valeur visible.",
    risk: "Le risque est de faire une belle page qui ne montre pas les sources, les limites ou l'état de recherche."
  },
  "10": {
    scene: "Supabase est la base du projet. On y range les documents, les chunks, les questions, les réponses, les feedbacks et les réglages. L'équipe ne doit pas voir Supabase comme un détail technique, mais comme la mémoire du chatbot.",
    purpose: "Ce bloc sert à comprendre où vivent les données. Sans base claire, le chatbot dépend de texte collé au hasard dans un prompt.",
    method: "On crée un projet Supabase, puis les tables. On vérifie que l'API automatique est disponible. On récupère l'URL du projet et les clés nécessaires. Les clés sensibles restent côté serveur.",
    example: "Exemple : quand une question est posée, l'application peut enregistrer la question, les chunks trouvés, la réponse générée et la note de qualité. Cela permet de piloter le projet.",
    business: "Supabase permet de parler sérieux : traçabilité, amélioration continue, sécurité, pilotage.",
    risk: "Le risque est de stocker des données sans règle d'accès ou d'exposer la mauvaise clé."
  },
  "11": {
    scene: "Codex peut préparer le schéma SQL. Vous n'avez pas besoin de tout écrire à la main. Votre rôle est de comprendre les tables, de coller le SQL dans Supabase, de vérifier le résultat et d'expliquer pourquoi chaque table existe.",
    purpose: "Ce bloc sert à rendre la base visible. Les mots documents, chunks et logs doivent devenir des objets visibles dans Supabase.",
    method: "On demande à Codex un schéma minimal. Ensuite on lit chaque table. Documents garde la source. Chunks garde les morceaux exploitables. Chat logs garde les échanges. Feedback garde les notes. Settings garde les réglages.",
    example: "Exemple : si un utilisateur dit que la réponse est mauvaise, l'équipe peut retrouver le log, voir quels chunks ont été utilisés, puis corriger le document ou le découpage.",
    business: "Une base bien dessinée prouve que le projet est pilotable et améliorable.",
    risk: "Le risque est de créer trop de tables, ou des tables que personne ne sait expliquer."
  },
  "12": {
    scene: "Les documents sont la matière première. Le chatbot ne peut pas répondre correctement si les documents sont mal choisis, mal écrits ou contradictoires. Avant de parler d'IA, l'équipe doit choisir les contenus qui méritent d'entrer dans la base.",
    purpose: "Ce bloc sert à rappeler une vérité simple : l'IA amplifie la qualité ou le désordre des documents.",
    method: "On sélectionne quatre types de documents : FAQ, offre, process, règles de réponse. On supprime les doublons, on clarifie les titres, on garde les informations à jour et on retire ce qui est sensible ou inutile.",
    example: "Exemple : une FAQ avec dix questions bien rédigées vaut mieux qu'un dossier de cinquante pages rempli de phrases ambiguës.",
    business: "Le nettoyage documentaire peut être vendu comme une partie de la valeur du projet. Le client obtient aussi une base de connaissance plus propre.",
    risk: "Le risque est de brancher le chatbot sur des documents non validés."
  },
  "13": {
    scene: "Le chunking est le moment où les documents deviennent exploitables. Un long document est difficile à utiliser tel quel. On le découpe en sections cohérentes pour permettre au chatbot de retrouver le passage utile.",
    purpose: "Ce bloc sert à expliquer la logique RAG simplement. Le chatbot ne lit pas tout à chaque question ; il récupère les morceaux les plus proches du besoin.",
    method: "On découpe par titres, paragraphes ou sections. Chaque chunk garde son texte, sa source, sa catégorie, son numéro et éventuellement un résumé court. On évite de couper au milieu d'une idée.",
    example: "Exemple : un document offre peut donner un chunk sur le prix, un chunk sur la mise en place, un chunk sur la sécurité, un chunk sur les limites du service.",
    business: "Un bon découpage améliore la précision et réduit le risque de réponse hors sujet.",
    risk: "Le risque est de faire des chunks trop petits qui perdent le contexte, ou trop grands qui mélangent plusieurs sujets."
  },
  "14": {
    scene: "Avant de répondre, le chatbot doit chercher. C'est la différence entre un chatbot généraliste et un chatbot connecté à une base d'entreprise. La recherche récupère les chunks utiles, puis l'IA écrit la réponse avec ces éléments.",
    purpose: "Ce bloc sert à comprendre le coeur du produit. Sans recherche de contexte, le chatbot répond avec sa connaissance générale. Avec recherche, il répond à partir de la base validée.",
    method: "Pour le challenge, on peut commencer par une recherche par mots-clés. Si le groupe avance bien, il explique les embeddings et pgvector : on transforme les textes en vecteurs et on compare les similarités.",
    example: "Exemple : la question « combien de temps prend le déploiement ? » doit retrouver les chunks contenant planning, POC, pilote et production.",
    business: "La recherche permet de défendre la fiabilité : la réponse vient de sources internes, pas d'une improvisation.",
    risk: "Le risque est de récupérer des chunks hors sujet et de donner une réponse fausse mais bien écrite."
  },
  "15": {
    scene: "L'API OpenAI est le moment où l'application produit une vraie réponse. L'interface et Supabase préparent le contexte. OpenAI reçoit la question, les chunks sélectionnés et les règles de réponse, puis renvoie un texte clair.",
    purpose: "Ce bloc sert à expliquer le rôle exact d'OpenAI. L'API ne doit pas recevoir toute la base, seulement ce qui est utile à la question.",
    method: "On crée une clé API, on la garde côté serveur, on prépare une route qui reçoit la question, on ajoute les chunks, puis on appelle le modèle. Le navigateur ne voit jamais la clé.",
    example: "Exemple : la route serveur reçoit « Quels documents fournir ? » et trois chunks. Elle demande à OpenAI de répondre en trois phrases et d'indiquer si l'information est incomplète.",
    business: "L'API est le moteur de rédaction. La valeur vient de la combinaison : données propres, contexte pertinent, règles de réponse et suivi.",
    risk: "Le risque est d'exposer la clé ou d'envoyer trop de données inutiles."
  },
  "16": {
    scene: "Le choix du modèle doit rester pragmatique. Vous ne devez pas vous perdre dans une comparaison infinie. Pour un prototype, on choisit un modèle texte fiable et économique, puis un modèle d'embedding adapté à la recherche.",
    purpose: "Ce bloc sert à apprendre à arbitrer. Un bon Business Developer ne dit pas juste « on prend le meilleur modèle ». Il explique coût, qualité, rapidité et usage.",
    method: "On vérifie la page officielle des modèles. On choisit un modèle texte pour répondre, par exemple un modèle GPT récent adapté au budget, et text-embedding-3-small pour une version pédagogique des embeddings.",
    example: "Exemple : pour une démo, un modèle mini peut suffire. Pour une réponse très sensible ou très qualitative, on peut justifier un modèle plus avancé.",
    business: "Le choix du modèle devient un argument de pilotage des coûts.",
    risk: "Le risque est de promettre un prix fixe sans connaître le volume de questions ni le modèle réellement utilisé."
  },
  "17": {
    scene: "La sécurité n'est pas un chapitre à la fin. Elle commence dès que l'équipe crée une clé API ou une clé Supabase. Une clé exposée peut permettre à quelqu'un d'utiliser le compte ou d'accéder à des données.",
    purpose: "Ce bloc sert à donner des règles simples et non négociables. Vous n'avez pas besoin de devenir experts sécurité, mais vous devez connaître les gestes dangereux.",
    method: "On garde les clés côté serveur, on utilise des variables d'environnement, on évite les captures d'écran de secrets, on limite les droits, on active les règles d'accès Supabase et on renouvelle une clé exposée.",
    example: "Exemple : si une clé apparaît dans un fichier public sur GitHub, on la considère compromise et on la régénère immédiatement.",
    business: "La sécurité protège la confiance. Un client accepte plus facilement un POC quand les limites sont claires.",
    risk: "Le risque est de dire « ce n'est qu'une démo » et de négliger les secrets."
  },
  "18": {
    scene: "La réponse IA doit être cadrée. Le chatbot n'est pas là pour remplir le silence. Il doit répondre quand le contexte suffit, dire quand l'information manque, et proposer une action utile.",
    purpose: "Ce bloc sert à écrire les règles de comportement du chatbot. Sans prompt système, le modèle peut répondre de manière trop générale.",
    method: "On rédige un prompt système avec le rôle, le ton, les limites, les règles de source, les cas d'escalade et le format de réponse. Puis on teste avec des questions faciles et difficiles.",
    example: "Exemple : si la base ne contient pas le tarif, le chatbot ne doit pas inventer. Il doit dire que le tarif n'est pas disponible dans les documents fournis.",
    business: "Une réponse honnête vaut mieux qu'une réponse impressionnante mais risquée.",
    risk: "Le risque est d'obtenir une réponse fluide mais non vérifiable."
  },
  "19": {
    scene: "Tester le chatbot, ce n'est pas juste vérifier qu'il répond. Il faut vérifier qu'il répond bien, avec le bon contexte, au bon niveau de confiance, et qu'il sait refuser quand la base ne suffit pas.",
    purpose: "Ce bloc sert à donner une méthode qualité. Vous devez montrer que vous avez testé, pas seulement que vous avez cliqué.",
    method: "On prépare dix questions : simples, ambiguës, pièges et hors base. Pour chaque question, on note le résultat attendu, la réponse obtenue, les chunks utilisés et la correction à faire.",
    example: "Exemple : une question hors base doit produire une réponse de refus contrôlé. Si le chatbot invente, le groupe corrige le prompt ou la recherche.",
    business: "Les tests donnent confiance à Baptiste et au client. Ils montrent que votre équipe sait piloter la qualité.",
    risk: "Le risque est de préparer uniquement des questions faciles qui font bien paraître la démo."
  },
  "20": {
    scene: "Le dashboard donne une vie commerciale au chatbot. Sans dashboard, le projet est une interface. Avec dashboard, il devient un outil de pilotage : on voit les questions fréquentes, les réponses manquantes et les sujets à améliorer.",
    purpose: "Ce bloc sert à relier technique et business. Vous devez montrer que le chatbot peut produire des indicateurs.",
    method: "On affiche des KPI simples : nombre de questions, taux de réponse trouvée, sujets fréquents, questions sans réponse, feedback, temps gagné estimé et prochaine action.",
    example: "Exemple : si 40 % des questions concernent le prix, l'équipe commerciale sait qu'il faut améliorer la fiche offre ou créer une page dédiée.",
    business: "Le dashboard aide à défendre le ROI et la maintenance mensuelle.",
    risk: "Le risque est de créer un dashboard décoratif sans décision associée."
  },
  "21": {
    scene: "La valeur se défend avec des preuves. Le groupe doit passer de « notre chatbot fonctionne » à « voici pourquoi il mérite un budget ». Cette étape transforme la démo en proposition commerciale.",
    purpose: "Ce bloc sert à préparer la négociation. Vous devez défendre le prix, la marge et les contreparties.",
    method: "On relie chaque fonction à une valeur : gain de temps, qualité, traçabilité, réduction des erreurs, connaissance centralisée, pilotage. Puis on prépare les concessions possibles et les lignes rouges.",
    example: "Exemple : si le client demande 25 % de remise, le groupe peut proposer de réduire le périmètre, d'obtenir un engagement plus long ou de cadrer un pilote payant.",
    business: "La valeur est le coeur du challenge Business Developer.",
    risk: "Le risque est de répondre au prix par une remise immédiate."
  },
  "22": {
    scene: "Baptiste joue un client exigeant. Il va challenger le prix, la sécurité, Codex, Supabase, le POC gratuit et la fiabilité. Vous devez vous entraîner avant d'arriver en soutenance.",
    purpose: "Ce bloc sert à transformer la préparation en posture. Une bonne démo ne suffit pas si l'équipe s'effondre aux objections.",
    method: "On prépare des objections courtes, puis des réponses structurées : écouter, reformuler, revenir à la valeur, poser une condition, proposer la prochaine étape.",
    example: "Exemple : à « pourquoi payer si Codex code ? », la réponse est : Codex accélère la production, mais le client paie le cadrage, la sécurité, les données, les tests, la maintenance et la responsabilité.",
    business: "Le role play montre la maturité commerciale.",
    risk: "Le risque est de se défendre trop vite ou de critiquer le concurrent au lieu de défendre sa valeur."
  },
  "23": {
    scene: "La fin doit être très claire. Baptiste doit repartir avec quatre idées : le problème est compris, le prototype fonctionne, la méthode est sérieuse, et la négociation est maîtrisée.",
    purpose: "Ce bloc sert à préparer le rendu final. Vous devez organiser votre soutenance comme une histoire, pas comme une liste de fichiers.",
    method: "On présente le contexte, la solution, la démo, l'architecture, les tests, le dashboard, les risques, la valeur et la proposition de négociation. Chaque partie doit durer peu de temps mais être précise.",
    example: "Exemple : la conclusion peut être : « Nous avons construit un chatbot texte connecté à Supabase, capable de répondre à partir de documents validés, et nous avons défini les conditions commerciales pour le déployer proprement. »",
    business: "Le livrable final doit prouver autant la compétence commerciale que la compréhension technique.",
    risk: "Le risque est de montrer l'application sans expliquer les choix, les limites et le plan de suite."
  }
};

const projectFrame = {
  mission: "Vous construisez un chatbot IA texte pour le site VISION IA. Le visiteur arrive avec un besoin parfois flou, explique son entreprise, puis le chatbot l'aide à trouver une première piste d'automatisation.",
  visionia: "Le chatbot doit connaître VISION IA : ce que l'agence propose, la façon de cadrer un projet, les exemples d'automatisation, les limites à annoncer, le ton à utiliser et les prochaines étapes à proposer.",
  prospect: "Le chatbot doit aussi comprendre le prospect : son métier, son site internet, ses outils, ses tâches répétitives, le volume de demandes, les irritants du quotidien et le niveau de maturité de son équipe.",
  final: "À la fin, Baptiste doit voir une histoire simple : le prospect parle, le chatbot comprend, Supabase retrouve les bons éléments, OpenAI formule la réponse, et l'application propose une suite logique."
};

const blockFocus = {
  "01": {
    story: "Vous ouvrez l'histoire avec un visiteur qui arrive sur le site VISION IA. Il ne vient pas forcément chercher un outil technique. Il vient surtout avec une fatigue : trop de messages, trop de relances, trop de copier-coller, trop de questions qui reviennent. Votre première mission est de montrer que le chatbot ne vend pas une solution au hasard. Il écoute, il comprend, puis il oriente.",
    why: "Ce bloc sert à expliquer pourquoi ce projet existe. Si vous dites seulement “on fait un chatbot”, on ne comprend pas assez le besoin. Si vous dites “on aide les prospects de VISION IA à trouver l'automatisation qui leur correspond”, le projet devient tout de suite plus facile à suivre.",
    actions: ["Écrire le scénario du visiteur en une phrase.", "Lister les automatisations possibles chez VISION IA.", "Lister les informations à demander au prospect.", "Préparer une phrase de présentation à dire à Baptiste."],
    proof: "Une slide ou un écran qui montre le parcours : visiteur, besoin, questions, recommandation, prochaine étape.",
    example: "Exemple : un dirigeant d'hôtel explique qu'il reçoit beaucoup de questions sur les chambres et les horaires. Le chatbot ne répond pas juste “faites un chatbot”. Il propose un assistant client qui répond aux FAQ, récupère les dates et transmet les demandes particulières."
  },
  "02": {
    story: "Ici, vous transformez l'idée en périmètre de travail. Le chatbot VISION IA doit avoir une interface, poser des questions, récupérer des informations dans Supabase, répondre avec OpenAI et garder des traces. Il ne doit pas tout faire. Il doit faire peu de choses, mais les faire de manière claire.",
    why: "Ce bloc sert à éviter de partir trop large. En trois jours, vous devez construire une version qui raconte bien le fonctionnement. Le visiteur doit comprendre ce que VISION IA peut faire pour lui, et Baptiste doit comprendre votre logique.",
    actions: ["Définir les 5 fonctions minimum du prototype.", "Choisir 3 parcours prospects à tester.", "Écrire ce qui est hors périmètre.", "Préparer une démo courte et facile à rejouer."],
    proof: "Une liste de fonctionnalités avec deux colonnes : demandé dans le challenge, non demandé dans le challenge.",
    example: "Exemple : parcours 1, un hôtel ; parcours 2, une agence immobilière ; parcours 3, une PME qui reçoit beaucoup de demandes commerciales. Chaque parcours doit finir par une recommandation simple."
  },
  "03": {
    story: "L'architecture raconte ce qui se passe quand le prospect écrit au chatbot. La question part de l'interface. L'application récupère le profil du prospect, cherche les bons chunks VISION IA dans Supabase, envoie le contexte à OpenAI, puis affiche une réponse claire avec les sources utilisées.",
    why: "Ce bloc sert à rendre la partie technique compréhensible. Vous devez pouvoir l'expliquer sans perdre Baptiste dans les mots compliqués. L'idée est simple : Supabase garde la mémoire, OpenAI aide à rédiger, l'interface rend le conseil lisible.",
    actions: ["Dessiner les quatre boîtes principales.", "Ajouter deux sources : base VISION IA et infos prospect.", "Montrer où la clé OpenAI est utilisée.", "Montrer où les logs sont stockés."],
    proof: "Un schéma avec les flèches : question, recherche, réponse, recommandation, log.",
    example: "Exemple : si le prospect écrit “je veux automatiser mes relances”, l'application ne répond pas directement. Elle cherche d'abord les offres VISION IA liées aux relances et les infos du prospect."
  },
  "04": {
    story: "Le planning doit aider votre équipe à avancer sans se disperser. Jour 1 : vous comprenez l'histoire et préparez les données. Jour 2 : vous demandez à Codex de construire l'application et vous branchez Supabase. Jour 3 : vous testez, améliorez l'interface et préparez l'échange avec Baptiste.",
    why: "Ce bloc sert à vous donner un rythme. Si vous gardez tout pour la fin, la présentation devient stressante. Si chaque jour produit une preuve visible, vous pourrez raconter votre progression tranquillement.",
    actions: ["Fixer un résultat visible pour chaque jour.", "Réduire le périmètre si une étape bloque.", "Préparer les tests dès le jour 1.", "Garder du temps pour l'oral et les objections."],
    proof: "Une mini roadmap avec livrable attendu à la fin de chaque journée.",
    example: "Exemple : à la fin du jour 1, vous avez déjà les sources VISION IA, les questions prospect et le prompt maître. Même si l'application n'existe pas encore, la logique est claire."
  },
  "05": {
    story: "Avant de construire, vous préparez les accès. Codex Desktop sert à créer l'application avec des demandes en langage naturel. Supabase sert à stocker les infos VISION IA, les infos prospects, les chunks et les logs. OpenAI API sert à générer les réponses. L'abonnement ChatGPT aide pour Codex, mais l'API reste un sujet séparé.",
    why: "Ce bloc sert à éviter les confusions. Un abonnement ChatGPT Plus peut suffire pour travailler dans Codex Desktop selon les accès du compte, mais il ne remplace pas une clé API OpenAI utilisée par l'application.",
    actions: ["Lister les comptes nécessaires.", "Noter ce qui sert à construire et ce qui sert à faire tourner l'application.", "Expliquer où trouver l'URL Supabase.", "Expliquer où garder les clés sans les montrer."],
    proof: "Une slide outils : Codex Desktop, Supabase, OpenAI API, hébergement, rôle de chaque outil.",
    example: "Exemple : vous pouvez dire “Codex m'aide à construire, Supabase garde les données, OpenAI rédige la réponse, et mon rôle est de cadrer, vérifier et présenter.”"
  },
  "06": {
    story: "Codex Desktop est votre atelier de construction. Vous n'avez pas besoin de commencer par le terminal. Vous écrivez ce que vous voulez, vous donnez le contexte VISION IA, vous demandez une interface, une base, des routes API, puis vous lisez ce que Codex propose.",
    why: "Ce bloc sert à apprendre à bien demander. Codex travaille mieux quand vous expliquez le but, le style, les outils, les limites et ce que vous voulez tester. Une demande vague donne souvent un résultat vague.",
    actions: ["Ouvrir le dossier projet dans Codex Desktop.", "Écrire une demande avec contexte, objectif, contraintes et résultat attendu.", "Demander une explication des fichiers créés.", "Tester dans le navigateur après chaque grande étape."],
    proof: "Un prompt Codex propre + une capture de l'écran créé + une explication courte des fichiers.",
    example: "Exemple : au lieu de “fais un chatbot”, écrivez “crée une page de chatbot VISION IA avec trois questions prospect, une zone sources Supabase, un état de chargement et une réponse orientée automatisation.”"
  },
  "07": {
    story: "Le dossier projet doit rester lisible. Vous devez savoir où se trouve l'interface, où se trouve la connexion Supabase, où se trouve l'appel OpenAI, où se trouve la logique de recommandation et où sont préparés les tests.",
    why: "Ce bloc sert à éviter le désordre. Si votre projet est bien rangé, vous pouvez expliquer, corriger et améliorer. Si tout est mélangé, vous perdez du temps et la démo devient difficile à défendre.",
    actions: ["Demander une structure de fichiers simple à Codex.", "Séparer interface, services, API, données et styles.", "Demander un résumé du rôle de chaque fichier.", "Garder un fichier de prompts et un fichier de tests."],
    proof: "Une capture ou une liste des fichiers avec une phrase simple pour chacun.",
    example: "Exemple : un fichier pour le chat, un fichier pour Supabase, un fichier pour OpenAI, un fichier pour les prompts, un fichier pour le dashboard."
  },
  "08": {
    story: "Le prompt maître est le brief que vous donnez à Codex. Il doit dire que le projet concerne VISION IA, que le chatbot aide les prospects à trouver une automatisation, qu'il n'y a pas de vocal, que les clés doivent rester côté serveur et que le ton doit être amical.",
    why: "Ce bloc sert à donner une direction commune à toute l'équipe. Sans prompt maître, Codex peut créer une application trop générale. Avec un bon brief, chaque écran et chaque fonction reste relié à l'histoire VISION IA.",
    actions: ["Écrire le rôle du chatbot.", "Écrire les données à utiliser.", "Écrire les limites à respecter.", "Demander à Codex de tout expliquer simplement."],
    proof: "Un prompt maître affiché dans la présentation et utilisé pour créer le prototype.",
    example: "Exemple : “Le chatbot doit demander le secteur, le site, les outils actuels, les tâches répétitives et le volume de demandes avant de proposer une automatisation.”"
  },
  "09": {
    story: "Le design doit donner envie de parler au chatbot. Un prospect VISION IA doit comprendre rapidement quoi écrire, voir que ses réponses sont utilisées, et lire une recommandation simple. Le design ne doit pas cacher la logique : questions, sources, recommandation, prochaine étape.",
    why: "Ce bloc sert à rendre le prototype facile à utiliser. Un bon design aide Baptiste à voir la valeur sans attendre une longue explication.",
    actions: ["Créer une zone chat lisible.", "Ajouter des boutons de questions pour démarrer.", "Afficher les sources utilisées.", "Ajouter une carte de recommandation avec une prochaine action."],
    proof: "Une démo où un prospect peut cliquer, répondre et obtenir une piste d'automatisation.",
    example: "Exemple : après la réponse, une carte affiche “Automatisation proposée : assistant de qualification + résumé email + rendez-vous avec Baptiste.”"
  },
  "10": {
    story: "Supabase devient la mémoire du chatbot VISION IA. On y range les sources de l'agence, les chunks, les profils prospects, les questions, les réponses, les recommandations et les retours de test.",
    why: "Ce bloc sert à montrer que le chatbot ne répond pas au hasard. Il utilise une base que vous pouvez lire, améliorer et contrôler.",
    actions: ["Créer le projet Supabase.", "Aller dans SQL Editor.", "Coller un schéma préparé par Codex.", "Retrouver l'URL du projet et les clés utiles."],
    proof: "Une capture des tables Supabase ou une liste des tables créées avec leur rôle.",
    example: "Exemple : la table visionia_sources garde les pages et offres VISION IA ; prospect_profiles garde les infos du visiteur ; chat_logs garde les échanges."
  },
  "11": {
    story: "Le schéma de base doit représenter l'histoire du projet. Il ne suffit pas d'avoir documents et chunks. Il faut aussi prévoir les profils prospects et les recommandations, car le chatbot doit faire le lien entre VISION IA et l'entreprise qui demande de l'aide.",
    why: "Ce bloc sert à rendre les données visibles. Si vous savez expliquer chaque table, vous montrez que le chatbot est pensé comme un outil qui peut s'améliorer.",
    actions: ["Créer les tables visionia_sources, chunks, prospect_profiles, automation_recommendations et chat_logs.", "Ajouter des dates et des catégories.", "Ajouter un champ source_url.", "Prévoir un champ confidence ou statut pour suivre la qualité."],
    proof: "Un schéma Supabase avec les tables et une phrase de rôle pour chacune.",
    example: "Exemple : automation_recommendations peut garder le besoin détecté, l'automatisation proposée, les raisons, les questions manquantes et la prochaine étape."
  },
  "12": {
    story: "Vous récupérez maintenant les informations sur VISION IA. Le chatbot doit connaître l'agence avant de conseiller un prospect. Vous pouvez partir des pages du site, des offres, des exemples, des FAQ, des messages commerciaux validés, des limites et du ton que Baptiste veut utiliser.",
    why: "Ce bloc sert à donner une base saine au chatbot. S'il ne connaît pas VISION IA, il donnera des conseils génériques. S'il connaît bien l'agence, il peut orienter le prospect vers une suite cohérente.",
    actions: ["Lister les pages utiles du site VISION IA.", "Copier les contenus publics ou validés.", "Classer les informations par offre, secteur, exemple, limite et prochaine étape.", "Importer seulement ce qui est clair et à jour."],
    proof: "Une table visionia_sources avec titre, URL, catégorie, texte et statut de validation.",
    example: "Exemple : une source “chatbot de qualification” explique à quoi ça sert, pour qui c'est utile, quelles infos récupérer et quand transférer à un humain."
  },
  "13": {
    story: "Vous récupérez ensuite les informations sur le prospect. Le chatbot doit poser des questions simples : quel est votre secteur, quel est votre site, combien de demandes recevez-vous, quels outils utilisez-vous, quelles tâches vous prennent le plus de temps, qu'est-ce qui vous ferait gagner du temps dès maintenant ?",
    why: "Ce bloc sert à éviter les recommandations trop rapides. Une automatisation doit partir du quotidien du prospect, pas seulement de l'offre disponible.",
    actions: ["Créer un mini formulaire conversationnel.", "Prévoir 6 à 8 questions prospect.", "Stocker les réponses dans prospect_profiles.", "Demander au chatbot de reformuler le besoin avant de recommander."],
    proof: "Un exemple de profil prospect rempli après une conversation.",
    example: "Exemple : “Secteur : hôtel. Outils : Gmail et PMS. Irritant : questions répétitives. Volume : 40 messages par jour. Priorité : répondre plus vite sans perdre la relation client.”"
  },
  "14": {
    story: "La recherche relie les deux mondes. D'un côté, il y a les chunks VISION IA. De l'autre, il y a le profil du prospect. Le chatbot cherche les contenus les plus proches du besoin, puis il prépare une réponse qui explique pourquoi cette automatisation est adaptée.",
    why: "Ce bloc sert à montrer le coeur du RAG. Le chatbot ne se contente pas de parler. Il va chercher le bon contexte avant de répondre.",
    actions: ["Commencer par une recherche par mots-clés si besoin.", "Expliquer les embeddings si vous allez plus loin.", "Comparer la question du prospect avec les chunks VISION IA.", "Afficher les sources utilisées dans la réponse."],
    proof: "Une démo où une question récupère 2 ou 3 chunks pertinents avant la réponse.",
    example: "Exemple : “hôtel + questions répétitives + réservation” doit retrouver les chunks liés à assistant client, FAQ, transfert humain et qualification de demande."
  },
  "15": {
    story: "L'API OpenAI intervient après la recherche. Elle reçoit la question, le profil prospect, les chunks VISION IA et les règles de réponse. Elle ne doit pas recevoir toute la base sans tri. Elle doit aider à formuler une réponse claire et utile.",
    why: "Ce bloc sert à comprendre le rôle exact de l'API. OpenAI n'est pas la base de données. OpenAI écrit la réponse à partir du contexte sélectionné.",
    actions: ["Créer la clé API dans le dashboard OpenAI.", "La garder côté serveur.", "Créer une route qui reçoit question + chunks.", "Retourner une réponse courte avec sources et prochaine étape."],
    proof: "Une route serveur ou une explication claire montrant que la clé n'apparaît jamais dans le navigateur.",
    example: "Exemple : le serveur envoie à OpenAI “Voici le profil prospect, voici les chunks VISION IA, réponds en 5 phrases et propose une prochaine question.”"
  },
  "16": {
    story: "Le choix du modèle doit rester simple. Pour un prototype, vous pouvez choisir un modèle léger et rapide si votre compte API y a accès. Pour une réponse plus fine, vous pouvez justifier un modèle plus avancé. Pour la recherche, vous utilisez un modèle d'embedding, puis vous gardez le même modèle pour les documents et les questions.",
    why: "Ce bloc sert à apprendre à choisir sans se perdre. Le bon choix dépend du coût, de la qualité attendue, du volume de questions et du temps de réponse.",
    actions: ["Vérifier la page officielle des modèles OpenAI.", "Choisir un modèle texte pour répondre.", "Choisir text-embedding-3-small pour une version pédagogique de la recherche.", "Noter que les prix et noms peuvent changer."],
    proof: "Une slide “modèle choisi / raison / coût à vérifier / limite”.",
    example: "Exemple : gpt-5.4-mini peut être présenté comme option plus économique si disponible, et gpt-5.5 comme option plus qualitative pour les cas plus complexes. Vous vérifiez toujours la page officielle avant de figer le choix."
  },
  "17": {
    story: "La sécurité doit rester simple à comprendre. Le prospect confie des informations sur son entreprise. VISION IA garde des sources de travail. Les clés OpenAI et Supabase ouvrent des accès. Vous devez donc montrer que rien de sensible n'est exposé dans l'interface.",
    why: "Ce bloc sert à rassurer sans faire peur. Vous n'avez pas besoin de faire un cours de cybersécurité. Vous devez connaître les gestes à ne jamais faire.",
    actions: ["Ne jamais afficher les clés dans le navigateur.", "Ne jamais mettre service_role côté client.", "Masquer les secrets dans les captures.", "Prévoir une charte de données et de validation humaine."],
    proof: "Une mini-charte sécurité avec clés, données prospect, sources VISION IA, logs et validation humaine.",
    example: "Exemple : si une clé apparaît dans GitHub ou dans une capture publique, elle doit être révoquée et remplacée."
  },
  "18": {
    story: "La réponse du chatbot doit être une recommandation, pas un long discours. Elle doit reformuler le besoin du prospect, dire ce que VISION IA peut proposer, expliquer pourquoi, indiquer ce qui manque encore, puis proposer une prochaine étape avec Baptiste.",
    why: "Ce bloc sert à transformer la réponse IA en expérience utile. Le prospect doit repartir avec une piste claire, pas avec une réponse générale.",
    actions: ["Écrire un prompt système orienté conseil.", "Forcer la reformulation du besoin.", "Demander une recommandation en 3 parties.", "Prévoir une escalade humaine quand l'information manque."],
    proof: "Une réponse de test avec besoin compris, automatisation proposée, raisons, limites et prochaine étape.",
    example: "Exemple : “Votre priorité semble être le tri des demandes entrantes. Je vous propose un assistant de qualification relié à votre email ou CRM. Il faudra confirmer vos outils actuels avant de cadrer le POC.”"
  },
  "19": {
    story: "Les tests doivent ressembler à de vrais visiteurs. Il faut tester un hôtel, une agence immobilière, une PME de services, un prospect qui ne sait pas quoi demander, et une question hors périmètre. Le but est de voir si le chatbot garde une réponse calme et utile.",
    why: "Ce bloc sert à vérifier la qualité. Une démo qui marche seulement avec une question préparée ne suffit pas. Vous devez montrer que vous avez essayé plusieurs cas.",
    actions: ["Préparer 10 questions de test.", "Noter le résultat attendu.", "Comparer les chunks récupérés.", "Corriger le prompt ou les sources quand la réponse est faible."],
    proof: "Un tableau de tests avec question, réponse obtenue, statut, correction à faire.",
    example: "Exemple : une question “Pouvez-vous automatiser tout mon hôtel ?” doit être recadrée : le chatbot propose de commencer par les demandes répétitives et de garder les cas sensibles pour l'équipe."
  },
  "20": {
    story: "Le dashboard montre ce que le chatbot apprend des visiteurs. Il peut afficher les secteurs les plus fréquents, les automatisations demandées, les questions sans réponse, les sources à améliorer et les prospects qui méritent une suite commerciale.",
    why: "Ce bloc sert à relier le prototype au pilotage commercial. Pour VISION IA, le chatbot n'est pas seulement une interface. Il devient aussi un moyen de comprendre les demandes qui arrivent sur le site.",
    actions: ["Afficher le nombre de conversations.", "Classer les demandes par type d'automatisation.", "Repérer les questions sans réponse.", "Afficher les prospects à rappeler ou à qualifier."],
    proof: "Un mini dashboard avec KPI et prochaine action.",
    example: "Exemple : si beaucoup de visiteurs demandent “automatiser mes emails”, Baptiste sait qu'il peut créer une page ou une offre dédiée autour de ce besoin."
  },
  "21": {
    story: "La valeur du projet se raconte simplement : le chatbot aide VISION IA à mieux accueillir les visiteurs, mieux comprendre les besoins, mieux orienter les demandes et préparer des échanges plus utiles avec les prospects.",
    why: "Ce bloc sert à défendre le projet sans brader. Vous ne vendez pas seulement une interface. Vous vendez une meilleure qualification, une meilleure expérience et une meilleure préparation commerciale.",
    actions: ["Relier chaque fonction à un bénéfice.", "Préparer les objections sur le prix.", "Préparer les contreparties en cas de remise.", "Montrer pourquoi un POC doit être cadré."],
    proof: "Une matrice valeur / fonction / preuve / objection.",
    example: "Exemple : si le client veut un POC gratuit, vous pouvez proposer un mini audit gratuit, mais garder le prototype ou le paramétrage en prestation payante."
  },
  "22": {
    story: "Baptiste jouera le rôle du client et sera le seul jury. Il va regarder si vous avez compris VISION IA, si votre chatbot aide vraiment un prospect, si votre architecture tient debout, et si vous savez expliquer les limites avec calme.",
    why: "Ce bloc sert à préparer l'échange final. Vous devez parler comme une équipe qui comprend le besoin, pas comme une équipe qui récite une liste de fonctionnalités.",
    actions: ["Préparer 5 objections de Baptiste.", "Répondre avec besoin, valeur, limite et prochaine étape.", "Faire une répétition de 10 minutes.", "Prévoir qui parle pendant chaque partie."],
    proof: "Une fiche objections / réponses avec phrases courtes.",
    example: "Exemple : à “pourquoi payer si Codex aide à construire ?”, vous répondez que Codex aide à produire, mais que le vrai travail est le cadrage, les données, les tests, la sécurité et l'adaptation au métier du client."
  },
  "23": {
    story: "La fin doit raconter tout le chemin. Un prospect arrive sur le site VISION IA, il explique son entreprise, le chatbot récupère les bonnes infos, propose une automatisation, garde des traces et prépare la prochaine étape commerciale.",
    why: "Ce bloc sert à organiser le rendu final. Baptiste doit voir une démo, mais aussi comprendre votre méthode et votre capacité à expliquer.",
    actions: ["Présenter le problème en 30 secondes.", "Montrer la démo du chatbot.", "Montrer Supabase et les sources.", "Montrer les tests, le dashboard, les limites et la proposition commerciale."],
    proof: "Une soutenance structurée : problème, solution, démo, données, sécurité, valeur, prochaine étape.",
    example: "Exemple : “Nous avons construit un chatbot texte qui aide les visiteurs de VISION IA à identifier une première automatisation, en croisant les infos de l'agence avec le contexte du prospect.”"
  }
};

function focusFor(block) {
  return blockFocus[block.id] || blockFocus["01"];
}

const families = [
  {
    title: "1. Comprendre",
    text: "On pose l'histoire VISION IA, le besoin du prospect et la logique du chatbot conseiller avant de toucher aux outils.",
    blocks: ["01", "02", "03", "04"]
  },
  {
    title: "2. Préparer",
    text: "On prépare les comptes, les rôles, Codex Desktop, Supabase, OpenAI API et le prompt maître du projet.",
    blocks: ["05", "06", "07", "08"]
  },
  {
    title: "3. Construire",
    text: "On demande à Codex de créer l'application : interface du chatbot, infos VISION IA, infos prospect, base et design.",
    blocks: ["09", "10", "11", "12", "13"]
  },
  {
    title: "4. Connecter",
    text: "On relie Supabase et OpenAI API : chunks, recherche, recommandation, choix du modèle et sécurité des clés.",
    blocks: ["14", "15", "16", "17", "18"]
  },
  {
    title: "5. Défendre",
    text: "On transforme le prototype en histoire commerciale : tests, dashboard, valeur, échange avec Baptiste et livrables finaux.",
    blocks: ["19", "20", "21", "22", "23"]
  }
];

const blocks = [
  {
    id: "01",
    tag: "Projet",
    title: "Présentation du projet",
    card: "Un chatbot IA texte qui aide les visiteurs du site VISION IA à trouver la bonne automatisation.",
    family: "Comprendre",
    image: images.ai,
    accent: palettes[0],
    layout: "poster",
    visual: "flow",
    visualTitle: "Le chemin simple",
    steps: ["Un prospect", "Infos VISION IA", "Infos entreprise", "Une piste d'automatisation"],
    sections: [
      {
        title: "La phrase à dire dès le début",
        text: "On construit un chatbot IA texte pour le site VISION IA. Il ne parle pas en vocal. Il aide un visiteur à expliquer son besoin, puis il l'oriente vers une automatisation possible."
      },
      {
        title: "Ce que le chatbot doit savoir faire",
        bullets: [
          "Afficher une interface simple avec une zone de discussion.",
          "Poser des questions sur l'entreprise du prospect.",
          "Chercher les morceaux utiles sur VISION IA dans Supabase.",
          "Envoyer la question, le profil prospect et les chunks à l'API OpenAI.",
          "Répondre simplement avec une piste d'automatisation et une prochaine étape."
        ]
      },
      {
        title: "Ce que vous devez retenir",
        text: "Le prototype sert à montrer une méthode : comprendre VISION IA, comprendre le prospect, proposer une piste, tester la réponse, puis expliquer la valeur."
      }
    ],
    deliverable: "Une slide très claire : problème, solution, visiteur cible, infos VISION IA utilisées, infos prospect demandées, valeur attendue."
  },
  {
    id: "02",
    tag: "Mission",
    title: "Ce qu'il faut construire",
    card: "Une mini-application qui conseille un prospect à partir de son besoin et des offres VISION IA.",
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
          "Une base Supabase avec infos VISION IA, chunks, profils prospects et logs.",
          "Une réponse IA qui cite les contenus utilisés ou indique quand il manque une information.",
          "Un petit dashboard pour suivre les demandes, les recommandations et les sujets fréquents."
        ]
      },
      {
        title: "Ce qui n'est pas demandé",
        bullets: [
          "Pas de vocal.",
          "Pas de centre d'appel.",
          "Pas d'application finale en production.",
          "Pas de terminal à manipuler par vous.",
          "Pas de promesse juridique ou technique impossible."
        ]
      }
    ],
    warning: "Il faut éviter le piège classique : partir trop large. Un bon POC aide très bien sur quelques parcours prospects plutôt que de répondre mal à trop de sujets."
  },
  {
    id: "03",
    tag: "Architecture",
    title: "Comment ça marche",
    card: "Une architecture simple : interface, profil prospect, Supabase, OpenAI.",
    family: "Comprendre",
    image: images.data,
    accent: palettes[2],
    layout: "checker",
    visual: "flow",
    visualTitle: "Architecture",
    steps: ["Prospect", "App chatbot", "Supabase", "OpenAI API"],
    sections: [
      {
        title: "La version simple à expliquer",
        text: "Le navigateur affiche le chatbot. L'application reçoit la question et les réponses du prospect. Elle cherche dans Supabase les morceaux utiles sur VISION IA. Ensuite elle demande à OpenAI de répondre avec ce contexte."
      },
      {
        title: "La séparation importante",
        bullets: [
          "Supabase garde les infos VISION IA, les chunks, les profils prospects et les logs.",
          "OpenAI génère la réponse.",
          "Codex aide à construire l'application.",
          "Le Business Developer explique pourquoi cette organisation aide à conseiller sans partir au hasard."
        ]
      }
    ],
    prompt: "Explique-moi cette architecture comme si je devais la présenter à Baptiste. Fais simple : prospect, application, infos VISION IA, Supabase, OpenAI, sécurité."
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
    steps: ["Jour 1 : brief et cadrage", "Jour 2 : construction et tests", "Jour 3 : démo et échange", "Baptiste : présentation finale"],
    sections: [
      {
        title: "Jour 1",
        bullets: [
          "Comprendre le besoin VISION IA.",
          "Lister les infos VISION IA et les infos prospect à intégrer.",
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
          "Travailler les objections : prix, sécurité, utilité, limites.",
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
          "Un compte ChatGPT avec accès à Codex. Un plan de type Plus devrait suffire pour travailler dans Codex Desktop, selon les accès du compte.",
          "L'application Codex Desktop installée et connectée au compte ChatGPT.",
          "Un compte Supabase pour créer la base.",
          "Un compte plateforme OpenAI pour créer une clé API.",
          "Un dossier projet local ouvert dans Codex Desktop."
        ]
      },
      {
        title: "Le point très important",
        text: "L'abonnement ChatGPT sert à utiliser Codex. L'API OpenAI est facturée séparément quand l'application appelle un modèle. Il faut le dire clairement dès le début."
      }
    ],
    warning: "Ne jamais présenter le Plus comme un forfait API illimité. Plus aide à construire avec Codex. La consommation API du chatbot est un autre sujet."
  },
  {
    id: "06",
    tag: "Codex",
    title: "Utiliser Codex Desktop",
    card: "On parle à Codex comme à un développeur, sans vous demander d'ouvrir le terminal.",
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
    prompt: "Tu es mon développeur. Crée une application web simple de chatbot IA texte pour le site VISION IA. Le chatbot doit aider un prospect à trouver une automatisation adaptée à son entreprise. Je veux une interface claire, un espace chat, une connexion Supabase préparée, une route serveur pour OpenAI, et des explications dans le code. Les élèves ne doivent pas utiliser le terminal."
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
          "Une fonction d'ingestion pour transformer les infos VISION IA en chunks.",
          "Une logique pour enregistrer le profil du prospect.",
          "Une page dashboard simple pour lire les questions et les recommandations."
        ]
      },
      {
        title: "La consigne à répéter",
        text: "À chaque étape, demander à Codex : explique ce que tu as créé, où je dois cliquer, et ce que je dois vérifier visuellement."
      }
    ],
    prompt: "Crée la V1 du projet VISION IA avec une structure simple. Ajoute des commentaires courts aux endroits importants. Après chaque changement, explique-moi quoi tester dans le navigateur et quoi vérifier dans Supabase."
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
        text: "Le prompt maître donne la direction. Il évite que chaque équipe parte dans un style différent ou oublie le vrai but : aider les prospects de VISION IA à choisir une automatisation."
      },
      {
        title: "Ce qu'il doit contenir",
        bullets: [
          "Le rôle de Codex.",
          "Le produit à construire.",
          "Les outils autorisés.",
          "Les informations à connaître sur VISION IA.",
          "Les questions à poser au prospect.",
          "Les limites : pas de vocal, pas de terminal côté élève, pas de clé exposée.",
          "Le niveau de design attendu.",
          "Les livrables finaux."
        ]
      }
    ],
    prompt: "Nous construisons un chatbot IA texte pour le site VISION IA. Le chatbot doit aider un prospect à trouver une automatisation adaptée à son entreprise. Il doit utiliser des informations VISION IA stockées dans Supabase, poser des questions sur le métier du prospect, puis proposer une piste simple. Utilise Codex Desktop comme outil de construction, sans demander aux élèves d'utiliser le terminal. Prépare une app claire, colorée, responsive, avec un chat, une ingestion de sources VISION IA, des chunks, une recherche dans Supabase, une route serveur OpenAI, une page de tests et un mini-dashboard. Explique chaque étape avec des mots simples."
  },
  {
    id: "09",
    tag: "Design",
    title: "Créer le design du chatbot",
    card: "Une interface simple, rassurante et pensée pour aider un prospect à parler de son entreprise.",
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
          "Des questions guidées sur le secteur, les outils et les tâches répétitives.",
          "Une indication de statut : recherche dans la base, réponse en cours, information non trouvée.",
          "Une zone sources ou contexte utilisé.",
          "Une carte de recommandation avec prochaine étape."
        ]
      },
      {
        title: "Le style recommandé",
        text: "Il faut un design amical, moderne et coloré, mais pas confus. Le chatbot doit donner confiance : couleurs franches, titres simples, boutons clairs, espaces respirants."
      }
    ],
    prompt: "Améliore le design du chatbot VISION IA. Je veux une interface très visuelle, colorée, amicale et professionnelle. Ajoute des suggestions de questions prospect, un état de chargement, une zone sources utilisées, une carte de recommandation et une page mobile propre. Ne mets pas de texte long inutile."
  },
  {
    id: "10",
    tag: "Supabase",
    title: "Créer le projet Supabase",
    card: "La base garde les infos VISION IA, les profils prospects, les chunks et les logs.",
    family: "Construire",
    image: images.data,
    accent: palettes[9],
    layout: "playbook",
    visual: "flow",
    visualTitle: "Dans Supabase",
    steps: ["New project", "SQL editor", "Tables VISION IA", "API keys"],
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
    card: "Codex prépare le SQL. Vous collez le SQL dans Supabase et vous expliquez chaque table.",
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
          "visionia_sources : les pages, offres, FAQ et exemples VISION IA.",
          "prospect_profiles : les réponses du visiteur sur son entreprise.",
          "chunks : les petits morceaux de texte exploitables.",
          "automation_recommendations : la piste proposée et les raisons.",
          "chat_logs : les questions, réponses et erreurs.",
          "feedback : les notes ou remarques après test.",
          "settings : quelques réglages simples du chatbot."
        ]
      },
      {
        title: "Comment le présenter simplement",
        text: "Codex ne remplace pas Supabase. Codex prépare le schéma. Ensuite l'humain colle le SQL dans Supabase, vérifie les tables, puis redonne les informations utiles à Codex."
      }
    ],
    prompt: "Prépare un schéma Supabase simple pour le chatbot conseiller VISION IA. Je veux les tables visionia_sources, chunks, prospect_profiles, automation_recommendations, chat_logs, feedback et settings. Ajoute les champs utiles, les dates, les index, et une explication très simple pour chaque table."
  },
  {
    id: "12",
    tag: "VISION IA",
    title: "Récupérer les infos VISION IA",
    card: "Le chatbot doit connaître l'agence, ses offres, ses exemples et sa façon de répondre.",
    family: "Construire",
    image: images.docs,
    accent: palettes[11],
    layout: "lab",
    visual: "flow",
    visualTitle: "Préparer la base VISION IA",
    steps: ["Site", "Offres", "Exemples", "FAQ"],
    sections: [
      {
        title: "Quelles informations utiliser",
        bullets: [
          "Les pages publiques du site VISION IA.",
          "Les offres et types d'automatisation proposés.",
          "Les exemples de cas clients ou secteurs possibles.",
          "Les questions fréquentes et les réponses déjà validées.",
          "Les limites : ce que le chatbot ne doit pas promettre."
        ]
      },
      {
        title: "La règle de qualité",
        text: "Une source floue donne une réponse floue. Avant de parler d'IA, il faut nettoyer le contenu : titres clairs, phrases courtes, doublons supprimés, informations à jour."
      }
    ],
    deliverable: "Une liste des sources VISION IA utilisées, avec leur rôle : présenter, rassurer, orienter, expliquer, escalader."
  },
  {
    id: "13",
    tag: "Prospect",
    title: "Récupérer les infos prospect",
    card: "Comprendre le métier du visiteur avant de lui proposer une automatisation.",
    family: "Construire",
    image: images.ai,
    accent: palettes[0],
    layout: "timeline",
    visual: "flow",
    visualTitle: "Profil prospect",
    steps: ["Secteur", "Site", "Outils", "Tâches répétitives"],
    sections: [
      {
        title: "Ce qu'il faut demander",
        text: "Le chatbot doit poser des questions simples : secteur, site internet, outils utilisés, volume de demandes, tâches répétitives, priorité du moment et prochaine étape souhaitée."
      },
      {
        title: "Une règle simple pour le challenge",
        bullets: [
          "On ne pose pas 30 questions d'un coup.",
          "On commence par le secteur et le problème principal.",
          "On demande les outils déjà utilisés : CRM, email, calendrier, formulaire, tableur.",
          "On reformule le besoin avant de recommander.",
          "On garde les réponses dans Supabase pour les relire pendant la démo."
        ]
      }
    ],
    prompt: "Crée un mini parcours de questions pour récupérer les informations du prospect : secteur, site, outils, tâches répétitives, volume de demandes, priorité et prochaine étape. Enregistre les réponses dans prospect_profiles et reformule le besoin avant la recommandation."
  },
  {
    id: "14",
    tag: "Recherche",
    title: "Retrouver les bons chunks",
    card: "Relier le besoin du prospect aux informations VISION IA avant de répondre.",
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
          "Pour un challenge de 3 jours, vous pouvez expliquer les deux et construire au moins une version simple."
        ]
      },
      {
        title: "La version embeddings",
        text: "On transforme chaque chunk en vecteur. Quand le prospect pose une question, on transforme aussi la question en vecteur. Supabase compare les vecteurs et retourne les chunks les plus proches."
      }
    ],
    prompt: "Ajoute une recherche de chunks VISION IA. Si l'embedding est prêt, utilise pgvector et une fonction match_documents. Sinon, crée une recherche simple par mots-clés pour que la démo fonctionne quand même. Affiche les sources utilisées."
  },
  {
    id: "15",
    tag: "OpenAI",
    title: "Connecter l'API OpenAI",
    card: "La clé API sert à générer la réponse du chatbot sans être visible dans le navigateur.",
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
          "Envoyer à OpenAI la question, le profil prospect et les chunks utiles.",
          "Retourner la réponse au chatbot."
        ]
      },
      {
        title: "Le message de sécurité",
        text: "La clé OpenAI ne doit jamais apparaître dans le code visible par le navigateur. Le navigateur parle à votre serveur. Le serveur parle à OpenAI."
      }
    ],
    prompt: "Branche l'API OpenAI côté serveur. Ne mets jamais la clé dans le navigateur. Utilise une variable OPENAI_API_KEY. La route doit recevoir une question, le profil du prospect et des chunks VISION IA, puis retourner une réponse simple avec recommandation et sources."
  },
  {
    id: "16",
    tag: "Modèles",
    title: "Quel modèle choisir",
    card: "Un choix simple : un modèle texte pour répondre, un modèle d'embedding pour rechercher.",
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
          "Prototype économique : utiliser un modèle mini récent si disponible dans le compte API, par exemple gpt-5.4-mini.",
          "Réponse plus qualitative : utiliser un modèle plus avancé, par exemple gpt-5.5 si disponible dans le compte API et si la qualité compte plus que le coût.",
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
    title: "Construire la recommandation IA",
    card: "La réponse doit reformuler le besoin, proposer une automatisation et rester honnête.",
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
          "Réponds avec les informations du contexte VISION IA et du prospect.",
          "Si l'information manque, dis-le simplement.",
          "Ne fais pas de promesse commerciale non validée.",
          "Propose une automatisation possible et une prochaine action utile.",
          "Garde un ton clair, naturel et professionnel."
        ]
      },
      {
        title: "Pourquoi c'est stratégique",
        text: "Un bon chatbot ne doit pas tout inventer pour avoir l'air intelligent. Il doit répondre quand il sait, demander une précision quand il manque une information, et proposer un échange humain quand c'est nécessaire."
      }
    ],
    prompt: "Écris le prompt système du chatbot VISION IA. Il doit répondre avec les chunks fournis, reformuler le besoin du prospect, proposer une automatisation possible, citer les sources internes quand possible, et dire franchement quand l'information manque."
  },
  {
    id: "19",
    tag: "Tests",
    title: "Tester le chatbot",
    card: "Une démo qui tient repose sur des tests simples et visibles.",
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
        text: "Vous préparez 10 questions : 5 simples, 3 ambiguës, 1 piège, 1 hors périmètre. C'est suffisant pour montrer une vraie méthode."
      }
    ],
    deliverable: "Un tableau de tests avec question, résultat attendu, réponse obtenue, statut et correction à faire."
  },
  {
    id: "20",
    tag: "Dashboard",
    title: "Piloter l'activité",
    card: "Le dashboard montre les besoins prospects et les prochaines actions pour VISION IA.",
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
          "Secteurs les plus fréquents.",
          "Types d'automatisation demandés.",
          "Taux de réponse trouvée dans la base.",
          "Questions sans réponse.",
          "Temps gagné estimé.",
          "Qualité moyenne après feedback."
        ]
      },
      {
        title: "Le lien avec le challenge Business Developer",
        text: "Ce dashboard sert à lire les demandes qui arrivent sur le site VISION IA. Il montre que le chatbot n'est pas juste une interface : c'est aussi un outil de suivi commercial."
      }
    ],
    prompt: "Crée une page dashboard simple avec les KPI du chatbot VISION IA : questions, secteurs, automatisations demandées, réponses trouvées, questions sans réponse, feedback et prochaine action."
  },
  {
    id: "21",
    tag: "Valeur",
    title: "Défendre la valeur",
    card: "Le prototype doit aider VISION IA à mieux qualifier les demandes sans brader.",
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
          "Le chatbot aide les prospects à mieux formuler leur besoin.",
          "Il oriente vers une première automatisation.",
          "Il capitalise les informations VISION IA.",
          "Il rend visibles les demandes fréquentes du site.",
          "Il garde une trace des questions et des limites."
        ]
      },
      {
        title: "La négociation",
        text: "Si le client demande une remise, vous répondez avec une contrepartie : durée d'engagement, périmètre réduit, témoignage client, paiement rapide ou pilote cadré."
      }
    ],
    warning: "Pas de remise gratuite. Pas de POC illimité. Pas d'engagement flou."
  },
  {
    id: "22",
    tag: "Role play",
    title: "Préparer l'échange avec Baptiste",
    card: "Vous devez savoir expliquer, défendre vos choix et répondre simplement aux objections.",
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
        text: "Rester calme, revenir au besoin, défendre le périmètre, expliquer la sécurité, puis proposer une prochaine étape claire."
      }
    ],
    prompt: "Joue le rôle de Baptiste, client VISION IA et seul jury du challenge. Challenge mon prix, la sécurité des données, le POC gratuit et l'intérêt du chatbot conseiller. Pose-moi des objections courtes et réalistes."
  },
  {
    id: "23",
    tag: "Livrables",
    title: "Ce qu'il faut rendre",
    card: "Une démo, une méthode, un dashboard et une proposition de suite pour VISION IA.",
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
          "Un exemple de sources VISION IA transformées en chunks.",
          "Un exemple de profil prospect rempli.",
          "Un dashboard de pilotage.",
          "Une matrice concessions / contreparties.",
          "Une charte d'usage responsable de l'IA.",
          "Un échange final avec Baptiste."
        ]
      },
      {
        title: "La phrase de conclusion",
        text: "Nous avons construit un prototype simple, mais surtout une méthode pour aider les visiteurs de VISION IA à trouver une automatisation adaptée à leur entreprise."
      }
    ],
    deliverable: "Une présentation courte : problème, solution, démo, résultats, risques, prix, prochaines étapes."
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
        <div class="family-text">${learnerText(family.text)}</div>
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
          <p>${learnerText(block.card)}</p>
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
        <p>${learnerText(block.card)}</p>
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
        ${renderLongTutorial(block)}
        ${renderSchemaSection(block)}
        ${renderPhotoGallery(block)}
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

function renderLongTutorial(block) {
  const chapter = chapterData[block.id] || chapterData["01"];
  const focus = focusFor(block);
  const steps = tutorialSteps(block, chapter);
  return `
    <section class="vision-context-panel">
      <p class="eyebrow">Fil rouge VISION IA</p>
      <h2>Le bloc dans l'histoire du chatbot conseiller</h2>
      <p class="context-lead">${projectFrame.mission}</p>
      <div class="context-columns">
        <article>
          <h3>Ce que le chatbot doit connaître chez VISION IA</h3>
          <p>${projectFrame.visionia}</p>
        </article>
        <article>
          <h3>Ce que le chatbot doit comprendre chez le prospect</h3>
          <p>${projectFrame.prospect}</p>
        </article>
      </div>
      <div class="focus-strip">
        <div>
          <h3>Dans ce bloc</h3>
          <p>${focus.story}</p>
        </div>
        <div>
          <h3>Pourquoi vous le faites</h3>
          <p>${focus.why}</p>
        </div>
      </div>
      <div class="focus-action-list">
        ${focus.actions.map((action) => `<span>${action}</span>`).join("")}
      </div>
      <div class="focus-proof">
        <b>Preuve à montrer</b>
        <p>${focus.proof}</p>
      </div>
    </section>

    <section class="story-panel">
      <p class="eyebrow">Chapitre ${block.id} / Histoire guidée</p>
      <h2>Comprendre l'étape avant de l'exécuter</h2>
      <div class="story-grid">
        <article>
          <h3>La scène</h3>
          <p>${learnerText(chapter.scene)}</p>
          <p>Ici, vous devez raconter ce moment comme une petite histoire. Ne dites pas seulement « on utilise ${block.tag} ». Expliquez ce qui vient juste avant, ce que le visiteur ou le client attend, et ce qui doit être vrai à la fin du bloc. Cette logique vous aide à ne pas empiler des outils. Vous construisez un chemin facile à suivre.</p>
        </article>
        <article>
          <h3>À quoi ça sert</h3>
          <p>${learnerText(chapter.purpose)}</p>
          <p>La question à vous poser est simple : si on supprime ce bloc, qu'est-ce que le projet perd ? La réponse doit être précise. Vous perdez de la clarté, de la qualité, de la sécurité, du pilotage ou de la valeur commerciale. Cette phrase vous oblige à relier chaque étape à une raison métier.</p>
        </article>
      </div>
    </section>

    <section class="tutorial-panel">
      <p class="eyebrow">Tutoriel étape par étape</p>
      <h2>Comment bien faire ce bloc</h2>
      <p>${learnerText(chapter.method)}</p>
      <ol class="tutorial-steps">
        ${steps.map((step) => `<li><b>${step.title}</b><span>${step.text}</span></li>`).join("")}
      </ol>
      <div class="example-box">
        <h3>Exemple simple pour vous entraîner</h3>
        <p>${focus.example}</p>
        <p>${learnerText(chapter.example)}</p>
        <p>Après l'exemple, reformulez avec vos propres mots. Si vous ne savez pas reformuler, c'est que l'étape n'est pas encore comprise. Gardez une structure simple : problème, action, résultat, preuve.</p>
      </div>
    </section>

    <section class="prompt-lab">
      <p class="eyebrow">Prompts de travail</p>
      <h2>Ce que vous pouvez demander à Codex et à ChatGPT</h2>
      <div class="prompt-grid">
        <div class="prompt-box">
          <h3>Prompt Codex Desktop</h3>
          <pre>${escapeHtml(buildCodexPrompt(block, chapter))}</pre>
        </div>
        <div class="prompt-box alt">
          <h3>Prompt préparation orale</h3>
          <pre>${escapeHtml(buildOralPrompt(block, chapter))}</pre>
        </div>
      </div>
      <p>Le but n'est pas de copier sans réfléchir. Le prompt sert à lancer le travail. Ensuite, vous devez lire la réponse, supprimer ce qui est trop compliqué, garder ce qui est utile et demander une version plus simple si nécessaire.</p>
    </section>

    <section class="quality-panel">
      <p class="eyebrow">Contrôle qualité</p>
      <h2>Comment vérifier que le bloc est réussi</h2>
      <div class="quality-grid">
        <article>
          <h3>Vérification produit</h3>
          <ul>
            <li>L'étape produit un résultat visible ou vérifiable.</li>
            <li>Vous savez montrer ce résultat en moins d'une minute.</li>
            <li>Le lien avec le chatbot est évident.</li>
          </ul>
        </article>
        <article>
          <h3>Vérification business</h3>
          <p>${learnerText(chapter.business)}</p>
          <p>Vous devez donc traduire le bloc en bénéfice client. Si votre phrase commence par « techniquement », réécrivez-la pour parler usage, sécurité, temps gagné, qualité ou décision.</p>
        </article>
        <article>
          <h3>Erreur à éviter</h3>
          <p>${learnerText(chapter.risk)}</p>
          <p>La meilleure protection est de garder une preuve : capture, table Supabase, réponse de test, mini-dashboard, schéma ou prompt validé.</p>
        </article>
      </div>
    </section>
  `;
}

function tutorialSteps(block, chapter) {
  const focus = focusFor(block);
  return [
    {
      title: "1. Poser le contexte",
      text: `Commencez par l'histoire VISION IA : ${focus.story} Cette phrase évite de présenter le bloc comme une action isolée.`
    },
    {
      title: "2. Dire l'objectif",
      text: `Formulez le résultat attendu avec des mots simples. Pour ce bloc, l'objectif est : ${focus.why}`
    },
    {
      title: "3. Faire l'action dans Codex ou dans l'outil",
      text: "Écrivez une demande précise dans Codex Desktop ou faites l'action dans l'outil concerné. Lisez ce qui est proposé, puis demandez une explication courte. Vous ne devez pas avancer sans comprendre ce qui a changé."
    },
    {
      title: "4. Vérifier avec une preuve",
      text: `La preuve attendue ici : ${focus.proof} Une étape sans preuve est trop fragile pour la présentation à Baptiste.`
    },
    {
      title: "5. Transformer en argument",
      text: "Finissez par une phrase commerciale : pourquoi cette étape aide VISION IA, rassure le prospect, améliore la qualité ou prépare la prochaine étape."
    }
  ];
}

function buildCodexPrompt(block, chapter) {
  const focus = focusFor(block);
  return `Nous construisons le chatbot conseiller IA du site VISION IA.

Mission générale : ${projectFrame.mission}

Nous travaillons sur le bloc ${block.id} : ${block.title}.

Contexte : ${chapter.scene}

Fil rouge du bloc : ${focus.story}

Objectif : ${focus.why}

Ce que je veux que tu fasses :
1. propose une action précise à réaliser dans l'application ;
2. explique à quoi cela sert pour le chatbot IA texte de VISION IA ;
3. donne les fichiers ou écrans concernés ;
4. garde une solution simple pour des Business Developer qui découvrent le sujet ;
5. ajoute une preuve à vérifier dans le navigateur ou dans Supabase ;
6. termine par une phrase que je peux dire à Baptiste.

Contraintes : pas de vocal, pas de clé API exposée côté navigateur, pas de terminal obligatoire pour les élèves, explications simples et progressives.`;
}

function buildOralPrompt(block, chapter) {
  const focus = focusFor(block);
  return `Aide-moi à présenter le bloc ${block.id} "${block.title}" à l'oral.

Je veux une explication très simple en 90 secondes :
- le problème ;
- pourquoi ce bloc est utile ;
- ce que nous avons fait ;
- un exemple simple ;
- le risque si on le fait mal ;
- la phrase commerciale à dire au client.

Contexte VISION IA à garder : ${focus.story}

Utilise un ton naturel, direct et amical. Ne fais pas trop technique.`;
}

function renderSchemaSection(block) {
  const chapter = chapterData[block.id] || chapterData["01"];
  const focus = focusFor(block);
  const steps = block.steps?.length ? block.steps : ["Cadrer", "Construire", "Tester", "Défendre"];
  return `
    <section class="schema-section">
      <p class="eyebrow">3 schémas à expliquer</p>
      <h2>Voir le bloc sous trois angles</h2>
      <div class="schema-grid">
        <article class="schema-card schema-flow-card">
          <h3>Schéma 1 / Parcours</h3>
          <div class="schema-flow">${steps.map((step) => `<span>${step}</span>`).join("<i>→</i>")}</div>
          <p>Ce schéma raconte l'ordre naturel. Il vous aide à présenter sans vous perdre.</p>
        </article>
        <article class="schema-card schema-decision-card">
          <h3>Schéma 2 / Décision</h3>
          <div class="decision-map">
            <span>Est-ce clair ?</span>
            <b>Oui</b>
            <em>On avance</em>
            <b>Non</b>
            <em>On simplifie</em>
          </div>
          <p>Ce schéma vous force à vérifier la compréhension avant de passer à la suite.</p>
        </article>
        <article class="schema-card schema-proof-card">
          <h3>Schéma 3 / Preuve</h3>
          <div class="proof-map">
            <span>Action</span>
            <span>Résultat</span>
            <span>Preuve</span>
            <span>Argument</span>
          </div>
          <p>${focus.proof}</p>
          <p>${learnerText(chapter.business)}</p>
        </article>
      </div>
    </section>
  `;
}

function renderPhotoGallery(block) {
  const gallery = galleryFor(block);
  return `
    <section class="photo-section">
      <p class="eyebrow">4 images pour raconter</p>
      <h2>Illustrer l'étape comme un vrai projet</h2>
      <div class="photo-gallery">
        ${gallery.map((photo, index) => `
          <figure class="photo-card">
            <img src="${photo.src}" alt="${photo.caption}" loading="lazy">
            <figcaption><b>Image ${index + 1}</b>${photo.caption}</figcaption>
          </figure>
        `).join("")}
      </div>
    </section>
  `;
}

function galleryFor(block) {
  const start = Number(block.id) % photoBank.length;
  return [0, 1, 2, 3].map((offset) => photoBank[(start + offset) % photoBank.length]);
}

function renderSections(block) {
  const sections = (block.sections || []).map((section) => {
    const body = section.bullets
      ? `<ul>${section.bullets.map((item) => `<li>${learnerText(item)}</li>`).join("")}</ul>`
      : `<p>${learnerText(section.text)}</p>`;
    return `<section><h2>${learnerText(section.title)}</h2>${body}</section>`;
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
        <pre>${escapeHtml(learnerText(block.prompt))}</pre>
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
        <p>${learnerText(block.warning)}</p>
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
    <h3>Ce que vous devez rendre</h3>
        <p>${learnerText(block.deliverable)}</p>
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

  bindLiveDemo();
}

function bindLiveDemo() {
  const messages = document.querySelector("#demoMessages");
  const input = document.querySelector("#demoInput");
  const send = document.querySelector("#demoSend");
  if (!messages || !input || !send) return;

  const runFromInput = () => {
    const raw = input.value.trim().toLowerCase();
    const key = raw.includes("hôtel") || raw.includes("hotel") || raw.includes("chambre") || raw.includes("réservation")
      ? "hotel"
      : raw.includes("vision") || raw.includes("agence") || raw.includes("offre") || raw.includes("site")
        ? "visionia"
        : "orientation";
    runDemoScenario(key);
  };

  send.addEventListener("click", runFromInput);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") runFromInput();
  });

  document.querySelectorAll("[data-demo-question]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.demoQuestion;
      input.value = demoScenarios[key].question;
      runDemoScenario(key);
    });
  });

  runDemoScenario("orientation", { instant: true });
}

function runDemoScenario(key, options = {}) {
  const scenario = demoScenarios[key] || demoScenarios.orientation;
  const messages = document.querySelector("#demoMessages");
  const sources = document.querySelector("#demoSources");
  const score = document.querySelector("#demoScore");
  const chunks = document.querySelector("#demoChunks");
  const time = document.querySelector("#demoTime");
  if (!messages || !sources || !score || !chunks || !time) return;

  setDemoStep("question");
  messages.innerHTML = `
    <div class="demo-bubble user">${scenario.question}</div>
    <div class="demo-bubble bot loading">Je reçois la question et je cherche dans la base Supabase...</div>
  `;
  sources.innerHTML = `<p class="demo-empty">Recherche des chunks en cours...</p>`;
  score.textContent = "…";
  chunks.textContent = "…";
  time.textContent = "…";

  const delay = options.instant ? 0 : 420;
  window.setTimeout(() => {
    setDemoStep("search");
    sources.innerHTML = scenario.chunks.map((chunk) => `
      <article>
        <b>${chunk.title}</b>
        <span>${chunk.score}</span>
        <p>${chunk.text}</p>
      </article>
    `).join("");
  }, delay);

  window.setTimeout(() => {
    setDemoStep("chunks");
    chunks.textContent = String(scenario.chunks.length);
    score.textContent = scenario.score;
  }, delay + 420);

  window.setTimeout(() => {
    setDemoStep("answer");
    messages.innerHTML = `
      <div class="demo-bubble user">${scenario.question}</div>
      <div class="demo-bubble bot">${scenario.answer}</div>
      <div class="demo-bubble proof">Sources utilisées : ${scenario.chunks.map((chunk) => chunk.title).join(" · ")}</div>
    `;
    time.textContent = scenario.time;
  }, delay + 820);
}

function setDemoStep(active) {
  document.querySelectorAll("[data-demo-step]").forEach((step) => {
    step.classList.toggle("active", step.dataset.demoStep === active);
  });
}

function learnerText(value = "") {
  return value
    .replaceAll("Vous devez", "Vous devez")
    .replaceAll("vous devez", "vous devez")
    .replaceAll("Vous", "Vous")
    .replaceAll("vous", "vous")
    .replaceAll("Chaque groupe doit", "Chaque équipe doit")
    .replaceAll("chaque groupe doit", "chaque équipe doit")
    .replaceAll("Le groupe doit", "Vous devez")
    .replaceAll("le groupe doit", "vous devez")
    .replaceAll("Le groupe", "Votre équipe")
    .replaceAll("le groupe", "votre équipe")
    .replaceAll("L'équipe", "Votre équipe")
    .replaceAll("l'équipe", "votre équipe")
    .replaceAll("Les équipes", "Vos équipes")
    .replaceAll("les équipes", "vos équipes");
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
