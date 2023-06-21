const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const Speci = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "node mongoDB API",
            version: "1.0.0"
        },
        
    },
    apis: ['./routes/index.js','./routes/user.js'],
}

const swaggerSpec = swaggerJSDoc(Speci);

const swaggerDocs = (app, port) =>{
    app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = { swaggerDocs}

