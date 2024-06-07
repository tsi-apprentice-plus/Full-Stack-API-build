'use client'
import Link from 'next/link'

import { getLocationData } from "../APIFunctions";
import { useState, useEffect } from "react";
interface LocationFormProps{
    handleSubmit:(location:string)=>void
}


function LocationForm({handleSubmit}: LocationFormProps){
    const [newLocation, setNewLocation]= useState("");

     return(<form onSubmit={(e)=>{e.preventDefault();handleSubmit(newLocation)}}>
        <input type="text" name="Location" value={newLocation}
              onChange={(e) => setNewLocation(e.target.value)}/>
        <button type="submit">
          Check data
        </button>
        </form>
       )
    }
export default function Home(){
    const [Location, setLocation]= useState("");
    const handleSubmit = (newLocation:string) => {
        setLocation(newLocation)
        alert('The Name you entered was: ' + newLocation) 
    }


    return(
        <div>
        <h1>Location data Finder</h1>
        <LocationForm handleSubmit={handleSubmit} />
        <Link href={`/LocationData/${Location}`} passHref>
        <button>
            Look up Location Page
        </button>
        </Link>
        </div>
    )
}