import React from "react";
import { BsFillXCircleFill } from "react-icons/bs";
class BlockButton extends React.Component{
    constructor(props){
        super(props);
        this.handleBlock.bind(this)
    }
    handleBlock = (id) => {
        let LikeList = [...this.state.likedList];
        let updatedLikeList = LikeList.filter((item) => item.id !== id);
        this.props.deleteLikedMovie(updatedLikeList);
        let BlockList = [...props.BlockList];
        const NewBlocked = props.item;
        this.props.addNewBlocked([...BlockList, NewBlocked])
        
    }
    render(){
        return(
        <BsFillXCircleFill onclick={this.handleBlock}/>

        )
    }

}
export default BlockButton