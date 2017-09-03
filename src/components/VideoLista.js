import React from 'react';

//components
import VideoListaItem from './VideoListaItem';


const VideoLista = (props) => {
  const videoItems = props.videos.map((video) => {
      return (
        <VideoListaItem
            onVideoSelect={props.onVideoSelect}
            key={video.etag}
            video={video} />
      );
  });

  return (
      <ul className="col-md-4 list-group">
        {videoItems}
      </ul>
  );
}

export default VideoLista;
