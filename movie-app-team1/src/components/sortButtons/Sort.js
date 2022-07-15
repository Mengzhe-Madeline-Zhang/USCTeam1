import React, { Component } from 'react'
import Data from './data.json';

import Post from './Post'

class Sort extends Component {
  constructor (props) {
    super(props)
    this.toggleListReverse = this.toggleListReverse.bind(this)
    this.toggleSortDate = this.toggleSortDate.bind(this)
    this.state = {
      postList: [],
      isOldestFirst: true
    }
  }

  sortByDate () {
    const {postList} = this.state
    let newPostList = postList
    if (this.state.isOldestFirst) {
      newPostList = postList.sort((a, b) => a.date > b.date)
    } else {
      newPostList = postList.sort((a, b) => a.date < b.date)
    }
    this.setState({
      isOldestFirst: !this.state.isOldestFirst,
      postList: newPostList
    })
  }

  toggleSortDate (event) {
    this.sortByDate()
  }
  toggleListReverse (event) {
    const {postList} = this.state
    let newPostList = postList.reverse()
    this.setState({
      postList: newPostList
    })
  }
  componentDidMount () {
    const postList = Data
    this.setState({
      isOldestFirst: true,
      postList: postList
    })
  }
  render () {
    const {postList} = this.state
    return (
      <div >
        <h1>Hello There</h1>
        <button onClick={this.toggleListReverse}>Reverse Order</button>
        <button onClick={this.toggleSortDate}>Order by date</button>
        {postList.map((item, index) => {
          return <Post
            post={item}
            key={`post-list-key ${index}`}
            didHandleRemove={this.handlePostRemove}
            dataCallback={this.handleDataCallback} />
        })}
      </div>
    )
  }
}

export default Sort

