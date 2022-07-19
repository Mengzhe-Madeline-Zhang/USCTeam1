import React, {useContext} from 'react'
import BlockList from './BlockList/BlockList';
import HomePage from './HomePage';
import LikeList from './LikeList/LikeList';
import MovieList from './MovieList';
import { DataContext } from '../App';

function HandlePagetoDisplay(props) {
    const {data} = useContext(DataContext);
    if (props.targetPage === "homepage") {
        return <HomePage/>;
      }
      if (props.targetPage === "movielist") {
        return <MovieList  likes={props.likes} blocks={props.blocks} />;
      }
      if (props.targetPage === "likelist") {
  
        return <LikeList movies={props.likelist} />;
  
      }
      if (props.targetPage === "blocklist") {
        return <BlockList  movies={props.blocklist} />;
  
      }

  return (
    <HomePage />
  )
}

export default HandlePagetoDisplay