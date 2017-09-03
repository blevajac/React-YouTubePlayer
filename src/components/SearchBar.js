import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
        term: ''
    }
  }

  onInputChange(term) {
      this.setState({ term: event.target.value });
      this.props.onSearchTermChange(term);
  }

  render(){
    return(
      <div className="search-bar">
          <input onChange={ event => this.onInputChange(event.target.value) } />
      </div>
    );
  }  
}

export default  SearchBar;


/*Drugi naćin pisanja componenti
import React from 'react';

class SearchBar extends React.Components { render() {  } }
*/
