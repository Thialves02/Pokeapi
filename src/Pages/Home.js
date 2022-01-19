import { useContext, useEffect, useState } from "react";
import EachPokemon from "../Components/EachPokemon/EachPokemon";
import { Context } from "../context/CtxApp";
import InfiniteScroll from "react-infinite-scroll-component";
import "./App.css";

function App() {
  /* const[data,setData] = useState([]) */
  const [offset, setOffset] = useState(20);
  const { data, setData } = useContext(Context);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`
      );
      const body = await response.json();

      setData(body.results);
    };
    getData();
  }, []);

  const fetchComments = async () => {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`
    );
    const body = await res.json();
    return body.results;
  };

  const fetchData = async () => {
    const commentsFormServer = await fetchComments();
    setData([...data, ...commentsFormServer]);

    setOffset(offset + 20);
  };

  return (
    <>
      <div className="home-container">
        {data.abilities !== undefined && <EachPokemon name={data.name} />}
        <InfiniteScroll
          dataLength={data.length}
          next={fetchData}
          hasMore={true}
          loader={<h4></h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {data.abilities === undefined && (
            <div className="home-container">
              {data.map((data, index) => (
                <EachPokemon name={data.name} />
              ))}
            </div>
          )}
        </InfiniteScroll>
      </div>
    </>
  );
}

export default App;
