//creates new route object for page navigation
const router = require('express').Router()

router.get('/news/:sport', (req, res) => {
    const { sport } = req.params
    res.send(`${sport} news`)
})

module.exports = router 