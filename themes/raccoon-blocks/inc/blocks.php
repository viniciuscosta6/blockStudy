<?php
require_once('JSXBlock.php');

// Register Raccoon.Monks blocks
$GLOBALS['theme_blocks'] = [
	"atoms" => ["rm/section", "rm/button", "rm/heading", "rm/typography", "rm/timeline-event", "rm/timeline-separator"],
	"cells" => ["rm/header", "rm/hero", "rm/big-numbers", "rm/benefits", "rm/timeline"],
	"organisms" => ["rm/lp"],
];

/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which runs
 * before the init hook.
 */
function setup()
{
	// Add support for block styles.
	add_theme_support("wp-block-styles");

	// Add support for WP editor
	add_theme_support("editor-styles");

	// Enqueue frontend styles
	wp_enqueue_style("global-css", get_theme_file_uri("/build/index/style-index.css"));

	$editor_styles = [];
	foreach ($GLOBALS['theme_blocks'] as $category => $blocks) {
		foreach ($blocks as $block) {
			$GLOBALS["allowed_blocks"][] = $block;

			$name = substr($block, 3); // remove "rm/" from name

			new JSXBlock($category, $name);
			$editor_styles[] = "/build/blocks/$category/$name/style-index.css";
			$editor_styles[] = "/src/blocks/$category/$name/editor.css";
		}
	}

	// Enqueue editor styles
	add_editor_style(array_merge($editor_styles, [
		"https://fonts.googleapis.com/css2?family=Nunito+Sans&family=Space+Grotesk:wght@400;600&display=swap",
		"/build/index/style-index.css",
	]));
}
add_action("init", "setup");

/**
 * Change blocks allowed in page/post editor and full site editor.
 * @param array $allowed_block_types list of block types
 * @param object $editor_context
 * @return array of allowed blocks
 */
function allowed_blocks($allowed_block_types, $editor_context)
{
	// page/post editor
	if (!empty($editor_context->post)) {
		return $allowed_block_types;
	}

	// full site editor screen
	return $GLOBALS["allowed_blocks"];
}
add_filter("allowed_block_types_all", "allowed_blocks", 10, 2);

/**
 * Adding a new block categories.
 * @param string WP filter
 * @param array Filter function
 */
add_filter("block_categories_all", function ($categories) {
	$custom_categories = [];
	$custom_categories[] = [
		"slug" => "atoms",
		"title" => "Atomos",
	];

	$custom_categories[] = [
		"slug" => "cells",
		"title" => "Células",
	];

	$custom_categories[] = [
		"slug" => "organisms",
		"title" => "Organismos",
	];

	array_unshift($categories, ...$custom_categories);

	return $categories;
});
