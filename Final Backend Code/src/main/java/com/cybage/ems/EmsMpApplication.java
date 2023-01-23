package com.cybage.ems;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.client.RestTemplate;

@EnableJpaRepositories(basePackages="com.cybage.repository")
@SpringBootApplication(scanBasePackages="com.cybage")
@EntityScan(basePackages="com.cybage.model")
public class EmsMpApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmsMpApplication.class, args);
	}
	
	@Bean
	public RestTemplate getRestTemplate()
	{
		return new RestTemplate();
	}

}
