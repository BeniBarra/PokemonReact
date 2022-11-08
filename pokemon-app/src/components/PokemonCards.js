import React from "react";
import axios from "axios";

class PokemonCard extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {

        }
    }

    componentDidMount = () => {
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
                    <ul>STATS:
                    {
                        this.props.stats.map(stats => <option>{stats.name + ' : ' + stats.baseStat}</option>)
                    }
                    </ul>
                    <ul>TYPE:
                        {this.props.types.map(types => <option>{types.name}</option>)}
                    </ul>
                </article>               
                <button id='test-button' onClick={this.handleOnClick}>Submit</button>
            </>
        );
    }
}

export default PokemonCard;