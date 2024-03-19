// Models for the Race Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Unique and specific error message.' });
    } else  {
        console.log('Success: Unique and specific success message.');
    }
});

// SCHEMA: Define the collection's schema.
const raceSchema = mongoose.Schema({
	race_name:    { type: String, required: true },
	race_miles:     { type: Number, required: true },
    race_time: { type: String, required: true},
	race_city_state: { type: String, required: true },
    race_date: { type: Date, required: true, default: Date.now}
});

// Compile the model from the schema 
// by defining the collection name "races".
const races = mongoose.model('Race', raceSchema);


// CREATE model *****************************************
const createRace = async (race_name, race_miles, race_time, race_city_state, race_date) => {
    const race = new races({ 
        race_name: race_name, 
        race_miles: race_miles, 
        race_time, race_time,
        race_city_state: race_city_state,
        race_date: race_date
    });
    return race.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveRaces = async () => {
    const query = races.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveRaceByID = async (_id) => {
    const query = races.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteRaceById = async (_id) => {
    const result = await races.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateRace = async (_id, race_name, race_miles, race_time, race_city_state, race_date) => {
    const result = await races.replaceOne({_id: _id }, {
        race_name: race_name, 
        race_miles: race_miles, 
        race_time, race_time,
        race_city_state: race_city_state,
        race_date: race_date
    });
    return { 
        _id: _id, 
        race_name: race_name, 
        race_miles: race_miles, 
        race_time: race_time,
        race_city_state: race_city_state,
        race_date: race_date
    }
}

// EXPORT the variables for use in the controller file.
export { createRace, retrieveRaces, retrieveRaceByID, updateRace, deleteRaceById }