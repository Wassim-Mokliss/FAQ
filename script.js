console.log('connecté !');
// Selectionne et stock elements dans un tableau
const questions = document.querySelectorAll(".questions");
console.log(questions);

// Boucle forEach pour ajout evenement sur chacun des tableaux
questions.forEach((item, index)=>{
    console.log(item,index,'item');
});