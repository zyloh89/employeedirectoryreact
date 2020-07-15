import React, { Component } from 'react' 
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import EmployeeTable from "../components/EmployeeTable";
import API from "../utils/API";


class Body extends Component {
    state = { 
        employeeArray: []
    };

    // console.log(employeeArray)

    componentDidMount() {
        API.getEmployees()
        .then(res => this.setState({employeeArray: res.data.results}))
        .catch(err => console.log(err));

    }

    render() {
        return (
            <div>
            <Navbar />
            <Jumbotron />
            {this.state.employeeArray.map((employee,i) => {
                <EmployeeTable 
                image={employee.picture.thumbnail}
                firstName={employee.name.first}
                surname={employee.name.last}
                email={employee.email}
                phone={employee.phone}
                key={i}
                />
            })}            
            </div>
        );
    }
}

export default Body