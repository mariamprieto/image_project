const express = require('express')
const router = express.Router()

//server routes
router.get('/', (req, res) => {
    res.send ('Welcome to image page')
} )

module.exports=router