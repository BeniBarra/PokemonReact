const axios = require('axios');
//require('dotenv').config();

async function generateCache() {
    return await axios.get(process.env.REACT_APP_BACK_END);
};

export default generateCache;