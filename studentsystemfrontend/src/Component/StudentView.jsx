
import React, { Component } from "react";
import { Link } from "react-router-dom";
import StudentService from "../Services/StudentService";

class StudentView extends Component {

    constructor(props) {

        super(props);
        this.state = {
            id: '',
            name: '',
            address: ''
        }

    }
    componentDidMount() {
        const url = window.location.href;

        console.log(url);

        let [x, k] = url.split('=');

        StudentService.viewStudent(k).then((res) => {
            console.log(res.data);
            this.setState(res.data);
        })

    }

    render() {

        return (
            <div  >
                <h2 className="text-center">Student List</h2>
                <div className="add-page">
                    <Link to={"/"}>
                        <button className="btn btn-primary" >View All</button>
                    </Link>
                </div>
                <div className="row" >
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                // this.state.student.map(
                                //     student =>

                                <tr >
                                    <td>{this.state.id}</td>
                                    <td>{this.state.name}</td>
                                    <td>{this.state.address}</td>
                                    <td>

                                    </td>
                                </tr>
                                //     )
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}

export default StudentView;
