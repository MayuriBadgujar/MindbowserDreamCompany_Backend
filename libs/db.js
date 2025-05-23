// config/db.js (or wherever you keep your DB connection)

import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS || '',
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT || 'mysql',
    logging: false
  }
);

const DBCon = async () => {
  try {
    await sequelize.authenticate();
    console.log('MySQL IS CONNECTED');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

export { sequelize, DBCon };
