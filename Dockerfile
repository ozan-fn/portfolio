FROM php:8.1-cli

RUN apt-get update && apt-get upgrade -y
RUN apt-get install -y libicu-dev libpng-dev libzip-dev libpq-dev
RUN docker-php-ext-install intl gd zip pgsql pdo_pgsql pdo
RUN apt-get install -y git

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN rm -rf /tmp/*

WORKDIR /app
COPY . .
RUN composer install

EXPOSE 8080

CMD ["php", "spark", "serve", "--port=8080"]
