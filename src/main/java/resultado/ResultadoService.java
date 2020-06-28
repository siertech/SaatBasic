package resultado;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.siertech.stapi.model.GenericService;

@Service
public class ResultadoService extends GenericService<Resultado>   {

    @Autowired
	private ResultadoDAO resultadoDAO;
	
	
}
