package historicorastreamento;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.Getter;
import lombok.Setter;
import rastreamento.Rastreamento;

import com.fasterxml.jackson.annotation.JsonView;
import com.siertech.stapi.crud.CrudClass;
import com.siertech.stapi.util.Views;

@Entity
@Table(name = "historicorastreamento")
@Getter @Setter
public  class HistoricoRastreamento extends CrudClass {

	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String link;
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private double preco;
	
	
	@Temporal(TemporalType.TIMESTAMP)
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private Date dataHistorico;

	@ManyToOne
	@JoinColumn(name="historico_rastreamentoid")
    @JsonView(Views.Public.class)
	private  Rastreamento rastreamento;
	
}
