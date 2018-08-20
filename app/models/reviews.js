const { db } = require('../config/conn');

function allPodReviews() {
    return db.query(`
    SELECT * 
    FROM reviews
    `)
};

function onePodReview(id) {
    return db.one(`
    SELECT *
    FROM reviews
    WHERE id = $1
    `, id)
}

module.exports = {
    allPodReviews,
    onePodReview
}