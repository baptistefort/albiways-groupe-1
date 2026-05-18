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
  { src: images.workshop, caption: "Les apprenants avancent en atelier, étape par étape." },
  { src: images.dashboard, caption: "Le dashboard transforme la démo en outil de pilotage." }
];

const chapterData = {
  "01": {
    scene: "Le client arrive avec une demande simple en apparence : il veut un chatbot pour répondre plus vite aux questions répétitives. La bonne réaction n'est pas de parler tout de suite de modèle, de code ou d'API. Il faut commencer par raconter le besoin : des utilisateurs posent souvent les mêmes questions, les réponses sont dispersées dans des documents, et les équipes perdent du temps à retrouver la bonne information.",
    purpose: "Ce bloc sert à installer le cadre mental. Les apprenants doivent comprendre que le chatbot n'est pas une boîte magique. C'est une interface qui applique une méthode : lire la question, retrouver le bon contexte, produire une réponse claire, puis garder une trace.",
    method: "On commence par écrire le scénario utilisateur avant de construire l'application. Une bonne phrase de cadrage suffit : un visiteur pose une question, l'application cherche dans les documents validés, l'IA répond seulement avec ce qu'elle a trouvé, et si elle ne sait pas elle le dit.",
    example: "Exemple : un utilisateur demande « Quels documents faut-il pour démarrer le projet ? ». Le chatbot ne doit pas inventer. Il doit retrouver le chunk qui décrit la liste des documents, répondre en langage simple, puis proposer une prochaine action.",
    business: "Commercialement, ce bloc permet de défendre la valeur : le client n'achète pas une fenêtre de chat, il achète une capacité à rendre son savoir interne utilisable.",
    risk: "Le risque est de partir sur une démonstration trop large. Si le périmètre n'est pas clair, le chatbot répondra mal et la négociation deviendra fragile."
  },
  "02": {
    scene: "Après l'introduction, l'équipe doit transformer l'idée en mission concrète. On passe de « on veut un chatbot IA » à « voici exactement ce que nous allons construire en trois jours ». Cette transition est essentielle, car un projet IA flou devient vite trop grand, trop technique et difficile à défendre.",
    purpose: "Ce bloc sert à poser le contrat pédagogique. Les apprenants doivent savoir ce qui est attendu, ce qui ne l'est pas, et ce qu'ils devront montrer à la fin. Le jury doit sentir que le groupe maîtrise son périmètre.",
    method: "On découpe la mission en objets visibles : une interface de chat, une base Supabase, une route OpenAI, quelques documents transformés en chunks, un tableau de tests et un dashboard simple. Chaque objet doit avoir une utilité dans la démonstration.",
    example: "Exemple : si le groupe promet de traiter tous les documents d'une entreprise, il se perd. S'il promet de répondre à dix questions clés à partir de quatre documents propres, il peut réussir et expliquer la méthode.",
    business: "La force commerciale vient du cadrage. Un POC limité, mesurable et bien expliqué se vend mieux qu'une promesse énorme.",
    risk: "Le piège est de vouloir faire une application complète. En trois jours, il faut construire un prototype crédible, pas une plateforme finale."
  },
  "03": {
    scene: "Le moment architecture arrive souvent trop tôt dans les projets IA. Ici, il faut le rendre très simple. Un utilisateur pose une question dans le navigateur. L'application reçoit cette question. Supabase fournit les morceaux de documents utiles. OpenAI transforme ce contexte en réponse lisible.",
    purpose: "Ce bloc sert à rassurer. Les apprenants doivent pouvoir expliquer l'architecture à quelqu'un qui n'est pas développeur. S'ils ne savent pas la raconter simplement, ils auront du mal à défendre le prix et la sécurité.",
    method: "On dessine quatre boîtes : utilisateur, application, Supabase, OpenAI. Puis on ajoute les flèches : question, recherche de contexte, génération, réponse, log. Ce schéma suffit pour comprendre l'essentiel.",
    example: "Exemple : le client demande où sont stockées les données. La réponse est claire : les documents et les logs restent dans Supabase ; OpenAI reçoit uniquement la question et les extraits nécessaires pour répondre.",
    business: "Cette architecture aide à vendre parce qu'elle sépare les responsabilités. On peut parler sécurité, coût, qualité et maintenance sans mélanger tous les sujets.",
    risk: "Le risque est d'employer trop de jargon. Si le jury entend uniquement API, embeddings et backend, il décroche."
  },
  "04": {
    scene: "Le projet dure trois jours, donc le planning doit protéger les équipes. Le premier jour sert à comprendre et cadrer. Le deuxième sert à construire et brancher. Le troisième sert à tester, améliorer et préparer la soutenance commerciale.",
    purpose: "Ce bloc sert à éviter la panique. Les apprenants ont besoin d'un chemin. Ils doivent savoir quoi faire maintenant, quoi garder pour plus tard, et comment décider si une idée est trop ambitieuse.",
    method: "On travaille par jalons. À la fin du jour 1, le scénario, les documents et le prompt maître sont prêts. À la fin du jour 2, la démo répond à quelques questions. À la fin du jour 3, le groupe sait présenter, tester et négocier.",
    example: "Exemple : si l'équipe n'a pas de réponse IA fiable à midi le jour 2, elle réduit le périmètre. Elle garde trois documents, cinq questions et une version simple par mots-clés.",
    business: "Le planning devient un argument de pilotage. Une équipe qui sait découper un POC montre qu'elle saura aussi gérer un déploiement client.",
    risk: "Le risque est de passer deux jours sur le design avant d'avoir une réponse fonctionnelle."
  },
  "05": {
    scene: "Avant de construire, il faut préparer les comptes. Codex Desktop sert à construire. Supabase sert à stocker. OpenAI API sert à générer les réponses. ChatGPT Plus donne accès à Codex selon les conditions du plan, mais l'API reste une facturation séparée.",
    purpose: "Ce bloc sert à clarifier les outils et les coûts. Les apprenants doivent éviter une confusion fréquente : payer ChatGPT Plus ne veut pas dire que l'application peut utiliser l'API OpenAI sans coût.",
    method: "On vérifie quatre accès : compte ChatGPT, Codex Desktop ouvert, projet Supabase, plateforme OpenAI avec possibilité de créer une clé API. Ensuite on note les identifiants utiles sans jamais exposer les secrets.",
    example: "Exemple : l'équipe peut dire « Nous utilisons Codex pour construire plus vite, Supabase pour stocker les chunks, et l'API OpenAI pour répondre aux questions dans l'application. »",
    business: "La clarté des outils rassure le client. On sait ce qui est inclus, ce qui est variable, et ce qui doit être sécurisé.",
    risk: "Le risque est de vendre l'abonnement ChatGPT comme s'il couvrait tous les coûts API du chatbot."
  },
  "06": {
    scene: "Codex Desktop devient le compagnon de construction. Les apprenants ne doivent pas penser comme des développeurs experts. Ils doivent apprendre à formuler une demande claire, lire ce que Codex propose, tester visuellement, puis demander une correction.",
    purpose: "Ce bloc sert à leur donner une méthode de dialogue avec Codex. Ils ne doivent pas cliquer au hasard ni accepter du code sans comprendre le résultat.",
    method: "Chaque demande à Codex doit contenir le contexte, l'objectif, les contraintes, le style souhaité, les fichiers concernés et le test attendu. Ensuite, l'équipe demande une explication courte de ce qui a changé.",
    example: "Exemple : au lieu d'écrire « fais un chatbot », on écrit « crée une interface de chatbot texte avec une zone messages, un champ question, trois suggestions, un état de chargement et une zone sources ». La deuxième demande est exploitable.",
    business: "Codex devient un accélérateur, pas une excuse. La valeur reste dans le cadrage, les tests, la sécurité et la capacité à expliquer.",
    risk: "Le risque est d'accepter une réponse de Codex sans vérifier dans le navigateur."
  },
  "07": {
    scene: "Le projet doit avoir une structure simple. Les apprenants ouvrent un dossier dans Codex Desktop et demandent une application lisible : une page de chat, une configuration Supabase, une route serveur OpenAI, une ingestion de documents et une page dashboard.",
    purpose: "Ce bloc sert à éviter le désordre. Si les fichiers sont mal rangés, l'équipe ne saura plus où modifier le design, où mettre la clé, où lire les logs ou où corriger la recherche.",
    method: "On demande à Codex de créer une structure en petites zones : interface, services, API, données, styles. Puis on lui demande d'expliquer le rôle de chaque fichier en français simple.",
    example: "Exemple : un dossier peut contenir une page chatbot, un module Supabase, un module OpenAI, un fichier de prompts et une page dashboard. Ce n'est pas obligatoire de faire compliqué.",
    business: "Une structure claire aide à défendre la maintenabilité. Le client comprend que le prototype peut évoluer.",
    risk: "Le risque est d'avoir une démo qui marche une fois, mais que personne ne sait corriger."
  },
  "08": {
    scene: "Le prompt maître est le brief que l'équipe donne à Codex. C'est comme un brief créatif pour un designer ou un brief projet pour un développeur. S'il est vague, Codex devine. S'il est précis, Codex construit dans la bonne direction.",
    purpose: "Ce bloc sert à faire gagner du temps. Les apprenants doivent apprendre à écrire le bon brief avant de demander des écrans ou des fonctions.",
    method: "Le prompt maître précise le produit, les utilisateurs, les outils, les limites, le style visuel, les règles de sécurité, les livrables et le niveau d'explication attendu.",
    example: "Exemple : « Les apprenants ne doivent pas utiliser le terminal » est une contrainte importante. Codex doit donc expliquer les actions en langage naturel et préparer ce qui peut être copié dans Supabase.",
    business: "Un bon prompt maître montre une posture professionnelle : on cadre avant d'exécuter.",
    risk: "Le risque est de laisser Codex choisir seul l'architecture, le ton et le niveau de sécurité."
  },
  "09": {
    scene: "Le design du chatbot est la première chose que le jury voit. Même si le coeur du projet est la donnée, une interface confuse donne l'impression d'un produit fragile. Le design doit aider l'utilisateur à poser une question et à comprendre la réponse.",
    purpose: "Ce bloc sert à transformer la démo en expérience. Les apprenants doivent penser aux messages, aux états, aux sources, aux boutons et aux retours d'erreur.",
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
    scene: "Codex peut préparer le schéma SQL. Les apprenants ne doivent pas tout écrire à la main. Leur rôle est de comprendre les tables, de coller le SQL dans Supabase, de vérifier le résultat et d'expliquer pourquoi chaque table existe.",
    purpose: "Ce bloc sert à rendre la base concrète. Les mots documents, chunks et logs doivent devenir des objets visibles dans Supabase.",
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
    scene: "Le choix du modèle doit rester pragmatique. Les apprenants ne doivent pas se perdre dans une comparaison infinie. Pour un prototype, on choisit un modèle texte fiable et économique, puis un modèle d'embedding adapté à la recherche.",
    purpose: "Ce bloc sert à apprendre à arbitrer. Un bon Business Developer ne dit pas juste « on prend le meilleur modèle ». Il explique coût, qualité, rapidité et usage.",
    method: "On vérifie la page officielle des modèles. On choisit un modèle texte pour répondre, par exemple un modèle GPT récent adapté au budget, et text-embedding-3-small pour une version pédagogique des embeddings.",
    example: "Exemple : pour une démo, un modèle mini peut suffire. Pour une réponse très sensible ou très qualitative, on peut justifier un modèle plus puissant.",
    business: "Le choix du modèle devient un argument de pilotage des coûts.",
    risk: "Le risque est de promettre un prix fixe sans connaître le volume de questions ni le modèle réellement utilisé."
  },
  "17": {
    scene: "La sécurité n'est pas un chapitre à la fin. Elle commence dès que l'équipe crée une clé API ou une clé Supabase. Une clé exposée peut permettre à quelqu'un d'utiliser le compte ou d'accéder à des données.",
    purpose: "Ce bloc sert à donner des règles simples et non négociables. Les apprenants n'ont pas besoin de devenir experts sécurité, mais ils doivent connaître les gestes dangereux.",
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
    purpose: "Ce bloc sert à donner une méthode qualité. Les apprenants doivent montrer qu'ils ont testé, pas seulement qu'ils ont cliqué.",
    method: "On prépare dix questions : simples, ambiguës, pièges et hors base. Pour chaque question, on note le résultat attendu, la réponse obtenue, les chunks utilisés et la correction à faire.",
    example: "Exemple : une question hors base doit produire une réponse de refus contrôlé. Si le chatbot invente, le groupe corrige le prompt ou la recherche.",
    business: "Les tests donnent confiance au jury et au client. Ils montrent que l'équipe sait piloter la qualité.",
    risk: "Le risque est de préparer uniquement des questions faciles qui font bien paraître la démo."
  },
  "20": {
    scene: "Le dashboard donne une vie commerciale au chatbot. Sans dashboard, le projet est une interface. Avec dashboard, il devient un outil de pilotage : on voit les questions fréquentes, les réponses manquantes et les sujets à améliorer.",
    purpose: "Ce bloc sert à relier technique et business. Les apprenants doivent montrer que le chatbot peut produire des indicateurs.",
    method: "On affiche des KPI simples : nombre de questions, taux de réponse trouvée, sujets fréquents, questions sans réponse, feedback, temps gagné estimé et prochaine action.",
    example: "Exemple : si 40 % des questions concernent le prix, l'équipe commerciale sait qu'il faut améliorer la fiche offre ou créer une page dédiée.",
    business: "Le dashboard aide à défendre le ROI et la maintenance mensuelle.",
    risk: "Le risque est de créer un dashboard décoratif sans décision associée."
  },
  "21": {
    scene: "La valeur se défend avec des preuves. Le groupe doit passer de « notre chatbot fonctionne » à « voici pourquoi il mérite un budget ». Cette étape transforme la démo en proposition commerciale.",
    purpose: "Ce bloc sert à préparer la négociation. Les apprenants doivent défendre le prix, la marge et les contreparties.",
    method: "On relie chaque fonction à une valeur : gain de temps, qualité, traçabilité, réduction des erreurs, connaissance centralisée, pilotage. Puis on prépare les concessions possibles et les lignes rouges.",
    example: "Exemple : si le client demande 25 % de remise, le groupe peut proposer de réduire le périmètre, d'obtenir un engagement plus long ou de cadrer un pilote payant.",
    business: "La valeur est le coeur du challenge Business Developer.",
    risk: "Le risque est de répondre au prix par une remise immédiate."
  },
  "22": {
    scene: "Le jury joue un client exigeant. Il va challenger le prix, la sécurité, Codex, Supabase, le POC gratuit et la fiabilité. Les apprenants doivent s'entraîner avant d'arriver en soutenance.",
    purpose: "Ce bloc sert à transformer la préparation en posture. Une bonne démo ne suffit pas si l'équipe s'effondre aux objections.",
    method: "On prépare des objections courtes, puis des réponses structurées : écouter, reformuler, revenir à la valeur, poser une condition, proposer la prochaine étape.",
    example: "Exemple : à « pourquoi payer si Codex code ? », la réponse est : Codex accélère la production, mais le client paie le cadrage, la sécurité, les données, les tests, la maintenance et la responsabilité.",
    business: "Le role play montre la maturité commerciale.",
    risk: "Le risque est de se défendre trop vite ou de critiquer le concurrent au lieu de défendre sa valeur."
  },
  "23": {
    scene: "La fin doit être très claire. Le jury doit repartir avec quatre idées : le problème est compris, le prototype fonctionne, la méthode est sérieuse, et la négociation est maîtrisée.",
    purpose: "Ce bloc sert à préparer le rendu final. Les apprenants doivent organiser leur soutenance comme une histoire, pas comme une liste de fichiers.",
    method: "On présente le contexte, la solution, la démo, l'architecture, les tests, le dashboard, les risques, la valeur et la proposition de négociation. Chaque partie doit durer peu de temps mais être précise.",
    example: "Exemple : la conclusion peut être : « Nous avons construit un chatbot texte connecté à Supabase, capable de répondre à partir de documents validés, et nous avons défini les conditions commerciales pour le déployer proprement. »",
    business: "Le livrable final doit prouver autant la compétence commerciale que la compréhension technique.",
    risk: "Le risque est de montrer l'application sans expliquer les choix, les limites et le plan de suite."
  }
};

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
          "Réponse plus qualitative : utiliser un modèle plus avancé de la famille GPT-5, par exemple GPT-5.2 si disponible dans le compte API, quand la qualité compte plus que le coût.",
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
  const steps = tutorialSteps(block, chapter);
  return `
    <section class="story-panel">
      <p class="eyebrow">Chapitre ${block.id} / Histoire guidée</p>
      <h2>Comprendre l'étape avant de l'exécuter</h2>
      <div class="story-grid">
        <article>
          <h3>La scène</h3>
          <p>${chapter.scene}</p>
          <p>Dans la présentation, il faut raconter ce moment comme une petite histoire. Le groupe ne doit pas dire seulement « on utilise ${block.tag} ». Il doit expliquer ce qui vient juste avant, ce que l'utilisateur ou le client attend, et ce qui doit être vrai à la fin du bloc. Cette logique aide les apprenants à ne pas empiler des outils. Ils construisent une chaîne de valeur.</p>
        </article>
        <article>
          <h3>À quoi ça sert</h3>
          <p>${chapter.purpose}</p>
          <p>La question à poser aux équipes est simple : si on supprime ce bloc, qu'est-ce que le projet perd ? La réponse doit être concrète. On perd de la clarté, de la qualité, de la sécurité, du pilotage ou de la valeur commerciale. Cette phrase oblige les apprenants à relier chaque étape à une raison métier.</p>
        </article>
      </div>
    </section>

    <section class="tutorial-panel">
      <p class="eyebrow">Tutoriel étape par étape</p>
      <h2>Comment bien faire ce bloc</h2>
      <p>${chapter.method}</p>
      <ol class="tutorial-steps">
        ${steps.map((step) => `<li><b>${step.title}</b><span>${step.text}</span></li>`).join("")}
      </ol>
      <div class="example-box">
        <h3>Exemple concret à donner aux apprenants</h3>
        <p>${chapter.example}</p>
        <p>Après l'exemple, demander au groupe de reformuler avec ses propres mots. S'il ne sait pas reformuler, c'est que l'étape n'est pas encore comprise. La reformulation doit rester simple : problème, action, résultat, preuve.</p>
      </div>
    </section>

    <section class="prompt-lab">
      <p class="eyebrow">Prompts de travail</p>
      <h2>Ce qu'ils peuvent demander à Codex et à ChatGPT</h2>
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
      <p>Le but n'est pas de copier sans réfléchir. Le prompt sert à lancer le travail. Ensuite, les apprenants doivent lire la réponse, supprimer ce qui est trop compliqué, garder ce qui est utile et demander une version plus simple si nécessaire.</p>
    </section>

    <section class="quality-panel">
      <p class="eyebrow">Contrôle qualité</p>
      <h2>Comment vérifier que le bloc est réussi</h2>
      <div class="quality-grid">
        <article>
          <h3>Vérification produit</h3>
          <ul>
            <li>L'étape produit un résultat visible ou vérifiable.</li>
            <li>Le groupe sait montrer ce résultat en moins d'une minute.</li>
            <li>Le lien avec le chatbot est évident.</li>
          </ul>
        </article>
        <article>
          <h3>Vérification business</h3>
          <p>${chapter.business}</p>
          <p>Le groupe doit donc traduire le bloc en bénéfice client. Si la phrase commence par « techniquement », il faut la réécrire pour parler usage, sécurité, temps gagné, qualité ou décision.</p>
        </article>
        <article>
          <h3>Erreur à éviter</h3>
          <p>${chapter.risk}</p>
          <p>La meilleure protection est de garder une preuve : capture, table Supabase, réponse de test, mini-dashboard, schéma ou prompt validé.</p>
        </article>
      </div>
    </section>
  `;
}

