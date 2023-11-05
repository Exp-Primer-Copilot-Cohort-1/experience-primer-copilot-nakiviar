// Create web server 
// 1. use express
// 2. use router
// 3. use middleware
// 4. use mongoose
// 5. use body-parser
// 6. use db
// 7. use schema
// 8. use model
// 9. use router
// 10. use web server
// 11. use port
// 12. use listen

// 1. use express
const express = require('express');
const app = express();

// 2. use router
const router = express.Router();

// 3. use middleware
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// 4. use mongoose
const mongoose = require('mongoose');

// 5. use body-parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// 6. use db
const db = require('./config/db');

// 7. use schema
const Comment = require('./models/comment');

// 8. use model
const model = mongoose.model('Comment');

// 9. use router
const router = require('./routes')(app, Comment);

// 10. use web server
const port = process.env.PORT || 8080;

// 11. use port
app.listen(port, function() {
    console.log('Express server has started on port ' + port);
});

// 12. use listen
mongoose.connect(db.url);
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
    console.log('Connected to mongod server');
});