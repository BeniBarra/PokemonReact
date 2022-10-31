import React from "react";
import axios from "axios";

class PokemonCard extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {

        }
    }

    handleOnClick = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        console.log(this.props.pokemonList);
    }

    render() {
        return (
            <>
                <article className='pokemonCard'>
                    <p>{this.props.name}</p>
                    <img  src={this.props.sprites}/>
                    <p >{'#' + this.props.id}</p>
                    <p >{this.props.description}</p>
                    <p >{'Stats: ' + this.props.stats}</p>
                    {this.props.types.map(types => <p>{types.name}</p>)}
                </article>               
                <button id='test-button' onClick={this.handleOnClick}>Submit</button>
            </>
        );
    }
}

export default PokemonCard;