function tutorialSteps(block, chapter) {
  return [
    {
      title: "1. Poser le contexte",
      text: `Commencer par expliquer où l'on se trouve dans l'histoire du projet : ${chapter.scene.split(".")[0].toLowerCase()}. Cette phrase évite de présenter le bloc comme une action isolée.`
    },
    {
      title: "2. Dire l'objectif",
      text: `Formuler le résultat attendu avec des mots simples. Pour ce bloc, l'objectif est lié à : ${block.card.toLowerCase()}`
    },
    {
      title: "3. Faire l'action dans Codex ou dans l'outil",
      text: "Écrire une demande précise, lire ce que l'outil propose, puis demander une explication. Les apprenants ne doivent pas avancer sans comprendre ce qui a changé."
    },
    {
      title: "4. Vérifier avec une preuve",
      text: "La preuve peut être une page visible, une table Supabase, une réponse du chatbot, un log, un schéma ou un test réussi. Une étape sans preuve est trop fragile pour le jury."
    },
    {
      title: "5. Transformer en argument",
      text: "Finir par une phrase commerciale : pourquoi cette étape rassure le client, réduit un risque, améliore la qualité ou aide à défendre le prix."
    }
  ];
}

function buildCodexPrompt(block, chapter) {
  return `Nous travaillons sur le bloc ${block.id} : ${block.title}.

Contexte : ${chapter.scene}

Objectif : ${chapter.purpose}

Ce que je veux que tu fasses :
1. propose une action concrète à réaliser dans l'application ;
2. explique à quoi cela sert pour le chatbot IA texte ;
3. donne les fichiers ou écrans concernés ;
4. garde une solution simple pour des apprenants Business Developer ;
5. ajoute une preuve à vérifier dans le navigateur ou dans Supabase ;
6. termine par une phrase que je peux dire au jury.

Contraintes : pas de vocal, pas de clé API exposée côté navigateur, pas de terminal obligatoire pour les apprenants, explications simples et progressives.`;
}

