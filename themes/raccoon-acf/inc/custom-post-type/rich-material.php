<?php
// Register Custom Post Type
function custom_post_type_rich_materials()
{
	$labels = [
		'name' => _x('Materiais Ricos', 'Post Type General Name', 'text_domain'),
		'singular_name' => _x('MateriaisRicos', 'Post Type Singular Name', 'text_domain'),
		'menu_name' => __('Materiais Ricos', 'text_domain'),
		'name_admin_bar' => __('Materiais Ricos', 'text_domain'),
		'archives' => __('MateriaisRicos Archives', 'text_domain'),
		'attributes' => __('MateriaisRicos Attributes', 'text_domain'),
		'parent_item_colon' => __('Parent MateriaisRicos:', 'text_domain'),
		'all_items' => __('All Materiais Ricos', 'text_domain'),
		'add_new_item' => __('Add New Materiais Ricos', 'text_domain'),
		'add_new' => __('Add New', 'text_domain'),
		'new_item' => __('New MateriaisRicos', 'text_domain'),
		'edit_item' => __('Edit MateriaisRicos', 'text_domain'),
		'update_item' => __('Update MateriaisRicos', 'text_domain'),
		'view_item' => __('View MateriaisRicos', 'text_domain'),
		'view_items' => __('View MateriaisRicos', 'text_domain'),
		'search_items' => __('Search MateriaisRicos', 'text_domain'),
		'not_found' => __('Not found', 'text_domain'),
		'not_found_in_trash' => __('Not found in Trash', 'text_domain'),
		'featured_image' => __('Featured Image', 'text_domain'),
		'set_featured_image' => __('Set featured image', 'text_domain'),
		'remove_featured_image' => __('Remove featured image', 'text_domain'),
		'use_featured_image' => __('Use as featured image', 'text_domain'),
		'insert_into_item' => __('Insert into item', 'text_domain'),
		'uploaded_to_this_item' => __('Uploaded to this item', 'text_domain'),
		'items_list' => __('Materiais Ricos list', 'text_domain'),
		'items_list_navigation' => __('Materiais Ricos list navigation', 'text_domain'),
		'filter_items_list' => __('Filter items list', 'text_domain'),
	];
	$args = [
		'label' => __('Materiais Ricos', 'text_domain'),
		'description' => __('Materiais Ricos Description', 'text_domain'),
		'labels' => $labels,
		'supports' => ['title', 'author', 'thumbnail', 'excerpt'],
		'hierarchical' => false,
		'public' => true,
		'show_ui' => true,
		'show_in_menu' => true,
		'menu_position' => 5,
		'show_in_admin_bar' => true,
		'show_in_nav_menus' => true,
		'can_export' => true,
		'has_archive' => false,
		'exclude_from_search' => false,
		'publicly_queryable' => true,
		'capability_type' => 'page',
	];
	register_post_type('rich', $args);
}
add_action('init', 'custom_post_type_rich_materials', 0);
