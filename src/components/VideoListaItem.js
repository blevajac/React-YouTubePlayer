import React from 'react';

const VideoListaItem = ({ video, onVideoSelect }) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li onClick={ () => onVideoSelect(video) } className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>
                <div className="media-body">
                    <div className="media-heding">
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    );
}

export default VideoListaItem;

/*
const VideoListaItem = (props) => {
    const video = props.video;
}*/
