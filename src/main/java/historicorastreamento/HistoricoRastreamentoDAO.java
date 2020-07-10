package historicorastreamento;
import com.siertech.stapi.model.GenericDAO;
import org.springframework.stereotype.Repository;

@Repository
public class HistoricoRastreamentoDAO  extends GenericDAO<HistoricoRastreamento> {
	
	

	public HistoricoRastreamentoDAO() {
		
		super(HistoricoRastreamento.class);
		
	}
	
	
	
	
}
