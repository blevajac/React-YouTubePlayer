import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

//components
import SearchBar from './components/SearchBar';
import VideoLista from './components/VideoLista';
import VideoDetails from './components/VideoDetails';

const API_KEY = process.env.API_KEY;

class App extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
          videos: [],
          izabraniVideo: null
        }

        this.videoSearch('Dota2');

    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
          this.setState({
              videos: videos,
              izabraniVideo: videos[0]
          }); //isto koda piše   this.setState({ videos: videos }); ES6
        });
    }

    render() {
      const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300 );

      return (
          <div>
              <SearchBar onSearchTermChange={ videoSearch }/>
              <VideoDetails video={ this.state.izabraniVideo } />
              <VideoLista onVideoSelect={ izabraniVideo => this.setState({ izabraniVideo }) }
                          videos={ this.state.videos } />
          </div>
      );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
