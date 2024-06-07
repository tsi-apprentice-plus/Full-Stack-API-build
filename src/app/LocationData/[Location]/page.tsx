import { getLocationData } from "@/app/APIFunctions";
import { LocationData } from "@/app/APIFunctions";
interface LocationDisplayProps{
    data:LocationData
}
interface PageProps{
    params: {
        Location:string
    }
}

function LocationDisplay({ data }:LocationDisplayProps){
console.log(data) 
    return(
    <div>   
    <p>
    Name: {data.name} <br/>
    Location&apos;s Description:  
    {data.desc} <br/>
    Location&apos;s danger:  
    {data.danger}<br/>
    </p>
    </div>
    )}

export default async function Home({ params }:PageProps){
const data = await getLocationData(params.Location)
return(
<LocationDisplay data={data}/>
)
}
