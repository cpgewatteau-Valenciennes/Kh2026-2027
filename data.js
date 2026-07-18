/*
  ============================================================
  STRUCTURE DU SITE — c'est le SEUL fichier à modifier plus tard
  ============================================================

  Chaque dossier est un objet :
  {
    nom: "Nom affiché",
    dossiers: [ ...sous-dossiers... ],   // optionnel
    fichiers: [ { nom: "...", url: "..." } ]  // optionnel
  }

  Pour ajouter un nouveau dossier "Révisions estivales 2026",
  copiez-collez un bloc existant et changez son contenu.
  Pour ajouter un fichier, ajoutez une ligne dans "fichiers".
  Pas besoin de toucher à index.html.
*/

const STRUCTURE = [
  {
    nom: "Révisions estivales 2026",
    dossiers: [
      {
        nom: "Série estivale 1",
        fichiers: [
          { nom: "Exercice 1 — Identification des modèles de déclinaison et de conjugaison", url: "Revisions-estivales-2026/Serie-estivale-1/exercice-1-identification-modeles.html" },
          { nom: "Exercice 2 — Terminaisons des deux premières déclinaisons", url: "Revisions-estivales-2026/Serie-estivale-1/exercice-2-terminaisons-declinaisons.html" },
          { nom: "Exercice 3 — Vocabulaire liste estivale (chronométré)", url: "Revisions-estivales-2026/Serie-estivale-1/exercice-3-vocabulaire-chronometre.html" },
          { nom: "Exercice 4 — Vocabulaire liste estivale (mixte)", url: "Revisions-estivales-2026/Serie-estivale-1/exercice-4-vocabulaire-mixte.html" },
          { nom: "Exercice 5 — Correction du contrôle de Marcus", url: "Revisions-estivales-2026/Serie-estivale-1/exercice-5-correction-controle-marcus.html" }
          // Ajoutez une ligne comme celle-ci pour chaque nouveau fichier
          // de cette série, avec une virgule avant si ce n'est pas la dernière.
        ]
      }
      // Pour ajouter "Série estivale 2" l'an prochain, dupliquez
      // le bloc ci-dessus juste ici, dans "dossiers: [ ... ]".
    ]
  }
  // Pour ajouter un tout nouveau dossier de niveau supérieur
  // (ex: "Devoirs maison 2026"), ajoutez une virgule après la
  // dernière accolade } ci-dessus et collez un nouveau bloc ici.
];
