import db from "../config/database.js";


const {DataTypes}= sequelize;

const product = db.define(    
    'products',
    {
        name: DataTypes.STRING,
        price: DataTypes.INTEGER,  
    },
    {
        freezeTableName :true,
    }    
);

export default product;
(async ()=>{
    await db.sync();
})();