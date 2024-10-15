const buscar = document.getElementById("iniciar")


function buscarpoke(){
    let namepoke = document.getElementById("pokeingresado").value
    if (namepoke == ""){
        namepoke = "pikachu"
    }
    fetch("https://pokeapi.co/api/v2/pokemon/" + namepoke)
    .then((response) => response.json())
    .then(data =>{
        const nombrenum = document.getElementById("pnombrenum")
        nombrenum.innerHTML = `
        <h1>${data.id}</h1>
        <h1>${data.name}</h1>
        `
        const pokeimg = document.getElementById("pokeimg")
        pokeimg.innerHTML = `
        <img src="${data.sprites.front_default}">
        `
    })
}

buscarpoke()

buscar.addEventListener("click", buscarpoke)