import React from "react"
export function NavBar(){
    return(
    <div>
        <h1>Menu</h1>
        <nav className="navbar">
        <div className="NavbarLeft"></div>
        <div className="navBarCentre">
          <li><a href ="/">Home Page</a></li>
          <li><a href ="/ModifyDataPage"> Data Adjustment</a></li>
          <li><a href ="/CharDatapage/Aragorn">Aaragorn Data Lookup</a></li>
          <li><a href ="/LocationData">Location Lookup</a></li>
        </div>
        </nav>
        </div>
    )
}