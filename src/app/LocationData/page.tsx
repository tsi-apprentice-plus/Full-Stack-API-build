'use client'

import LOTRMap from '/public/Images/LOTRMap.jpg'
import Image from "next/image";
import React from "react";
import Link from 'next/link'
import { useState } from "react";

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
        <main>
        <div>
        <h1>Location data Finder</h1>
        <LocationForm handleSubmit={handleSubmit} />
        <br/>
        <Link href={`/LocationData/${Location}`} passHref>
        <button>
            Look up Location Page
        </button>
        </Link>
        <br/><br/>
        <Image className="PageImage"
      src={LOTRMap}
      width={400}
      height={400}
      alt="Middle Earth Map"
      />
        </div>
        </main>
    )
}