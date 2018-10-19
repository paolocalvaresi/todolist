var mongoose = require('mongoose');


module.exports = mongoose.model('User', {
    nome: String,
    cognome: String,
});
