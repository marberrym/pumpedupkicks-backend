//NPM packages
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

//middleware
const allowCORS = require('./middleware/allowCORS');

//Express Handlebars
app.use(allowCORS);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//PRODUCTION
app.listen(3050);
