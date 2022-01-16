import { useEffect, useState } from 'react';
import EachPokemon from '../Components/EachPokemon/EachPokemon'
import './App.css';

function App() {
  const[data,setData] = useState([])

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
    {data.map((data,index) =>(
      <EachPokemon
      name={data.name}
      />
    ))}
    </div>
    </>
  );
}

export default App;
