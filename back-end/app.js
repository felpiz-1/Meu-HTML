let user = [
    {id:1, nome:"Charizard", numero: "6", tipo: "Fogo/Flying", habilidade:"Blaze",},
    {id:2, nome:"Squirtle", numero: "7", tipo: "Água", habilidade:"Torrent",},
    {id:3, nome:"Caterpie", numero: "29", tipo: "Poison", habilidade:["Rivalry", "Poison Point",],},
    {id:4, nome:"Mewtwo", numero: "150", tipo: "Psíquico", habilidade:"Pressure",},
]

function buscarUser() {

    let idDigitado = document.getElementById("idUser").value;
    let userEncontrado = user.find((u) => u.id == idDigitado);

    if (userEncontrado) {
        document.getElementById("nome").innerText = userEncontrado.nome;
        document.getElementById("numero").innerText = userEncontrado.numero;
        document.getElementById("tipo").innerText = userEncontrado.tipo; 
        document.getElementById("habilidade").innerText = userEncontrado.habilidade; 
    } else{
        document.getElementById("nome").innerText = "Pokemon not found";
        document.getElementById("numero").innerText = "";
        document.getElementById("tipo").innerText = "";
        document.getElementById("habilidade").innerText = "";
    }
}
