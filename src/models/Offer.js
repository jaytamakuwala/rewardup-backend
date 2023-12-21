const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Offer = sequelize.define('Offer', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pointsRequired: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Offer;
};
