const express = require('express');
const app = express();

// app.use((req, res) => {
//     console.log('we got a new request')
//     res.send('hello world')
// })

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit </h1>`)
})

app.get('/', (req, res) => {
    res.send('This is the home page')
})

app.get('/cats', (req, res) => {
    res.send('meow!')
  })

app.get('/dogs', (req, res) => {
    res.send('woof!')
  })

app.get('*', (req,res) => {
    res.send('yayy!')
})  



app.listen(8080, () => { 
    console.log('app listening on port 8080!')
})

    

