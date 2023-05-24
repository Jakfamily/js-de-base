const factorielle = (n) => {
  if (n === 0) {
    return 1;
  } else {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result = result * i;
    }
    return result;
  }
};

const nombre = parseInt(
  prompt("De quel nombre veux-tu calculer la factorielle ?")
);

console.log("Le résultat est : " + factorielle(nombre));
