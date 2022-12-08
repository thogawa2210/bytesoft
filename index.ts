import express, { Express } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import authRoute from "./src/routers/auth.route";
import voteRoute from "./src/routers/vote.route";

const app: Express = express();
const port = 3001;

const DB_URL = 'mongodb://localhost:27017';
mongoose.connect(DB_URL)
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err.message));

app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));

app.use('/auth', authRoute);
app.use('/vote', voteRoute);


app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));