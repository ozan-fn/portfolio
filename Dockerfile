# Base image
FROM php:8.1-apache

# Install necessary extensions
RUN apt-get update && apt-get install -y libpq-dev libicu-dev git \
    && docker-php-ext-install pdo pdo_pgsql intl

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set the working directory
WORKDIR /var/www/html

# Copy application files to the container
COPY . /var/www/html

# Install dependencies using Composer
RUN composer install --no-scripts --no-autoloader

# Set permissions
RUN chown -R www-data:www-data /var/www/html \
    && a2enmod rewrite

# Expose port 80
EXPOSE 80

# Start Apache service
CMD ["apache2-foreground"]
