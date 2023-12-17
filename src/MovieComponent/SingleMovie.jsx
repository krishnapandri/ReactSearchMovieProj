import { useParams } from "react-router-dom"
import { API_KEY, GlobalContext } from "../contextStore/context";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";



function  DetailedMovie(){
    const [isloading,setIsLoading] = useState(false);
    const [movie,setMovie] = useState({});
    const ID = useParams().ID;

    useEffect(()=>{
       setIsLoading(true);
       fetch(API_KEY+'&i='+ID)
       .then((res)=>res.json())
       .then((data)=>{
        setMovie(data);
        setIsLoading(false);
       })
       .catch((err)=>{
        console.log(err);
       })
    },[])


    if(isloading)
        return(
      <section className="movie-section ">
        <div className="loading">Loading....</div>;
      </section>
    )
    

    return( 
        <section className="movie-section">
        <div className="movie-card">
          <figure>
            <img src={movie.Poster} alt="" />
          </figure>
          <div className="card-content">
            <p className="title">{movie.Title}</p>
            <p className=""></p>
            <p className="card-text">{movie.Released}</p>
            <p className="card-text">{movie.Genre}</p>
            <p className="card-text">{movie.imdbRating} / 10</p>
            <p className="card-text">{movie.Country}</p>
            <NavLink to="/" className="back-btn">Go Back</NavLink>
          </div>
        </div>
      </section>
    )
}

export {DetailedMovie}