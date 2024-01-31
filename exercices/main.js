const nom = "Koukerdjinian--Massoulier";
const prenom = "Tristan";
let nomComplet = nom + " " + prenom;

console.log(nomComplet);

document.getElementById("firstname").textContent = prenom;
document.getElementById("lastname").textContent = nom;
document.getElementById("fullname").textContent = nomComplet;

let age = "19";
document.getElementById("button").addEventListener("click", function () {
  document.getElementById("age").textContent = age;
});