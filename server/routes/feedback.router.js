const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    console.log('req.body in router:', req.body);
    const queryText = `INSERT INTO feedback (feeling, understanding, support, comment)
    Values ($1, $2, $3, $4);`;
    pool.query(queryText, [req.body.feeling, req.body.understanding, req.body.support, req.body.comment])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error handling POST for /heroes`, error);
            res.sendStatus(500);                   
        })
});

router.delete('/', (req, res) => {
    res.sendStatus(201);
});

// router.get('/', (req, res) => {
//     res.send(colors);
// });

module.exports = router;