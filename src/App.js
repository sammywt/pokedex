import './App.css';
import Pokedex from './components/pokedex';
import MyTeam from './components/MyTeam';
import {Route, Link, Routes, Navigate} from 'react-router-dom';
import {useState} from 'react';

function App() {

  //useState to interact with my team and pokedex
const [myPokemonTeam, setMyPokemonTeam] = useState([]);
//pushing new objects into the copied array of team and then setting the updated array to myPokemonTeam 
const handleAddPokemonTeam = (name, image) => {
  const addToTeam = [...myPokemonTeam];
  addToTeam.push({name, image});
  setMyPokemonTeam(addToTeam);

}
console.log(myPokemonTeam)
  return (
    <div className='App'>
      <nav>
      <Link to='/' style={{textDecoration: 'none'}} >
        <h3>Pokédex</h3>
      </Link>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png' className='logo' />
      <Link to='/Team' style={{textDecoration: 'none'}} >
        <h3>My Team</h3>
      </Link>
      </nav>
      <Routes>
        <Route path ='/' element={<Pokedex handleAddPokemonTeam={handleAddPokemonTeam}/>} 
         />
        <Route path ='/pokedex/:name' element={<Pokedex handleAddPokemonTeam={handleAddPokemonTeam}/>} />
        <Route path ='/Team' element ={<MyTeam myPokemonTeam={myPokemonTeam}/>} />
      </Routes>
    </div>
  );
}
// 
export default App;
