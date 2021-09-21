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
  return <button onClick={handleLike}>Like</button>;
}
