const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const Offermodel = require('../models/Offer');
const Offer = Offermodel(sequelize, Sequelize);
exports.getAllOffers = async (req, res) => {
  try {
    const offer = await Offer.findAll();

    if (offer) {
      return res
        .status(200)
        .send({ data: offer, message: "all Offer fetched successfully" });
    } else {
      return res.status(404).send({ message: "Offer not found" });
    }
  } catch (error) {
    console.log(error.message)
    res.status(500).send({ error });
  }
};
