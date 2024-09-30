const mongoose = require('mongoose');

const GoldRateSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  ratePerGram: Number,
});

module.exports = mongoose.model('GoldRate', GoldRateSchema);
