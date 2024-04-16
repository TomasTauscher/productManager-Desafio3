import express from "express"
import { addProduct, getProducts, getProductById, updateProduct, deleteProduct } from "./data/fs/index.js"

const app = express()

const port = 8080
const ready = console.log("server ready on port " + port)
app.listen(port, ready)

app.get("/", index)
app.get("/notes", read);

function index(req, res) {
    try {
        const message = "Welcome to coder-notes";
        return res.json({ status: 200, response: message });
    } catch (error) {
        console.log(error);
        return res.json({ status: 500, response: error.message });
    }
}

async function read(req, res) {
    try {
        //const { category } = req.query;
        const all = await getProducts();
    if (all.length > 0) {
        return res.json({ status: 200, response: all, category });
    } else {
        return res.json({ status: 404, response: "Not found" });
    }
    } catch (error) {
        console.log(error);
        return res.json({ status: 500, response: error.message });
    }
}