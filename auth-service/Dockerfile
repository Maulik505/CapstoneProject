FROM java:8-jre
MAINTAINER Maulik Mistri (C0783505) <C0783505@mylambton.ca>

ADD ./target/auth-service.jar /app/
CMD ["java", "-Xmx200m", "-jar", "/app/auth-service.jar"]

EXPOSE 6000