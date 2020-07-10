package rastreamento;

import java.util.ArrayList;
import java.util.logging.Logger;

import org.hibernate.annotations.common.util.impl.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;

@Configuration
public class Init {
    
	
	@Autowired
	private RastreamentoService rastreamentoService;
  
	@EventListener(ContextRefreshedEvent.class)
	public void warmup() {
	    System.out.println("Lista de rastreamentos: ");
	    
	    ArrayList<Rastreamento> items = rastreamentoService.getAll();
	    
	    for(Rastreamento r: items){
	    	
	    	rastreamentoService.addOrRemoveItemFromRastreamento(r);
	    }
	   
	}
}