
 export  async function getMovies(){

  const response = await   fetch("http://localhost:4000/api/movies");
  const data = await response.json();
  return data

}