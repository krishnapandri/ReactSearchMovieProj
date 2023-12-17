 import React, { useContext, useEffect, useState } from "react";

 const MovieContext = React.createContext();

 ///Create Provider Function 
 const Api_Key = 'https://www.omdbapi.com/?apikey='+ process.env.REACT_APP_API_KEY+'&s=' //+process.env.REACT_APP_NAME

export const  API_KEY =  'https://www.omdbapi.com/?apikey='+ process.env.REACT_APP_API_KEY;


 //#region GetMovies
/* function getMovieData(){
    fetch(Api_Key)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data?.Search);
        return  data?.Search;
    })
    .catch((err)=>{
        console.log(console.err(err,"This is the error in getMoviesData"))
    })
} */
//#endregion

const getMovieData = async (apikey) => {
    const promise = await fetch(apikey);
    const data = await promise.json();
    if(data?.Response==="True")
        return {success:true,data:data?.Search || []}
    return {success:false,data:data.Error};
}


function MovieProvider({children}){
    const [isLoading,setIsLoading] = useState(false);
    const [isError,setIsError] = useState({show:false,msg:""});
    const [movies,setMovie] = useState([]);
    const [query,setQuery] = useState("Avengers");

    /* Debouncing In React :- UseEffect Returns Clean Up Function!! */
    useEffect(()=>{     
        setIsLoading(true);
        // if(!query.trim()) return;
        var timer =  setTimeout(() => {
        (async function(){
            try{
                const movieData = await getMovieData(Api_Key+query);
                if(movieData.success){
                    setMovie(movieData.data);
                    setIsError({...isError,show:false});
                    setIsLoading(false);
                }
                else {
                setIsError({show:true,msg:movieData.data});
                setIsLoading(false);
                }
            }catch(err){
                setIsLoading(false);
                console.log(err);
            }
        })();
    },370);
        return  (function cleanUpFunction(){
        clearTimeout(timer)
        })
    },[query])

    return <MovieContext.Provider value={{isLoading,movies,isError,query,setQuery}}>{children}</MovieContext.Provider>
}


//Global Hook 
//<summary>Returns the main context </summary> 
function GlobalContext(){
    return useContext(MovieContext);
}

export {MovieContext,MovieProvider,GlobalContext};