const express = require('express');
const router = express.Router();
const db = require('../db/database');

// GET all quick links
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM quick_links ORDER BY id ASC';
  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error('DB GET error:', err.message);
      return res.status(500).json({ error: err.message });
    }
    res.json({ QuickLinks: rows });
  });
});

// POST add a new quick link
router.post('/', (req, res) => {
  const { id, imageLink, cardLink } = req.body;

  if (!id || !imageLink || !cardLink) {
    return res.status(400).json({ error: 'id, imageLink ve cardLink zorunludur.' });
  }

  const sql = `
    INSERT INTO quick_links (id, imageLink, cardLink)
    VALUES (?, ?, ?)
  `;
  const params = [id, imageLink, cardLink];

  db.run(sql, params, function (err) {
    if (err) {
      console.error('DB POST error:', err.message);
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'Yeni quick link eklendi', id: this.lastID });
  });
});

// DELETE a quick link by id
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'DELETE FROM quick_links WHERE id = ?';

  db.run(sql, [id], function (err) {
    if (err) {
      console.error('DB DELETE error:', err.message);
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ message: 'Kayıt bulunamadı' });
    }
    res.json({ message: `ID ${id} olan quick link silindi` });
  });
});

module.exports = router;
