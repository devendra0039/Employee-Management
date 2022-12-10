package com.devendra.Emplyee.repository;

import com.devendra.Emplyee.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

    @Query(value = "SELECT * FROM employee ORDER BY employee_id ASC",nativeQuery = true)
    public List<Employee> findAll();
    @Query(value = "SELECT * FROM employee WHERE employee_name LIKE :Name%",nativeQuery = true)
    public List<Employee> findByEmployeeName(String Name);

}
