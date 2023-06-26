const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = 8000;

const portfolioRoutes = require('./routes/portfolio-routes');
const contactRoutes = require('./routes/contact-routes');

const app = express();


app.use(express.json())
app.use(cors());

app.use('/portfolio/:repo', (req, res, next) => {
    const { repo } = req.params
    req.repo = repo;
    next();
}, portfolioRoutes);

app.use('/contact', contactRoutes);


app.listen(port, () => {
    console.log(`Server is started on port: ${port}`)
});