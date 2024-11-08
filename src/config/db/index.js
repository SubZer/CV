const mongoose = require('mongoose');
async function connect(){
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/CV', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('connect successssssssssss');
    }catch(error){
        console.log('connect failse');
    }
}

module.exports = {connect};