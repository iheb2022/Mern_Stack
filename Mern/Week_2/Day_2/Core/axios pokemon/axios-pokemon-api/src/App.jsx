import { useEffect, useState } from 'react'
import axios from 'axios'
import './app.css';


function App() {
  const [pokemons, setPokemons] = useState([])

  
  useEffect(()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
    .then ((response) => setPokemons(response.data.results))
    .catch(err=>console.log(err))
  } ,[])

  
  return (
    <>
      <h1>Pokemon API</h1>
      <ul>
        {
          pokemons.map((pokemon,i)=>{
            return(
              <li key={i}>{pokemon.name}</li>
            )
          })
        }
      </ul>
    </>
  )
}

export default App