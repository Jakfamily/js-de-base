// Fonction qui vérifie si une phrase est une question
const isQuestion = (phrase) => {
  return phrase.endsWith("?");
};

// Fonction qui vérifie si une phrase est entièrement en majuscules
const isShouting = (phrase) => {
  return phrase === phrase.toUpperCase();
};

// Fonction qui vérifie si une phrase contient le mot "Fortnite"
const containsFortnite = (phrase) => {
  return phrase.includes("Fortnite");
};

// Fonction qui gère la conversation avec le bot
const chatBot = () => {
  const phrase = prompt("Parle avec le bot :");

  if (phrase === "") {
    console.log("t'es en PLS ?");
  } else if (isQuestion(phrase)) {
    console.log("Ouais Ouais...");
  } else if (isShouting(phrase)) {
    console.log("Pwa, calme-toi...");
  } else if (containsFortnite(phrase)) {
    console.log("on s' fait une partie soum-soum ?");
  } else {
    console.log("balek.");
  }
};

// Appelle la fonction pour démarrer la conversation
chatBot();
