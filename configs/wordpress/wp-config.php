<?php

// Debug mode, TURN OFF IN PRODUCTION!
define('WP_DEBUG', getenv('WP_DEBUG'));

// Avoid WP too many redirects
define( 'WP_HOME', getenv('SITE_URL') );
define( 'WP_SITEURL', getenv('SITE_URL') );

// Enable W3 Total Cache
define('WP_CACHE', true); // Added by W3 Total Cache

// Database configs
define('DB_NAME', getenv('DB_NAME'));
define('DB_USER', getenv('DB_USER'));
define('DB_PASSWORD', getenv('DB_PASSWORD'));
define('DB_HOST', getenv('DB_HOST') . ":" . getenv('DB_PORT', '3306'));
define('DB_CHARSET', 'utf8mb4');
define('DB_COLLATE', '');

// Allow plugin installation without FTP
define('FS_METHOD', 'direct');

// Fix http to https references
if (array_key_exists('HTTP_X_FORWARDED_PROTO', $_SERVER)) {
	if (strpos($_SERVER['HTTP_X_FORWARDED_PROTO'], 'https') !== false)
		$_SERVER['HTTPS'] = 'on';
	else
		$_SERVER['HTTPS'] = 'off';
}

// ACF Key.
define('ACF_PRO_LICENSE', 'b3JkZXJfaWQ9MTQzOTg1fHR5cGU9ZGV2ZWxvcGVyfGRhdGU9MjAxOC0xMS0wNiAxODozNjo1NQ==');

/**#@+
 * Chaves únicas de autenticação e salts.
 *
 * Altere cada chave para um frase única!
 * Você pode gerá-las
 * usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org
 * secret-key service}
 * Você pode alterá-las a qualquer momento para invalidar quaisquer
 * cookies existentes. Isto irá forçar todos os
 * usuários a fazerem login novamente.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', 'x9s*j/?y!N9 ;|<ktr`Yk~(86N@GPQ;TyfXrXzEVRI., 8beA6i[)D!Rxn:K)<`{');
define('SECURE_AUTH_KEY', ':+ZI)W2_c}$/?h#)x?C@]Z!Eb&X>_/IK9B_&63pxWOW4+4SqknfyB%D2D;/MW(7a');
define('LOGGED_IN_KEY', '56*w;Yxn1z#]?2Nt5|YgFmtljM7o4p#JthL^~{)/8A&1#_az7ad6ZQ6rGsTdCkEu');
define('NONCE_KEY', 'swr4^TTc]A}BS%Qoijv=4|LrQwim}byEr*?mqD;sQd+{%Mi3{Ut|}&1$uDj 4=A%');
define('AUTH_SALT', '4bYws!yswxRvLb(#}VP>Xc.<~yU4)5|,%UmAKMtsv}2&h/roPHI~BgtT2sxk14dg');
define('SECURE_AUTH_SALT', '~p7~<3mbt7Ghg{L6(DvO.j7Q !5&d(k@Er2PW>w-;iRJySG^,#|L[LljgO$aG_JO');
define('LOGGED_IN_SALT', '/!`g{.ZZ*;9;4Q?-}P8@`J}Ns#(5;_-2i. nlhl.4vZk^mt. nb>x8Hwx_MrL90O');
define('NONCE_SALT', '0=e|n%|e<Zmg-,.+U?bk_@D^h@34oXK++8t;u5%GDGAM.O.lWkWn>5+fHKk<n!)h');

/**#@-*/

/**
 * Prefixo da tabela do banco de dados do WordPress.
 *
 * Você pode ter várias instalações em um único banco de dados se você der
 * um prefixo único para cada um. Somente números, letras e sublinhados!
 */
$table_prefix = 'wp_';

/** Caminho absoluto para o diretório WordPress. */
if (!defined('ABSPATH')) {
	define('ABSPATH', __DIR__ . '/');
}

/** Configura as variáveis e arquivos do WordPress. */
require_once ABSPATH . 'wp-settings.php';