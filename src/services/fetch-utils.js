export async function getPokemons(searchFilter) {
  const rawResponse = await fetch(`/.netlify/functions/pokemon?pokemonName=${searchFilter}`);
  const data = await rawResponse.json();

  return data;
}
