import React, { useContext, useEffect } from 'react'
import BlockList from './BlockList/BlockList';
import HomePage from './HomePage';
import LikeList from './LikeList/LikeList';
import MovieList from './MovieList';
import { DataContext } from '../App';
import "./MovieList.css";
import movieApi from "../apis/movieApi";
import { APIkey } from "../apis/movieApiKey";
// export const GetMovieData = ({ page }) => {
//   const { data, setData } = useContext(DataContext);
//   const currPage = `page${page}`;

//   useEffect(() => {
//       if (!data[currPage]) {
//           const fetchMovies = async () => {
//               const response = await movieApi
//                   .get(`popular?api_key=${APIkey}&language=en-US&page=${page}`)
//                   .catch((err) => {
//                       console.log("err: ", err);
//                   });

//               const singleMovieData = response.data;
//               // console.log(singleMovieData);

//               const newData = configData(singleMovieData, currPage);
//               // console.log(newData);
//               const addData = { ...data, [currPage]: newData };
//               // console.log(singleMovieData);
//               setData(addData);
//           };
//           fetchMovies();
//       }
//   }, [page]);
// };

// //Deconstructing movie data
// const configData = (newData, page) => {
//   const addData = [];
//   newData.results.forEach((data) => {
//       let {
//           poster_path,
//           release_date,
//           vote_average,
//           vote_count,
//           title,
//           overview,
//           id,
//       } = data;
//       const singleMovieData = {
//           poster_path: poster_path,
//           release_date: release_date,
//           vote_average: vote_average,
//           vote_count: vote_count,
//           title: title,
//           overview: overview,
//           likeButton: false,
//           blockButton: false,
//           id: id,
//       };
//       addData.push(singleMovieData);
//   });
//   return addData;
// };




function HandlePagetoDisplay(props) {
  const { data, setData } = useContext(DataContext);
  console.log(data)




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
    setData(items)
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

    blockitems.push(newitem);


    let items = { ...data };
    const moviedata = likeitems.find((el) => el.data.id === id);
    let page = moviedata.page.replace(/\D/g, "");
    const willblockindex = data[`page${page}`].findIndex((elem) => elem.id === id);
    let item = items[`page${page}`]
    
    //  let blockid = moviedata.data.id
    item.splice(willblockindex, 1);
    setData(items)
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
    let pushindex = moviedata.index;
    let items = { ...data };
    let item = items[`page${page}`];

    item.splice(pushindex,0,moviedata.data)
    
    setData(items)
    props.setBlockList(updateblocklist);

  }

  const blocktoLike = (id) => {
    const blockitems = [...props.blocklist];

    const noblock = blockitems.filter((el) => {
      return el.data.id !== id

    })
    const moviedata = blockitems.find((el) => el.data.id === id);


    const index = blockitems.findIndex((el) => el.data.id === id)
    let newitem = blockitems[index];
    const likeitems = [...props.likelist];

    likeitems.push(newitem)
    

    let page = moviedata.page.replace(/\D/g, "");
    moviedata.data.blockButton = false;
    moviedata.data.likeButton = true;
    let items = { ...data };
    let item = items[`page${page}`];
    let pushindex = moviedata.index;



    item.splice(pushindex,0,moviedata.data)    
    setData(items)








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