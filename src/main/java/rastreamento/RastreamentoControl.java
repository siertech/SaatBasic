package rastreamento;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import com.fasterxml.jackson.annotation.JsonView;
import com.siertech.stapi.model.GenericControl;
import com.siertech.stapi.util.AjaxResponse;

@Controller
//@Secured("IS_AUTHENTICATED_FULLY")
public class RastreamentoControl extends GenericControl<Rastreamento> {
	
	
	@Autowired
	private RastreamentoService rastreamentoService;
	
	
	//Lista de threads de execução ativas
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/rastreamento/threads-ativas", method=RequestMethod.GET)
    public String getThreadsAtivas(){
		
		return rastreamentoService.getThreadsAtivas();
		
	}
	

	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/rastreamento/change-attr-value", method=RequestMethod.GET)
    public AjaxResponse<Rastreamento> changeAttr(@RequestParam Long  id, @RequestParam String key, @RequestParam String value){
		
		rastreamentoService.changeAttr(id, key, value);
		return null;
	}
	
	
	
	
	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/rastreamento/add/", method=RequestMethod.POST)
    public AjaxResponse<Rastreamento> addOrUpdate(@RequestBody Rastreamento item){
		
		return addOrUpdateAndRespond(item);
	}
	
	@Override
	@RequestMapping(value="/rastreamento", method=RequestMethod.GET)
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
    public AjaxResponse<Rastreamento> getAll(){
		
		return this.getAllAndRespond();

	}
	
	//Por id
	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/rastreamento/get", method= RequestMethod.GET)
	public AjaxResponse<Rastreamento> getById(@RequestParam Long id){
		
		
		return getByIdAndRespond(id);
   	
	}
	
	//Atrav s de uma busca
	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/rastreamento/busca", method= RequestMethod.GET)
	public AjaxResponse<Rastreamento> getLike(@RequestParam String propriedade,@RequestParam String query){
		
		return getLikeAndRespond(propriedade,query);
		
	}
	
	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/rastreamento/delete/", method=RequestMethod.POST)
    public AjaxResponse<Rastreamento> delete(@RequestBody long[] ids){
		
		rastreamentoService.deleteByIds(ids);
		
		return null;

	}


	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/rastreamento/busca/map", method= RequestMethod.GET)
	public AjaxResponse<Rastreamento> getLikeMap(@RequestParam String[] qs,@RequestParam int pagina,@RequestParam int max,@RequestParam String extra) {
		
		return getLikeMapAndRespond(qs, pagina, max, extra);
	}
	
	
}
