import React from "react";

class BlockButton extends React.Component{
    constructor(props){
        super(props);
        this.handleBlock.bind(this)
    }
    handleBlock = (id) => {
        let LikeList = [...props.LikeList];
        let updatedLikeList = LikeList.filter((item) => item.id !== id);
        this.props.deleteLikedMovie(updatedLikeList);
        let BlockList = [...props.BlockList];
        //const NewBlocked = 
    }


}
export default BlockButton