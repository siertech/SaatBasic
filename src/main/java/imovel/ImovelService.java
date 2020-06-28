package imovel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.siertech.stapi.model.GenericService;

@Service
public class ImovelService extends GenericService<Imovel>   {

    @Autowired
	private ImovelDAO imovelDAO;
	
	
}
