import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';


function App() {
  const [likelist, setLikeList] = useState([]);
  const [blocklist,setBlockList] = useState([]);
  const [pagetoDisplay, setPagetoDisplay] = useState(<HomePage/>);

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
      <NavBar pagetoDisplay= {pagetoDisplay} setPagetoDisplay = {setPagetoDisplay} likes={addLike} blocks={addBlock}/>
      <likelist/>
      {pagetoDisplay}
    </div>
  );
}

export default App;