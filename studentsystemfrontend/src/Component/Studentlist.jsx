import React, { Component } from "react";
import { Link } from "react-router-dom";
import StudentService from "../Services/StudentService";

class Studentlist extends Component {

    constructor(props) {

        super(props);
        this.state = {
            students: []
        }
        this.addStudent = this.addStudent.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);
    }
    componentDidMount() {

        StudentService.getStudents().then((res) => {
            console.log(res.data);
            this.setState({ students: res.data });
        })

    }
    deleteStudent(id) {
        // event.preventDefault;
        StudentService.deleteStudent(id).then((res) => {
            console.log(res);
            window.location.reload();

        });
    }
    addStudent() {



    }

    render() {

        return (
            <div style={{ justifyContent: 'center', textAlign: 'center', alignItems: 'center', width: '80%', margin: 'auto' }}>
                <h2 className="text-center">Student List</h2>
                <div className="add-page" >
                    <Link to={"/add-student"} >
                        <button className="btn btn-primary" >Add Student</button>
                    </Link>
                </div>
                <div className="row" >
                    <table className="table table-striped table-bordered" style={{ justifyContent: 'center', textAlign: 'center', alignItems: 'center', width: '80%', margin: 'auto' }}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                this.state.students.map(
                                    student =>

                                        <tr key={student.id}>
                                            <td>{student.id}</td>
                                            <td>{student.name}</td>
                                            <td>{student.address}</td>
                                            <td>
                                                <Link to={"/update-student/:id=" + student.id}>
                                                    <button type="button" class="btn btn-primary" style={{ marginRight: '10px' }}>Edit</button></Link>
                                                <button type="button" class="btn btn-danger" onClick={() => this.deleteStudent(student.id)} style={{ marginRight: '10px' }}>Delete</button>
                                                <Link to={"/view-student/:id=" + student.id}>
                                                    <button type="button" class="btn btn-dark">View</button>
                                                </Link>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}

export default Studentlist;
