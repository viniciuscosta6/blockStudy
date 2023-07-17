<?php

function raccoon_theme_theme()
{
	wp_enqueue_style('common-theme', get_template_directory_uri() . '/assets/css/common/common.css');
	wp_enqueue_style('header', get_template_directory_uri() . '/assets/css/common/header.css');
	wp_enqueue_style('footer', get_template_directory_uri() . '/assets/css/common/footer.css');
	wp_enqueue_script('header-js1', get_template_directory_uri() . '/assets/js/common/header.js', [], false, true);
	// wp_enqueue_script( 'newsletter-js', get_template_directory_uri().'/assets/js/common/newsletter.js', array(), false, true );
	// wp_enqueue_script( 'navbar-js', get_template_directory_uri().'/assets/js/common/navbar.js', array(), false, true );

	// Filtrar por página
	// Ex:

	// Home
	// if(is_front_page){}

	// Page template
	// if(is_page_template( '[template-name].php' )){}

	// Pots
	// if(in_single()){}

	// Custom posts type
	// if(is_singular('[post-type-name]')){}

	// 404
	if (is_404()) {
		wp_enqueue_style('404', get_template_directory_uri() . '/assets/css/pages/404.css');
	}

	// Archive
	// if(is_archive()){}
}

add_action('wp_enqueue_scripts', 'raccoon_theme_theme');

function raccoon_theme_setup()
{
	add_theme_support('title-tag');
	add_theme_support('post-thumbnails');
	add_theme_support('custom-logo');
}

add_action('after_setup_theme', 'raccoon_theme_setup');

function raccoon_theme_register_menus()
{
	register_nav_menus([
		'header-menu' => 'Header Menu',
		'footer-menu' => 'Footer Menu',
	]);
}

add_action('init', 'raccoon_theme_register_menus');

/* Permitir enviar SVG */
function cc_mime_types($mimes)
{
	$mimes['svg'] = 'image/svg+xml';
	return $mimes;
}

add_filter('upload_mimes', 'cc_mime_types');

/* Permitir enviar webp */
function webp_upload_mimes($existing_mimes)
{
	$existing_mimes['webp'] = 'image/webp';
	return $existing_mimes;
}
add_filter('mime_types', 'webp_upload_mimes');

// Import functions

require 'inc/utils/utils.php';
require 'inc/options-pages.php';
require 'inc/ajax.php';

//[Opicional]
require 'inc/custom-post-type/rich-material.php';
