import React, { useContext } from 'react'
import BlockList from './BlockList/BlockList';
import HomePage from './HomePage';
import LikeList from './LikeList/LikeList';
import MovieList from './MovieList';
import { DataContext } from '../App';

function HandlePagetoDisplay(props) {
  const { data, setData } = useContext(DataContext);
  // console.log(Object.entries(data));  //  const handleUnblock = () => {

  //  }
  const unlike = (id) => {
    const likeitems = [...props.likelist];
    // console.log(items)
    let updatelikelist = likeitems.filter((el) =>
      el.data.id !== id
    )

    const moviedata = likeitems.find((el) => el.data.id === id);
    let page = moviedata.page.replace(/\D/g, "");
    let items = { ...data };
    let item = items[`page${page}`]
    const index = items[`page${page}`].findIndex((elem) => elem.id === id);
    let specifc = item[index];
    specifc.likeButton = false
    item.splice(index, 1, specifc)
    setData(item)
    props.setLikeList(updatelikelist);
  }

  const likeToBlock = (id) => {


    const likeitems = [...props.likelist];

    const nolike = likeitems.filter((el) => {
      return el.data.id !== id

    })
    const index = likeitems.findIndex((el) => el.data.id === id)
    let newitem = likeitems[index]
    const blockitems = [...props.blocklist];

    blockitems.push(newitem)

    props.setLikeList(nolike);
    props.setBlockList(blockitems);

  }

  const unblock = (id) => {

    const blockitems = [...props.blocklist];
    const updateblocklist = blockitems.filter((el) => {
      return el.data.id !== id
    })
    const moviedata = blockitems.find((el) => el.data.id === id);
    let page = moviedata.page.replace(/\D/g, "");

    moviedata.data.blockButton = false;
    let items = { ...data };
    let item = items[`page${page}`];

    item.push(moviedata.data)
    console.log(item)
    setData(item)
    props.setBlockList(updateblocklist);

  }

  const blocktoLike = (id) => {
    const blockitems = [...props.blocklist];

    const noblock = blockitems.filter((el) => {
      return el.data.id !== id

    })

    const index = blockitems.findIndex((el) => el.data.id === id)
    let newitem = blockitems[index];
    const likeitems = [...props.likelist];

    likeitems.push(newitem)

    props.setLikeList(likeitems);
    props.setBlockList(noblock);
  }

  if (props.targetPage === "homepage") {
    return <HomePage />;
  }
  if (props.targetPage === "movielist") {
    return <MovieList likes={props.likes} blocks={props.blocks} />;
  }
  if (props.targetPage === "likelist") {

    return <LikeList movies={props.likelist} unlike={unlike} likeToBlock={likeToBlock} />;

  }
  if (props.targetPage === "blocklist") {
    return <BlockList movies={props.blocklist} unblock={unblock} blocktoLike={blocktoLike} />;

  }

  return (
    <HomePage />
  )
}

export default HandlePagetoDisplay