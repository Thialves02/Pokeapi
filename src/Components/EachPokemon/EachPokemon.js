import React, { useContext, useEffect, useState } from 'react'
import PokeCard from '../PokeCard/PokeCard'
import './EachPokemon.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Context } from '../../context/CtxApp';

export default function EachPokemon({name}) {
    const [info,setInfo] = useState()
    const [click,setClick] = useState(false)
    const {favName,setFavName} = useContext(Context)

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
      fighting: 'A6A6A6',
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

    const BACKGROUND_COLORS = {
      bug: '6F7734',
      dark: '402B1D',
      dragon: '5735DF',
      electric: 'D1D132',
      fairy: 'DE68DE',
      fighting: '8A7F8A',
      fire: 'BA2525',
      flying: '717FC6',
      ghost: '4040AC',
      grass: '5D9A2E',
      ground: 'BA9829',
      ice: '48B8E1',
      normal: '81868B',
      poison: '7D237D',
      psychic: 'C0295B',
      rock: '9C8022',
      steel: '8A8A95',
      water: '307ECD'
    };

    /* let favorites = JSON.parse(localStorage.getItem('favorites')) || []; */

    const addFavorites = () => {
      let favorites = new Array
      /**
       * Verifica se a propriedade existe
       * Caso exista, converte de String para Object
       */
      if (localStorage.hasOwnProperty("favorites")) {
        favorites = JSON.parse(localStorage.getItem("favorites"))
      }
      /* Adiciona um novo valor no array criado */
      const pokemonName = info.name
      const pokemonId = info.id
      const index = favorites.indexOf(pokemonName)
      if(index!= -1){
        favorites.splice(index,1)
      }else{
        favorites.push(info)
      }
      /* Salva o item */
      localStorage.setItem("favorites", JSON.stringify(favorites))

      /* const pokemonName = (info.name)
      favorites.push(pokemonName)
      localStorage.setItem('favorites',JSON.stringify(favorites)) */
      console.log(favorites)
      setFavName(favorites)
      setClick(!click)
    }
    
    
    return (
      <>
      <div className='container-pokemons'>
        {info === undefined &&
          <div>Loading</div>
        }
        {info != undefined &&
          <div className='each-container'  style={{backgroundColor:`#${BACKGROUND_COLORS[info.types[0].type.name]}`}}>
            <img src={info.sprites.front_default}/>
            <div className={click? 'icon-fav' : 'icon'}>
              <FontAwesomeIcon icon={faStar} onClick={addFavorites}/>
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
