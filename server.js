//jshint esversion:6
const express= require("express")
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/contact', (req, res) => {
  res.send('Contact me at arshdeepdgreat@gmail.com')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })