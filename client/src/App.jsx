import React, { Component } from 'react';
import PodcastIndex from './components/PodcastIndex';
import './App.css';
import { fetchPodcasts, fetchReviews } from './services/api';
 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      podcasts: [],
      reviews: [],
    }
  }

componentDidMount() {
   fetchPodcasts()
  .then(data => this.setState({podcasts: data}));

  fetchReviews() 
    .then(data => this.setState({reviews: data}));

}

  render() {
    return (
      <div className="App">
      <PodcastIndex podcasts={this.state.podcasts}/>
      </div>
    );
  }
}

export default App;
