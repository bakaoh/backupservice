const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
let startMs = 0;

const app = express();
app.use(bodyParser.raw());

app.get('/status', async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.json({ status: 'ok' });
});

app.post('/backup', async (req, res) => {
    const filename = req.query.filename;
    console.log(filename)
    fs.writeFileSync(`backup/${filename}`, req.body);
    return res.json({
        "initialized": true,
        "testnet": false,
        "start_ts": startMs,
        "service": "KeyBackup",
        "version": "0.0.1"
    });
});

async function start(port) {
    startMs = Date.now();

    app.listen(port);

    const ms = Date.now() - startMs;
    console.log(`Service start at port ${port} (${ms}ms)`)
}

start(9093);