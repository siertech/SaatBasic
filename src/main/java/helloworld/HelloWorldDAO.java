package helloworld;
import com.siertech.stapi.model.GenericDAO;
import org.springframework.stereotype.Repository;

@Repository
public class HelloWorldDAO  extends GenericDAO<HelloWorld> {
	
	

	public HelloWorldDAO() {
		
		super(HelloWorld.class);
		
	}
	
	
	
	
}
