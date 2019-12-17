const request = require('request');
const cheerio = require('cheerio');
const moment = require('moment');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function getPage(url)
{
    return new Promise((resolve, reject) => {
        request({
            url: url,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:71.0) Gecko/20100101 Firefox/71.0',
            }
        },(error, response, body) =>
        {
           if (error) {
               return reject(error);
           }
           return resolve(cheerio.load(body, {decodeEntities: false}));
        });
    });
}

module.exports = async function (url) {
    try {
        const result = [];
        //const r = await getPage(url);

        //const ads = await run();

    } catch (e) {
        throw e;
    }
}