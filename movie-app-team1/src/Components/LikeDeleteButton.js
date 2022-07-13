import React from 'react';
import { BsFillHeartFill } from "react-icons/bs";

class LikeDeleteButton extends React.Component{
    constructor(props) {
        super(props);
        this.handleDel.bind(this)
    }
    handleDel = (id) => {
        let LikeList = [...props.LikeList];
        let updatedLikeList = LikeList.filter((item) => item.id !== id);
        this.props.deleteLikedMovie(updatedLikeList)
    }

    render(){
        return(
            <BsFillHeartFill onClick={this.handleDel}/>
        )
    }


}

export default LikeDeleteButton