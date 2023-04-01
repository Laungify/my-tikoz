const express  = require("express");

const app = express();
const cors = require("cors");

const TokenRoute = require("./routes/mpesa/token");

require("dotenv").config();
const port = process.env.PORT

// const {createToken,stkPush}= require("./controllers/mpesa/token")

// app.get ("/accessToken", (req, res) => {
//     createToken()
// }) 


app.listen(port, () => {
    console.log(`app running at localhost: ${port}`);
})

app.use(express.json());
// app.use(express.urlencoded({extended: true}));
app.use(cors());


// const TokenRouter = require("./routes/mpesa/token")
app.get('/', (req, res) => {
    res.send(`<h1>Hello from server</h1>`)
})
app.use("/token", TokenRoute);
