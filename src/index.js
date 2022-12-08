const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const fs = require('fs');
const express = require('express');

const app = express();

app.post('/backup', async (req, res) => {
    const filename = req.query.filename;
    fs.writeFileSync(filename, req.body);
    return res.json({ status: 'ok' });
});

async function start(port) {
    const startMs = Date.now();

    app.listen(port);

    const ms = Date.now() - startMs;
    console.log(`Service start at port ${port} (${ms}ms)`)
}

start(9093);