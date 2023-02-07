import React, { Component } from 'react';
import { Link, useNavigate } from "react-router-dom";
import StudentService from '../Services/StudentService';

class AddStudent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            address: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.saveStudent = this.saveStudent.bind(this);
        this.back = this.back.bind(this);
    }

    saveStudent = (event) => {
        event.preventDefault();
        let stu = {
            name: this.state.name,
            address: this.state.address
        }
        // console.log(stu);
        let stu1 = JSON.stringify(stu);
        StudentService.addStudent(stu).then(res => {
            console.log(res);
            this.back();
            // const navigate = useNavigate();
            // return navigate('./students');
        })

    }

    back() {
        console.log("back")
        window.location.href = "/students";
    }
    changeNameHandler = (event) => {
        this.setState({ name: event.target.value });
    }
    changeAddressHandler = (event) => {
        this.setState({ address: event.target.value });
    }

    render() {
        return (
            <div style={{ justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
                <h1>Student Form</h1>
                <div class="col-md-4 col-md-offset-3 col-md-offset-3" style={{ justifyContent: 'center', textAlign: 'center', alignItems: 'center', margin: 'auto' }} >
                    <section id="inner-wrapper" class="card-body">
                        <article style={{ justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
                            <form style={{ justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
                                <div class="form-group">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="fa fa-user"> </i></span>
                                        <input type="text" class="form-control" placeholder="Name" value={this.state.name} onChange={this.changeNameHandler} />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="fa fa-envelope"> </i></span>
                                        <input type="text" class="form-control" placeholder="Address" value={this.state.address} onChange={this.changeAddressHandler} />
                                    </div>
                                </div>
                                <Link to={'/students'}>
                                    <button type="submit" class="btn btn-success btn-block" onClick={this.saveStudent}>Submit</button>
                                </Link>
                                <Link to={'/students'}>
                                    <button type="submit" class="btn btn-danger btn-block">Cancel</button>
                                </Link>
                            </form>
                        </article>
                    </section></div>
            </div>
        );
    }
}

export default AddStudent;