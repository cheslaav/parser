const parser = require('./parser');

async function start() {
    try {
        const ads = await parser('https://m.avangard-sp.ru');
    } catch (e) {
        console.log(e);
    }

    process.exit(0);

}

start();