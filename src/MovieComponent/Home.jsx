import { GlobalContext} from "../contextStore/context";
import Search from "./Search";
import Movie from "./Movie";


function Home(){
    return (
        <>
            <Search/>
            <Movie/>
        </>
    );
}

export {Home} 