import {Schema, model} from "mongoose";

export interface IUser {
    username: string,
    email: string,
    password: string,
}

const userSchema = new Schema<IUser>({
    username: String,
    email: String,
    password: String
});

const UserModel = model<IUser>('User', userSchema);

export { UserModel };