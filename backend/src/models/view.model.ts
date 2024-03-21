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
    deviceType: {
        type: String,
    },
    browserName: {
        type: String,
    },
    userAgent: {
        type: String,
    },
}, {
    timestamps: true
})

ViewSchema.set('toJSON', {
    transform: function (_, ret) {
        ret.createdAt = ret.createdAt.toLocaleString();
        ret.updatedAt = ret.updatedAt.toLocaleString();
        return ret;
    }
});

export const ViewModel = model('View', ViewSchema)