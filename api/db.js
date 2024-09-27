import mysql from "mysql"
//Add your personal data over here provide password and database name correctly if using localhost

export const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "password",
    database: "blog"
})
