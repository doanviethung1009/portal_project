// config/database.js
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    // dialect: 'sqlite',
    dialect: 'better-sqlite3',
    storage: './database.sqlite' // <- your local file here
});

export default sequelize;