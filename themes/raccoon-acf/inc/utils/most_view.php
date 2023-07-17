<?php

/* Função para contar visitas nos posts */

function wpb_set_post_views($postID)
{
	$count_key = 'wpb_post_views_count';
	$count = get_post_meta($postID, $count_key, true);
	if ($count == '') {
		$count = 0;
		delete_post_meta($postID, $count_key);
		add_post_meta($postID, $count_key, '0');
	} else {
		$count++;
		update_post_meta($postID, $count_key, $count);
	}
}

//To keep the count accurate, lets get rid of prefetching
remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0);

// Contar visitas
function wpb_track_post_views($post_id)
{
	if (!is_single()) {
		return;
	}
	if (empty($post_id)) {
		global $post;
		$post_id = $post->ID;
	}
	wpb_set_post_views($post_id);
}

add_action('wp_head', 'wpb_track_post_views');

// [Opcional] Categoria popular

function raccoon_theme_get_popular_categories()
{
	$args = [
		'taxonomy' => 'category',
		'orderby' => 'meta_value_num',
		'hide_empty' => false,
		'order' => 'DESC',
		'meta_key' => 'raccoon_theme_category_view_count',
		'number' => 4,
	];

	$current_category = get_queried_object();
	if ($current_category) {
		$id_current_category = $current_category->term_id;
		$args['exclude'] = $id_current_category;
	}

	$subcategories = get_terms($args);

	return $subcategories;
}

function raccoon_theme_set_category_views($category_id)
{
	$count_key = 'raccoon_theme_category_view_count';
	$count = get_term_meta($category_id, $count_key, true);

	if ($count == '') {
		add_term_meta($category_id, $count_key, '0');
	} else {
		$count = intval($count);
		$count++;
		update_term_meta($category_id, $count_key, $count);
	}
}

function raccoon_theme_track_category_views()
{
	if (is_tax('category')) {
		$queried_object = get_queried_object();
		$category_id = $queried_object->term_id;
		raccoon_theme_set_category_views($category_id);
	}
}

add_action('wp_head', 'raccoon_theme_track_category_views');
