package com.example.GatewayApi;


import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SpringCloudConfig {



    @Bean
    public RouteLocator gatewayRoutes(RouteLocatorBuilder builder) {

        return builder.routes()

                .route("candidates", r -> r.path("/candidats/**").uri("http://candidate:8082"))
                .route("resources", r -> r.path("/resources/**").uri("http://resource:8083"))
                .build();



    }
}