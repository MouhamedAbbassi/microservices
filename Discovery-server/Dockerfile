FROM eclipse-temurin:17-jdk-alpine
VOLUME /tmp
ARG JAR_FILE
EXPOSE 8761
COPY target/Discovery-server-0.0.1-SNAPSHOT.jar Discovery-server-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","Discovery-server-0.0.1-SNAPSHOT.jar"]