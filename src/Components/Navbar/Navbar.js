import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../Assets/Images/logo.png'
import { Context } from '../../context/CtxApp'
import { useHistory } from 'react-router-dom'

export default function Navbar() {
    const {data,setData} = useContext(Context)
    const history = useHistory()

    const search = async (e) =>{
        e.preventDefault()

        const searchPokemon =  e.target.searchPokemon.value
        if (searchPokemon === ''){
            const response =  await fetch (
                `https://pokeapi.co/api/v2/pokemon?limit=0&offset=0`
            )
            history.push('/')
            const body = await response.json()

            setData(body.results)
            console.log(data)
        }else{
            const response = await fetch (
                `https://pokeapi.co/api/v2/pokemon/${searchPokemon}`
            )
            history.push('/')
            const body = await response.json()
            setData(body)
            console.log(body)
        }
        
    }
    return (
        <div className='navbar-container'>
            <img src={logo}/>
            <div className='form'>
            <form onSubmit={search}>
                <input type='text' placeholder='Pesquisar' name='searchPokemon'/>
            </form>
            </div>
            <p>Meu time</p>
        </div>
    )
}
