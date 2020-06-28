package imovel;
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
public class ImovelControl extends GenericControl<Imovel> {
	
	
	@Autowired
	private ImovelService imovelService;
	

	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/imovel/change-attr-value", method=RequestMethod.GET)
    public AjaxResponse<Imovel> changeAttr(@RequestParam Long  id, @RequestParam String key, @RequestParam String value){
		
		imovelService.changeAttr(id, key, value);
		return null;
	}
	
	
	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/imovel/add/", method=RequestMethod.POST)
    public AjaxResponse<Imovel> addOrUpdate(@RequestBody Imovel item){
		
		return addOrUpdateAndRespond(item);
	}
	
	@Override
	@RequestMapping(value="/imovel", method=RequestMethod.GET)
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
    public AjaxResponse<Imovel> getAll(){
		
		return this.getAllAndRespond();

	}
	
	//Por id
	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/imovel/get", method= RequestMethod.GET)
	public AjaxResponse<Imovel> getById(@RequestParam Long id){
		
		
		return getByIdAndRespond(id);
   	
	}
	
	//Atrav s de uma busca
	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/imovel/busca", method= RequestMethod.GET)
	public AjaxResponse<Imovel> getLike(@RequestParam String propriedade,@RequestParam String query){
		
		return getLikeAndRespond(propriedade,query);
		
	}
	
	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/imovel/delete/", method=RequestMethod.POST)
    public AjaxResponse<Imovel> delete(@RequestBody long[] ids){
		
		imovelService.deleteByIds(ids);
		
		return null;

	}


	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/imovel/busca/map", method= RequestMethod.GET)
	public AjaxResponse<Imovel> getLikeMap(@RequestParam String[] qs,@RequestParam int pagina,@RequestParam int max,@RequestParam String extra) {
		
		return getLikeMapAndRespond(qs, pagina, max, extra);
	}
	
	
}
