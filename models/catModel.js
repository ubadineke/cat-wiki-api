const mongoose = require('mongoose')
const catSchema = new mongoose.Schema({
    breed:{
        type: String,
        required:[true, 'Breed must be stated'],
        unique: true,
        trim: true
    },
    intelligence:{
        type: Number
    },
    top_friendly:{
        type: Number
    },
    origin:{
        type:String
    },
    weight:{
        type:String
    },
    life_span:{
        type:String
    }
})

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat