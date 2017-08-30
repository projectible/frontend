MAINTAINER Aron Gates <agates10@kent.edu>

WORKDIR "/opt"

ADD .docker_build/frontend /opt/bin/frontend
ADD ./templates /opt/templates
ADD ./static /opt/static

CMD ["/opt/bin/frontend"]