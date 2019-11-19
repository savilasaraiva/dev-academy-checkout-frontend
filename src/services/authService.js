import AWS from 'aws-sdk';

const _cognitoAuthentication = (USERNAME, PASSWORD) => new Promise((resolve, reject) => {
    const cognitoProvider = new AWS.CognitoIdentityServiceProvider({
        region: 'us-east-1'
    });

    var poolData = {
        UserPoolId: 'us-east-1_jv62S4IGj',
        ClientId: '71jnhj4f9klfpf4cbfuvkhmdjj'
    };

    const credentials = Object.assign({}, poolData, {
        "AuthFlow": "ADMIN_NO_SRP_AUTH",
        "AuthParameters": {
            USERNAME,
            PASSWORD
        }
    });
    console.log(credentials);
    cognitoProvider.adminInitiateAuth(credentials, (err, data) => {
        if (err) return reject(err);
        else return resolve(data);
    })
})

export default {
    authenticate: async () => {
        const result = await _cognitoAuthentication('devacademy@casamagalhaes.com.br', '123456');
        console.log(result);
    }
}