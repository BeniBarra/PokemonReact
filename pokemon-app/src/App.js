import React from 'react';
import './App.css';
import PokemonHeader from './components/PokemonHeader'
import SearchBar from './components/SearchBar';
import generateCache from './components/GenerateCache';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import CardContainer from './components/CardContainer';
import getPokemonObjs from './components/GetPokemonObjs';
import getPokemonNames from './components/GetPokemonNames';

class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      pokemonNameArr : [],
      pokemonObjArr: [],
    }
  }

  componentDidMount = async () =>{
    console.log('pre: ' + this.state.pokemonObjArr);
    this.setState({
      pokemonObjArr : await getPokemonObjs(),
      pokemonNameArr : await getPokemonNames()
    })
    console.log('post: ' + this.state.pokemonObjArr);
  }

  render() {
    return (
      <>
        <PokemonHeader/>
        <SearchBar pokemonNames={this.state.pokemonNameArr}/>
        <LoginButton></LoginButton>
        <LogoutButton></LogoutButton>
        <CardContainer pokemonArr={this.state.pokemonObjArr}></CardContainer>
        <button id='test-button' onClick={this.getPokemon151}>Submit</button>
      </>
    );
  }
}

export default App;
