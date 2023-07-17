"use strict";

import { Express, Request, Response } from "express";
import express = require("express");
import cors from "cors";
import path from "path";
import { connect } from "./connectors/sequalize_pg";

const db = connect();

const app: Express = express();
const port = 8080;
app.use(express.json());
app.use(cors({ credentials: true, origin: true }));

app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
