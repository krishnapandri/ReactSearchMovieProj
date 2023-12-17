import { GlobalContext} from "../contextStore/context";
import { NavLink } from "react-router-dom";

const Movie =()=>{
    var {movies,isError,isLoading} = GlobalContext();
    /* const listTitle = movies.map(m=><li key={m.imdbID}>{m.Title}</li>); */
    const placeHolder = "https://via.placeholder.com/200/200";

    return (
        <>
        <section className="movie-page">
            <div className="container grid grid-4-col">
                {(movies.length > 0 && isError.show ===false)&&
                movies.map((movie)=>{
                return (
                <NavLink to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
                    <div className="card">
                        <div className="card-info">
                            <h2>{movie.Title.length > 15? movie.Title.substring(0,15)+'...' : movie.Title}</h2>
                            <img src={movie['Poster']==="N/A"? placeHolder: movie['Poster']} alt={"Img"}/>
                        </div>
                    </div>
                </NavLink>
                )
            })}</div>
            {/* <h1 style={{textAlign:'center',color:'red'}}>{movies.length === 0  && 'No Results Found!!!' }</h1> */}
            <h2 style={{color:'red',textAlign:'center'}}><b>{isError.show && isError.msg}</b></h2>
            {isLoading&&<div className="text-center mt2 loading">Loading...</div>}
        </section>
        </>
    )
}

export default Movie;