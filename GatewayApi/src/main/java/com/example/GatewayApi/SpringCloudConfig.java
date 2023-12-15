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
                .route("seances", r->r.path("/seances/**").uri("http://seances:8081/"))
                .route("cours", r->r.path("/cours/**").uri("http://cour:8086/"))
                .route("planification", r->r.path("/planification/**").uri("http://plannings:8087/"))
                .route("reclamations", r->r.path("/reclamations/**").uri("http://reclamation:8088/"))
                .build();



    }
}