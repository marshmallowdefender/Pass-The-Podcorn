const db =  require('../models/reviews');

function showAll(req, res) {
    db.allPodReviews()
    .then(podReviews => {
        res.json({
            message: 'ok',
            data: { podReviews },
        });
    })
    .catch(err => {
        console.log(err);
        res.status(400).json({message: '400', err});
    });
};

function showOne(req, res) {
    db.onePodReview(req.params.id)
    .then(podcast => {
        res.json({
            message: 'ok',
            data: { podcast },
        });
    })
    .catch(err => {
        console.log(err);
        res.status(400).json({message: '400', err});
    });
};

module.exports = {
    showAll,
    showOne
}