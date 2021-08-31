const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

app.use('/api', apiRoutes)
app.use('/', htmlRoutes)

// require('./routes/apiRoutes')

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`)
})