import { Schema, model } from "mongoose";
import { View } from "../utils/types.js";

const ViewSchema = new Schema<View>({
    userId: {
        type: String,
    },
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    userAgent: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})


export const ViewModel = model('View', ViewSchema)