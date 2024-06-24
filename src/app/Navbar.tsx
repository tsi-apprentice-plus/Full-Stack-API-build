export function navBar(){
    return(
    <div>
        <nav className="navbar">
        <div className="NavbarLeft"></div>
        <div className="navBarCentre">
          <li><a href ="/">Home Page</a></li>
          <li><a href ="/ModifyDataPage">Character Data Adjustment</a></li>
          <li><a href ="/CharDatapage/Aragorn">Aaragorn Data Lookup</a></li>
          <li><a href ="/LocationData">Location Lookup</a></li>
        </div>
        </nav>
        </div>
    )
}