import React from 'react'
import {Link} from 'react-router-dom'

const Pokemon = ({pokemon}) => {
  return (
    <>
        <div className='pokecard_container'>

            <Link to={`pokemon/${pokemon.id}`} className='link_contain'>
                <h2 className='title_pokecard'>{pokemon.name}</h2>
                <img src={pokemon.sprites.front_default} alt="profile_poke" className='image_poke_card' />
                
                <div className='range_poke'>
                  <p>{`Weight: ${parseInt(pokemon.weight)}`}</p>
                  <p>{`height: ${parseInt(pokemon.height)}`}</p>
                </div>
                
            </Link>

        </div>
    </>
  )
}

export default Pokemon