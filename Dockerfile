FROM php:8.3-cli-alpine

WORKDIR /var/www/html

# Install paket sistem yang dibutuhkan, TERMASUK development headers
RUN apk add --no-cache \
        libpng-dev \
        libjpeg-turbo-dev \
        freetype-dev \
        libzip-dev \
        zip \
        unzip \
        icu-dev \
        gmp-dev \
        libxslt-dev \
        curl-dev # Untuk ekstensi curl

# Install ekstensi PHP yang WAJIB dan OPTIONAL sesuai rekomendasi CI4
RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) \
        intl \
        mbstring \
        json \
        gd \
        pdo \
        pdo_mysql \
        zip \
        xsl \
        gmp \
        curl

# Copy project CI4
COPY . .

# Set permission yang benar (penting untuk writable directory)
RUN chown -R www-data:www-data /var/www/html/writable

# Expose port yang akan digunakan
EXPOSE 8080

# Jalankan php spark serve
CMD ["php", "spark", "serve", "--host", "0.0.0.0", "--port", "8080"]