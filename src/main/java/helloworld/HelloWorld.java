package helloworld;
import javax.persistence.Entity;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import com.fasterxml.jackson.annotation.JsonView;
import com.siertech.stapi.crud.CrudClass;

@Entity
@Table(name = "helloworld")
@Getter @Setter
public  class HelloWorld extends CrudClass {

	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String descricao;
	

}
