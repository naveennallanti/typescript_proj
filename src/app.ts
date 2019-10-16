import express from "express";
import { Application } from 'express';
import bodyParser from "body-parser";
import cors from "cors";
import { EmployeeController } from "./routes/employee.controller"
import mongoose from "mongoose";
import { DB_URL } from "./constants/constants";
import { MainRoutes } from "./routes/main.routes";

class App {
    public app: Application;
    // public empController: EmployeeController;
    public mainRoutes: MainRoutes;
    constructor() {
        this.app = express();
        this.setConfig();
        this.setMongoDbConfig();
        // this.empController = new EmployeeController(this.app);
        this.mainRoutes = new MainRoutes(this.app);
    }
    private setConfig() {
        this.app.use(bodyParser.json({ limit: "50mb" }));
        this.app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
        this.app.use(cors());
        // this.app.use('/api', (req, res) => {
        //     console.log("/api")
        //     let empController = new EmployeeController(this.app);
        // })
    }
    private setMongoDbConfig() {
        mongoose.Promise = global.Promise;
        mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }
}
export default new App().app;