const express = require('express');
const router = express.Router();
const db = require('../db/database');

// GET all main sliders
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM main_slider ORDER BY id ASC';
  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error('DB GET error:', err.message);
      return res.status(500).json({ error: err.message });
    }
    res.json({ MainSlider: rows });
  });
});

// POST add a new main slider
router.post('/', (req, res) => {
  const { id, resimLink, sliderLink } = req.body;

  if (!id || !resimLink || !sliderLink) {
    return res.status(400).json({ error: 'id, resimLink ve sliderLink zorunludur.' });
  }

  const sql = `
    INSERT INTO main_slider (id, resimLink, sliderLink)
    VALUES (?, ?, ?)
  `;
  const params = [id, resimLink, sliderLink];

  db.run(sql, params, function (err) {
    if (err) {
      console.error('DB POST error:', err.message);
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'Yeni main slider eklendi', id: this.lastID });
  });
});

// DELETE a main slider by id
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'DELETE FROM main_slider WHERE id = ?';

  db.run(sql, [id], function (err) {
    if (err) {
      console.error('DB DELETE error:', err.message);
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ message: 'Kayıt bulunamadı' });
    }
    res.json({ message: `ID ${id} olan main slider silindi` });
  });
});

module.exports = router;
