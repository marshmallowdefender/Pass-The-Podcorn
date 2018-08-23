const db = require('../models/podcasts');

function showAll(req, res) {
  db.allPodcasts()
<<<<<<< HEAD
    .then((podcasts) => {
      res.json(podcasts);
    })
    .catch((err) => {
=======
    .then(podcasts => {
      res.json(podcasts);
    })
    .catch(err => {
>>>>>>> master
      console.log(err);
      res.status(400).json({ message: '400', err });
    });
}

function showOne(req, res) {
  db.onePodcast(req.params.id)
<<<<<<< HEAD
    .then((podcast) => {
      res.json(podcast);
    })
    .catch((err) => {
=======
    .then(podcast => {
      res.json(podcast);
    })
    .catch(err => {
>>>>>>> master
      console.log(err);
      res.status(400).json({ message: '400', err });
    });
}

function createPodcast(req, res) {
  db.createPodcast(req.body)
<<<<<<< HEAD
    .then((podcast) => {
=======
    .then(podcast => {
>>>>>>> master
      res.json({
        message: 'ok',
        data: { podcast },
      });
    })
<<<<<<< HEAD
    .catch((err) => {
=======
    .catch(err => {
>>>>>>> master
      console.log(err);
      res.status(400).json({ message: '400', err });
    });
}

function updatePodcast(req, res) {
  db.updatePodcast(req.body, req.params.id)
<<<<<<< HEAD
    .then((podcast) => {
      res.json({
        message: 'ok',
        data: { podcast },
      });
    })
    .catch((err) => {
=======
    .then(podcast => {
      res.json(podcast)
    }
    )
    .catch(err => {
>>>>>>> master
      console.log(err);
      res.status(400).json({ message: '400', err });
    });
}

function deletePodcast(req, res) {
  db.deletePodcast(req.params.id)
<<<<<<< HEAD
    .then((podcast) => {
      res.json({
        message: 'ok',
      });
    });
=======
    .then(podcast => {
      res.json({
        message: 'ok',
      });
    })
>>>>>>> master
}


module.exports = {
  showAll,
  showOne,
  createPodcast,
  updatePodcast,
<<<<<<< HEAD
  deletePodcast,
};
=======
  deletePodcast
}
>>>>>>> master
