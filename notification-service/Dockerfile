FROM java:8-jre
MAINTAINER Maulik Mistri (C0783505) <C0783505@mylambton.ca>

ADD target/notification-service.jar /app/
CMD ["java", "-Xmx200m", "-jar", "/app/notification-service.jar"]

EXPOSE 8000