import React from "react";
import { BsFillHeartFill } from "react-icons/bs";
class LikeButton extends React.Component{
    constructor(props){
        super(props);
        this.handleLike.bind(this)
    }
    handleLike = (id) => {
        let BlockList = [...props.BlockList];
        let updatedBlockList = BlockList.filter((item) => item.id !== id);
        this.props.deleteBlockedMovie(updatedBlockList);
        let LikeList = [...props.LikeList];
        const NewLiked = props.item;
        this.props.addNewLiked([...LikeList, NewLiked])
        
    }

    render(){
        return(
            <BsFillHeartFill onclick={this.handleLike}/>
        )
    }

}
export default LikeButton