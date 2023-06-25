const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

const token = process.env.REACT_GITHUB_TOKEN;


router.get('/', (req, res, next) => {
    const repo = req.repo;

    const options = {
        method: 'GET',
        url: `https://api.github.com/search/repositories?q=user:malzagic+${repo.toLowerCase()}`,
        header: {
            "Accept": "application/vnd.github+json",
            "Authorization": `Bearer ${token}`,
        }
    }

    axios.request(options).then((response) => {
        const repositories = response.data;
        res.status(200).json(repositories.items)
    }).catch((error) => {
        console.error(error)
    })
});

module.exports = router;