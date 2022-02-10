import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'
import SinglePokemon from "./SinglePokemon";

const Pokedex = ({handleAddPokemonTeam}) => {
    const [pokemonList, setPokemonList] = useState([]);
    const [toggle, setToggle] = useState(true);

    //on page load this will run our getPokemonList function which fetches data
    useEffect (() => {
        getPokemonList()
    }, [])

    const getPokemonList = () => {
        const url='https://pokeapi.co/api/v2/pokemon/?limit=151'

        fetch(url)
        .then((response)=>response.json())
        .then((data) => setPokemonList(data.results))
        .catch(() => console.log('no pokemon in this area'))
    }

    const listOfPokemon = pokemonList.map((pokemon, index) => {
        return(
            <div key={index}>
                <Link onClick={() => setToggle(!toggle)} to={'/pokedex/' + pokemon.name} style={{textDecoration: 'none'}}>
                    <li>{pokemon.name} <img src='https://www.popsockets.com/dw/image/v2/BFSM_PRD/on/demandware.static/-/Sites-popsockets-master-catalog/default/dw9eb9511a/images/hi-res/Poke-Ball-Gloss_01_Top-View.png?sw=800&sh=800' className='pokeball' /></li>
                </Link>
                {/* {pokemon.name} */}
            </div>
        )
    })

    // console.log(pokemonList)
    return(
        <div> 
            <SinglePokemon toggle={toggle} handleAddPokemonTeam={handleAddPokemonTeam}/>
          {listOfPokemon}
         
        </div>
    )
}

export default Pokedex