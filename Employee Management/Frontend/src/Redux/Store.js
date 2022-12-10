import { configureStore } from "@reduxjs/toolkit";
import employeeTaskReducer from "./EmployeeTask";

export const store = configureStore({
    reducer:{
        employeeTask:employeeTaskReducer
    }
})