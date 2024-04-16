import express from "express"

const app = express()

const port = 8080
const ready = console.log("server ready on port " + port)
app.listen(port, ready)

app.get("/", index)

function index(req, res) {
    try {
        const message = "Welcome to coder-notes";
        return res.json({ status: 200, response: message });
    } catch (error) {
        console.log(error);
        return res.json({ status: 500, response: error.message });
    }
}