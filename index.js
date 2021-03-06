const connectToMongo = require('./db')
const express = require('express')
const authenticationRouter = require('./routes/authentication')
const notesRouter = require('./routes/notes')
connectToMongo();
const app = express()
const port = 5000

app.use(express.json());
// home response
app.get('/', (req, res) => {
  res.send('Hello World!')
})
// Available routes
// app.use('base route',route function)
app.use('/api/authentication',authenticationRouter);
app.use('/api/notes',notesRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})