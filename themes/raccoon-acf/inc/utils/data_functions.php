<?php

// [Opcional] Tempo de leitura

function reading_time()
{
	if (get_field('reading_time')) {
		return get_field('reading_time');
	}

	$content = get_post_field('post_content', $post->ID);
	$word_count = str_word_count(strip_tags($content));
	$reading_time = ceil($word_count / 200);

	if ($reading_time == 1) {
		$timer = ' min de leitura';
	} else {
		$timer = ' min de leitura';
	}

	$total_reading_time = $reading_time . $timer;

	return $total_reading_time;
}

// Image sanitize

function image_sanitize($imageId, $thumbnail_size = 'thumbnail')
{
	if ($imageId == '') {
		return null;
	} else {
		$img_default_src = wp_get_attachment_image_src($imageId, $thumbnail_size);
		$img_width = $img_default_src['1'];
		$img_height = $img_default_src['2'];
		$img_default_src = $img_default_src['0'];
		$img_alt = get_post_meta($imageId, '_wp_attachment_image_alt', true);
		$img_title = get_the_title($imageId);

		$image_values = [
			'src' => $img_default_src,
			'width' => $img_width,
			'height' => $img_height,
			'alt' => $img_alt,
			'title' => $img_title,
		];

		return $image_values;
	}
}

// [Opicional] Limitar o tamanho do resumo

function truncate_excerpt($text)
{
	if (strlen($text) > 249):
		$text = mb_substr($text, 0, 250);
		$text .= '...';
	endif;

	return $text;
}

add_filter('get_the_excerpt', 'truncate_excerpt');
