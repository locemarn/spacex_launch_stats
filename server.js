const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const graphqlHTTP = require('express-graphql')
const path = require('path')

const schema = require('./schema')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.use(express.static('public'))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))