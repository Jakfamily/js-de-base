// Un objet qui fait correspondre chaque codon à l'acide aminé correspondant
const codonsToAminoAcids = {
  UCU: "Sérine",
  UCC: "Sérine",
  UCA: "Sérine",
  UCG: "Sérine",
  AGU: "Sérine",
  AGC: "Sérine",
  CCU: "Proline",
  CCC: "Proline",
  CCA: "Proline",
  CCG: "Proline",
  UUA: "Leucine",
  UUG: "Leucine",
  UUU: "Phénylalanine",
  UUC: "Phénylalanine",
  CGU: "Arginine",
  CGC: "Arginine",
  CGA: "Arginine",
  CGG: "Arginine",
  AGA: "Arginine",
  AGG: "Arginine",
  UAU: "Tyrosine",
  UAC: "Tyrosine",
};

// Fonction qui traduit un ARN en une suite d'acides aminés
const translateARN = (arn) => {
  const codonLength = 3;
  // Découpe l'ARN en codons de taille 3
  const codons = arn.match(new RegExp(`.{1,${codonLength}}`, "g"));

  // Traduit chaque codon en acide aminé en utilisant l'objet codonsToAminoAcids
  const aminoAcids = codons.map((codon) => {
    return codonsToAminoAcids[codon];
  });

  // Joint les acides aminés avec des tirets pour former la chaîne finale de protéines
  return aminoAcids.join("-");
};

// Les ARN à traduire
const arn1 = "UUACGCAGUAGA";
const arn2 = "CCGUCGUUGCGCUACAGC";
const arn3 = "CCUCGCCGGUACUUCUCG";

// Affiche les résultats de traduction dans la console
console.log(`ARN 1: ${arn1}`);
console.log(`Protéine 1: ${translateARN(arn1)}`);
console.log("-------------------");
console.log(`ARN 2: ${arn2}`);
console.log(`Protéine 2: ${translateARN(arn2)}`);
console.log("-------------------");
console.log(`ARN 3: ${arn3}`);
console.log(`Protéine 3: ${translateARN(arn3)}`);
