/*
  ============================================================
  STRUCTURE DU SITE — c'est le SEUL fichier à modifier plus tard
  ============================================================

  Chaque dossier est un objet :
  {
    nom: "Nom affiché",
    dossiers: [ ...sous-dossiers... ],   // optionnel
    fichiers: [ { nom: "...", url: "...", pictos: ["decl","conj"] } ]  // optionnel
  }

  Le champ "pictos" est optionnel : il affiche un ou plusieurs petits
  pictogrammes colorés devant le nom du fichier. Valeurs possibles :
    "decl" → pictogramme bleu (déclinaisons)
    "conj" → pictogramme rouge (conjugaisons)
    "voc"  → pictogramme vert (vocabulaire)
    "mix"  → pictogramme multicolore (varié)

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
          { nom: "Exercice 1 — Identification des modèles de déclinaison et de conjugaison (chronométré)", url: "Revisions-estivales-2026/Serie-estivale-1/exercice-1-identification-modeles.html", pictos: ["decl","conj"] },
          { nom: "Exercice 2 — Terminaisons des deux premières déclinaisons", url: "Revisions-estivales-2026/Serie-estivale-1/exercice-2-terminaisons-declinaisons.html", pictos: ["decl"] },
          { nom: "Exercice 3 — Vocabulaire liste estivale (chronométré)", url: "Revisions-estivales-2026/Serie-estivale-1/exercice-3-vocabulaire-chronometre.html", pictos: ["voc"] },
          { nom: "Exercice 4 — Vocabulaire liste estivale (mixte)", url: "Revisions-estivales-2026/Serie-estivale-1/exercice-4-vocabulaire-mixte.html", pictos: ["voc"] },
          { nom: "Exercice 5 — Correction du contrôle de Marcus", url: "Revisions-estivales-2026/Serie-estivale-1/exercice-5-correction-controle-marcus.html", pictos: ["mix"] }
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
