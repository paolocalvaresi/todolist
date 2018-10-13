var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin1234@ds243812.mlab.com:43812/prova', {
    useNewUrlParser: true
}, function (err) {
    if (err) {
        console.log(err);
    } else {

        console.log("connesso al db");
    }
});