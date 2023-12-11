FROM eclipse-temurin:17-jdk-alpine
VOLUME /tmp
ARG JAR_FILE
EXPOSE 8085
COPY target/GatewayApi-0.0.1-SNAPSHOT.jar GatewayApi-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","GatewayApi-0.0.1-SNAPSHOT.jar"]