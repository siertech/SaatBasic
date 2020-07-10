package rastreamento;
import com.siertech.stapi.model.GenericDAO;
import org.springframework.stereotype.Repository;

@Repository
public class RastreamentoDAO  extends GenericDAO<Rastreamento> {
	
	

	public RastreamentoDAO() {
		
		super(Rastreamento.class);
		
	}
	
	
	
	
}
