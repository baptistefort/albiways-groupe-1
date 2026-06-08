---
id: visionia-doc-17
title: Stack technique recommandee - n8n, Supabase, OpenAI et RAG
category: technique
source_urls:
  - https://visionia.io/services-automatisation-ia
  - https://docs.n8n.io/
  - https://docs.n8n.io/integrations/
  - https://supabase.com/docs/guides/ai
  - https://help.openai.com/en/articles/6643167-how-to-use-the-openai-api-for-qa-or-to-build-a-chatbot
last_reviewed: 2026-06-08
validation_status: a_valider_par_vision_ia
intended_use: rag_chunking
---

# Stack technique recommandee - n8n, Supabase, OpenAI et RAG

Vision IA met en avant n8n comme outil central d'automatisation. Pour un chatbot ou un agent connecte a des donnees, une stack pertinente peut combiner n8n pour orchestrer les workflows, Supabase pour stocker les donnees et les embeddings, et OpenAI pour generer des reponses ou des analyses.

## Role de n8n

n8n est un outil d'automatisation par workflows. Les workflows sont composes de nodes connectes. Chaque node peut recuperer, transformer, filtrer ou envoyer des donnees. Cette logique convient bien aux automatisations Vision IA : connecter un CRM, une boite mail, Airtable, un formulaire, un agenda, un outil marketing ou une API.

Dans un projet Vision IA, n8n peut :
- Recevoir un evenement via webhook.
- Lire une base Airtable ou Supabase.
- Appeler une API externe.
- Envoyer une requete a OpenAI.
- Creer une fiche CRM.
- Envoyer une alerte Slack ou email.
- Generer un rapport.
- Lancer une relance programmee.

## Role de Supabase

Supabase peut servir de base de donnees principale pour les projets RAG. Les documents sources, chunks, profils prospects, logs, feedbacks et recommandations peuvent y etre stockes. Supabase propose des outils autour de Postgres et pgvector pour stocker et rechercher des embeddings. Cela permet de faire de la recherche semantique : retrouver des chunks par proximite de sens, pas seulement par mots exacts.

Tables utiles :
- `visionia_sources` : pages, offres, FAQ, cas clients, documents internes.
- `chunks` : morceaux decoupes avec categorie, source et embedding.
- `prospect_profiles` : secteur, besoin, outils, volume, priorite.
- `chat_logs` : questions, reponses, sources, score, erreurs.
- `automation_recommendations` : besoin detecte, solution proposee, raisons, prochaine action.
- `feedback` : note de qualite et corrections.

## Role d'OpenAI

OpenAI peut etre utilise pour generer des reponses, reformuler un besoin, classer une demande, scorer un lead, produire un resume ou creer un embedding. Pour un chatbot Q&A, la logique recommandee consiste a transformer la question en requete, retrouver les sections pertinentes de la base, puis envoyer ces extraits au modele pour produire une reponse contextuelle.

## Architecture RAG simplifiee

1. Le prospect pose une question.
2. L'application nettoie la question et recupere le profil prospect.
3. Le systeme recherche les chunks pertinents dans Supabase.
4. Le serveur envoie a OpenAI la question, le profil et les chunks.
5. OpenAI produit une reponse encadree.
6. L'application affiche la reponse et les sources.
7. Le systeme logge la conversation pour amelioration.

## Regles techniques importantes

Les cles API doivent rester cote serveur. Le navigateur ne doit jamais recevoir une cle OpenAI ou une cle Supabase `service_role`. Les embeddings doivent etre coherents : le meme modele d'embedding doit etre utilise pour les documents et les requetes. Les chunks doivent avoir des metadonnees claires : source, categorie, date, statut de validation.

## Reponse type

"Pour un chatbot RAG Vision IA, une stack simple consiste a utiliser Supabase pour stocker les sources et les chunks, OpenAI pour formuler les reponses et n8n pour orchestrer les automatisations autour du CRM, des emails ou des alertes. Les cles doivent rester cote serveur et les reponses doivent citer les sources internes utilisees."

