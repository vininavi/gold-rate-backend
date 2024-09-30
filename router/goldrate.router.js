const express = require('express');
const router = express.Router();
const GoldRate = require('../models/GoldRate,models');

// POST request to add a new gold rate
router.post('/', async (req, res) => {
  const { ratePerGram } = req.body;
  const newGoldRate = new GoldRate({ ratePerGram });
  try {
    await newGoldRate.save();
    res.status(201).json(newGoldRate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET request to get the latest gold rate
router.get('/latest', async (req, res) => {
  try {
    const latestGoldRate = await GoldRate.findOne().sort({ date: -1 });
    res.json(latestGoldRate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
