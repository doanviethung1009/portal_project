// models/User.js
import { DataTypes } from 'sequelize';
import connectPostgres from '../config/dbPostgresSQLConfig.js';

const User = connectPostgres.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default User;