import React from 'react';
import { BsFillTrashFill } from "react-icons/bs";
class DeleteButton extends React.Component{
    constructor(props) {
        super(props);
        this.handleDel.bind(this)
    }
    handleDel = (id) => {
        let BlockList = [...props.BlockList];
        let updatedBlockList = BlockList.filter((item) => item.id !== id);
        this.props.setStateofParent(updatedBlockList)
    }

    render(){
        return(
            <BsFillTrashFill onClick={this.handleDel}/>
        )
    }


}

export default DeleteButton