function buildOralPrompt(block, chapter) {
  return `Aide-moi à présenter le bloc ${block.id} "${block.title}" à l'oral.

Je veux une explication très simple en 90 secondes :
- le problème ;
- pourquoi ce bloc est utile ;
- ce que nous avons fait ;
- un exemple concret ;
- le risque si on le fait mal ;
- la phrase commerciale à dire au client.

Utilise un ton naturel, direct et amical. Ne fais pas trop technique.`;
}

function renderSchemaSection(block) {
  const chapter = chapterData[block.id] || chapterData["01"];
  const steps = block.steps?.length ? block.steps : ["Cadrer", "Construire", "Tester", "Défendre"];
  return `
    <section class="schema-section">
      <p class="eyebrow">3 schémas à expliquer</p>
      <h2>Voir le bloc sous trois angles</h2>
      <div class="schema-grid">
        <article class="schema-card schema-flow-card">
          <h3>Schéma 1 / Parcours</h3>
          <div class="schema-flow">${steps.map((step) => `<span>${step}</span>`).join("<i>→</i>")}</div>
          <p>Ce schéma raconte l'ordre naturel. Il aide les apprenants à présenter sans se perdre.</p>
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
          <p>Ce schéma force le groupe à vérifier la compréhension avant de passer à la suite.</p>
        </article>
        <article class="schema-card schema-proof-card">
          <h3>Schéma 3 / Preuve</h3>
          <div class="proof-map">
            <span>Action</span>
            <span>Résultat</span>
            <span>Preuve</span>
            <span>Argument</span>
          </div>
          <p>${chapter.business}</p>
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
