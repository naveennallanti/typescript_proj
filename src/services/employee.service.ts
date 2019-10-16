import { MongooseDocument } from 'mongoose';
import { Request, Response } from "express";
import { employeeModel } from "../models/employee.model"

export class EmployeeService {

    public getAllEmployees(req: Request, res: Response) {
        
        employeeModel.find({}).then(result => {
            console.log(result);
            return res.status(200).json({
                success: true,
                message: "All employees data",
                data: result
            })
        }).catch(err => {
            return res.status(400).json({
                success: false,
                message: "unable to get the data",
                err: err
            })
        })
    }

    public getEmployeeDetails(req: Request, res: Response) {
        let employee_id: any = req.params.employee_id;
        employeeModel.findById(employee_id).then(result => {
            console.log(result);
            return res.status(200).json({
                success: true,
                message: "Employee details fetched",
                data: result
            })
        }).catch(err => {
            return res.status(400).json({
                success: false,
                message: "unable to get the data",
                err: err
            })
        })
    }

    public addNewEmployee(req: Request, res: Response) {
        let employeeData = {
            name: req.body.name,
            age: req.body.age,
            gender: req.body.gender,
            email: req.body.email,
            mobileNumber: req.body.mobileNumber
        }
        const newEmployee = new employeeModel(employeeData);
        newEmployee.save().then(result => {
            return res.status(200).json({
                success: true,
                message: "employee data saved successfully",
                data: result
            })
        }).catch(err => {
            return res.status(400).json({
                success: false,
                message: "unable to save the data",
                err: err
            })
        })
    }

    public updateEmployee(req: Request, res: Response) {
        let employee_id: any = req.params.employee_id;
        let filter = {
            _id: employee_id
        }
        let data = {
            name: req.body.name,
            age: req.body.age,
            gender: req.body.gender,
            email: req.body.email,
            mobileNumber: req.body.mobileNumber
        }
        employeeModel.updateOne(filter, { $set: data }).then(result => {
            res.status(200).json({
                success: true,
                message: "employee data updated successfully",
                data: result
            })
        }).catch(err => {
            res.status(400).json({
                success: false,
                message: "could not update any data",
                err: err
            })
        })

    }

    public deleteEmployee(req: Request, res: Response) {
        let employee_id: any = req.params.employee_id;
        employeeModel.deleteOne({ _id: employee_id }).then(result => {
            res.status(200).json({
                success: true,
                message: "employee deleted successfully",
                data: result
            })
        }).catch(err => {
            res.status(400).json({
                success: false,
                message: "could not delete employee",
                err: err
            })
        })
    }

    public deleteAllEmployees(req: Request, res: Response) {
        employeeModel.deleteMany({}).then(result => {
            res.status(200).json({
                success: true,
                message: "All employees deleted successfully",
                data: result
            })
        }).catch(err => {
            res.status(400).json({
                success: false,
                message: "could not delete employees",
                err: err
            })
        })
    }

    
}