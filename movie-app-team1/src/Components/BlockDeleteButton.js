import React from 'react';
import { BsFillTrashFill } from "react-icons/bs";
class BlockDeleteButton extends React.Component{
    constructor(props) {
        super(props);
        this.handleDel.bind(this)
    }
    handleDel = (id) => {
        let BlockList = [...props.BlockList];
        let updatedBlockList = BlockList.filter((item) => item.id !== id);
        this.props.deleteLikedMovie(updatedBlockList)
    }

    render(){
        return(
            <BsFillTrashFill onClick={this.handleDel}/>
        )
    }


}

export default BlockDeleteButton