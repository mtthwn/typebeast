const Quote = require('./../../db/model/Quote')

module.exports = {
  getQuote: (req, res) => {
    Quote.find({})
      .then(quotes => {
        const index = Math.floor(Math.random() * quotes.length)

        res.status(200).json({ data: quotes[index] })
      })
      .catch(e => res.status(400).json({ success: false, message: e.message }))
  },
  addQuote: (req, res) => {
    const { author, quote } = req.body

    new Quote({ author, quote })
      .save()
      .then(quote => {
        res.status(200).json({ quote })
      })
      .catch(e => res.status(400).json({ success: false, message: e.message }))
  }
}
