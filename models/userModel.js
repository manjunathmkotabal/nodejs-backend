import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
        name: {
            type: String,
            required: [true, "Please add the username"],
        },
        email: {
            type: String,
            required: [true, "Please add the user email"],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "Please add the user password"],
        }
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("User", userSchema);