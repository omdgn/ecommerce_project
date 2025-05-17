const sqlite3 = require('sqlite3').verbose();
const path = require('path');

require('dotenv').config();

// Veritabanı dosyası
const DB_PATH = process.env.DB_PATH || path.join(__dirname, 'appdata.db');


// // Veritabanı dosyası
// const DB_PATH = path.join(__dirname, 'appdata.db');

// Veritabanını aç veya oluştur
const db = new sqlite3.Database(DB_PATH, (err) => {
  if (err) {
    console.error('Veritabanı açılamadı:', err.message);
  } else {
    console.log('SQLite veritabanına bağlanıldı');
  }
});

// Tabloları oluştur
db.serialize(() => {
  // Recommended tablosu
  db.run(`
    CREATE TABLE IF NOT EXISTS recommended (
      id INTEGER PRIMARY KEY,
      productLink TEXT,
      imageLink TEXT,
      productName TEXT,
      rating TEXT,
      price TEXT
    )
  `);

  // ElectronicDeals tablosu
  db.run(`
    CREATE TABLE IF NOT EXISTS electronic_deals (
      id INTEGER PRIMARY KEY,
      productLink TEXT,
      imageLink TEXT,
      productName TEXT,
      rating TEXT,
      price TEXT
    )
  `);

  // QuickLinks tablosu
  db.run(`
    CREATE TABLE IF NOT EXISTS quick_links (
      id INTEGER PRIMARY KEY,
      imageLink TEXT,
      cardLink TEXT
    )
  `);

  // MainSlider tablosu
  db.run(`
    CREATE TABLE IF NOT EXISTS main_slider (
      id INTEGER PRIMARY KEY,
      resimLink TEXT,
      sliderLink TEXT
    )
  `);
});

module.exports = db;
