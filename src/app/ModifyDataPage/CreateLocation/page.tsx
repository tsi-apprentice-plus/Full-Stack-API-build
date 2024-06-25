"use client";
import { useState } from "react";
import { createCharsData } from "@/app/APIFunctions";
import { MouseEvent } from "react";
import { NavBar } from "@/app/Navbar";
import React from "react";

interface FormProps {
  handleSubmit: (name: string , location: number[], locationsDesired: number) => void;
}
function DataForm({ handleSubmit }: FormProps) {
  const [newName, setNewName] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [newLocationDesired, setNewLocationDesired] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(newName,newLocation.split(",").map((s)=>parseInt(s.trim())), parseInt(newLocationDesired));
      }}
    >
      <label> Name of Location visited
      <br/>
      <input
        type="text"
        name="New Name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      </label>
      <br/>
      <label> Locations visited , please enter number followed by a comma
      <br/>
      <input
        type="text"
        name="New Location"
        value={newLocation}
        onChange={(e) => setNewLocation((e.target.value))}
      />
      </label>
      <br/>
      <label> Location Desired to Visit 
        <br/>
      <input
        type="number"
        name="New Location Desired"
        value={newLocationDesired}
        onChange={(e) => setNewLocationDesired((e.target.value))}
      />
      </label>
      <br/>
      <button type="submit">Check data</button>
    </form>
  );
}


export default function Home() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState<number[]>([]);
  const [locationDesired, setLocationDesired] = useState(0);

  const handleMouseEventCreate = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log();
    createCharsData(name,location,locationDesired).then(() => console.log("Created"));
    console.log("bleh");
  };

  const handleSubmit = (
    newName: string,
    newLocation: number[],
    newLocationDesired: number
  ) => {
    setName(newName);
    setLocation(newLocation);
    setLocationDesired(newLocationDesired);
    alert(
      "The Name you entered was: " +
        newName +
        " " +
        newLocation +
        " " +
        newLocationDesired
    );
  };

  return (
    <div>
      <DataForm handleSubmit={handleSubmit} />
      <button onClick={handleMouseEventCreate}>Create data</button>
      <NavBar/>
    </div>
  );
}
