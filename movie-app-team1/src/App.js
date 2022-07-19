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
    const preventLikeRepeat = likelist.find((elem) => {
      return elem.data.id === item.data.id;
    });

    const preventBlockRepeat = blocklist.find((elem) => {
      return elem.data.id === item.data.id;
    });

    if (!(preventLikeRepeat) && !(preventBlockRepeat)) {
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
  // useEffect(() => {
  //   console.log(likelist);
  //   console.log(blocklist);
  // }, [blocklist]);




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
          setLikeList={setLikeList}
          setBlockList={setBlockList}
        />
      </div>
    </DataContext.Provider>

  );
}

export default App;