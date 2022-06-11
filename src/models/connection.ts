import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST || 'localhost' || '127.0.0.1',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  // Referência: https://stackoverflow.com/questions/32100434/mysql-returns-full-datetime-string-on-select-query-when-column-type-is-date
});

export default connection;
