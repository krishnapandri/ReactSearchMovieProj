import { GlobalContext } from "../contextStore/context"
export default function Search(){
    const {query,setQuery} = GlobalContext();
    
    const a = 
    <section style={{textAlign:'center'}}>
        <input type="text" placeholder="Search Movie Name"  value={query} onChange={(event)=>setQuery(event.target.value)} />
    </section>
    return <>
    <h1 style={{textAlign:'center'}}>Search Your Favourite Movie</h1>
    {a}
    </> 
    
    
    
} 