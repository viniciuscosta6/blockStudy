<?php
function raccoon_theme_register_taxonomies()
{
	$custom_taxonomy_label = 'Modelo';
	$custom_post_type_name = 'model';
	$custom_taxonomy_name = 'model';

	foreach ($post_types as $custom_post_type) {
		$post_type_labels = [
			'name' => 'Tipos de post em ' . $custom_taxonomy_label,
			'singular_name' => 'Tipo de post em' . $custom_taxonomy_label,
			'search_items' => 'Procurar tipo de post em' . $custom_taxonomy_label,
			'all_items' => 'Todos os tipos de post em ' . $custom_taxonomy_label,
			'edit_item' => 'Editar',
			'update_item' => 'Atualizar',
			'add_new_item' => 'Adicionar novo tipo de post em ' . $custom_taxonomy_label,
			'new_item_name' => 'Nome da nova categoria',
			'menu_name' => 'Tipo de post em ' . $custom_taxonomy_label,
		];

		register_taxonomy(
			'post_type_' . $custom_post_type,
			[$custom_post_type],
			[
				'labels' => $post_type_labels,
				'hierarchical' => true,
				'show_in_rest' => true,
				'rewrite' => ['slug' => 'tipo-de-post-' . $custom_post_type],
				'capabilities' => [
					'manage_terms' => 'administrator',
					'edit_terms' => 'administrator',
					'delete_terms' => 'administrator',
					'assign_terms' => 'edit_posts',
				],
			]
		);

		$category_labels = [
			'name' => 'Categorias em ' . $custom_post_type,
			'singular_name' => 'Categoria em' . $custom_post_type,
			'search_items' => 'Procurar Categoria em' . $custom_post_type,
			'all_items' => 'Todos as categorias em ' . $custom_post_type,
			'edit_item' => 'Editar',
			'update_item' => 'Atualizar',
			'add_new_item' => 'Adicionar nova categoria em ' . $custom_post_type,
			'new_item_name' => 'Nome da nova categoria',
			'menu_name' => 'Categorias em ' . $custom_post_type,
		];

		register_taxonomy(
			'category_' . $custom_post_type,
			[$custom_post_type],
			[
				'labels' => $category_labels,
				'hierarchical' => true,
				'show_in_rest' => true,
				'rewrite' => ['slug' => 'categorias-' . $custom_post_type],
			]
		);

		$tag_labels = [
			'name' => 'Tags',
			'singular_name' => 'Tag',
			'search_items' => 'Procurar tag',
			'all_items' => 'Todos as tags',
			'edit_item' => 'Editar',
			'update_item' => 'Atualizar',
			'add_new_item' => 'Adicionar nova tag',
			'new_item_name' => 'Nome da nova tag',
			'menu_name' => 'Tags',
		];

		register_taxonomy(
			'tag_' . $custom_post_type,
			[$custom_post_type],
			[
				'labels' => $tag_labels,
				'hierarchical' => false,
				'show_in_rest' => true,
				'rewrite' => ['slug' => 'tags'],
			]
		);
	}
}

add_action('init', 'raccoon_theme_register_taxonomies', 0);
