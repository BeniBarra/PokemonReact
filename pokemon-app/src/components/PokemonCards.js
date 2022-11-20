import React from "react";
import axios from "axios";
import '../styling/PokemonCard.css'

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
                <div class='pokemonCard'>
                    <p class='pokemonName'>{this.props.name}</p>
                    <div class='pokemonPictureDiv'>
                    <img class='pokemonPicture' src={this.props.sprites}/>
                    </div>
                    <p class='pokemonNumber'>{'#' + this.props.id}</p>
                    <p class='pokemonDescription'>{this.props.description}</p>
                    <ul class='statList'>STATS:
                    {
                        this.props.stats.map(stats => <option class='statOption'>{stats.name + ' : ' + stats.baseStat}</option>)
                    }
                    </ul>
                    <ul class='typeList'>TYPE:
                        {this.props.types.map(types => <option class='typeOption'>{types.name}</option>)}
                    </ul>
                </div>               
                {/* <button id='test-button' onClick={this.handleOnClick}>Submit</button> */}
            </>
        );
    }
}

export default PokemonCard;