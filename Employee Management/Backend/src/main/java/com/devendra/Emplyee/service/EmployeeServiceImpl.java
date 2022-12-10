package com.devendra.Emplyee.service;

import com.devendra.Emplyee.entity.Employee;
import com.devendra.Emplyee.errors.EmployeeNotFoundException;
import com.devendra.Emplyee.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class EmployeeServiceImpl implements EmployeeService {
    @Autowired
    EmployeeRepository employeeRepository;

    @Override
    public Employee saveEmployee(Employee employee){
        return  employeeRepository.save(employee);
    }

    @Override
    public List<Employee> getEmployees() {
        return employeeRepository.findAll();
    }

    @Override
    public Employee getEmployeeById(int id) throws EmployeeNotFoundException{
        Optional<Employee> employee = employeeRepository.findById(id);
        if(!employee.isPresent()){
            throw new EmployeeNotFoundException("Employee is not present with id "+ id);
        }
        return employee.get();
//        return employeeRepository.findById(id).get();
    }

    @Override
    public List<Employee> getEmployeeByName(String name) {
        return  employeeRepository.findByEmployeeName(name);
    }

    @Override
    public Employee updateEmployee(int id, Employee employee) throws EmployeeNotFoundException{
        Optional<Employee> emp = employeeRepository.findById(id);
        if(!emp.isPresent()){
            throw new EmployeeNotFoundException("Employee not Found to Update...!");
        }
        Employee empdb=employeeRepository.findById(id).get();
        if(Objects.nonNull(employee.getEmployeeName())&&!"".equalsIgnoreCase(employee.getEmployeeName())){
            empdb.setEmployeeName(employee.getEmployeeName());
        }
        if(Objects.nonNull(employee.getJoiningDate())){
            empdb.setJoiningDate(employee.getJoiningDate());
        }
        if(Objects.nonNull(employee.getAge())){
            empdb.setAge(employee.getAge());
        }
        if(Objects.nonNull(employee.getEmployeeLocation())&&!"".equalsIgnoreCase(employee.getEmployeeLocation())){
            empdb.setEmployeeLocation(employee.getEmployeeLocation());
        }
        if(Objects.nonNull(employee.getEmployeeActive())){
            empdb.setEmployeeActive(employee.getEmployeeActive());
        }
        return employeeRepository.save(empdb);
    }

    @Override
    public Employee deleteEmployee(int id, Employee employee) throws EmployeeNotFoundException{
        boolean empdb=employeeRepository.findById(id).isPresent();
        if(empdb==false){
            throw new EmployeeNotFoundException("Employee Not Found ...!");
        }
        Employee emp=employeeRepository.findById(id).get();
        emp.setEmployeeActive(0);
        return employeeRepository.save(emp);
    }

    @Override
    public String removeEmployee(int id) throws EmployeeNotFoundException {
        Optional<Employee> emp = employeeRepository.findById(id);
        if(!emp.isPresent()){
                throw new EmployeeNotFoundException("Employee not Found ...!");
        }
        employeeRepository.deleteById(id);
        return  "Employee removed "+id;
    }

}
