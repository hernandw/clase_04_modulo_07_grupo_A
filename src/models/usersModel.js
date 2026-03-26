import sequelize from '../config/db.js'
import { DataTypes } from 'sequelize'

const Users = sequelize.define(
    "users",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(60),
            allowNull: false,
            unique: true
        }
    },
    {
        timestamps: true //agregar createAd y updateAt automaticamente
    }

)


export default Users




