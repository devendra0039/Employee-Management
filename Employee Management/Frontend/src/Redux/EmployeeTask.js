import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialState = {
    employees: [],
    currentEmployee: []
}


const employeeTask = createSlice({
    name:"employeeTask",
    initialState,
    reducers:{
        allEmployees: (state,action)=>{
            state.employees=action.payload
        },
        addEmployee:(state,action)=>{
            state.employees.push(action.payload)
            axios.post("http://localhost:8080/employee", action.payload)

        },

        updateEmployee:(state,action)=>{
            state.employees = state.employees.filter(employee => employee.employeeId !== action.payload.employeeId)
            state.employees.push(action.payload)
            axios.put(`http://localhost:8080/employee/${action.payload.employeeId}`, action.payload)
         },

         currentEmployee: (state,action)=> {
            state.currentEmployee = state.employees.filter(employee => employee.employeeId === action.payload.id)
         },

         deleteEmployee:(state,action)=>{
            
            state.employees = state.employees.filter(employee => employee.employeeId !== action.payload.employeeId)
            
            axios.delete(`http://localhost:8080/employee/remove/${action.payload.id}`).catch(err => console.log(err))
           
            
         }
    }
})

export const {allEmployees, addEmployee,updateEmployee, currentEmployee,deleteEmployee} = employeeTask.actions
export default employeeTask.reducer