import React from 'react'


function NavBar({setPagetoDisplay}) {
   
      return (
        <div>
            <nav className="nav-bar-c">
                <ul className="nav">
                    <li className="navbar-item">
                        <span id= "homepage" onClick={(e)=>{setPagetoDisplay("homepage")}}>Home Page</span>
                    </li>
                    <li className="navbar-item">
                        <span id= "movielist" onClick={(e)=>{setPagetoDisplay("movielist")}}>MovieList</span>
                    </li>
                    <li className="navbar-item">
                        <span id= "likelist" onClick={(e)=>{setPagetoDisplay("likelist")}}>Like List</span>
                    </li>
                    <li className="navbar-item">
                        <span id= "blocklist" onClick={(e)=>{setPagetoDisplay("blocklist")}}>Block List</span>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar