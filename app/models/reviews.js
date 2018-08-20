const { db } = require('../config/conn');

function allPodReviews(id) {
    return db.query(`
    SELECT * 
    FROM reviews
    WHERE podcast_id = $1
    `, id)
};

function onePodReview(id) {
    return db.one(`
    SELECT *
    FROM reviews
    WHERE review_id = $1
    `, id)
}

module.exports = {
    allPodReviews,
    onePodReview
}