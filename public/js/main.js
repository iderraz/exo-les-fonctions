// EXO1
// Créer une fonction qui prend deux paramètres, et les additionne, et fait un console.log du résultat.(Additionner)
/*
let calcul = (nb1, nb2) => {
    return nb1 + nb2;
}
console.log(calcul(2, 5));
*/

// EXO2
// Créez une fonction qui prend deux paramètres, et soustrait le deuxième au premier, et faites un console.log du résultat.(Soustraction)

/*
let Soustraction = (nb1, nb2) => {
    return nb1 - nb2;
}
console.log(Soustraction(5, 1));
*/


// EXO3
// Créez une fonction qui prend deux paramètres, et les multiplie, et faites un console.log du résultat.(Multiplication)

/*
let Multiplication = (nb1, nb2) => {
    return nb1 * nb2;
}
console.log(Multiplication(5, 5));
*/

// EXO4 
// Créez une fonction qui prend deux paramètres, et divise le premier par le deuxième, et faites un console.log du résultat.(Division)

/*
let Division = (nb1, nb2) => {
    return nb1 / nb2;
}
console.log(Division(50, 5));
*/

// EXO5
// Créez une fonction qui prend deux paramètres, et retourne le reste de la division du premier par le deuxième, et faites un console.log du résultat.(Modulo)

/*
let Division2 = (nb1, nb2) => {
    return nb1 % nb2;
}
console.log(Division2(10, 3));
*/


// EXO6
// Créez une fonction qui prend un paramètre, et retourne le carré de ce nombre, et faites un console.log du résultat.(Racine carrée)

/*
let carre = (chiffre) => {
    return Math.sqrt(chiffre);
}
console.log(carre(9));
*/

// EXO7
// Créez une fonction qui prend deux paramètres, et retourne le premier nombre à l'exposant du deuxième, et faites un console.log du résultat.(Exposant)

/*
let exposant = (nb1, nb2) => {
    return Math.pow(nb1, nb2);
}
console.log(exposant(4, 3));
*/

// EXO8
// Créer une function [capitalize] qui transforme n'importe quelle chaine de caractères avec la première lettre en majuscule et le reste en minuscule;

/*
let capitalize = (chaine) => {
    return chaine.charAt(0).toUpperCase() + chaine.substr(1).toLowerCase();
}
console.log(capitalize("ilias"));
*/



// EXO9
// Créer une function [calculer] ayant 3 paramètres
// nbr1 , operator , nbr2
// Je dois pouvoir mettre un nombre choisir entre + - * ou / et un second nombre et obtenir une réponse (Utilisez un switch)

/*
let calculer = (nb1, operator, nb2) => {
    switch (operator) {
        case "+":
            return nb1 + nb2;
        case "-":
            return nb1 - nb2;
        case "*":
            return nb1 * nb2;
        case "/":
            return nb1 / nb2;
        default:
            return "Veuillez entrer un opérateur valide !"
    }
}
nb1 = parseInt(prompt("Veuillez encoder un chiffre"));
operator = prompt("Veuillez encoder un opérateur");
nb2 = parseInt(prompt("Veuillez encoder un chiffre"));

console.log(calculer(nb1, operator, nb2));
*/

//EXO1
// Créer une function [reverseNumber] qui retourne une série de nombre à l'envers (exemple si j'entre 851 elle me retourne 158)
/*
function reverseNumber(nombre){
    return nombre.toString().split('').reverse().join('')
    }
    console.log(reverseNumber(12345));
    */

/*

    let reverseNumber = (nb) => {
      //  return parseInt(String(nb).split(``).reverse().join(``));  //

      nb = nb.split(``); //split va transformer la chaine de caracctères en tableau
      nb.reverse(); //pour inverser l'ordre du tableau
      nb = nb.join(``); //pour retransformer le tab en string
      nb = parseInt(nb); //pour retransformer mon string en int
      return nb;
    }
    console.log(reverseNumber(prompt("Entrez un nombre: ")));

*/




// EXO2
// Créer une function [divPar2] contenant un switch qui vérifie si un nombre est divisible par 2
// Qui répond "Le num x est divisible par 2 x:2 = z"
// Dans le cas ou ce n'est pas divisible il répond : "Ce nombre n'est pas divisible par 2"
/*
let div;
let divPar2 = (nb) => {
    div = nb % 2; //contient soit 0 soit 1 comme reste
    switch(div){
        case 0 : 
            alert(`le num ${nb} est divisible par 2 :  ${nb}:2 = ${nb/2}`);
            break
        case 1 : 
            alert(`le num ${nb} n'est pas divisible par 2`);
            break
        default : 
            alert(`Veuillez rentrer une valeur correcte`);
            break
    }
}
divPar2(parseInt(prompt(`Entrez un nombre divisible par 2`)));
*/


// EXO3
// Créer une fonction [logIn] qui va demander à l'utilisateur un mot de passe et vérifier 
//s'il a bien entré "mdp" si oui, faites une alert "Vous êtes connecté", si non, redemander le mot 
//de passe jusqu'à ce que l'utilisateur rentre "mdp"

let logIn = (rep) => {
    while(rep != "mdp"){
        rep = prompt("réessayez");
    }
    alert("Vous êtes connecté");
}

logIn(prompt("Quel est le mote de passe ?"));