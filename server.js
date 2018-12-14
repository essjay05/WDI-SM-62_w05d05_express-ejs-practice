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
    let name = "Joy";
    let array = ["Caleb", "Daniel", "Sean", "Pradeep", "Alex", "Zac"];
    res.render('index', { name, array });
});

app.get('/chuck', (req, res) => {
    axios.get('http://api.icndb.com/jokes/random')
        .then(({ data }) => {
            res.render('chuck', { data });
        })
});

app.get('/giphy', (req, res) => {
    res.render('giphy');
})


// LISTENING PORT
app.listen(PORT, err => {
    console.log(err || `Server listening on PORT ${PORT}`);
});