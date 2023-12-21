const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Tier = sequelize.define('Tier', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pointsRequired: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Tier;
};
