import { createClient } from 'redis';
export const client = createClient({
    password: 'l9YJAs87kuowVHs8NepxUsbO8Whe8Hv0',
    socket: {
        host: 'redis-11524.c14.us-east-1-2.ec2.cloud.redislabs.com',
        port: 11524
    }
});
