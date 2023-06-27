import mysql from 'mysql'

const pool = mysql.createPool({
    host: 'hostname1',
    user: 'kristiana',
    password: '123',
    database: 'kristiana-db',
});

export default pool;