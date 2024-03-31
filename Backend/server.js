const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "RONgyi2002",
    database: "cinemadb"
})

app.get('/employee', (req, res) => {
    const sql = 'SELECT * FROM employee';
    db.query(sql, (err, data) => {
        if (err) {
            return res.json(err);
        }
        return res.json(data);
    })
})

app.get('/product', (req, res) => {
    const sql = 'SELECT * FROM product';
    db.query(sql, (err, data) => {
        if (err) {
            return res.json(err);
        }
        return res.json(data);
    })
})

app.get('/', (req, res) => {
    return res.json('from backend');
})

app.listen(8081, () => {
    console.log('listening');
})