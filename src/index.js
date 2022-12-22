const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
let startMs = 0;

const app = express();
app.use(bodyParser.raw());

const testnet = process.env.TESTNET;
const port = parseInt(process.env.PORT);
const path = process.env.BACKUP_PATH;

app.get('/status', async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.json({
        "initialized": true,
        "testnet": testnet,
        "start_ts": startMs / 1000,
        "service": "KeyBackup",
        "version": "0.0.1"
    });
});

app.post('/backup', async (req, res) => {
    const filename = req.query.filename;
    console.log(filename)
    fs.writeFileSync(`${path}/${filename}`, req.body);
    return res.json({ status: 'ok' });
});

async function start(port) {
    startMs = Date.now();

    app.listen(port);

    const ms = Date.now() - startMs;
    console.log(`Service start at port ${port} (${ms}ms)`)
}

start(port);