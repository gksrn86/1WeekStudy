package gitStudyJava;


class EmployeeInfo{
	public int rank;
	EmployeeInfo(int rank){this.rank = rank;}
}
class Person<T, S>{   //참조 데이터 타입만이 가능 , 기본데이터 타입은 올수 없음 그렇기 때문에 객체 인것 처럼 만들기 위해서 (wrapper)래퍼클래스를 이용
	public T info;
	public S id;
	Person(T info, S id){
		this.info = info;
		this.id = id;
	}
	public <U> void printInfo(U info) {
		System.out.println(info);
	}
}

public class GenericDemo2 {
	public static void main(String[] args) {
		EmployeeInfo e = new EmployeeInfo(1);
		Integer i = new Integer(10);
		Person p1 = new Person(e,i);
		p1.printInfo(e);
		//Person<EmployeeInfo, Integer>p1 = new Person<EmployeeInfo, Integer>(e,i);
		//System.out.println(p1.id.intValue());
	}

}
