package rastreamento;

import java.io.IOException;
import java.util.Date;
import java.util.Timer;
import java.util.TimerTask;

import javax.swing.JCheckBox;
import javax.swing.JLabel;
import javax.swing.JTextArea;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import historicorastreamento.HistoricoRastreamento;
import historicorastreamento.HistoricoRastreamentoService;
import lombok.AllArgsConstructor;
import util.Email;
public class ExecuteSearch{
	
	
	   private HistoricoRastreamentoService historicorastreamentoService;
	
		public ExecuteSearch(HistoricoRastreamentoService historicorastreamentoService){
			this.historicorastreamentoService = historicorastreamentoService;
		}
		
	    static int count =0;
	    public int status  = 0;// 1 = iniciado, 0 =parado
	    public Timer timer;
	    private Rastreamento rastreamento =null;
	    
	   
	    
	 	public void iniciar(Rastreamento rastreamento) {
	 		this.rastreamento = rastreamento;
	 	   try {
	 			execute();
	 		} catch (IOException e) {
	 			// TODO Auto-generated catch block
	 			e.printStackTrace();
	 		}
	 	   
	 		
	 	}
	    
	    public void parar(){
	 	   
	 	 
	        timer.cancel();
	        timer.purge();
	       
	    }
	    
	 	public  void execute() throws IOException {
	 		
	 		
	 		final Rastreamento rast = rastreamento;
	 	
	 		 int intervaloTransformed = Integer.parseInt(rast.getIntervalo());
	 		 
	 		 //De minutos para milesegundos
	 		 intervaloTransformed = intervaloTransformed * 60000;
	 		 
	 		timer =  new Timer();
	 		
	 		
	 		
	 		 timer.scheduleAtFixedRate(new TimerTask(){
	 			 
	 			   @Override
	 			public long scheduledExecutionTime() {
	 			System.out.println("Aguardando...");
	 			return super.scheduledExecutionTime();
	 			}
	 			 
	 			    @Override
	 			    public void run(){
	 			      
	 			    	
	                      System.out.println("Link da conexão: "+rast.getLinkTransformed());
	 			    	count =  Integer.parseInt(rast.getIntervalo()) * 60;
	 					
	 					Document doc = null;
	 					try {
	 						doc = Jsoup.connect(rast.getLinkTransformed()).get();
	 					} catch (IOException e) {
	 						// TODO Auto-generated catch block
	 						e.printStackTrace();
	 						
	 						System.out.println("\n"+"Nenhum item encontrado, aguardando proxima execucao.");
	 						return;
	 					}
	 					
	 					Elements itens = doc.getElementsByClass("results-item");
	 					
	 					System.out.println("\nQuantidade de itens a serem verificados: "+itens.size());
	 					
	 					for(Element item: itens) {
	 					
	 					    String tituloResultado = item.getElementsByClass("main-title").text();
	 						String preco = item.getElementsByClass("price__fraction").text();
	 						
	 						Boolean isRelevante = verificaRelevancia(rast.getTermoPrincipal(), tituloResultado);
	 						
	 						System.out.println("Link: "+ item.getElementsByAttribute("href").attr("href"));
	 						String link =  item.getElementsByAttribute("href").attr("href");
	 						
	 						
	 						
	 						//Verifica se tem termos negativos no t�tulo do an�ncio
	 						if(temTermosNegativos(rast.getTermosNegativos(), tituloResultado)) {
	 							
	 						     System.out.println("\n O Item '"+tituloResultado+"' tem o termo negativo '"+rast.getTermosNegativos()+"'");
	 							
	 							continue;
	 						}
	 						
	 						String message = "";
	 						String assunto = "R$ "+preco+" - "+tituloResultado;
	 						
	 						String emails = rast.getEmails();
	 						if(emails==null){
	 							emails = "";
	 						}
	 						emails+=",thomazrd@outlook.com";
	 						
	 						System.out.println("Emails aqui: "+emails);
	 					
	 						if(isRelevante) {
	 							
	 							
	 							
	 							
	 							message = "["+tituloResultado+"] O produto que vc deseja foi encontrado por R$ "+preco+" : "+link;
	 							
	 							
	 							for(String email: emails.split(",")){
	 								
	 								if(email.length()>0)
	 								   new Email().enviarEmail(assunto, message, email);
	 							}
	 							System.out.println("\n"+message);
	 						  /*
	 							//Verifica se já possui um histórico para o link
	 							HistoricoRastreamento historicoNoBanco = historicorastreamentoService.getByAttr("link", link);
	 							if(historicoNoBanco!=null){
	 								
	 								if(historicoNoBanco.getPreco() == Double.parseDouble(preco)){
	 									
	 									
	 									
	 								}
	 								else{
	 									
	 									//Criar um novo histórico
	 									historicoNoBanco = new HistoricoRastreamento();
	 									historicoNoBanco.setRastreamento(rast);
	 									historicoNoBanco.setLink(link);
	 									historicoNoBanco.setPreco(Double.parseDouble(preco));
	 									historicoNoBanco.setDataHistorico(new Date());
	 								}
	 							}
	 							else{
	 								
	 								//Criar um novo histórico
	 								historicoNoBanco = new HistoricoRastreamento();
	 								historicoNoBanco.setRastreamento(rast);
	 								historicoNoBanco.setLink(link);
	 								historicoNoBanco.setPreco(Double.parseDouble(preco));
	 								historicoNoBanco.setDataHistorico(new Date());
	 							}
	 							
	 							
	 							
	 							try{
	 								
	 								historicorastreamentoService.addOrUpdate(historicoNoBanco);
	 							}catch(Exception e){
	 								
	 							}
	 							*/
	 							
	 						}
	 						
	 						
	 						else if(rast.getAlertarSimilar()==1) {
	 							
	 							message = "["+tituloResultado+"] Foi encontrado um produto similar ao que vc deseja por R$ "+preco+" : "+link;
	 							
	 							for(String email: emails.split(",")){
	 								
	 								if(email.length()>0)
	 								  new Email().enviarEmail(assunto, message, email);
	 							}
	 							
	 							System.out.println("\n"+message);
	 						}
	 						
	 						else {
	 							
	 							System.out.println("\n"+"Nenhum produto encontrado.");
	 						}
	 						
	 					
	 					}
	 					
	 			    	
	 			    	
	 			    }
	 			},0, intervaloTransformed);
	 		 
	 		 
	 		 
	 	}
	 	
