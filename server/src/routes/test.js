const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/ping-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ serverTime: result.rows[0].now });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
