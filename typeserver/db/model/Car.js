const mongoose = require('mongoose');

const { Schema } = mongoose;

const CarSchema = new Schema({
    name: {
        type: String,
        default: 'default',
        required: true
    },
    filepath: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true, 
        default: 0
    }
});

const Car = mongoose.model('Car', CarSchema);

mondule.exports = Car;