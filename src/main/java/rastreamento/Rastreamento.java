package rastreamento;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import com.fasterxml.jackson.annotation.JsonView;
import com.siertech.stapi.crud.CrudClass;
import com.siertech.stapi.util.Views;

import imovel.Imovel;

@Entity
@Table(name = "rastreamento")
@Getter @Setter
public  class Rastreamento extends CrudClass {

	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String titulo;
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private double precoDe;
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private double precoAte;
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String emails;
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String linkTransformed;
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String termoPrincipal;
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String termosNegativos;
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String linkResultados;
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String intervalo;
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private int alertarSimilar;
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private int statusExecucao;
	
	
	


}
