<?php
/**
 * Register theme menus.
 */
function register_menus()
{
	register_nav_menus([
		"header-menu" => "Cabeçalho",
		"footer-menu" => "Rodapé",
	]);
}
add_action("init", "register_menus");

/**
 * Allow SVG and Webp uploads.
 */
function cc_mime_types($mimes)
{
	$mimes["svg"] = "image/svg+xml";
	$mimes["webp"] = "image/webp";
	return $mimes;
}
add_filter("upload_mimes", "cc_mime_types");

/**
 * Get style.css version and add as query string to renew cache.
 * @param string $src source url
 * @return string new source with version
 */
function update_css_and_js_version($src)
{
	$version = wp_get_theme()->get("Version");
	$src = add_query_arg("ver", $version, $src);
	return esc_url($src);
}

/**
 * Force update cache changing version at style.css
 */
function update_version()
{
	add_filter("style_loader_src", "update_css_and_js_version", 9999);
	add_filter("script_loader_src", "update_css_and_js_version", 9999);
}
add_action("init", "update_version");

/**
 * Disable the emoji's
 */
function disable_emojis()
{
	remove_action('wp_head', 'print_emoji_detection_script', 7);
	remove_action('admin_print_scripts', 'print_emoji_detection_script');
	remove_action('wp_print_styles', 'print_emoji_styles');
	remove_action('admin_print_styles', 'print_emoji_styles');
	remove_filter('the_content_feed', 'wp_staticize_emoji');
	remove_filter('comment_text_rss', 'wp_staticize_emoji');
	remove_filter('wp_mail', 'wp_staticize_emoji_for_email');
	add_filter('tiny_mce_plugins', 'disable_emojis_tinymce');
	add_filter('wp_resource_hints', 'disable_emojis_remove_dns_prefetch', 10, 2);
}
add_action('init', 'disable_emojis');

/**
 * Filter function used to remove the tinymce emoji plugin.
 *
 * @param array $plugins
 * @return array Difference betwen the two arrays
 */
function disable_emojis_tinymce($plugins)
{
	if (is_array($plugins)) {
		return array_diff($plugins, array('wpemoji'));
	} else {
		return array();
	}
}

/**
 * Remove emoji CDN hostname from DNS prefetching hints.
 *
 * @param array $urls URLs to print for resource hints.
 * @param string $relation_type The relation type the URLs are printed for.
 * @return array Difference betwen the two arrays.
 */
function disable_emojis_remove_dns_prefetch($urls, $relation_type)
{
	if ('dns-prefetch' == $relation_type) {
		/** This filter is documented in wp-includes/formatting.php */
		$emoji_svg_url = apply_filters('emoji_svg_url', 'https://s.w.org/images/core/emoji/2/svg/');

		$urls = array_diff($urls, array($emoji_svg_url));
	}

	return $urls;
}