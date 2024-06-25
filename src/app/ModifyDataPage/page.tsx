'use client'
import { useState } from "react"
import { MouseEvent } from "react";
import Link from "next/link";
import { deleteCharsData } from "../APIFunctions";
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
        console.log("bleh")
    }

  

    return(
        <div>
        <h1>Character Data </h1>
        <p>The name currently Logged to adjust is {Data}</p>
        <DataForm handleSubmit={handleSubmit}/>

        <button onClick={handleMouseEventDelete}>
            Delete data
        </button>
        
        <Link href = {`/ModifyDataPage/CreateLocation/`} passHref>
        <button>
            Create Location
        </button>
        </Link>
        
        <Link href = {`/ModifyDataPage/CharRetrieve/${Data}`} passHref>
        <button data-testId="View Character">Char Details</button>
        </Link>
        
        </div>
    )
}