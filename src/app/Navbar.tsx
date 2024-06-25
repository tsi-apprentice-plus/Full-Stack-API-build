import React from "react"
export function NavBar(){
    return(
    <div className="NavBar">
        <h1>Navigation</h1>
        <nav className="navbar">
        <div className="NavbarLeft"></div>
        <div className="navBarCentre">
          <button><li><a href ="/">Home Page</a></li></button><br/>
          <button><li><a href ="/ModifyDataPage"> Data Adjustment</a></li></button><br/>
          <button><li><a href ="/CharDatapage/Aragorn">Aaragorn Data Lookup</a></li></button><br/>
          <button><li><a href ="/LocationData">Location Lookup</a></li></button><br/>
        </div>
        </nav>
        </div>
    )
}