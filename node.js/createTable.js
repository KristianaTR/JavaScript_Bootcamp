import pool from "./db.js"

pool.getConnection((error, connection) => {
    if(error) {
        console.error('Hey there is an error with estabilshing your DB', error);
        return;
    }

    const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL
    )
    `;

    connection.query(createTableQuery, (error, response) => {
        if(error) {
            console.log("There is a problem creating table", error);
            return;
        }

        console.log("YOR TABLE HAS BEEN SUCCESSFULLY CREATED:", response);
    });
});