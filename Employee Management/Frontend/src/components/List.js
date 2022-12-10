
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { allEmployees, currentEmployee, deleteEmployee } from '../Redux/EmployeeTask'

const List = () => {

    const navigate= useNavigate();
    const dispatch = useDispatch();

    const handleupdate = (id) =>{
    
        // console.log(id, 'id')
        dispatch(currentEmployee({id: id}))
      navigate('UpdateEmployee')
    }

    const handledelete = (id) =>{
        console.log('id', id)
        dispatch(deleteEmployee({id:id}))
    }

    const employees = useSelector(state => state.employeeTask.employees)

    useEffect(() => { fetchdata() },[])
    const URL = "http://localhost:8080/employees"

    const fetchdata = async () => {
        await axios.get(URL).then((response) => { console.log(response.data); dispatch(allEmployees(response.data)); })
    }




    return (
        <table border={"2px solid black"} style={{ borderCollapse: "collapse", alignItems: "center", display: "inline-block", marginTop: "30px" }}>
            <thead>
                <tr style={{ margin: "20px" }} >
                    <th >Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Date of Joining</th>
                    <th>Location</th>
                    <th>Status</th>
                    <th>Update</th>
                    <th>Delete</th>

                </tr>
            </thead>
            <tbody>
                {employees.map((item, i) => (<tr key={i}>
                    <td>{item.employeeId}</td>
                    <td>{item.employeeName}</td>
                    <td>{item.age}</td>
                    <td>{item.joiningDate}</td>
                    <td>{item.employeeLocation}</td>
                    <td>{item.employeeActive}</td>
                    <td><button onClick={() => handleupdate(item.employeeId)} type='button' id='update' style={{ backgroundColor: "green", color: "white", borderRadius: "10px" }}>Update</button></td>
                    <td><button onClick={() => handledelete(item.employeeId)} type='button' id='delete' style={{ backgroundColor: "red", color: "white", borderRadius: "10px" }}>Delete</button></td>
                </tr>))}
            </tbody>

        </table>
    )
}

export default List