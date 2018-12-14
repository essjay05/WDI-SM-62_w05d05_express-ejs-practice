// CONSTANTS TO REQUIRE FROM EXTERNAL FILES
const
    express = require('express'),
    app = express(),
    axios = require('axios'),
    logger = require('morgan'),
    expressLayouts = require('express-ejs-layouts'),
    PORT = process.env.PORT || 3000;

// DATABASE CONNECTION


// CONFIGURATIONS
app.set('view engine', 'ejs');


// MIDDLEWARE
app.use(expressLayouts);
app.use(express.json());
app.use(logger('dev'));


// ROUTES
app.get('/', (req, res) => {
    let hello = "Hello World!"
    res.json({ hello }); 
})


// LISTENING PORT
app.listen(PORT, err => {
    console.log(err || `Server listening on PORT ${PORT}`);
});