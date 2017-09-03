import React from 'react';

const VideoDetail = ({video}) => {
    if(!video) {  //u slućaju da podaci nisu dohvaćeni prije prikaza
      return <div>Loading....</div>
    }

  //svaki put kadase želi dohvatiti embed video (ili navigirati) ssamo što se mijenja u URL je ID, zrađuje vlastiti embed u id iz video propsa
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;


    return(
        <div className="video-detail col-md-8">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={url}></iframe>
          </div>
          <div className="details">
              <div>{video.snippet.title}</div>
              <div>{video.snippet.description}</div>
          </div>
        </div>
    );
};

export default VideoDetail;

// const url = `https://www.youtube.com/embed/${videoId}`;   //template stringing ES6
// const url = 'https://www.youtube.com/embed/' + videoId;   // isto kao i gore
