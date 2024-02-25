import dotenv from 'dotenv'

export const getFromEnv = () => {

    dotenv.config()

    const port = Number(process.env.PORT) || 3000

    const secret = process.env.SECRET
    const baseURL = process.env.BASE_URL
    const clientID = process.env.CLIENT_ID
    const issuerBaseURL = process.env.ISSUER_BASE_URL

    const databaseURL = process.env.DATABASE_URL || ''

    const publicKey = process.env.PUBLIC_KEY || ''
    const privateKey = process.env.PRIVATE_KEY || ''

    return {
        port,
        secret,
        baseURL,
        clientID,
        issuerBaseURL,
        databaseURL,
        publicKey,
        privateKey
    }

}