package com.example.courservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class CourServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(CourServiceApplication.class, args);
    }

}
    