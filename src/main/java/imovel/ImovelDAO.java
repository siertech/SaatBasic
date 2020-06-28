package imovel;
import com.siertech.stapi.model.GenericDAO;
import org.springframework.stereotype.Repository;

@Repository
public class ImovelDAO  extends GenericDAO<Imovel> {
	
	

	public ImovelDAO() {
		
		super(Imovel.class);
		
	}
	
	
	
	
}
