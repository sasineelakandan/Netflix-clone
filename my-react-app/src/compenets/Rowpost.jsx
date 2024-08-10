
import axios from "./helper/axios";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube"
import "./Rowpost.css";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const [url, setuRL] = useState('');
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);

      return request;
    };
    fetchData();
  }, [fetchUrl]);
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      
      autoplay: 1,
    },
  };
  const handleMovieClick = async (id) => {
    try {
      const response = await axios.get(`/movie/${id}/videos?api_key=e97e1c6045478804cf2c3e1fc970eb03&language=en-US`);
      if (response.data.results.length !== 0) {
        setuRL(response.data.results[0].key);
      } else {
        console.log("No video available for this movie");
      }
    } catch (error) {
      console.error("Error fetching movie video: ", error);
    }
  };
  console.log(url)
  
  return (
    <div className="row">
      <h2>{title}</h2>
      

      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img onClick={()=>{handleMovieClick(movie.id)}}
                key={movie.id}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt=""
              />
            )
        )}
     

      </div>
      {url&&<YouTube opts={opts} videoId={url} />}
    </div>
    
  );
};

export default Row;
