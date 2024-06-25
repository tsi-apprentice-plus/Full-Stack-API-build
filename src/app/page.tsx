import Image from "next/image";
import React from "react";
import {useRouter} from 'next/router'
import Link from 'next/link'
import { useState } from "react";
import { NavBar } from "./Navbar";
import { Component } from "react";
// import { env } from "process";
 
// import styles from "./page.module.css";

//Importing database function

//Importing art assests
import ConcerningHobbits from '/public/Images/ConcerningHobbits.jpg'


// function SearchBar(){
//   let newName ="";
//   let  name= "";
// const handleSubmit = (event: React.SyntheticEvent) => {
//   event.preventDefault();
//   console.log(name)
//   }
// return(
// <form onSubmit={handleSubmit} data-testid="NameInputTextBox" >
//   <input type="text" value={newName}
//   onChange={(e) => name=(e.target.value)}/>
//   <input type = "submit" value="Search Name"/>
// </form>
// ) 
// }
export default function Home() {

  return (
    <main id="MainPage"> 
    <div>
    <h1> Welcome to the LOTR travel Bucket List</h1>
    <p>
    This website lists characters in the database <br/>
    it will list the locations that have been visted and where they desire to go
    </p>
    <Image
      src={ConcerningHobbits}
      width={500}
      height={500}
      alt="Concerning Hobbits"
      />
      </div>

      <NavBar/>
      <br/>
      <button data-testId="button 1">
      TEST BUTTON
      </button>
      <br/>
      <button data-testId="button 2">
      TEST BUTTON 2
      </button>
      <br/>
      <Link href={'/LocationData'} passHref>
      <button data-testId="button 3">
        Look up Location
      </button>
      </Link>
      <br/>
      <Link href={`/ModifyDataPage`}>
      <button data-testId="button 4">
      Character Data Adjustment
      </button>
      </Link>
      <br/>
      <button data-testId="button 5">
        Navigate to Database display
      </button>
      <br/>
      <Link href = {`/CharDatapage/Aragorn`} passHref>
      <button data-testId="AaragonButton">Aragorn Details</button>
      </Link>
    </main>
  );
}
