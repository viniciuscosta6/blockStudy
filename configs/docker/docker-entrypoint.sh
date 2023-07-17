#!/usr/bin/env bash

# Apache configs mod rewrite
cp /configs/wordpress/.htaccess /var/www/html/.htaccess
chmod 777 /var/www/html/.htaccess

# Start apache as the main proccess
apache2-foreground
