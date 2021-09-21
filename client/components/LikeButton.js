import React, { useState } from 'react';

export default function LikeButton(props) {
    const [isLiked, updateLike] = useState(false);

  const handleLike = () => {
    let currentLikedPhotos = props.likedPhotos;
    if (!isLiked) {
      updateLike(true);
      if (!currentLikedPhotos.includes(props.current))
        props.updateLikedPhotos([...currentLikedPhotos, props.current]);
    } else {
      updateLike(false);
    }
  };
    return (<button className='likebutton' onClick={handleLike}>{isLiked ? (<img src='https://i.ibb.co/zbLHqdN/filled-heart.png'/>) : (<img src ='https://i.ibb.co/1J1nfpn/heart.png' />)}</button>)
}
