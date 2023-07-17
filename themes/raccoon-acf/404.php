<?php
/*
		Template Name: 404
		Template Post Type: page
	*/
get_header(); ?>

<div class="content-404 container">
	<div class="container">
	    <h2 class="section-title"><?= get_field('404-error-type', 'option') ?></h2>
		<p class="section-description"><?= get_field('404-title', 'option') ?></p>
		<p class="page-404-description"><?= get_field('404-description', 'option') ?></p>
		<a class="cta-btn" href="<?= home_url() ?>"><?= get_field('404-button-text', 'option') ?></a>
	</div>
</div>


<?php get_footer(); ?>
