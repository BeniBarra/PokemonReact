import React from "react";
import axios from "axios";

class SearchBar extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {

        }
    }

    //Can possibly made to be onChange to update list of displayed pokemon to show pokemon whose name matches user input onChange of user typing
    handleOnSubmit = (e) => {
        e.preventDefulat();
        console.log(e.target.value);
    }

    render() {
        return (
            <>
                <form className='SearchBar' onSubmit={this.props.getPokemon151}>
                    <input id='search-input' placeholder="Who's that pokemon?"></input>
                    <button id='search-button' type="submit">PokeDex</button>
                </form>
            </>
        );
    }
}

export default SearchBar;