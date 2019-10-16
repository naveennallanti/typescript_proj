import mongoose, { Schema } from "mongoose"

const employeeSchema = new Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
    gender: {
        type: String,
    },
    email: {
        type: String,
    },
    mobileNumber: {
        type: Number,
    }
})

export const employeeModel = mongoose.model('employees', employeeSchema);