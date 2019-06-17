package gitStudyJava;
class StudentInfo{
	public int grade;
	StudentInfo(int grade){this.grade = grade;}
}
//class StudentPerson{
//	public StudentInfo info;
//	StudentPerson(StudentInfo info){this.info = info;}  //반복적인 코딩이 불편
//}
class EmployeeInfo{
	public int rank;
	EmployeeInfo(int rank){this.rank = rank;}
}
//class EmployeePerson{
//	public EmployeeInfo info;
//	EmployeePerson(EmployeeInfo info){this.info = info;}  //반복적인 코딩이 불편
//}
class Person{
	public Object info;
	Person(Object info){this.info = info;} 
}

public class GenericDemo {

	public static void main(String[] args) {
//		StudentInfo si = new StudentInfo(2);
//		StudentPerson sp = new StudentPerson(si);
//		System.out.println(sp.info.grade); //2가 출력
//		EmployeeInfo ei = new EmployeeInfo(1);
//		EmployeePerson ep = new EmployeePerson(ei);
//		System.out.println(ep.info.rank); //1이 출력
		
		Person p1 = new Person("부장");
		EmployeeInfo ei = (EmployeeInfo)p1.info;
		System.out.println(ei.rank);
	}

}
