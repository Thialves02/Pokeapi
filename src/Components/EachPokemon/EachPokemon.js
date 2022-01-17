import React, { useEffect, useState } from 'react'
import PokeCard from '../PokeCard/PokeCard'
import './EachPokemon.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function EachPokemon({name}) {
    const [info,setInfo] = useState()

    useEffect(() => {
      const getInfo = async () =>{
        const response = await fetch (
          `https://pokeapi.co/api/v2/pokemon/${name}`
        )
        const body = await response.json();
        
        setInfo(body)
      }
      getInfo()
    }, [/* info */])

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
    
    return (
      <>
      <div className='container-pokemons'>
        {info === undefined &&
          <div>Loading</div>
        }
        {info != undefined &&
          <div className='each-container'  style={{backgroundColor:`#${TYPE_COLORS[info.types[0].type.name]}`}}>
            <img src={info.sprites.front_default}/>
            <div className='icon'>
              <FontAwesomeIcon icon={faStar}/>
            </div>
            <h1>{info.id}</h1>
            <h2>{name}</h2>
            <div className='types'>
              {info.types.map((type) =>(
                <div className='type' style={{backgroundColor:`#${TYPE_COLORS[type.type.name]}`,color:'white'}}>
                  <p >{type.type.name}</p>
                </div>
              ))}
            </div>
            <div className='stats-container'>
            {info.stats.map((stat)=>(
              <> 
                <div className='stats'>
                  <p>{stat.stat.name}</p>
                  <p>{stat.base_stat}</p>
                </div>
                <span><div className='base-stat' style={{width:stat.base_stat * 2,maxWidth:'200px'}}></div></span> 
              </>
            ))}
            </div>
          </div>
        }
      </div>
      
        
      </>
    )
}
