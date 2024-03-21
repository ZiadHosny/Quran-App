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
});
ViewSchema.set('toJSON', {
    transform: function (_, ret) {
        ret.createdAt = ret.createdAt.toLocaleString();
        ret.updatedAt = ret.updatedAt.toLocaleString();
        return ret;
    }
});
export const ViewModel = model('View', ViewSchema);
