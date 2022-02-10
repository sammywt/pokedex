import {useParams} from 'react-router'
import {useEffect, useState} from 'react'



const SinglePokemon = ({toggle, handleAddPokemonTeam}) => {
    const [soloPokemon, setSoloPokemon] = useState({
        sprites: {}
    })
    
    let params = useParams()
    // console.log(params)

    useEffect (() => {
        getSinglePokemon()
    }, [toggle])

    const getSinglePokemon = () => {
        const url=`https://pokeapi.co/api/v2/pokemon/${params.name}/`

        fetch(url)
        .then((response)=>response.json())
        .then((data) => setSoloPokemon(data))
        .catch(() => console.log('no pokemon in this area'))
    }
        // console.log(soloPokemon.types && soloPokemon.types[0].type ? soloPokemon.types[0].type : '');
    return(
        <div className = 'singlePokemon'>
            <img src={soloPokemon.sprites.front_default} className='singlePokemonPic'/>
            <img src={soloPokemon.sprites.front_shiny} className='singlePokemonPic'/>
            <h4>{soloPokemon.name}</h4>
            <h5>Height: {soloPokemon.height}</h5>
            <h5>Weight: {soloPokemon.weight}</h5>
            <h5>Type: {soloPokemon.types && soloPokemon.types[0].type ? soloPokemon.types[0].type.name : ''}</h5>
            <h5>{soloPokemon.types && soloPokemon.types[1] ? soloPokemon.types[1].type.name : ''}</h5>
            <h5></h5>
            <button 
            onClick={()=>handleAddPokemonTeam(soloPokemon.name, soloPokemon.sprites.front_shiny)}
            >Add to Team</button>
        </div>
    )
}
// 

export default SinglePokemon;