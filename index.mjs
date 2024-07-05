import express from "express";

const port = process.env.port || 5000;

const app = express();
app.use(express.json());


app.get("/", async (req, res) => res.send("Hello World"));

app.listen(port, () => console.log(`connection succesful at ${port}`));

