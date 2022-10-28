import React from 'react';
import './App.css';
import PokemonHeader from './components/PokemonHeader'
import PokemonCard from './components/PokemonCards';
import SearchBar from './components/SearchBar';
import axios from 'axios';

//const axios = require('axios');

//process.env not working, debugg another time
class App extends React.Component {

  constructor(props) {
    super(props); 
    this.state = {
      pokemonArr : []
    }
}

  componentDidMount = async () => {
    const pokemon151 = await axios.get(process.env.REACT_APP_GET_151);
    this.setState({
      pokemonArr : pokemon151.data
    })
    console.log(pokemon151.data);
  }

  getPokemon151 = async () => {
    console.log(this.state.pokemonArr);
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
