import {sequelize} from "sequelize";

const db = new sequelize("db_product","root","",{
    host: "localhost",
    dialect :"mysql",
});

export default db;