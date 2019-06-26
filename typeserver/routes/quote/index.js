const express = require('express')
const router = express.Router()

const Quote = require('./../../db/model/Quote')

router.get('/', (req, res) => {

    Quote.find({}).then(quotes => {
        const index = Math.floor(Math.random() * quotes.length);

        console.log(index); 
        res.status(200).json({ data: quotes[index] })
    })
})

router.post('/', (req, res) => {
    const { author, quote } = req.body;

    new Quote({ author, quote }).save().then(quote => {
        res.status(200).json({ quote })
    })
})

module.exports = router;