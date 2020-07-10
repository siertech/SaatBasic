package historicorastreamento;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.siertech.stapi.model.GenericService;

@Service
public class HistoricoRastreamentoService extends GenericService<HistoricoRastreamento>   {

    @Autowired
	private HistoricoRastreamentoDAO historicorastreamentoDAO;
	
	
}
