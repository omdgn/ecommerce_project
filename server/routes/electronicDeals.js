const express = require('express');
const router = express.Router();
const db = require('../db/database');

// GET all electronic deals
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM electronic_deals ORDER BY id ASC';
  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error('DB GET error:', err.message);
      return res.status(500).json({ error: err.message });
    }
    res.json({ ElectronicDeals: rows });
  });
});

// POST add a new electronic deal
router.post('/', (req, res) => {
  const { id, productLink, imageLink, productName, rating, price } = req.body;

  if (!id || !productLink || !imageLink || !productName || !rating || !price) {
    return res.status(400).json({ error: 'Tüm alanlar zorunludur: id, productLink, imageLink, productName, rating, price' });
  }

  const sql = `
    INSERT INTO electronic_deals (id, productLink, imageLink, productName, rating, price)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  const params = [id, productLink, imageLink, productName, rating, price];

  db.run(sql, params, function (err) {
    if (err) {
      console.error('DB POST error:', err.message);
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'Yeni electronic deal eklendi', id: this.lastID });
  });
});

// DELETE an electronic deal by id
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'DELETE FROM electronic_deals WHERE id = ?';

  db.run(sql, [id], function (err) {
    if (err) {
      console.error('DB DELETE error:', err.message);
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ message: 'Kayıt bulunamadı' });
    }
    res.json({ message: `ID ${id} olan electronic deal silindi` });
  });
});

module.exports = router;
