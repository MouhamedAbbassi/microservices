FROM eclipse-temurin:17-jdk-alpine
VOLUME /tmp
ARG JAR_FILE
EXPOSE 8086
COPY target/Cour-0.0.1-SNAPSHOT.jar Cour-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","Cour-0.0.1-SNAPSHOT.jar"]