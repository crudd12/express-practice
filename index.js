//requires the express library
const express = require('express') 
require('dotenv').config()
const newsController = require('./controllers/news')

//runs the express function for the app
const app = express() 

//this is middleware - has to be located underneath invoked express function and above HTTP methods (routes)
app.use(express.json())

app.use('/', newsController)

//.get HTTP method - route/path
app.get('/', (req, res) => {
    res.send('home page')
})

//creates about page
app.get('/about', (req, res) => {
    res.send('about page')
})

//creates news page with path variaable for sport type and console logs the request parameters 
// app.get('/news/:sport', (req, res) => {
    // console.log(req)
//     const { sport } = req.params
//     res.send(`${sport} news`)
// })

app.get('/login', (req, res) => {
    res.send('get login')
})

app.post('/login', (req, res) => {
    const { username, password } = req.body
    console.log(username, password)
    res.send('post login')
})

//creates nba store page
// app.get('/store/nba', (req, res) => {
//     res.send('nba store page')
// })

//defines port - process.env.PORT looks to see if environment variable PORT is defined and uses that port. If not defined, the default port will be 8080
const PORT = process.env.PORT || 8080 

//invokes the app and applies the listen method to listen for client connections on the PORT
app.listen(PORT, console.log(`listening on port ${PORT}`))

