import connectPostgres from "../config/dbPostgresSQLConfig.js";
import User from "../models/Users.js";

const autoImportUser = async () => {
    await connectPostgres.sync({ force: true }); // or alter: true
    await User.create({ username: 'hung', email: 'hung@example.com' });
    console.log('✅ Table created and user added.');
}

const openConnection = async () => {
    try {
        await connectPostgres.sync()
        await connectPostgres.authenticate()
        // autoImportUser()
        console.log('✅ Connection has been established successfully.');
    } catch (error) {
        console.error('❌ Unable to connect to the database:', error);
    }
};

export default openConnection;