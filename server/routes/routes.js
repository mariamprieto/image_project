const express = require('express')
const multer = require('multer')
const router = express.Router()
const path= require ('path')

const diskStorage = multer.diskStorage({
    destination: path.join(__dirname, '../images'),
    filename: (req, file, cb) => {
        cb (null,Date.now() + '-monkeywit-'+ file.originalname)
    }
})

const fileUpload = multer({
    storage:diskStorage
}).single('image')
    

router.get('/', (req, res) => {
    res.send ('Welcome to image page')
})

router.post('./images/post',fileUpload ,(req, res) => {
    console.log(req.file)
})

module.exports=router