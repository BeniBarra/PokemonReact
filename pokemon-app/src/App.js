import React from 'react';
import './App.css';
import PokemonHeader from './components/PokemonHeader'
import PokemonCard from './components/PokemonCards';
import SearchBar from './components/SearchBar';
//import axios from 'axios';

const axios = require('axios');

//process.env not working, debugg another time
class App extends React.Component {

  constructor(props) {
    super(props); 
    this.state = {
      pokemonNameArr : [],
      pokemonObjArr: []
    }
}

  componentDidMount = async () => {
    const pokemon151 = await axios.get(process.env.REACT_APP_GET_151);

    const pokemonList = await axios.get(process.env.REACT_APP_GET_LIST)
    this.setState({
      pokemonNameArr : pokemon151.data,
      pokemonObjArr : pokemonList.data
    });
    //console.log(pokemon151.data);
  }

  getPokemon151 = async (e) => {
    e.preventDefault();
    //console.log(this.state.pokemonArr);
  }

  render() {
    return (
      <>
        <PokemonHeader/>
        <SearchBar getPokemon151={this.getPokemon151}/>
        <div>
          {
            this.state.pokemonObjArr ? this.state.pokemonObjArr.map(pokemon => 
            <PokemonCard name={pokemon.name} id={pokemon.id} description={pokemon.description} moves={pokemon.moves} sprites={pokemon.sprites} stats={pokemon.stats} types={pokemon.types}/> ) : <></>
          }
        </div>


        <button id='test-button' onClick={this.getPokemon151}>Submit</button>
      </>
    );
  }
}

export default App;
