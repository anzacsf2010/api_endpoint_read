const axios = require("axios");

const altGetNames = (url) => {
    return axios.get(url)
        .then((response) => {
            return response.data.name;
        });
}

exports.altGetNames = altGetNames;