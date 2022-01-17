import { useContext, useEffect, useState } from 'react';
import EachPokemon from '../Components/EachPokemon/EachPokemon'
import { Context } from '../context/CtxApp';
import './App.css';

function App() {
  /* const[data,setData] = useState([]) */

  const {data,setData} = useContext(Context)

  useEffect(() => {
    const getData = async () =>{
      const response = await fetch (
        `https://pokeapi.co/api/v2/pokemon?limit=0&offset=0`
      )
      const body = await response.json();
      
      setData(body.results)
    }
    getData()
  }, [])

  return (
    <>
    <div className="home-container">
    {data.abilities != undefined && 
        <EachPokemon
        name={data.name}
        />
    }
    {data.abilities == undefined &&
    data.map((data,index) =>(
      <EachPokemon
      name={data.name}
      />
    ))}
    </div>
    </>
  );
}

export default App;
