// db.js
import { Sequelize } from 'sequelize';

const connectPostgres = new Sequelize('userdb', 'test', 'test', {
    host: 'localhost',       // or your Docker host
    dialect: 'postgres',
    port: 5432,              // default PostgreSQL port
    logging: false,           // set true to see SQL logs
    query: {
        "raw": true
    }
});

export default connectPostgres;