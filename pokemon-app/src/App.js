import React from 'react';
import './App.css';
import PokemonHeader from './components/PokemonHeader'
import PokemonCard from './components/PokemonCards';
import SearchBar from './components/SearchBar';
import generateCache from './components/GenerateCache';
import getPokemonObjs from './components/GetPokemonObjs';
import getPokemonNames from './components/GetPokemonNames';
// const generateCache =  require('./components/GenerateCache');
// const getPokemonObjs = require('./components/GetPokemonObjs');
// const getPokemonNames = require('./components/GetPokemonNames');

class App extends React.Component {

  constructor(props) {
    super(props); 
    this.state = {
      pokemonNameArr : [],
      pokemonObjArr: [],
      cacheGenerated: false,
    }
}

  componentDidMount = async () => {
    generateCache();
    this.setState({
      cacheGenerated: true,
    })
  }

  getPokemonCards = async () => {
    if(this.state.cacheGenerated) {
      let pokemonObjsData = await getPokemonObjs();
      let pokemonNamesData = await getPokemonNames();

      this.setState({
        pokemonObjArr : pokemonObjsData,
        pokeNameArr : pokemonNamesData,
      })
    } 
  }

  render() {
    {this.getPokemonCards()}

    return (
      <>
        <PokemonHeader/>
        <SearchBar getPokemon151=''/>
          {
            this.state.pokemonObjArr ? this.state.pokemonObjArr.map(pokemon => 
            <PokemonCard name={pokemon.name} id={pokemon.id} description={pokemon.description} moves={pokemon.moves} sprites={pokemon.sprites} stats={pokemon.stats} types={pokemon.types}/> ) : <></>
          }
        <button id='test-button' onClick={this.getPokemon151}>Submit</button>
      </>
    );
  }
}

export default App;
