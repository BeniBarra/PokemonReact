const axios = require('axios');
//require('dotenv').config();

async function getPokemonObjs() {
    let pokemonObjs = await axios.get(process.env.REACT_APP_GET_151);
    return pokemonObjs.data;
};

export default getPokemonObjs;