const axios = require("axios");

const altGetNames = (url) => {
    return axios.get(url)
        .then((response) => {
            return "Alternative Method - Name: " + response.data.name;
        });
}

exports.altGetNames = altGetNames;