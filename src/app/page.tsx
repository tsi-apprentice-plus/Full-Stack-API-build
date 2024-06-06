import Image from "next/image";
import {useRouter} from 'next/router'
import Link from 'next/link'
import { useState } from "react";
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
    <main>
      <div>
    <h1> Welcome to the LOTR travel Bucket List</h1>
    <p> This should list where characters have been and where they desire to go</p>
    <Image
      src={ConcerningHobbits}
      width={500}
      height={500}
      alt="Concerning Hobbits"
      />
      </div>

      <h1>Search Bar</h1>
      {/* <SearchBar/> */}



      <button data-testId="button 1">
        Connect to Database
      </button>
      <button data-testId="button 2">
        Connect to Database
      </button>
      <button data-testId="button 3">
        Connect to Database
      </button>
      <button data-testId="button 4">
      Database restart
      </button>
      <button data-testId="button 5">
        Navigate to Database display
      </button>
<Link href = {`/CharDatapage/Aragorn`} passHref>
<button>Aragorn Details</button>
</Link>
    </main>
  );
}
