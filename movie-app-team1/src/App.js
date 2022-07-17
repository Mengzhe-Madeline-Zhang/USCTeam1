import MovieList from './compoent/MovieList';
import { useState, useEffect } from "react";
// import Pagination from "./compoent/Pagination";


function App() {
  const [likelist, setLikeList] = useState([]);
  const [blocklist,setBlockList] = useState([]);

  const addLike = (item) => {
    const preventRepeat = likelist.find((elem) => {
      return elem.data.id === item.data.id;
    });
    if (!preventRepeat){
      const items = [...likelist];
      items.push(item);
      setLikeList(items);
    } else {
      console.log('element already exist');
    }
  }

  const addBlock = (item) => {
    const items = [...blocklist];
    items.push(item);
    setBlockList(items);
      
  }

  //ComponentDidUpdate -> Prevent 
  useEffect(() => {
    // console.log(likelist);
    console.log(blocklist);
  },[blocklist]);

  return (
    
    <div>
        <MovieList likes={addLike} blocks={addBlock}/>
    </div>
  );
}

export default App;