var mongoose = require('mongoose');


var todoSchema = new mongoose.Schema({

    titolo: {
        type: String,
        required: true
    },
    concluso: {
        type: Boolean,
        default: false
    },
    inizio: {
        type: Date,
        required: true
    },
    fine: {
        type: Date
    }
});

var Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;