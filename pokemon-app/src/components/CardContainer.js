import React from "react";
import PokemonCard from "./PokemonCards";

class CardContainer extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {

        }
    }

    render() {
        return (
            <>
                {
                    this.props.pokemonArr.length > 0 ? this.props.pokemonArr.map(pokemon => 
                    <PokemonCard 
                    name={pokemon.name} 
                    id={pokemon.id} 
                    description={pokemon.description} 
                    moves={pokemon.moves} 
                    sprites={pokemon.sprites} 
                    stats={pokemon.stats} 
                    types={pokemon.types}
                    />) : <></>
                }
            </>
        );
    }
}

export default CardContainer;