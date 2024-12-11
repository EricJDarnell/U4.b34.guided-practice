const {client} = require('./db');

async function init() {
    console.log('connecting to database');
    await client.connect();
    console.log('connected to database');
}
init();