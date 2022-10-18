import React from "react";

class PokemonHeader extends React.Component {
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
                <header>POKEMON</header>
                <img src=''/>
            </>
        );
    }
}

export default PokemonHeader;