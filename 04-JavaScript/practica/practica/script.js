const fetchPokemon = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/chikorita';
    fetch(url).then((res) => {
        //console.log(res);
        return res.json();
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
    })
}

//fetchPokemon();

const imgPokemon = (url) => {
    const imgPokemon = document.getElementById("imgPokemon");
    imgPokemon.src = url;
}
imgPokemon("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png")

const imprimir = () =>{
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value;
    console.log("Hola " + pokeInput);

}