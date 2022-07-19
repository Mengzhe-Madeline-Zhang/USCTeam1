import React from 'react';
import { createContext, useContext, useState, useEffect } from "react";
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage'
import HandlePagetoDisplay from './components/HandlePagetoDisplay';


export const DataContext = createContext(null);




function App() {
  const [likelist, setLikeList] = useState([]);
  const [blocklist, setBlockList] = useState([]);
  const [pagetoDisplay, setPagetoDisplay] = useState(<HomePage />)
  const [data, setData] = useState({});
  const addLike = (item) => {
    const preventRepeat = likelist.find((elem) => {
      return elem.data.id === item.data.id;
    });
    if (!preventRepeat) {
      const items = [...likelist];
      items.push(item);
      setLikeList(items);
    } else {
      console.log('element already exist');
    }
  }

  const removelike = (id) =>{
    
    const likeitems = [...likelist];
    // console.log(items)
    let updatelikelist = likeitems.filter((el) => {
      return el.data.id !== id
      
  })

    setLikeList(updatelikelist);
  }

  const likeToBlock = (id) => {
    
    
    const likeitems = [...likelist];
    
    const nolike = likeitems.filter((el) => {
      return el.data.id !== id
      
  })
  const index = likeitems.findIndex((el) => el.data.id === id)
  let newitem = likelist[index]
  const blockitems = [...blocklist];
  
  blockitems.push(newitem)

  setLikeList(nolike);
  setBlockList(blockitems);

  }
  const addBlock = (item) => {
    const items = [...blocklist];
    items.push(item);
    setBlockList(items);
  }

  const removeblock = (id) => {
    const blockitems = [...blocklist];
     console.log(blockitems)
    const updateblocklist = blockitems.filter((el) => {
      return el.data.id !== id
  })



  setBlockList(updateblocklist)
}

  const blocktoLike = (id) => {
    const blockitems = [...blocklist];
    
    const noblock = blockitems.filter((el) => {
      return el.data.id !== id
      
    })
  
  const index = blockitems.findIndex((el) => el.data.id === id)
  let newitem = blockitems[index];
  const likeitems = [...likelist];
  
  likeitems.push(newitem)

  setLikeList(likeitems);
  setBlockList(noblock);
  }
  //ComponentDidUpdate -> Prevent 
  useEffect(() => {
    console.log(likelist);
    console.log(blocklist);
  }, [blocklist]);




  return (
    <DataContext.Provider value={{ data, setData }}>
      <div>
        <NavBar

          setPagetoDisplay={setPagetoDisplay}
        />
        <HandlePagetoDisplay
          targetPage={pagetoDisplay}
          setPagetoDisplay={setPagetoDisplay}
          likelist={likelist}
          blocklist={blocklist}
          likes={addLike}
          blocks={addBlock}
          unlike={removelike} 
          likeToBlock={likeToBlock}
          unblock={removeblock} 
          blocktoLike={blocktoLike}
        />
      </div>
    </DataContext.Provider>

  );
}

export default App;