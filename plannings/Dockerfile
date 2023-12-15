FROM eclipse-temurin:17-jdk-alpine
VOLUME /tmp
ARG JAR_FILE
EXPOSE 8087
COPY target/Plannings-0.0.1-SNAPSHOT.jar Plannings-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","Plannings-0.0.1-SNAPSHOT.jar"]