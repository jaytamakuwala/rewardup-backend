const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Customer = sequelize.define('Customer', {
    storeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    currentPoints: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    currentTier: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Customer;
};
