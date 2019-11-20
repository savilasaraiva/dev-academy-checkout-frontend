import Amplify, { Auth } from 'aws-amplify';

const email = 'devacademy@casamagalhaes.com.br'
const password = '1234567'
const appConfig = {
    Auth: {
        mandatorySignIn: true,
        region: 'us-east-1',
        userPoolId: 'us-east-1_jv62S4IGj',
        userPoolWebClientId: '71jnhj4f9klfpf4cbfuvkhmdjj',
        identityPoolId: 'us-east-1:01722b46-cbcf-4db4-b3d3-5adeb8f848e7'
    }
}

Amplify.configure(appConfig);

const authenticate = async () => {
    await Auth.signIn(email, password);
    const authenticationToken = (await Auth.currentSession()).getIdToken().getJwtToken();
    saveAuthenticationToken(authenticationToken)
}

const saveAuthenticationToken = (authenticationToken) => {
    localStorage.setItem('authenticationToken', authenticationToken)
}

const getAuthenticationToken = () => {
    return localStorage.getItem('authenticationToken')
}

export default {
    authenticate,
    saveAuthenticationToken,
    getAuthenticationToken
}