package resultado;
import com.siertech.stapi.model.GenericDAO;
import org.springframework.stereotype.Repository;

@Repository
public class ResultadoDAO  extends GenericDAO<Resultado> {
	
	

	public ResultadoDAO() {
		
		super(Resultado.class);
		
	}
	
	
	
	
}
