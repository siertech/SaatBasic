package imovel;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.Getter;
import lombok.Setter;

import com.fasterxml.jackson.annotation.JsonView;
import com.siertech.stapi.crud.CrudClass;

@Entity
@Table(name = "imovel")
@Getter @Setter
public  class Imovel extends CrudClass {
	
	
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String codigoCef;
	
	
	@GeneratedValue(strategy = GenerationType.AUTO)
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private long idimovel;
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String descricao;
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private double preco;
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private double precoAvaliacao;
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String uf;
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String cidade;
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String bairro;
	
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String endereco;
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String ocupacao;
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String status;
	
	@Temporal(TemporalType.TIMESTAMP)
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private Date dataIncluscao;
	
	@Temporal(TemporalType.TIMESTAMP)
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private Date dataAtualizacao;
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private int item;
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String tipoVenda;
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private char fgts;
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private char financiamento;
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private char parcelamento;
	
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private char matricula;
	

}
