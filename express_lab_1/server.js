const express = require('express')
const port = 3000
const app = express()

const fortune = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely",
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

app.get('/tip/:total/:tipPercentage', (req, res) => {
    // console.log(res.params.total)
    res.send('tip calculated is: ' +  req.params.total * (req.params.tipPercentage / 100))
})

// app.get('/tip/:total/:tipPercentage', (req, res) => {
//     res.send("Tip calculated is: " + req.params.total * (req.params.tipPercentage / 100));
// }

app.get('/magic/:phrase', (req, res) => {
    let x = req.params.phrase + ' ' + fortune[Math.floor(Math.random() * fortune.length)]
    res.send('<h1>' + x + '</h1>')

})

// console.log(fortune[Math.floor(Math.random()*fortune.length)])


app.listen(port, () => {
    console.log('listening on port: ', 3000)
})

   