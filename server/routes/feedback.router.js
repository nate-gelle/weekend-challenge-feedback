const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    console.log('req.body in router:', req.body);
    const queryText = `INSERT INTO feedback (feeling, understanding, support, comment)
    Values ($1, $2, $3, $4);`;
    pool.query(queryText, [req.body.feeling, req.body.understanding, req.body.support, req.body.comment])
        .then((result) => {
            res.sendStaitus(201);
        })
        .catch((error) => {
            console.log(`Error handling POST for /feedback`, error);
            res.sendStatus(500);                   
        })
});

router.get('/', (req, res) => {
    let queryText = `SELECT * FROM feedback ORDER BY id DESC`;
    pool.query(queryText)
      .then((result) => {
        console.log(`Finished GET server side for feedback`, result.rows);
        res.send(result.rows);
      })
      .catch((error) => {
        console.log(`Error handling GET for feedback`, error);
        res.sendStatus(500);
      })
});

router.put('/:id/:flagged', (req, res) => {
    console.log('Handling PUT for flagging entry');
    const id = req.params.id;
    const flagged = req.params.flagged;
    console.log(req.params);
    if(flagged === 'false'){
        let queryText = `UPDATE feedback SET flagged = true WHERE id=$1;`;
        pool.query(queryText, [id]).then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log('Error handling PUT for flagging entry', error);
            res.sendStatus(500);
        })
    } else if(flagged === 'true'){
        let queryText = `UPDATE feedback SET flagged = false WHERE id=$1;`;
        pool.query(queryText, [id]).then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log('Error handling PUT for flagging entry', error);
            res.sendStatus(500);
        })
    }
});

router.delete('/:id', (req, res) => {
    console.log('Handling delete entry request');
    const id = req.params.id;
    let queryText = `DELETE FROM feedback WHERE id=$1;`;
    pool.query(queryText, [id])
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log(`Error handling DELETE for feedback`, error);
            res.sendStatus(500);
        })
});

module.exports = router;