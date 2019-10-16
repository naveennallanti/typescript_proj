import { Application } from "express";
import * as express from "express";
let router = express.Router();
import { EmployeeController } from "./employee.controller"
import { EmployeeController_test } from "./employee.controller_test"
export class MainRoutes {
    public empController: EmployeeController
    public empController_test: EmployeeController_test
    constructor(private app: Application) {
        this.empController = new EmployeeController(this.app)
        this.empController_test = new EmployeeController_test(this.app)

    }
}