# Base image
FROM php:8.2-fpm-alpine

RUN apk add composer
# Install dependencies and extensions
RUN docker-php-ext-install \
    gd \
    intl \
    opcache \
    pdo \
    pdo_pgsql \
    zip


# Set the working directory
WORKDIR /var/www/html

# Copy application files to the container
COPY . /var/www/html

# Install dependencies using Composer
RUN composer install

# Set permissions
RUN chown -R www-data:www-data /var/www/html

# Expose port 80
EXPOSE 80

# Start PHP-FPM server
CMD ["php-fpm"]
