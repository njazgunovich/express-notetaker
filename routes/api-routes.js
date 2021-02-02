const fs = require("fs")
const express = require("express")
const router = express.Router()

router.get("/api/notes", function(req, res) {
    fs.readFile("../Develop/db/db.json", "utf8", function(err, data) {
        if (err) throw err
        res.json(JSON.parse(data))
    })
})
router.post("/api/notes", function(req, res) {
    var body = req.body
    console.log("body", body)
    res.sendStatus(200)
})
module.exports = router