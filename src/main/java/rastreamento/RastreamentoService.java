package rastreamento;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.siertech.stapi.model.GenericService;

import historicorastreamento.HistoricoRastreamentoService;

@Service
public class RastreamentoService extends GenericService<Rastreamento>   {

    @Autowired
	private RastreamentoDAO rastreamentoDAO;
    
    private HistoricoRastreamentoService historicorastreamentoService;
    
	public  Map<String,ExecuteSearch> threads = new HashMap<String, ExecuteSearch>();
	
	
	@Override
	public int changeAttr(long id, String key, String value) {
 
		
		int res =  super.changeAttr(id, key, value);
		
		Rastreamento item = getById(id);
		
		//Atualiza o linkTRansformed
		if(key.equals("linkResultados")){
			String linkTransformed = ExecuteSearch.getLinkResults(item);
			item.setLinkTransformed(linkTransformed);
			super.changeAttr(id, "linkTransformed", linkTransformed);
		}
		
		addOrRemoveItemFromRastreamento(item);
		
		return res;
	}
    
    @Override
    public Rastreamento addOrUpdate(Rastreamento item) {
    	
    	item.setLinkTransformed(ExecuteSearch.getLinkResults(item));
    	item = super.addOrUpdate(item);
    	addOrRemoveItemFromRastreamento(item);
    	
    	return item;
    }
    
    public String getThreadsAtivas(){
    	
    	String chaves = "";
    	
    	for(String chave:	threads.keySet() ){
    		chaves+=","+chave;
    	}
    	
    	return chaves;
    }
	
public void addOrRemoveItemFromRastreamento(Rastreamento item){
	if(item.getStatusExecucao()==1){
		
    	//Adicionar o item a thread de monitoramento
    	add(item);
	}
	else {
		//Remove das threads
		remove(item);
	}
}    

//Adiciona ou atualiza
public  void add(final Rastreamento rastreamento){
		
		//Remove o item antigo
		remove(rastreamento);
		
		
		ExecuteSearch execute = new ExecuteSearch(historicorastreamentoService);
		execute.iniciar(rastreamento);
		threads.put(rastreamento.getId()+"",execute);
	
	}


	public  void remove(Rastreamento item){
		
		
		ExecuteSearch execute = threads.get(item.getId()+"");
		
		if(execute !=null){
		
		    execute.parar();
			threads.remove(item.getId()+"");
		}
		
		
	}
	
}
