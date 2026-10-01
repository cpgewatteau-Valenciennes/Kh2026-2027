// Période actuellement en cours : changez seulement cette valeur (P1, P2, P3…) pour passer à la période suivante.
const PERIODE_EN_COURS = "P1";

// Contenu des dossiers de premier niveau (Grammaire, Vocabulaire, Version, Thème…).
// Le dossier vert « Période en cours » est rempli automatiquement avec les exercices
// dont l'étiquette periode est égale à PERIODE_EN_COURS.
// Un dossier peut contenir des "dossiers" (sous-dossiers) et/ou des "fichiers".
// Un fichier : { nom: "Titre affiché", url: "chemin/vers/exercice.html", pictos: ["conj"], periode: "P1" }
// pictos possibles : decl, conj, voc, exp, vers, theme, mix

const PERIODE = [
  {
    nom: "Grammaire",
    dossiers: [
      {
        nom: "Conjugaison",
        fichiers: [
          { nom: "Conj 01 — Identification et traduction de formes verbales", url: "exercices-langues/conjugaison/conjugaison_identification-traduction-formes-verbales.html", pictos: ["conj"], periode: "P1" }
        ]
      },
      { nom: "Déclinaisons", fichiers: [] }
    ]
  },
  { nom: "Vocabulaire", fichiers: [] },
  { nom: "Version", fichiers: [] },
  { nom: "Thème", fichiers: [] }
];
