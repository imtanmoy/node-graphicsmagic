const express = require("express")
const router = express.Router()
const core = require("./../controllers/core.controller")
const multer  = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images/original')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})


// const multerupload = multer({ dest: 'public/uploads' })
// var storage = multer.memoryStorage()
const multerupload = multer({ storage: storage })



router.route('/')
    .get(core.index)
router.route('/upload')
    .post(multerupload.single('source'),core.upload)
module.exports = router