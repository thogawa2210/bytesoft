import {Schema, model} from "mongoose";

export interface IVote {
    user_email: string,
    name: string,
    amount: number,
}

const voteSchema = new Schema<IVote>({
    user_email: String,
    name: String,
    amount: Number,
});

const VoteModel = model<IVote>('Vote', voteSchema);

export { VoteModel };