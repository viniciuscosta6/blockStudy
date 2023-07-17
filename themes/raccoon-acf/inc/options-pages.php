<?php

function raccoon_theme_register_options_page()
{
	if (function_exists('acf_add_options_page')) {
		acf_add_options_page([
			'page_title' => 'Configurações do Blog',
			'menu_title' => 'Configurações do Blog',
			'menu_slug' => 'blog-settings',
			'icon_url' => 'dashicons-admin-settings',
		]);

		acf_add_options_sub_page([
			'page_title' => 'Opções do Header',
			'menu_title' => 'Header',
			'parent_slug' => 'blog-settings',
		]);

		acf_add_options_sub_page([
			'page_title' => 'Opções do Footer',
			'menu_title' => 'Footer',
			'parent_slug' => 'blog-settings',
		]);

		acf_add_options_sub_page([
			'page_title' => 'Opções da Newsletter',
			'menu_title' => 'Newsletter',
			'parent_slug' => 'blog-settings',
		]);

		acf_add_options_sub_page([
			'page_title' => 'Opções de Redes Sociais',
			'menu_title' => 'Redes Sociais',
			'parent_slug' => 'blog-settings',
		]);

		acf_add_options_sub_page([
			'page_title' => 'Opções de Tracking',
			'menu_title' => 'Tracking',
			'parent_slug' => 'blog-settings',
		]);

		acf_add_options_sub_page([
			'page_title' => 'Opções de Categorias Populares',
			'menu_title' => 'Seção de Categorias Populares',
			'parent_slug' => 'blog-settings',
		]);

		acf_add_options_sub_page([
			'page_title' => 'Opções da Seção de Produto',
			'menu_title' => 'Seção de Produto',
			'parent_slug' => 'blog-settings',
		]);

		acf_add_options_sub_page([
			'page_title' => 'Opções da Página 404',
			'menu_title' => 'Página 404',
			'parent_slug' => 'blog-settings',
		]);

		acf_add_options_sub_page([
			'page_title' => 'Opções da Página de Busca',
			'menu_title' => 'Página de Busca',
			'parent_slug' => 'blog-settings',
		]);
	}
}

add_action('after_setup_theme', 'raccoon_theme_register_options_page');
