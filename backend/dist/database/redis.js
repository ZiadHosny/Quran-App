"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const redis_1 = require("redis");
exports.client = (0, redis_1.createClient)({
    password: 'l9YJAs87kuowVHs8NepxUsbO8Whe8Hv0',
    socket: {
        host: 'redis-11524.c14.us-east-1-2.ec2.cloud.redislabs.com',
        port: 11524,
    },
});
