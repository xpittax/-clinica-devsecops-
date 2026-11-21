const express = require('express');
const mysql = require('mysql');
const app = express();
const db = mysql.createConnection({ host: 'localhost', user: 'clinica', database: 'clinica' });
app.get('/pacientes/:id', (req, res) => {
  db.query("SELECT * FROM pacientes WHERE id = ?", [req.params.id], (err, filas) => res.json(filas));
});
app.listen(3000);
