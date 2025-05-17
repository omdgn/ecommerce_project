const express = require('express');
const cors = require('cors');  
const db = require('./db/database');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 5050;


app.use(cors({
  origin: 'https://ecommerce-project-public.onrender.com',
}));

app.use(express.json());

// Ana route - test amaçlı
app.get('/', (req, res) => {
  res.send('Express + SQLite API çalışıyor');
});

// Routerlar
const recommendedRouter = require('./routes/recommended');
app.use('/api/recommended', recommendedRouter);

const quickLinksRouter = require('./routes/quickLinks');
app.use('/api/quickLinks', quickLinksRouter);

const mainSliderRouter = require('./routes/mainSlider');
app.use('/api/main-slider', mainSliderRouter);

const electronicDealsRouter = require('./routes/electronicDeals');
app.use('/api/electronic-deals', electronicDealsRouter);

// Server başlat
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor`);
});
