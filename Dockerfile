FROM ghcr.io/onlineberatung/onlineberatung-nginx/onlineberatung-nginx:dockerimage.v.001-main
COPY beratung-hilfe.html /usr/share/nginx/html/
COPY error.400.html /usr/share/nginx/html/
COPY error.401.html /usr/share/nginx/html/
COPY error.404.html /usr/share/nginx/html/
COPY error.500.html /usr/share/nginx/html/
COPY robots.txt /usr/share/nginx/html/
COPY public /usr/share/nginx/html/
COPY src /usr/share/nginx/html/src
COPY static /usr/share/nginx/html/static
COPY under-construction.html /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf
