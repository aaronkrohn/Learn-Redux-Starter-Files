import React from 'react';
import Photo from './Photo';

const PhotoGrid = React.createClass({
  render(){
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, i)=> <Photo {...this.props} post={post} i={i} key={i} />)}
      </div>
    )
  }
});

export default PhotoGrid;
