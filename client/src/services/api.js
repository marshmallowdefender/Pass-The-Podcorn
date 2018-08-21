const BASE_URL = 'http://localhost:3001';

export function fetchPodcasts() {
    return fetch(`${BASE_URL}/podcasts`)
      .then(resp => resp.json())
      .catch(err => {
        throw Error(err);
      });
  }
  
  export function fetchReviews() {
    return fetch(`${BASE_URL}/podcasts/podcast/:id`)
      .then(resp => resp.json())
      .catch(err => {
        throw Error(err);
      })
  }


