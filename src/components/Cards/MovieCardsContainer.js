import React, { useEffect, useState } from 'react';
import jsonData from '../../data/data.json';

// Sample JSON data (you can fetch it from a file or API)
// const jsonData = [
//   {
//     "movietitle": "Hanu Man",
//     "imdbmovieid": "tt15433956",
//     "movielanguages": [
//       "Hindi", "Malayalam", "Kannada", "Tamil", "English", "Japanese", "Chinese", "Spanish", "Korean", "Telugu"
//     ],
//     "moviecountries": [
//       "Australia", "Canada", "Germany", "France", "France", "United Kingdom", "Ireland", "India", "Norway", "United States"
//     ],
//     "moviemainphotos": [
//       "https://m.media-amazon.com/images/M/MV5BYWUwMGFmODMtYmFhNy00YTJlLWFiZDMtZDMwM2Q3NGZkNTgxXkEyXkFqcGdeQXVyMTU4Mzg1OTU2._V1_QL75_UY281_CR4,0,190,281_.jpg"
//     ],
//     "moviegenres": ["Action", "Adventure", "Fantasy"]
//   },
//   // Add more movie objects as needed
// ];

const MovieCard = ({ movie }) => {
  // const[language, setlanguage]= useState("");
  // const[country, setcountry]= useState("");
  // setlanguage({jsonData.movielanguages});
  console.log(movie);

  return (
    <div className="card">
      <img  src={movie.moviemainphotos.length>0 ? movie.moviemainphotos[0] : "https://m.media-amazon.com/images/M/MV5BYWUwMGFmODMtYmFhNy00YTJlLWFiZDMtZDMwM2Q3NGZkNTgxXkEyXkFqcGdeQXVyMTU4Mzg1OTU2._V1_QL75_UY281_CR4,0,190,281_.jpg"} alt={movie.movietitle} />
      <div className="card-details">
        <h2 style={{height: '50px'}}>{movie.movietitle}</h2>
        <p style={{height: '20px', width:'100%'}}><span>IMDB ID:</span> {movie.imdbmovieid}</p>
        <p  style={{height: '50px'}}><span>Languages:</span> {movie.movielanguages.length > 0 ? movie.movielanguages.join(', ').slice(0,62) : "English , Hindi"}... </p>
        <p style={{height: '50px'}}><span>Countries:</span> {movie.moviecountries.length > 0 ? movie.moviecountries.join(', ').slice(0,62) : "India"}...</p>
        <p><span>Genres: </span>{movie.moviegenres.join(', ')}</p>
      </div>
    </div>
  );
};

const MovieCardsContainer = () => {
  // State to store the movie data
  const [movies, setMovies] = useState([]);

  // Fetch data when component mounts
  useEffect(() => {
    // Simulating fetching data
    // Replace with actual fetch call or data loading logic
    setMovies(jsonData);
  }, []);

  return (
    <>
    <h1 className='heading'>Latest Indian Movies Info</h1>
    <div className="movie-cards-container">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
    </>
  );
};

export default MovieCardsContainer;
