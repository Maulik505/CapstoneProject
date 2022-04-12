FROM java:8-jre
MAINTAINER Maulik Mistri (C0783505) <C0783505@mylambton.ca>

ADD ./target/registry.jar /app/
CMD ["java", "-Xmx200m", "-jar", "/app/registry.jar"]

EXPOSE 8761