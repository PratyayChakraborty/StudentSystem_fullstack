import axios from "axios";


class StudentService { 

    getStudents() { 
        return axios.get("http://localhost:8088/student/getall");
    }

    addStudent(student) { 
        return axios.post("http://localhost:8088/student/add",student);
    }
    updateStudent(student) { 
        return axios.put("http://localhost:8088/student/update",student);
    }
    deleteStudent(id) { 

        return axios.delete(`http://localhost:8088/student/delete?id=${id}`)

    }
    viewStudent(id) { 

        return axios.get(`http://localhost:8088/student/getbyid?id=${id}`)

    }
    
}

export default new StudentService();