import React, { Component } from 'react';
import CreatePodcast from './components/CreatePodcast';
import EditPodcast from './components/EditPodcast';
<<<<<<< HEAD

=======
>>>>>>> upstream/master
import PodcastIndex from './components/PodcastIndex';
<<<<<<< HEAD
import { fetchPodcasts, savePodcast, fetchReviews, updatePodcast, fetchOnePodcast } from './services/api';
=======

import { fetchPodcasts, savePodcast, fetchReviews, updatePodcast, fetchOnePodcast } from './services/api';

>>>>>>> 6e388c13895e9aee0b7decb2182d25be229af624
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentView: 'Podcasts',
      selectedReview: '',
      podcasts: [],
      reviews: [],
<<<<<<< HEAD
      selectedPodcast: '',
=======
      createModal: 'modal',
      selectedPodcast: ''
>>>>>>> upstream/master
    }
    this.createPodcast = this.createPodcast.bind(this)
    this.toggleCreateModal =  this.toggleCreateModal.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.updatePodcast =  this.updatePodcast.bind(this)
  }

componentDidMount() {
   fetchPodcasts()
  .then(data => this.setState({podcasts: data}));

<<<<<<< HEAD

    // fetchReviews(1) 
    // .then(data => this.setState({reviews: data}));

     //fetchOnePodcast(1)
     //.then(data =>  this.setState({podcasts:data}));
  }

<<<<<<< HEAD
=======

>>>>>>> 6e388c13895e9aee0b7decb2182d25be229af624
    // fetchReviews(1) 
    // .then(data => this.setState({reviews: data}));

     //fetchOnePodcast(1)
     //.then(data =>  this.setState({podcasts:data}));
  }

=======
>>>>>>> upstream/master


  updatePodcast(podcast) {
    fetchOnePodcast(podcast)
    .then(data => {
      this.setState({
        selectedPodcast:data
      });
    })
  }
<<<<<<< HEAD
=======

>>>>>>> 6e388c13895e9aee0b7decb2182d25be229af624


<<<<<<< HEAD
=======

>>>>>>> upstream/master
  

  onSubmit(podcast) {
    debugger
<<<<<<< HEAD
=======
    savePodcast(podcast)
    .then(data => {
      fetchPodcasts()
      .then(data => this.setState({podcasts:data}));
  })
  }

  toggleCreateModal() {
    this.state.createModal === 'modal'
    ?
      this.setState({
        createModal: 'modal is-active'
      })
    :
    this.setState({
      createModal: 'modal'
    })
  }

  createPodcast(podcast) {
>>>>>>> upstream/master
    savePodcast(podcast)
    .then(data => {
      fetchPodcasts()
      .then(data => this.setState({podcasts:data}));
  })
  }

render() {
  return (
    <div className="App">
    <PodcastIndex edit={this.updatePodcast} podcasts={this.state.podcasts} />
<<<<<<< HEAD
    <CreatePodcast onSubmit={this.onSubmit}/>
=======
    <CreatePodcast onSubmit={this.createPodcast} active={this.state.createModal} toggle={this.toggleCreateModal}/>
>>>>>>> upstream/master
    {this.state.selectedPodcast ?
    <EditPodcast podcast={this.state.selectedPodcast} onSubmit={this.updatePodcast}/>
    : null}
    </div>
  );
}
}







export default App;