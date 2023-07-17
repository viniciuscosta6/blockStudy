<?php
if (!function_exists('get_field')) {
	die('Ative o plugin ACF');
} ?>

<!DOCTYPE html>
<html <?= get_language_attributes() ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>" />
	<meta name="viewport" content="width=device-width,initial-scale=1">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <header class="header padding-container">
        <div class="logo">
            <?php
            $custom_logo_id = get_theme_mod('custom_logo');
            $logo = image_sanitize($custom_logo_id, $thumbnail_size = 'thumbnail');
            ?>
            <?php if (is_front_page()): ?><h1><?php endif; ?>
                <a class='title' href="<?= esc_url(home_url('/')) ?>" rel="home">
                    <?php if (get_field('logo-header-svg')): ?>
                        <?= get_field('logo-header-svg') ?>
                    <?php else: ?>
                        <img src='<?= $logo['src'] ?>' alt='<?= $logo['alt'] ?>' title='<?= $logo[
	'title'
] ?>' width='<?= $logo['width'] ?>' height='<?= $logo['height'] ?>'>
                    <?php endif; ?>
                </a>
            <?php if (is_front_page()): ?></h1><?php endif; ?>

        </div>
        <div class='menu-container'>
            <span class='close-menu-mobile mobile'>
                <svg aria-label="Fechar Menu" viewBox="0 0 32 32" ><defs><style>.cls-1{fill:none;stroke:#333;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style></defs><title/><g id="cross"><line class="cls-1" x1="7" x2="25" y1="7" y2="25"/><line class="cls-1" x1="7" x2="25" y1="25" y2="7"/></g></svg>
            </span>
            <?php wp_nav_menu([
            	'menu' => 'header-menu',
            	'menu_class' => 'header-menu',
            	'theme_location' => 'header-menu',
            	'container' => 'nav',
            ]); ?>

            <?php if (get_field('header-cta', 'option') && get_field('header-cta', 'option')['show']): ?>
            <a  class="cta-btn header-cta-ga" <?= get_field('header-cta', 'option')['target']
            	? 'target="_blank" rel="noopener"'
            	: '' ?> href="<?= get_field('header-cta', 'option')['url'] ?>"><?= get_field('header-cta', 'option')[
	'text'
] ?></a>
            <?php endif; ?>

        </div>

        <div class="toggle-menu mobile" aria-label="Abrir e Fechar Menu" role="button" tabindex="0">
            <span class="menu-part"></span>
            <span class="menu-part"></span>
            <span class="menu-part"></span>
        </div>

    </header>

    <main>
