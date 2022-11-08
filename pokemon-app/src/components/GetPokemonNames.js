const axios = require('axios');
//require('dotenv').config();

async function getPokemonNames() {
    let pokemonNames = await axios.get(process.env.REACT_APP_GET_NAMES);
    return pokemonNames.data;
};

export default getPokemonNames;