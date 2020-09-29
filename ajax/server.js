const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('file')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('An error has occurred.')
        }
        res.end('Successfully concluded.')
    })
})

app.post('/form', (req, res) => {
    res.send({
        ...req.body,
        id: 7
    })
})

app.get('/evenOrOdd', (req, res) => {
    //req.body
    //req.query
    //req.params
    const even = parseInt(req.query.number) % 2 === 0
    res.send({
        result: even ? 'even' : 'odd'
    })
})

app.listen(8081, () => console.log('Running...'))