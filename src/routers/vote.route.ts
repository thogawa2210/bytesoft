import express from "express";
import voteController from "../controllers/vote.controller";

const voteRoute = express.Router();

voteRoute.post('/vote', voteController.vote);
voteRoute.get('/getVote', voteController.getVote);

export default voteRoute;