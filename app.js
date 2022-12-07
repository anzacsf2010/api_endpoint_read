// ====================
// Most elegant method
// ====================
const https = require("https")

const givenUrl = "https://swapi.dev/api/people/1";

const getNames = (url) => {

    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            let data = [];

            response.on('data', (chunk) => {
                data += chunk;
            });

            response.on('end', () => {
                name = "Most Elegant Method - Name: " + JSON.parse(data).name;
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
})(givenUrl);


// ===================
// Alternative method
// ===================
const {altGetNames} = require("./alternative_app");

( async (url) => {
    let buffer = await altGetNames(url);
    console.log(buffer);
})(givenUrl);
