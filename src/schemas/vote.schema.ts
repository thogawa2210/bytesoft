import {Schema, model} from "mongoose";

export interface IVote {
    name: string,
    amount: number,
}

const voteSchema = new Schema<IVote>({
    name: String,
    amount: Number,
});

const VoteModel = model<IVote>('Category', voteSchema);

export { VoteModel };