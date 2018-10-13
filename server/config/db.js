var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin1234@ds243812.mlab.com:43812/prova', {
    useNewUrlParser: true
}, function (err) {
    if (err) console.log(err);
    console.log("connesso al db");
});


const Cat = mongoose.model('Cat', {
    name: String
});

const kitty = new Cat({
    name: 'Zildjian'
});
kitty.save().then(() => console.log('meow'));