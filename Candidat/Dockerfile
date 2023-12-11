FROM eclipse-temurin:17-jdk-alpine
VOLUME /tmp
ARG JAR_FILE
EXPOSE 8082
COPY target/Candidate-0.0.1-SNAPSHOT.jar Candidate-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","Candidate-0.0.1-SNAPSHOT.jar"]