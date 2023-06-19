const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const portfolioRoutes = require('./routes/portfolio-routes');

const app = express();


app.use(cors());

app.use('/portfolio/:repo', (req, res, next) => {
    const { repo } = req.params
    req.repo = repo;
    next();
}, portfolioRoutes);


app.listen(8000);