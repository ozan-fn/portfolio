# Base image
FROM php:7.4-apache

# Install necessary extensions
RUN apt-get update && apt-get install -y libpq-dev \
    && docker-php-ext-install pdo pdo_pgsql

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set the working directory
WORKDIR /var/www/html

# Copy application files to the container
COPY . /var/www/html

# Install dependencies using Composer
RUN composer install

# Set permissions
RUN chown -R www-data:www-data /var/www/html \
    && a2enmod rewrite

# Expose port 80
EXPOSE 80

# Start Apache service
CMD ["apache2-foreground"]