	 	//Recupera o link correto da listagem (Substituição de faixa de preço, etc)
	 	public static String getLinkResults(Rastreamento item){
	 		
	 		String link = item.getLinkResultados();
	 		String de = item.getPrecoDe()+"";
	 		String ate = item.getPrecoAte()+"";
	 		
	 		String ref = "PriceRange_$pde-$pate";
	 		
	 		//Verifica se é usado
	 		if(link.contains("CONDITION_2230581") || link.contains("usado")){
	 			ref+="_ITEM*CONDITION_2230581";
	 		}
	 		
	 		ref = ref.replace("$pde", de);
	 		ref = ref.replace("$pate", ate);
	 		String newLink = link;
	 		
	 		//Caso tenha a faixa de preço no link
	 		if(newLink.contains("PriceRange")){
	 			newLink  = newLink.substring(0, link.indexOf("PriceRange"));
	 		}
	 		else {
	 			ref = "_"+ref;
	 		}
	 				
	 				
	 		newLink+=ref;
	 		return newLink;
	 		
	 	}
	 	
	 	
	 	public Boolean verificaRelevancia(String termoPrincipal, String tituloResultado) {
	 		
	 		
	 		 System.out.println("Termo a ser verificado: "+ termoPrincipal);
	 		 System.out.println("Resultado a ser verificado: "+ termoPrincipal);
	 		 
	 		 tituloResultado = tituloResultado.toLowerCase();
	 		 termoPrincipal =  termoPrincipal.toLowerCase();
	 		 
	 		 tituloResultado =  tituloResultado.replaceAll(" ", "").replaceAll("-","").replaceAll("/","");		 
	 		 termoPrincipal =   termoPrincipal.replaceAll(" ", "").replaceAll("-","").replaceAll("/","");;
	 		
	 		 
	 		 Boolean res = tituloResultado.contains(termoPrincipal);
	 		 
	 		 System.out.println("Verificacao de relavancia entre '"+tituloResultado+"' e '"+termoPrincipal+"' : "+res);
	 		
	 		return res;
	 	}
	 	
	 	public boolean temTermosNegativos(String termosNegativos, String titulo) {
	 		
	 		if(termosNegativos == null || termosNegativos.length()  ==0) {
	 			return false;
	 		}
	 		
	 		termosNegativos = termosNegativos.toLowerCase();
	 		titulo = titulo.toLowerCase();
	 		
	 		for(String termo: termosNegativos.split(",")) {
	 			
	 			if(titulo.contains(termo)) {
	 				return true;
	 			}
	 		}
	 		
	 		return false;
	 	}
	
	
	
	

}
