package com.devendra.Emplyee.controller;

import com.devendra.Emplyee.entity.Employee;
import com.devendra.Emplyee.errors.EmployeeNotFoundException;
import com.devendra.Emplyee.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;


    @PostMapping("/employee")
    public Employee saveEmployee(@Valid @RequestBody Employee employee){
        return employeeService.saveEmployee(employee);
    }

    @GetMapping("/employees")
    public List<Employee> getEmployees(){
        return employeeService.getEmployees();
    }

    @GetMapping("/employee/{id}")
    public  Employee getEmployeeById(@PathVariable int id) throws EmployeeNotFoundException {
        return employeeService.getEmployeeById(id);
    }

    @GetMapping("/employee/name/{name}")
    public List<Employee> getEmployeeByName(@PathVariable String name){
        return employeeService.getEmployeeByName(name);
    }

    @PutMapping("employee/{id}")
    public Employee updateEmployee(@PathVariable int id, @RequestBody Employee employee) throws EmployeeNotFoundException{
        return employeeService.updateEmployee(id, employee);
    }

    @DeleteMapping("employee/{id}")
    public Employee deleteEmployee(@PathVariable int id, @RequestBody Employee employee)throws EmployeeNotFoundException{
        return employeeService.deleteEmployee(id,employee);
    }

    @DeleteMapping("employee/remove/{id}")
    public String removeEmployee(@PathVariable int id) throws EmployeeNotFoundException {
        return employeeService.removeEmployee(id);
    }
}
