const express = require('express');
const app  = express();
const UserRouter = require('./routers/user')
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Server is up on port'+port)
})
app.use(UserRouter)