import React, { useEffect, useState } from 'react'
import PokeCard from '../PokeCard/PokeCard'
import './EachPokemon.css'

export default function EachPokemon({name}) {
    const [info,setInfo] = useState()

    const TYPE_COLORS = {
      bug: 'B1C12E',
      dark: '4F3A2D',
      dragon: '755EDF',
      electric: 'FCBC17',
      fairy: 'F4B1F4',
      fighting: '823551D',
      fire: 'E73B0C',
      flying: 'A3B3F7',
      ghost: '6060B2',
      grass: '74C236',
      ground: 'D3B357',
      ice: 'A3E7FD',
      normal: 'C8C4BC',
      poison: '934594',
      psychic: 'ED4882',
      rock: 'B9A156',
      steel: 'B5B5C3',
      water: '3295F6'
    };

    useEffect(() => {
      const getInfo = async () =>{
        const response = await fetch (
          `https://pokeapi.co/api/v2/pokemon/${name}`
        )
        const body = await response.json();
        
        setInfo(body)
      }
      getInfo()
    }, [])
  
    return (
      <>
      <div className='container-pokemons'>
        {info === undefined &&
          <div>Loading</div>
        }
        {info != undefined &&
          <div className='each-container'>
            <img src={info.sprites.front_default}/>
            <p>{info.id}</p>
            {info.types.map((type) =>(
              <p style={{backgroundColor:`#${TYPE_COLORS[type.type.name]}`,color:'white'}}>{type.type.name}</p>
             ))}
            {info.stats.map((stat)=>(
              <div>
                <p>{stat.stat.name}</p>
                <p>{stat.base_stat}</p>
              </div>
            ))}
          </div>
        }
      </div>
      
        
      </>
    )
}
