const express = require('express')
const port = 3000
const app = express()

const array = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely",
"You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes",
 "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now",
  "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no",
   "My sources say no","Outlook not so good", "Very doubtful"]

// app.get('/greeting', (req, res) => {
//     console.log(req.params)
//     res.send('hello ')

// })

app.get('/greeting/:name', (req, res) => {
    res.send('hello ' + req.params.name)
})

app.listen(port, () => {
    console.log('listening on port: ', 3000)
})

   