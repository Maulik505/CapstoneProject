FROM java:8-jre
MAINTAINER Maulik Mistri (C0783505) <C0783505@mylambton.ca>

ADD ./target/config.jar /app/
CMD ["java", "-Xmx200m", "-jar", "/app/config.jar"]

HEALTHCHECK --interval=30s --timeout=30s CMD curl -f http://localhost:8888/actuator/health || exit 1

EXPOSE 8888