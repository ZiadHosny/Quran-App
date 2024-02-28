export const getToken = async (getIdTokenClaims: Function) => {

    const tokenClaims = await getIdTokenClaims();
    const token = tokenClaims?.__raw

    return token
}