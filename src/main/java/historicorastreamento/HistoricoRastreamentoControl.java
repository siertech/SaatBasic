package historicorastreamento;
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
@Secured("IS_AUTHENTICATED_FULLY")
public class HistoricoRastreamentoControl extends GenericControl<HistoricoRastreamento> {
	
	
	@Autowired
	private HistoricoRastreamentoService historicorastreamentoService;
	

	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/historicorastreamento/change-attr-value", method=RequestMethod.GET)
    public AjaxResponse<HistoricoRastreamento> changeAttr(@RequestParam Long  id, @RequestParam String key, @RequestParam String value){
		
		historicorastreamentoService.changeAttr(id, key, value);
		return null;
	}
	
	
	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/historicorastreamento/add/", method=RequestMethod.POST)
    public AjaxResponse<HistoricoRastreamento> addOrUpdate(@RequestBody HistoricoRastreamento item){
		
		return addOrUpdateAndRespond(item);
	}
	
	@Override
	@RequestMapping(value="/historicorastreamento", method=RequestMethod.GET)
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
    public AjaxResponse<HistoricoRastreamento> getAll(){
		
		return this.getAllAndRespond();

	}
	
	//Por id
	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/historicorastreamento/get", method= RequestMethod.GET)
	public AjaxResponse<HistoricoRastreamento> getById(@RequestParam Long id){
		
		
		return getByIdAndRespond(id);
   	
	}
	
	//Atrav s de uma busca
	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/historicorastreamento/busca", method= RequestMethod.GET)
	public AjaxResponse<HistoricoRastreamento> getLike(@RequestParam String propriedade,@RequestParam String query){
		
		return getLikeAndRespond(propriedade,query);
		
	}
	
	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/historicorastreamento/delete/", method=RequestMethod.POST)
    public AjaxResponse<HistoricoRastreamento> delete(@RequestBody long[] ids){
		
		historicorastreamentoService.deleteByIds(ids);
		
		return null;

	}


	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/historicorastreamento/busca/map", method= RequestMethod.GET)
	public AjaxResponse<HistoricoRastreamento> getLikeMap(@RequestParam String[] qs,@RequestParam int pagina,@RequestParam int max,@RequestParam String extra) {
		
		return getLikeMapAndRespond(qs, pagina, max, extra);
	}
	
	
}
