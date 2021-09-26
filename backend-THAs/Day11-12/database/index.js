const {Sequelize} = require("sequelize");

const sequelize = new Sequelize(
    "postgres",
    "postgres",
    "123456789",
    {
        host: "localhost",
        dialect: "postgres"
    }
);

sequelize.sync();

(async() => {
    try {
        await sequelize.authenticate();
        console.log("Connection established with DB");
    } catch(err){
        console.log("Error incoming");
    }
});

module.exports = sequelize; 