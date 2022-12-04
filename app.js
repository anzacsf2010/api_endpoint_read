const https = require("https")
const child_process = require("child_process");

const givenUrl = "https://swapi.dev/api/people/1";
const testUrl = "https://randomuser.me/api/";

const getNames = (url) => {

    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            let data = [];

            response.on('data', (chunk) => {
                data += chunk;
            });

            response.on('end', () => {
                name = JSON.parse(data).results[0].name;
                resolve(name);
            });
        }).on('error', (err) => {
            reject(err);
        });
    });

}

( async (url) => {
    let buffer = await getNames(url);
    console.log(buffer);
})(testUrl);