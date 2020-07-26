var qs = require('qs');
var axios = require('axios');
var fs = require('fs');
var https = require('https');
module.exports = {
    async Consents(req, res) {
        const httpsAgent = new https.Agent({
            rejectUnauthorized: false,
            chain: fs.readFileSync("./certs/bankTwo/chain.crt"),
            cert: fs.readFileSync("./certs/bankTwo/client_certificate.crt"),
            key: fs.readFileSync("./certs/bankTwo/client_private_key.key"),
        });

        axios.post(
                'https://as2.tecban-sandbox.o3bank.co.uk/token',
                qs.stringify({
                    'grant_type': 'client_credentials',
                    'scope': 'accounts openid'
                }), {
                    headers: {
                        'Content-Type': '',
                        'Authorization': ''
                    },
                    httpsAgent
                },
            ).then(function(response) {
                res.send(JSON.stringify(response.data))
            })
            .catch(function(error) {
                res.send(error)
            });;

    },
    async Saldo(req, res) {
        const httpsAgent = new https.Agent({
            rejectUnauthorized: false,
            chain: fs.readFileSync("./certs/bankTwo/chain.crt"),
            cert: fs.readFileSync("./certs/bankTwo/client_certificate.crt"),
            key: fs.readFileSync("./certs/bankTwo/client_private_key.key"),
        });

        axios.get(
                'https://rs2.tecban-sandbox.o3bank.co.uk/open-banking/v3.1/aisp/accounts/{{ACCOUNT}}/balances', {
                    headers: {
                        'Content-Type': 'application/json',
                        'x-fapi-financial-id': '',
                        'x-fapi-interaction-id': '',
                        'Authorization': ''
                    },
                    httpsAgent
                },
            ).then(function(response) {
                res.send(JSON.stringify(response.data))
            })
            .catch(function(error) {
                res.send(error)
            });;

    },
    async Transactions(req, res) {
        const httpsAgent = new https.Agent({
            rejectUnauthorized: false,
            chain: fs.readFileSync("./certs/bankTwo/chain.crt"),
            cert: fs.readFileSync("./certs/bankTwo/client_certificate.crt"),
            key: fs.readFileSync("./certs/bankTwo/client_private_key.key"),
        });

        axios.get(
                'https://rs2.tecban-sandbox.o3bank.co.uk/open-banking/v3.1/aisp/accounts/{{ACCOUNT}}/transactions', {
                    headers: {
                        'Content-Type': 'application/json',
                        'x-fapi-financial-id': '',
                        'x-fapi-interaction-id': '',
                        'Authorization': ''
                    },
                    httpsAgent
                },
            ).then(function(response) {
                res.send(JSON.stringify(response.data))
            })
            .catch(function(error) {
                res.send(error)
            });;

    }
}