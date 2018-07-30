package helloworld;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.siertech.stapi.model.GenericService;

@Service
public class HelloWorldService extends GenericService<HelloWorld>   {

    @Autowired
	private HelloWorldDAO helloworldDAO;
	
	
}
