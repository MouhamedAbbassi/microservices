FROM eclipse-temurin:17-jdk-alpine
VOLUME /tmp
ARG JAR_FILE
EXPOSE 8088
COPY target/Reclamations-0.0.1-SNAPSHOT.jar Reclamations-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","Reclamations-0.0.1-SNAPSHOT.jar"]