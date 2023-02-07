package com.app.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.Exception.StudentException;
import com.app.Model.Student;
import com.app.Service.StudentServiceImpl;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {
	
	@Autowired
	private StudentServiceImpl sri;
//	http://localhost:8088/student/add
	@PostMapping("/add")
	public String  addStudent(@RequestBody Student s) throws StudentException {
		
		return sri.addStudent(s);
		
	}
//	http://localhost:8088/student/delete
	@DeleteMapping("/delete")
	public String deleString(@RequestParam int id) throws StudentException {
		
		return sri.deleteStudent(id);
		
	}
//	http://localhost:8088/student/getall
	@GetMapping("/getall")
	public List<Student> getAllStudent() throws StudentException{
		
		return sri.viewAllStudent();
	}
//	http://localhost:8088/student/getbyid
	@GetMapping("/getbyid")
	public Student getStudent(@RequestParam int id) throws StudentException{
		
		return sri.viewStudentById(id);
	}
//	http://localhost:8088/student/update
	@PutMapping("/update")
	public String updateStudent(@RequestBody Student s) throws StudentException{
		
		return sri.updateStudent(s);
	}	
	
}
