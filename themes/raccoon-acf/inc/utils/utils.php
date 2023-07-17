<?php

require 'data_functions.php';
require 'most_view.php';

//[Opcional] Remove a página de feed redirecionando ela para o post ( Usar quando blog não for ter comentários)
function turn_off_feed()
{
	$uri = str_replace('feed/', '', $_SERVER['REQUEST_URI']);
	$url = $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] . $uri;
	header('Location: ' . $url, true, 301);
}

add_action('do_feed', 'turn_off_feed', 1);
add_action('do_feed_rdf', 'turn_off_feed', 1);
add_action('do_feed_rss', 'turn_off_feed', 1);
add_action('do_feed_rss2', 'turn_off_feed', 1);
add_action('do_feed_atom', 'turn_off_feed', 1);
add_action('do_feed_rss2_comments', 'turn_off_feed', 1);
add_action('do_feed_atom_comments', 'turn_off_feed', 1);
