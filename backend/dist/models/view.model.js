"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewModel = void 0;
const mongoose_1 = require("mongoose");
const ViewSchema = new mongoose_1.Schema({
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
    timestamps: true,
});
ViewSchema.set('toJSON', {
    transform: function (_, ret) {
        ret.createdAt = ret.createdAt.toLocaleString();
        ret.updatedAt = ret.updatedAt.toLocaleString();
        return ret;
    },
});
exports.ViewModel = (0, mongoose_1.model)('View', ViewSchema);
