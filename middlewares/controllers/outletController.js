const Outlet = require('../models/outletModel');

exports.create = async (req, res) => {
  try {
    const outlet = await Outlet.create(req.body);
    res.status(201).json(outlet);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAll = async (req, res) => {
  res.json(await Outlet.find());
};