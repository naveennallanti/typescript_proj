import { Application } from 'express';
import { EmployeeService } from "../services/employee.service";
export class EmployeeController_test {

    private empSer: EmployeeService;
    constructor(private app: Application) {
        console.log("constructor")
        this.empSer = new EmployeeService();
        this.routes();
    }
    public routes() {
        console.log("routes");
        //get all employees information
        this.app.route("/employee_test").get(this.empSer.getAllEmployees);

        //get employee details by id
        this.app.route('/employee_test/:employee_id').get(this.empSer.getEmployeeDetails);

        //add new employee
        this.app.route("/employee_test").post(this.empSer.addNewEmployee);

        //update employee details by id
        this.app.route("/employee_test/:employee_id").put(this.empSer.updateEmployee)

        //delete employee details
        this.app.route("/employee_test/:employee_id").delete(this.empSer.deleteEmployee)

        //delete all employees details
        this.app.route("/employee_test").delete(this.empSer.deleteAllEmployees)
    }

}
