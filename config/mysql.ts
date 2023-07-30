import mysql from "mysql";

const dbMysql = mysql.createConnection({
  host: "210.246.201.44",
  database: "sabaipho_stock",
  user: "sabaipho_stock",
  password: "oD4ueYgdW",
});

dbMysql.connect((err: any) => {
  if (err) throw err;
  console.log("Connected!");
});

export default dbMysql;
