console.log('connecté !');
// Selectionne et stock elements dans un tableau
const questions = document.querySelectorAll(".question");
console.log(questions);

// Boucle forEach pour ajout evenement sur chacun des elements du tabeau
questions.forEach((item, index)=>{
    console.log(item,index,'item');
    item.addEventListener('click', function(){
        console.log(`Question ${index} cliqué`);
        // Je cible l'element suivant de chaque item donc question qui font reference aux questions
        const next = item.nextElementSibling;
        console.log(next);
        // Affichage/disparition de la réponse
        next.classList.toggle('visible');
        // Je change aussi l'icone 
        icone = item.lastElementChild;
        icone.classList.toggle('fa-chevron-up');
    })
});