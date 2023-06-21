const app = require('./app')
require('dotenv').config()
const { swaggerDocs } = require("./swagger/swagger")

const port = process.env.PORT || 3000

app.listen( port, () => {
    console.log("server listeng to", port);
    swaggerDocs(app, port)
})