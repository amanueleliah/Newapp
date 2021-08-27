// // // const getMoviesBySearchTerm = () => {
// //   const apiKey = "1b7802d3";
// //   const searchTerm = "batman";

// //   fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`)
// //     .then((res) => res.json())
// //     .then((movieData) => console.log(movieData));
// // }
// // getMoviesBySearchTerm()

// // http://www.omdbapi.com/?i=tt3896198&apikey=1b7802d3

// const OMDB_API_KEY = "1b7802d3";
// const searchTerm = "batman";
// const searchMId = "tt3896198";

// const getMoviesBySearchTerm = async () => {
//   // const got = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=1b7802d3`);
//   const got = await fetch(`http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${searchTerm}`)

//     const result = await got.json;
//     return result;
// };




// const getMovieDetailsById = async () => {
//     const data = await fetch(`http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${searchMId}`);


//     const resultByDetail = await data.json;
//     return resultByDetail;
// }


const OMDB_API_KEY = '1b7802d3';
const API_URL = 'http://www.omdbapi.com'

export const getMoviesBySearchTerm = async (searchTerm = '') => {
  const url = `${API_URL}/?apikey=${OMDB_API_KEY}&s=${searchTerm}`;
  const response = await fetch(url);
  const movies = await response.json();
  return movies;
}

export const getMovieDetailsById = async (movieId) => {
  const url = `${API_URL}/?apikey=${OMDB_API_KEY}&i=${movieId}`;
  const response = await fetch(url);
  const movie = await response.json();
  return movie;
}