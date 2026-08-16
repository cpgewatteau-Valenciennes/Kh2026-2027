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
    "decl"  → pictogramme bleu (déclinaisons)
    "conj"  → pictogramme rouge (conjugaisons)
    "voc"   → pictogramme vert (vocabulaire)
    "exp"   → pictogramme violet, guillemets (expression française)
    "vers"  → pictogramme or → drapeau (version, latin vers français)
    "theme" → pictogramme drapeau → or (thème, français vers latin)
    "mix"   → pictogramme multicolore (varié)

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
          { nom: "Exercice 1 — Identification des modèles de déclinaison et de conjugaison (chronométré)", url: "exercice-1-identification-modeles.html", pictos: ["decl","conj"] },
          { nom: "Exercice 2 — Terminaisons des deux premières déclinaisons", url: "exercice-2-terminaisons-declinaisons.html", pictos: ["decl"] },
          { nom: "Exercice 3 — Vocabulaire liste estivale (chronométré)", url: "exercice-3-vocabulaire-chronometre.html", pictos: ["voc"] },
          { nom: "Exercice 4 — Vocabulaire liste estivale (mixte)", url: "exercice-4-vocabulaire-mixte.html", pictos: ["voc"] },
          { nom: "Exercice 5 — Correction du contrôle de Marcus", url: "exercice-5-correction-controle-marcus.html", pictos: ["mix"] }
        ]
      },
      {
        nom: "Série estivale 2",
        fichiers: [
          { nom: "Exercice 6 — Déclinaisons latines (les trois premières déclinaisons)", url: "exercice-6-declinaisons-latines.html", pictos: ["decl"] },
          { nom: "Exercice 7 — 3e déclinaison, forme par forme", url: "exercice-7-3e-declinaison-forme-par-forme.html", pictos: ["decl"] },
          { nom: "Exercice 8 — Identifier les formes verbales", url: "exercice-8-identifier-formes-verbales.html", pictos: ["conj"] },
          { nom: "Exercice 9 — Vocabulaire chronométré (2)", url: "exercice-9-vocabulaire-chronometre-2.html", pictos: ["voc"] },
          { nom: "Exercice 10 — Version : Cornelia, Marcus, Quintus (qui a bien traduit ?)", url: "exercice-10-version-cornelia-marcus-quintus.html", pictos: ["vers"] },
          { nom: "Exercice 11 — Thème : corriger des phrases", url: "exercice-11-correction-theme-latin.html", pictos: ["theme"] },
          { nom: "Exercice 12 — Expression française : révisions", url: "exercice-12-expression-francaise.html", pictos: ["exp"] }
          // Ajoutez une ligne comme celle-ci pour chaque nouveau fichier
          // de cette série, avec une virgule avant si ce n'est pas la dernière.
        ]
      }
      // Pour ajouter "Série estivale 3" l'an prochain, dupliquez
      // le bloc ci-dessus juste ici, dans "dossiers: [ ... ]".
    ]
  }
  // Pour ajouter un tout nouveau dossier de niveau supérieur
  // (ex: "Devoirs maison 2026"), ajoutez une virgule après la
  // dernière accolade } ci-dessus et collez un nouveau bloc ici.
];
