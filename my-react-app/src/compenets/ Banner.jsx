import axios from './helper/axios';
import React, { useEffect, useState } from "react";

import requests from "./helper/requst";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      console.log(request);
      
      
    };
    fetchData();
  }, []);

  

 

  return (
    <header>
    
    </header>
  );
};

export default Banner;