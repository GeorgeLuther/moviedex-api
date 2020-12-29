const express = require('express')
const morgan = require('morgan')
const app = express()
app.use(morgan("common"))

app.listen(8080, () => console.log('Started on PORT 8080'))