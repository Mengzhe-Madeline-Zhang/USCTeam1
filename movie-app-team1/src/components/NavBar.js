import React from 'react'
import HomePage from './HomePage'
import MovieList from './MovieList';
import LikeList from './LikeList/LikeList';
import BlockList from './BlockList/BlockList';

const displayPage = (e,props) => {
    let pagetoDisplay;
    const targetPage = e.target.id;
    console.log(e)
    if (targetPage === "homepage") {
            pagetoDisplay = <HomePage/>;
            props.setPagetoDisplay(pagetoDisplay);
    }
    if(targetPage === "movielist") {
            pagetoDisplay = <MovieList likes = {props.likes} block = {props.blocks}/>;
            props.setPagetoDisplay(pagetoDisplay);
    }

    if (targetPage === "likelist") {
        pagetoDisplay = <LikeList movies = {props.likelist}/>;
        props.setPagetoDisplay(pagetoDisplay);
}

if (targetPage === "blocklist") {
    pagetoDisplay = <BlockList movies = {props.blocklist}/>;
    props.setPagetoDisplay(pagetoDisplay);
}
// if(targetPage === "movielist") {
//         pagetoDisplay = <MovieList likes = {props.likes} block = {props.blocks}/>;
//         props.setPagetoDisplay(pagetoDisplay);
// }


        // case "likelist" :
        //     pagetoDisplay = <LikeList/>;
        //     setPagetoDisplay(pagetoDisplay);
        // case "blocklist" :
        //     pagetoDisplay = <BlockList/>;
        //     setPagetoDisplay(pagetoDisplay);

    
}


function NavBar(props) {
    return (
        <div>
            <nav className="nav-bar-c">
                <ul className="nav">
                    <li className="navbar-item">
                        <span id= "homepage" onClick={(e)=>{displayPage(e,props)}}>Home Page</span>
                    </li>
                    <li className="navbar-item">
                        <span id= "movielist" onClick={(e)=>{displayPage(e,props)}}>MovieList</span>
                    </li>
                    <li className="navbar-item">
                        <span id= "likelist" onClick={(e)=>{displayPage(e,props)}}>Like List</span>
                    </li>
                    <li className="navbar-item">
                        <span id= "blocklist" onClick={(e)=>{displayPage(e,props)}}>Block List</span>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar