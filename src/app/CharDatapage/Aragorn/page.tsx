import { getAragornData } from "../../APIFunctions";
import { CharData } from "../../APIFunctions";
import { NavBar } from "@/app/Navbar"; 
import React from "react";
export default async function Home() {
    const data = await getAragornData()

    return (
        <div>
            <h1>Aragorn&apos;s data</h1>
            <CharDisplay data={data} />
            <NavBar/>
        </div>
        
    )
}

interface CharDisplayProps {
    data: CharData
}


async function CharDisplay({ data }: CharDisplayProps) {
    return (
        <div>
            <p>
                Name: {data.name} <br />
                Locations Desired to Visit:
                {String(data.LocationDesired)} <br />
                Locations Visited:
                {String(data.LocationsVisited)}<br />
            </p>
        </div>
    )
}