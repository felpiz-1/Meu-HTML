let user = [
    {id: 1, nome:"Maria", idade: 47, time:"Atletico Mineiro"},
    {id: 2, nome:"João", idade: 32, time:"Atletico Mineiro"},
    {id: 3, nome:"larissa", idade: 26, time:"Atletico Mineiro"},
    {id: 4, nome:"Giovanna", idade: 38, time:"Atletico Mineiro"},
    {id: 5, nome:"Pietro", idade: 32, time:"Atletico Mineiro"},
    {id: 6, nome:"Fabio", idade: 21, time:"Atletico Mineiro"},
    {id: 7, nome:"Pedro Jacomelli", idade: 18, time:"Atletico Mineiro"},
    {id: 8, nome:"Mirella", idade: 39, time:"Atletico Mineiro"},
    {id: 9, nome:"Amanda", idade: 27, time:"Atletico Mineiro"},
    {id: 10, nome:"Nicolas", idade: 29, time:"Atletico Mineiro"},
    {id: 11, nome:"julia", idade: 18, time:"Atletico Mineiro"},
    {id: 12, nome:"Yasmim", idade: 22, time:"Atletico Mineiro"},
    {id: 13, nome:"Ana Luiza", idade: 19, time:"Atletico Mineiro"},
    {id: 14, nome:"Gabriel", idade: 13, time:"Atletico Mineiro"},
];

function buscarUser() {

    let idDigitado = document.getElementById("idUser").value;
    let userEncontrado = user.find((u) => u.id == idDigitado);

    if (userEncontrado) {
        document.getElementById("nome").innerText = userEncontrado.nome;
        document.getElementById("idade").innerText = userEncontrado.idade; 
        document.getElementById("time").innerText = userEncontrado.time; 
    } else{
        document.getElementById("nome").innerText = "User not found";
        document.getElementById("idade").innerText = "";
        document.getElementById("time").innerText = "";
    }
}
