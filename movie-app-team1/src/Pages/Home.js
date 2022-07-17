import { Link } from "react-router-dom";
export default function Home(){
    return(
        <div>
            <Link to="/movielist">Movielist</Link>
            <br/>
            <Link to="/likepage">Likepage</Link>
            <br/>
            <Link to="/blockpage">BlockPage</Link>
        
        </div>
    )
}