const mongoose = require('mongoose')
const catSchema = new mongoose.Schema({
    breed:{
        type: String,
        required:[true, 'Breed must be stated'],
        unique: true,
        trim: true
    },
    description:{
        type: String
    },
    intelligence:{
        type: Number
    },
    friendliness:{
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
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        select:false
    }
})

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;