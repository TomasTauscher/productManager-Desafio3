import express from "express"
import { addProduct, getProducts, getProductById, updateProduct, deleteProduct } from "./data/fs/index.js"

const port = 8080
const ready = console.log("server ready on port " + port)
const app = express()

app.listen(port, ready)

app.get("/", index)
app.get("/products", read);

function index(req, res) {
    try {
        const message = "Welcome to coder-products";
        return res.json({ status: 200, response: message });
    } catch (error) {
        console.log(error);
        return res.json({ status: 500, response: error.message });
    }
}

async function read(req, res) {
    try {
        const all = await getProducts();
    if (all.length > 0) {
        return res.json({ status: 200, response: all });
    } else {
        return res.json({ status: 404, response: "Not found" });
    }
    } catch (error) {
        console.log(error);
        return res.json({ status: 500, response: error.message });
    }
}
