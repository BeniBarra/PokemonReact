import React from 'react';
import './App.css';
import PokemonHeader from './components/PokemonHeader'
import PokemonCard from './components/PokemonCards';
import SearchBar from './components/SearchBar';
import axios from 'axios';

//process.env not working, debugg another time
class App extends React.Component {
  getPokemon151 = async (e) => {
    e.preventDefault();
    console.log(`${process.env.REACT_APP_GET_POKEMON}`);
    const pokemonArr = await axios.get(process.env.REACT_APP_GET_POKEMON);
    console.log(pokemonArr);
  }

  render() {
    return (
      <>
        <PokemonHeader/>
        <SearchBar getPokemon151={this.getPokemon151}/>
        <PokemonCard/>
        <button id='test-button' onClick={this.getPokemon151}>Submit</button>
      </>
    );
  }
}

export default App;
