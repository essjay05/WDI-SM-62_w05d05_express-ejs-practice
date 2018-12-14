const mongoose = require('moongose');

mongoose.connect('mongodb://localhost/ejsTest', err=> {
    console.log(err || 'MongoDB connected')
})

module.exports = mongoose;