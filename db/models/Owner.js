const { DataTypes, Model } = require("sequelize");
const db = require("../db");

class Owner extends Model {}

// ``
//   firstname: string (max 50char) non null
//   lastname: string (max 100char) non null
//   birthday: date (> 18years old) non null
//   LicenseType: string (doit être voiture ou moto ou bateau ou avion)
// ```


Owner.init(
  {
    firstname : {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        max: 50,
      }
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        max: 100,
      }
    },
    birthday: {
      type: DataTypes.DATE,
    },
    LicenseType: {
      type: DataTypes.STRING,
      validate: {
        isIn: ['voiture', 'bateau', 'moto', 'avion']
      }
    },
  },
  {
    sequelize: db,
    modelName: "owner",
  }
);

module.exports = Owner;
