FROM java:8-jre
MAINTAINER Maulik Mistri (C0783505) <C0783505@mylambton.ca>

ADD ./target/gateway.jar /app/
CMD ["java", "-Xmx200m", "-jar", "/app/gateway.jar"]

EXPOSE 4000