import { Sequelize } from "sequelize";
import "dotenv/config";
import { config } from "dotenv";
import { Error, Success } from "../utils/loggers";

const { DB_USERNAME, DB_PASSWORD, DB_HOST } = process.env;

let sequelize: Sequelize;

sequelize = new Sequelize("jelloDB", process.env.DB_USERNAME as string, process.env.DB_PASSWORD as string, {
	host: process.env.DB_HOST as string,
	dialect:
		"postgres" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
});

export const connect = async () => {
	try {
		await sequelize.authenticate();
		Success("Database connection has been established successfully.");
	} catch (error) {
		Error("Unable to connect to the database:", error);
	}
};
