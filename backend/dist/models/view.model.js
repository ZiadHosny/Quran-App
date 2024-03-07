import { Schema, model } from "mongoose";
const ViewSchema = new Schema({
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
});
export const ViewModel = model('View', ViewSchema);
