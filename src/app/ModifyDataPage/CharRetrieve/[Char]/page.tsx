import { getCharData } from "@/app/APIFunctions";
import { CharData } from "@/app/APIFunctions";
interface CharDisplayProps{
    data:CharData
}
interface PageProps{
    params: {
        Char:string
    }
}

function CharDisplay({ data }:CharDisplayProps){
if (data !== null){
console.log(data) 
    return(
    <div>   
    <p>
    Name: {data.name} <br/>
    Location&apos;s Visited:  
    {data.LocationsVisited} <br/>
    Location&apos;s Desired:  
    {data.LocationDesired}<br/>
    </p>
    </div>
    )}
    else{
    return(
    <h1>Data Not Found</h1>)
    }}

export default async function Home({ params }:PageProps){
const data = await getCharData(params.Char)
return(
<CharDisplay data={data}/>
)
}