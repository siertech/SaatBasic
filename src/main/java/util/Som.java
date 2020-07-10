package util;

import java.io.File;
import java.net.URL;

import javax.sound.sampled.AudioFormat;
import javax.sound.sampled.AudioSystem;
import javax.sound.sampled.AudioInputStream;
import javax.sound.sampled.Clip;
import javax.sound.sampled.DataLine;
import javax.sound.sampled.LineUnavailableException;
import javax.sound.sampled.Mixer;
import javax.swing.SwingUtilities;

import com.lowagie.text.pdf.codec.Base64.InputStream;

public class Som {

     
    public static void play() throws Exception {
    	 // Carrega o arquivo de áudio (não funciona com .mp3, só .wav) 
        
    	try {
    	    Clip clip = AudioSystem.getClip();
    	    AudioInputStream inputStream = AudioSystem.getAudioInputStream(
    	     Som.class.getResourceAsStream("/alert.wav"));
    	    
    	    clip.open(inputStream);
    	    clip.start(); 
    	   } catch (Exception e) {
    	    System.err.println(e.getMessage());
    	   }
    }
}

