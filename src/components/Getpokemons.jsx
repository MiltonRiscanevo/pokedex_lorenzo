import React, {useState,useEffect} from 'react'
import axios from 'axios'
import Pokemon from './Pokemon'

const Getpokemons = () => {
  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(true)

  const getPokemonList = async()=>{
    let pokemonArray = []
    for (let index = 1; index <= 151; index++) {
      pokemonArray.push(await getPokemonData(index))
    }
    console.log(pokemonArray)
    setPokemon(pokemonArray)
    setLoading(false)
  }

  const getPokemonData= async (id)=>{
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      return response
  }
  useEffect(() => {
      getPokemonList()

  }, [])
  
  return (
    <>
      {loading ? (
        <h1>Loading ...</h1>
      ): (
        <div className='poke_list_container'>
          <h2>POKEMON LIST</h2>
          <div className="list_container">
            {pokemon.map(p => (
              <div key={p.data.name} className='pokemons' >
                <Pokemon pokemon = {p.data}/>  
              </div>            
          ))}
          </div>
          
        </div>
      )}
    </>
  )
}

export default Getpokemons