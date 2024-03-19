// Controllers for the Race Collection

import 'dotenv/config';
import express from 'express';
import * as races from './race-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/races', (req,res) => { 
    races.createRace(
        req.body.race_name, 
        req.body.race_miles, 
        req.body.race_time,
        req.body.race_city_state,
        req.body.race_date
        )
        .then(race => {
            console.log(`"${race.title}" was added to the collection.`);
            res.status(201).json(race);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'An unexpected error occured while attempting to add the race to the collection.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/races', (req, res) => {
    races.retrieveRaces()
        .then(races => { 
            if (races !== null) {
                console.log(`All races were retrieved from the collection.`);
                res.json(races);
            } else {
                res.status(404).json({ Error: 'No races found in the collection.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'An unexpected error occured while attempting to retrieve races from the collection.' });
        });
});


// RETRIEVE by ID controller
app.get('/races/:_id', (req, res) => {
    races.retrieveRaceByID(req.params._id)
    .then(race => { 
        if (race !== null) {
            console.log(`"${race.title}" was retrieved, based on its ID.`);
            res.json(race);
        } else {
            res.status(404).json({ Error: 'Unique and specific error message.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Unique and specific error message.' });
    });

});


// UPDATE controller ************************************
app.put('/races/:_id', (req, res) => {
    races.updateRace(
        req.params._id, 
        req.body.race_name, 
        req.body.race_miles, 
        req.body.race_time, 
        req.body.race_city_state,
        req.body.race_date
    )
    .then(race => {
        console.log(`"${race.title}" was updated.`);
        res.json(race);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'The request could not be understood by the server due to malformed syntax or missing required parameters.' });
    });
});


// DELETE Controller ******************************
app.delete('/races/:_id', (req, res) => {
    races.deleteRaceById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} race was deleted.`);
                res.status(200).send({ Success: 'The race was successfully deleted.' });
            } else {
                res.status(404).json({ Error: 'The race with the provided ID does not exist or has already been deleted.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'An unexpected error occured while attempting to delete the race.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});