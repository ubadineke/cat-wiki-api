const express = require('express')
const app = express();
const router = require('./catRoutes')

app.use(express.json());
app.use('/api/catwiki', router)



module.exports = app;