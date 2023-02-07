package com.app.Service;

import java.util.List;

import com.app.Exception.StudentException;
import com.app.Model.Student;

public interface StudentService {
	
	public String addStudent(Student s)throws StudentException;
	public List<Student> viewAllStudent()throws StudentException;
	public Student viewStudentById(int id)throws StudentException;
	public String deleteStudent(int id)throws StudentException;
	public String updateStudent(Student s)throws StudentException;
	
}
