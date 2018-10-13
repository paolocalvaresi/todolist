var mongoose = require('mongoose');

var schema = mongoose.Schema;

var todoSchema = new schema({

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
    fine: Date,
});

var Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;