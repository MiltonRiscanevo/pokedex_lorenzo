import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'




const PokemonUnit = () => {
    const {id} = useParams()
    const [pokemonDetails, setPokemonDetails] = useState()
    const [loading, setLoading] = useState(true)

    const getPokemon = async (id)=>{
      const details = await getPokemonData(id);
      setPokemonDetails(details.data)
      setLoading(false)
    }

    const getPokemonData = async (id)=>{
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      return response
    }

    useEffect(()=>{
      getPokemon(id)
    },[])
    
  return (
    
    <>
      {loading ?
       (  <div>Loading ... </div>
       ) : (  
          <div className='unit_poke_container' > 
            <h2>{pokemonDetails.name.toUpperCase()}</h2>
            <div className='container_images'>
              <img src='https://i.pinimg.com/originals/46/74/30/467430c7966046066e2db60356547d86.png' className='pokeball'/>
              <img src={pokemonDetails.sprites.other.dream_world.front_default} alt="pokemon" className='poke_unit_image ' />
            </div>
            
            
            <p className='types_container'>{pokemonDetails.types.map(t =>(
              <div key={t.type.name} className={t.type.name} >
                {t.type.name}
              </div>
            ))}
            </p>

            <p className='poke_details'>{pokemonDetails.abilities.map(a =>(
              <div key={a.ability.name}>
                {a.ability.name}
              </div>
            ))}
            </p>

            <Link to='/'>
              <button className='button'>
                Back to pokemons
              </button>
            </Link>
          </div>
      )
      }
    </>
  )
}

export default PokemonUnit