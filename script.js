/** AQUI ESTA EL TRABAJO CULMINADO PROFE, ESTAN LAS FUNCIONES SEGUN LA GUIA
 * ENUMERADO POR PASOS, GRACIAS POR ESTE TRABAJO PUES ME HACE EXIGIR Y PONER EN PRACTICA TODO
*/


// A: Función asíncrona para obtener detalles de un Pokémon por nombre
async function getPokemonDetails(name) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!response.ok) {
            throw new Error('No se pudo obtener la información del Pokémon');
        }
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.error('Error:', error);
    }
}

getPokemonDetails('bulbasaur');


// B: Función asíncrona para obtener detalles de un Pokémon por habilidad
async function getPokemonAbilities(name) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!response.ok) {
            throw new Error('No se pudo obtener la información del Pokémon');
        }
        const data = await response.json();
        const abilities = data.abilities.map(ability => ability.ability.name)
        console.log(abilities)
    } catch (error) {
        console.error('Error:', error);
    }
}

getPokemonAbilities('bulbasaur');



// C: Función asíncrona para obtener detalles de un Pokémon por tipo
async function getPokemonTypeInfo(type) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
        if (!response.ok) {
            throw new Error('No se pudo obtener la información del Pokémon');
        }
        const data = await response.json();
        console.log(data)

    } catch (error) {
        console.error('Error:', error);
    }
}

getPokemonTypeInfo('water');



// D: Función asíncrona para obtener dla lista de los primeros 50 pokemons
async function getPokemonCincuenta() {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=50`);
        if (!response.ok) {
            throw new Error('No se pudo obtener la información del Pokémon');
        }
        const data = await response.json();
        console.log(data.results)

    } catch (error) {
        console.error('Error:', error);
    }
}

getPokemonCincuenta();



// E: Funcion para obtener detalles del pokemon nombre tipo de evolucion

async function getPokemonAndEvolutionDetails(name) {
    try {
        // Paso 1: Obtener detalles del Pokémon
        const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!pokemonResponse.ok) {
            throw new Error('No se pudo obtener la información del Pokémon');
        }
        const pokemonData = await pokemonResponse.json();
  
        // imprimir los datos de nombre y tipo del pokemon
        console.log(`pokemon: ${pokemonData.name}`)
        console.log('tipos: ');
        pokemonData.types.forEach(type => {
            console.log(`- ${type.type.name}`)
        });

        const speciesResponse = await fetch(pokemonData.species.url);
        if (!speciesResponse.ok){
            throw new Error("No se pudo obtener información del pokemon");
        }

        const speciesData = await speciesResponse.json();

        console.log('color: ', speciesData.color.name);


        // Detalles de la evolucion
        const evolutionResponse = await fetch(speciesData.evolution_chain.url);
        if (!evolutionResponse.ok){
            throw new Error("No se pudo obtener la cadena de evolucion del pokemon");
        }

        const evolutionData = await evolutionResponse.json();

        let evolutionDetails = evolutionData.chain;
        console.log('evolución: ');
        console.log(`- ${evolutionDetails.species.name}`);

        
        // Encontrar y mostrar detalles de la evolución
        while (evolutionDetails.evolves_to.length > 0) {
            evolutionDetails = evolutionDetails.evolves_to[0];
            console.log(`- ${evolutionDetails.species.name}`);
        }

        
    } catch (error) {
        console.error('Error:', error);
    }
}

// Ejemplo de uso: Obtener detalles de Pikachu
getPokemonAndEvolutionDetails('bulbasaur');


