const router = require('express').Router()
const storage = require('../db/db.json')
const path = require('path')
const fs = require('fs')

router.get('/notes', (req, res) => {
    res.json(storage)
})

router.post('/notes', (req, res) => {
    if (!req.body.title || typeof req.body.title !== 'string') {
        res.status(400).send('Your note must have a title that is a string!')
    } else if (!req.body.text || typeof req.body.text !== 'string') {
        res.status(400).send('Your note must have a text that is a string!')
    } else {
        req.body.id = storage.length + 1
        storage.push(req.body)
        fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(storage, null, 2))
        res.json(storage)
    }
})

module.exports = router