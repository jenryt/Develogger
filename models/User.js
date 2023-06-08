const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlphanumeric: true,
      },
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        is: /^[a-zA-Z\s]+$/,
      },
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        is: /^[a-zA-Z\s]+$/,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        isLowercase: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 128],
      },
    },
    isLoggedIn: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    hooks: {
      beforeCreate: async (userData) => {
        userData.password = await bcrypt.hash(userData.password, 10);
        return userData.password;
      },
      beforeUpdate: async (userData) => {
        userData.password = await bcrypt.hash(userData.password, 10);
        return userData.password;
      },
    },
    sequelize,
    timestamps: false,
    // underscored: true,
    freezeTableName: true,
    modelName: "user",
  }
);

module.exports = User;
