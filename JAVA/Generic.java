package gitStudyJava;

class Person<T>{
	public T info;
}


//제너릭 사용법
public class Generic {
	
	public static void main(String[] args) {
		Person<String> p1 = new Person<String>();
		Person<StringBuilder> p2 = new Person<StringBuilder>();

	}

}
