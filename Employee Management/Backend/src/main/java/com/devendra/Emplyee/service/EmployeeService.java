package com.devendra.Emplyee.service;

import com.devendra.Emplyee.entity.Employee;
import com.devendra.Emplyee.errors.EmployeeNotFoundException;

import java.util.List;

public interface EmployeeService {

    public Employee saveEmployee(Employee employee);

    public List<Employee> getEmployees();

    public Employee getEmployeeById(int id) throws EmployeeNotFoundException;

    public List<Employee> getEmployeeByName(String name);

   public Employee updateEmployee(int id, Employee employee) throws EmployeeNotFoundException;

   public Employee deleteEmployee(int id, Employee employee) throws EmployeeNotFoundException ;

   public String removeEmployee(int id) throws EmployeeNotFoundException ;
}
