// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { getPokemons } from './services/fetch-utils';
import { useEffect } from 'react';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [query, setQuery] = useState('');

  async function load() {
    const {
      data: { results },
    } = await getPokemons(query);

    setPokemons(results);
  }

  useEffect(() => {
    load();
  }, []); //eslint-disable-line

  async function handleSearch(e) {
    e.preventDefault();

    load();
  }
  // console.log(pokemons);
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input onChange={(e) => setQuery(e.target.value)} />
        <button>Search</button>
      </form>
      <div>
        {pokemons.map((pokemon, i) => (
          <div key={pokemon + i}>
            <h2> {pokemon.pokemon}</h2>
            <p>type 1:{pokemon.type_1}</p>
            <p>type 2:{pokemon.type_2}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
