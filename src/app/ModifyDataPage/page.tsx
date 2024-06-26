'use client'
import { useState } from "react"
import { MouseEvent } from "react";
import Link from "next/link";
import { deleteCharsData } from "../APIFunctions";
import { NavBar } from "../Navbar";
interface FormProps{
    handleSubmit:(location:string)=>void
}

function DataForm({handleSubmit}: FormProps){
    const [newData, setNewData]= useState("");

     return(<form onSubmit={(e)=>{e.preventDefault();handleSubmit(newData)}}>
        <input type="text" name="New Data" value={newData}
              onChange={(e) => setNewData(e.target.value)}/>
        <button type="submit">
          Check data
        </button>
        </form>
       )
    }

export default function Home(){

    const [Data, setData]= useState("");
    const handleSubmit = (newData:string) => {
        setData(newData)
        alert('The Name you entered was: ' + newData)
    }
    const handleMouseEventDelete = (e: MouseEvent<HTMLButtonElement>)=> {
        e.preventDefault();
        console.log(Data)
        deleteCharsData(Data).then(()=>console.log("Deleted"))
    }

    return(
        <main>
        <NavBar/>
        <div>
        <h1>Character Data </h1>
        <p>The name currently Logged to adjust is {Data}</p>
        <DataForm handleSubmit={handleSubmit}/> <br/>

        <button onClick={handleMouseEventDelete}>
            Delete data
        </button><br/>
        
        <Link href = {`/ModifyDataPage/CreateLocation/`} passHref>
        <button>
            Create Location
        </button>
        </Link><br/>
        
        <Link href = {`/ModifyDataPage/CharRetrieve/${Data}`} passHref>
        <button data-testId="View Character">Char Details</button>
        </Link>
        
        </div>
        </main>
    )
}