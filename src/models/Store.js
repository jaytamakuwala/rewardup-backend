const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Store = sequelize.define(
    'Store',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      logo: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: true,
    }
  );
  return Store;
};
