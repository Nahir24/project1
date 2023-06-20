const app = require('./app')
require('donenv').config()

const port = process.env.PORT || 3000

app.listen( port, () => {
    console.log()
})