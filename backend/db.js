// const mongoose= require('mongoose');


// const mongoURI = 'mongodb://localhost:27017/?directConnection=true';
// const connectToMongo = ()=>{
//     mongoose.connect(mongoURI,()=>{
//         console.log('connected success')
//     })
// }

// module.exports= connectToMongo
// 'mongodb://localhost:27017/?directConnection=true'
const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://<>@cluster0.lfmacpl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

module.exports = connectToMongo;
