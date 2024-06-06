import { getAragornData } from "../../APIFunctions";
import { CharData } from "../../APIFunctions";
export default async function Home(){
const data =  await getAragornData()   

return(
<div>
<h1>Aragorn&apos;s data</h1>
<CharDisplay data={data}/>
</div>
)
}

interface CharDisplayProps{
    data:CharData
}


async function CharDisplay({ data }:CharDisplayProps){
return(
<div>   
<p>
Name: {data.name} <br/>
Locations Desired to Visit:
{String(data.LocationDesired)} <br/>
Locations Visited:
{String(data.LocationsVisited)}<br/>
</p>
</div>
)   
}