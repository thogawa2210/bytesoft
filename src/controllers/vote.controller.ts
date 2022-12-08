
const {VoteModel} = require('../schemas/vote.schema');
import {Request, Response} from 'express';

class VoteController{
    async vote(req: Request, res: Response){
        try {
            let votePost = req.body;
            let vote = await VoteModel.findOne({name: req.body.name})
            if (vote == null) {
                let newVote = await VoteModel.create(vote);
                res.status(201).json({type: 'success', message: "Vote Successfully"});
            } else {
                vote.amount += 1;
                await  VoteModel.findByIdAndUpdate({_id: vote._id}, vote)
                res.status(200).json({
                    type: 'success',
                    message: "Vote Successfully"
                });
            }
        } catch (error) {
            res.status(500).json('Server error');
        }
    }

    async getVote(req: Request, res: Response){
        const votes = await VoteModel.find();
        res.status(200).json({
            type: 'success', data: {
                message: 'Get Data Success!',
                data: votes
            }
        })
    }
}

const voteController = new VoteController();

export default voteController;
