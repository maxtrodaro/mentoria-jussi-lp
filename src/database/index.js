const Sequelize = require("sequelize");

const dbConfig = require("../config/connection");
const Profile = require("../models/Profile");
const Store = require("../models/Store");

const connection = new Sequelize(dbConfig);

Profile.init(connection);
Store.init(connection);

module.exports = connection;
