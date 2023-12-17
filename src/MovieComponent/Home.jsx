import { GlobalContext} from "../contextStore/context";
import Search from "./Search";
import Movie from "./Movie";


function Home(){
   const context = GlobalContext();
    return (
        <>
            <Search/>
            <Movie/>
        </>
    );
}

export {Home} 