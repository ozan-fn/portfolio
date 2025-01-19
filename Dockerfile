FROM php:8.3-cli-alpine

WORKDIR /var/www/html

# Install ekstensi PHP yang dibutuhkan oleh CodeIgniter 4
RUN apk add --no-cache \
        libpng-dev \
        libjpeg-turbo-dev \
        freetype-dev \
        libzip-dev \
        zip \
        unzip \
        icu-dev \ # Untuk intl
        gmp-dev \ # Untuk beberapa library
        libxslt-dev # Untuk beberapa library
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) \
        gd \
        pdo \
        pdo_mysql \
        intl \
        zip \
        xsl \
        gmp

# Copy project CI4
COPY . .

# Set permission yang benar (penting untuk writable directory)
RUN chown -R www-data:www-data /var/www/html/writable

# Expose port yang akan digunakan
EXPOSE 8080

# Jalankan php spark serve
CMD ["php", "spark", "serve", "--host", "0.0.0.0", "--port", "8080"]