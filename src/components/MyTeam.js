

const MyTeam = ({myPokemonTeam, handleRemovePokemonTeam}) => {
    // // const eachPokemon = pokemon.map((one, index) => {
    const eachPokemon = myPokemonTeam.map((item, index) => {
        return(
            <div key={index}>
                 <img src={item.image} />
                 {item.name}
                <button onClick={handleRemovePokemonTeam}
            </div>
        )
    })

    console.log(myPokemonTeam);
    return(
        <div>
           {eachPokemon}
        </div>
    )
}

export default MyTeam