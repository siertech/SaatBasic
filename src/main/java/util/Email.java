package util;

import java.util.Properties;
import javax.mail.Address;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
 
public class Email
{
  public void enviarEmail(String assunto, String texto , String dest) {
	  
	try {
		Som.play();
	} catch (Exception e1) {
		// TODO Auto-generated catch block
		e1.printStackTrace();
	}  
    Properties props = new Properties();
    /** Par�metros de conex�o com servidor Gmail */
    props.put("mail.smtp.host", "smtp.gmail.com");
    props.put("mail.smtp.socketFactory.port", "465");
    props.put("mail.smtp.socketFactory.class", 
    "javax.net.ssl.SSLSocketFactory");
    props.put("mail.smtp.auth", "true");
    props.put("mail.smtp.port", "465");
 
    Session session = Session.getDefaultInstance(props,
      new javax.mail.Authenticator() {
           protected PasswordAuthentication getPasswordAuthentication() 
           {
                 return new PasswordAuthentication("thomazrdamasceno@gmail.com", 
                 "leghacy123");
           }
      });
 
    /** Ativa Debug para sess�o */
    session.setDebug(true);
 
    try {
 
      Message message = new MimeMessage(session);
      message.setFrom(new InternetAddress("thomazrdamasceno@gmail.com")); 
      //Remetente
 
      Address[] toUser = InternetAddress //Destinat�rio(s)
                 .parse(dest);  
 
      message.setRecipients(Message.RecipientType.TO, toUser);
      message.setSubject(assunto);//Assunto
      message.setText(texto);
      /**M�todo para enviar a mensagem criada*/
      Transport.send(message);
 
      System.out.println("Feito!!!");
 
     } catch (MessagingException e) {
        throw new RuntimeException(e);
    }
  }
}