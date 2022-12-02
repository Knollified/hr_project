import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;
const Employee = db.define('employees', {
    id: {
        type: DataTypes.NUMBER,
        autoIncrement: true,
        primaryKey: true
    },
    firstname: {
        type: DataTypes.STRING
    },
    lastname: {
        type: DataTypes.STRING
    },
    payperhour: {
        type: DataTypes.FLOAT
    },
    currenthours: {
        type: DataTypes.FLOAT
    },
    pay : {
        type: DataTypes.FLOAT
    },
    email : {
        type: DataTypes.STRING
    },
    address : {
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});

export default Employee;