import { Application } from 'express';
import { EmployeeService } from "../services/employee.service";
export class EmployeeController {

    private empSer: EmployeeService;
    constructor(private app: Application) {
        console.log("constructor")
        this.empSer = new EmployeeService();
        this.routes();
    }
    public routes() {
        console.log("routes");
        //get all employees information
        this.app.route("/employee").get(this.empSer.getAllEmployees);

        //get employee details by id
        this.app.route('/employee/:employee_id').get(this.empSer.getEmployeeDetails);

        //add new employee
        this.app.route("/employee").post(this.empSer.addNewEmployee);

        //update employee details by id
        this.app.route("/employee/:employee_id").put(this.empSer.updateEmployee)

        //delete employee details
        this.app.route("/employee/:employee_id").delete(this.empSer.deleteEmployee)

        //delete all employees details
        this.app.route("/employee").delete(this.empSer.deleteAllEmployees)
    }

}
