package fr.stockflow.projet;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@CrossOrigin(origins = "http://localhost:8080")
public class StockFlowBackApplication implements  WebMvcConfigurer{

	public static void main(String[] args) {
		SpringApplication.run(StockFlowBackApplication.class, args);
	}



}
