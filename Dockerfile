FROM wordpress:apache

# Install linux utilities packages (uncomment line)
RUN apt update && apt install -y nano python3-certbot-apache zip unzip

# PHP extensions
RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli

# Install NVM (Node.js)
ENV NODE_VERSION=18.7.0
RUN apt install -y curl
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
ENV NVM_DIR=/root/.nvm
RUN . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm use v${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION}
ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"
RUN node --version
RUN npm --version

# Install yarn
RUN npm install --global yarn

# Install composer
COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

# Enable apache2 mods
RUN a2enmod ssl
RUN a2enmod headers
RUN a2enmod http2

# Install Wordpress via composer
COPY configs/wordpress/composer.json /var/www/html/composer.json
RUN cd /var/www/html && composer install

# Copy WP configs files
COPY configs /configs

# Overwrite php.ini
COPY configs/php/php.ini /usr/local/etc/php/php.ini

# Overwrite apache config
COPY configs/apache2/local.conf /etc/apache2/sites-available/000-default.conf

# Overwrite entrypoint
COPY configs/docker/docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod 777 /usr/local/bin/docker-entrypoint.sh

ENTRYPOINT ["docker-entrypoint.sh"]
