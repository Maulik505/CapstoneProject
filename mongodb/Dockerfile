FROM mongo:3
MAINTAINER  Maulik Mistri (C0783505) <C0783505@mylambton.ca>

ADD init.sh /init.sh
ADD demo /

RUN \
 chmod +x /init.sh && \
 apt-get update && apt-get dist-upgrade -y --force-yes && \
 apt-get install psmisc -y -q && \
 apt-get autoremove -y && apt-get clean && \
 rm -rf /var/cache/* && rm -rf /var/lib/apt/lists/*

ENTRYPOINT ["/init.sh"]