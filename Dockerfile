MAINTAINER Aron Gates <agates10@kent.edu>

WORKDIR "/opt"

ADD .docker_build/backend /opt/bin/backend
ADD ./templates /opt/templates
ADD ./static /opt/static

CMD ["/opt/bin/backend"]