import dotenv from 'dotenv';
export const getFromEnv = () => {
    dotenv.config();
    const port = Number(process.env.PORT) || 3000;
    const mode = process.env.MODE;
    const databaseURL = process.env.DATABASE_URL || '';
    const publicKey = process.env.PUBLIC_KEY || '';
    const privateKey = process.env.PRIVATE_KEY || '';
    return {
        port,
        mode,
        databaseURL,
        publicKey,
        privateKey
    };
};
