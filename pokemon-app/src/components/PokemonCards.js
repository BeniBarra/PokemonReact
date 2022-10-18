import React from "react";
import axios from "axios";

class PokemonCard extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {

        }
    }

    handleOnClick = (e) => {
        e.preventDefulat();
        console.log(e.target.value);
    }

    render() {
        return (
            <>
                <article className='pokemonCard'>
                    <title id='pokemon-name'></title>
                    <img id='pokemon-sprite' src=''/>
                    <p id='pokemon-number'></p>
                    <p id='pokemon-description'></p>
                </article>
            </>
        );
    }
}

export default PokemonCard;