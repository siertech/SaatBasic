package resultado;
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
public class ResultadoControl extends GenericControl<Resultado> {
	
	
	@Autowired
	private ResultadoService resultadoService;
	

	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/resultado/change-attr-value", method=RequestMethod.GET)
    public AjaxResponse<Resultado> changeAttr(@RequestParam Long  id, @RequestParam String key, @RequestParam String value){
		
		resultadoService.changeAttr(id, key, value);
		return null;
	}
	
	
	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/resultado/add/", method=RequestMethod.POST)
    public AjaxResponse<Resultado> addOrUpdate(@RequestBody Resultado item){
		
		return addOrUpdateAndRespond(item);
	}
	
	@Override
	@RequestMapping(value="/resultado", method=RequestMethod.GET)
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
    public AjaxResponse<Resultado> getAll(){
		
		return this.getAllAndRespond();

	}
	
	//Por id
	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/resultado/get", method= RequestMethod.GET)
	public AjaxResponse<Resultado> getById(@RequestParam Long id){
		
		
		return getByIdAndRespond(id);
   	
	}
	
	//Atrav s de uma busca
	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/resultado/busca", method= RequestMethod.GET)
	public AjaxResponse<Resultado> getLike(@RequestParam String propriedade,@RequestParam String query){
		
		return getLikeAndRespond(propriedade,query);
		
	}
	
	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/resultado/delete/", method=RequestMethod.POST)
    public AjaxResponse<Resultado> delete(@RequestBody long[] ids){
		
		resultadoService.deleteByIds(ids);
		
		return null;

	}


	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/resultado/busca/map", method= RequestMethod.GET)
	public AjaxResponse<Resultado> getLikeMap(@RequestParam String[] qs,@RequestParam int pagina,@RequestParam int max,@RequestParam String extra) {
		
		return getLikeMapAndRespond(qs, pagina, max, extra);
	}
	
	
}
