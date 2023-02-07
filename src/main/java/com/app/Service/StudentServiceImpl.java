package com.app.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.Exception.StudentException;
import com.app.Model.Student;
import com.app.Repository.StudentRepo;

@Service
public class StudentServiceImpl implements StudentService{
	
	@Autowired
	private StudentRepo sr;

	@Override
	public String  addStudent(Student s) throws StudentException{
	
		 sr.save(s);
		 return "Student added Sucssesfully";
		}
		

	@Override
	public List<Student> viewAllStudent() throws StudentException{
	
		return sr.findAll();
	}



	@Override
	public String deleteStudent(int id) throws StudentException {
		
		Optional<Student> so=sr.findById(id);
		Student s= so.get();
		
		if(s==null) {
			throw new StudentException("Student not found with this id");
		} else {
			sr.delete(s);
		}
		return "Delete Successfull";
	}

	@Override
	public Student viewStudentById(int id) throws StudentException{
	
		Optional<Student> so=sr.findById(id);
		Student s= so.get();
		if(s==null) {
			throw new StudentException("Student not found with this id");
		} 
		return s;
		
	}


	@Override
	public String updateStudent(Student s) throws StudentException {
		// TODO Auto-generated method stub
		Optional<Student> so=sr.findById(s.getId());
		Student s1= so.get();
		
		if(s1==null) {
			throw new StudentException("Student not found with this id");
		} else {
			sr.save(s);
		}
		return "Update Successfull";
	}

}
