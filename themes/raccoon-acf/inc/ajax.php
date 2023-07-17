<?php

add_action('wp_ajax_nopriv_filter', 'filter_ajax');
add_action('wp_ajax_filter', 'filter_ajax');

function filter_ajax()
{
	$npost = $_POST['posts_page'];
	$category = $_POST['category'];
	$post_type = $_POST['post_type'];

	if ($post_type == 'todos') {
		$post_type = ['podcast', 'post', 'video', 'conteudos-especiais'];
	}
	$paged = get_query_var('paged') ? get_query_var('paged') : 1;
	$args = [
		'post_type' => $post_type,
		'posts_per_page' => $npost,
		'cat' => $category,
		'post_status' => 'publish',
		'paged' => $paged,
	];

	$ajax_query = new WP_Query($args);
	?>

   <div class="postCards">
    <?php if ($ajax_query->have_posts()) { ?>
      <div class="postCards__side">
        <div class="postCards__content">
            <?php while ($ajax_query->have_posts()):

            	$ajax_query->the_post();
            	$postType = get_post_type();
            	if ($postType == 'post') {
            		$icon = $icon_post . ' ';
            		if (reading_time()) {
            			$consume = reading_time();
            		} else {
            			$consume = '';
            		}
            	} elseif ($postType == 'video') {
            		$icon = $videoIcon . ' ';
            		if (get_field('media-time')) {
            			$consume = get_field('media-time') . ' min. de vídeo';
            		} else {
            			$consume = '';
            		}
            	} elseif ($postType == 'podcast') {
            		$icon = $podcastIcon . ' ';
            		if (get_field('media-time')) {
            			$consume = get_field('media-time') . ' min. de áudio';
            		} else {
            			$consume = '';
            		}
            	}
            	?>
                    <a  class="postCards__card" href="<?= get_the_permalink() ?>">
                        <div class="postCards__card--thumb">
                            <?= the_post_thumbnail() ?>
                        </div>
                        <div class="postCards__card--group">
                         <p class="postCards__card--category">
                              <?= $icon ?><span><?= wp_get_post_terms(get_the_ID(), 'category')[0]->name ?></span></p>
                            <h3 class="postCards__card--title"><?= the_title() ?></h3>
                            <p class="postCards__card--info"><?= get_the_date('d/m/Y') . '  •  ' . $consume ?></p>
                        </div>
                    </a>
            <?php
            endwhile; ?>
        </div>
        <?php get_template_part('template-parts/common/side-banner'); ?>
        <div class="postCards__buttons ">
                    <a class="loadLess--btnAjax" onclick="btnLessAjax()" ><?= $arrowUp_category ?>Recolher tudo</a>
                <?php if ($ajax_query->max_num_pages > 1) { ?>
                    <a class="loadMore--btnAjax" onclick="btnMore_Ajax()"><?= $arrowDown_category ?>Ver mais</a>
                <?php } ?>
        </div>
    </div>

     <?php } else { ?>
        <div class="filter_404">
          <h4>Conteúdo não encontrado</h4>
          <p>Não encontramos nenhuma postagem correspondente aos termos selecionados</p>
        </div>
        <?php } ?>
  </div>

<?php wp_die();
}

/* ============================= Filtro Home =========================== */

add_action('wp_ajax_nopriv_home', 'filter_home');
add_action('wp_ajax_home', 'filter_home');

function filter_home()
{
	$type = $_POST['type'];
	if ($type == 'new') {
		$args = [
			'posts_per_page' => 6,
			'post_status' => 'publish',
			'post_type' => ['podcast', 'post', 'video', 'conteudos-especiais'],
		];
	} elseif ($type == 'trend') {
		$args = [
			'posts_per_page' => 6,
			'post_status' => 'publish',
			'post_type' => ['podcast', 'post', 'video', 'conteudos-especiais'],
			'meta_key' => 'wpb_post_views_count',
			'orderby' => 'meta_value_num',
		];
	}

	$ajaxHome_query = new WP_Query($args);
	?>

    <div class="postCards">
          <div class="postCards__content ">
              <?php while ($ajaxHome_query->have_posts()):

              	$ajaxHome_query->the_post();
              	//get and set icons and time to consume the material.
              	$postType = get_post_type();
              	if ($postType == 'post') {
              		$icon = $icon_post . ' ';
              		if (reading_time()) {
              			$consume = reading_time();
              		} else {
              			$consume = '';
              		}
              	} elseif ($postType == 'video') {
              		$icon = $videoIcon . ' ';
              		if (get_field('media-time')) {
              			$consume = get_field('media-time') . ' min. de vídeo';
              		} else {
              			$consume = '';
              		}
              	} elseif ($postType == 'podcast') {
              		$icon = $podcastIcon . ' ';
              		if (get_field('media-time')) {
              			$consume = get_field('media-time') . ' min. de áudio';
              		} else {
              			$consume = '';
              		}
              	}
              	?>
                      <a  class="postCards__card" href="<?= get_the_permalink() ?>">
                          <div class="postCards__card--thumb">
                              <?= the_post_thumbnail() ?>
                          </div>
                          <div class="postCards__card--group">
                          <p><?= single_cat_title('Currently browsing ') ?></p>
                              <p class="postCards__card--category">
                              <?= $icon ?><span><?= wp_get_post_terms(get_the_ID(), 'category')[0]->name ?></span></p>
                              <h3 class="postCards__card--title"><?= the_title() ?></h3>
                              <p class="postCards__card--info"><?= get_the_date('d/m/Y') . '  •  ' . $consume ?></p>
                          </div>
                      </a>
              <?php
              endwhile; ?>
          </div>
          <?php get_template_part('template-parts/common/side-banner'); ?>
      </div>
  <?php wp_die();
}

/* ============================= Carregar mais (tags) =========================== */

add_action('wp_ajax_nopriv_loadTags', 'loadTags');
add_action('wp_ajax_loadTags', 'loadTags');

function loadTags()
{
	$paged = get_query_var('paged') ? get_query_var('paged') : 1;
	$npost = $_POST['posts_page'];
	$tag_name = $_POST['tag_name'];
	$args = [
		'post_type' => ['podcast', 'post', 'video', 'conteudos-especiais'],
		'posts_per_page' => $npost,
		'post_status' => 'publish',
		'tag' => [$tag_name],
		'paged' => $paged,
	];
	$the_query = new WP_Query($args);
	?>

      <div class="tag__cards">
            <?php while ($the_query->have_posts()):

            	$the_query->the_post();
            	$postType = get_post_type();
            	if ($postType == 'post') {
            		$icon = $icon_post . ' ';
            		if (reading_time()) {
            			$consume = reading_time();
            		} else {
            			$consume = '';
            		}
            	} elseif ($postType == 'video') {
            		$icon = $videoIcon . ' ';
            		if (get_field('media-time')) {
            			$consume = get_field('media-time') . ' min. de vídeo';
            		} else {
            			$consume = '';
            		}
            	} elseif ($postType == 'podcast') {
            		$icon = $podcastIcon . ' ';
            		if (get_field('media-time')) {
            			$consume = get_field('media-time') . ' min. de áudio';
            		} else {
            			$consume = '';
            		}
            	}
            	?>
                    <a href="<?php the_permalink(); ?>">
                        <div class="tag__card">
                            <div class="tag__card--thumb"><?php the_post_thumbnail(); ?></div>
                            <div class="tag__card--group">
                                <p class="tag__card--category"><?= $icon ?><span><?php foreach (
	get_the_category()
	as $category
) {
	echo $category->cat_name . ' ';
} ?> </span></p>
                                <p class="tag__card--title"><?= the_title() ?></p>
                                <p class="tag__card--info"><?= get_the_date('d/m/Y') . '  •  ' . $consume ?></p>
                            </div>
                        </div>
                    </a>
            <?php
            endwhile; ?>
            <div class="tag__buttons">
                <a class="less__tagAjax" onclick="loadLessBtn_tag()"><?= $arrowUp_category ?>Recolher tudo</a>
                <?php if ($the_query->max_num_pages > 1) { ?>
                    <a class="more__tagAjax" onclick="loadMoreBtn_tag()"><?= $arrowDown_category ?>Ver mais</a>
                <?php } ?>
            </div>
      </div>

<?php
}

/* ============================= Filtro Conteúdos Especiais =========================== */

add_action('wp_ajax_nopriv_loadTaxonomy', 'filter_loadTaxonomy');
add_action('wp_ajax_loadTaxonomy', 'filter_loadTaxonomy');

function filter_loadTaxonomy()
{
	$paged = get_query_var('paged') ? get_query_var('paged') : 1;
	$term_id = $_POST['term_id'];
	$nposts = $_POST['nposts'];
	if ($nposts < 6) {
		$nposts = 6;
	}
	if ($term_id == 'all') {
		$args = [
			'posts_per_page' => $nposts,
			'post_status' => 'publish',
			'post_type' => ['conteudos-especiais'],
			'paged' => $paged,
			'taxonomy' => 'tipos',
		];
	} else {
		$args = [
			'posts_per_page' => $nposts,
			'post_status' => 'publish',
			'post_type' => ['conteudos-especiais'],
			'paged' => $paged,
			'taxonomy' => 'tipos',
			'tax_query' => [
				[
					'taxonomy' => 'tipos',
					'terms' => $term_id,
				],
			],
		];
	}

	$specialAjax_query = new WP_Query($args);
	?>

    <div class="postCards__content container">
      <?php while ($specialAjax_query->have_posts()):

      	$specialAjax_query->the_post();
      	$terms_name = get_the_terms(get_the_ID(), 'tipos');
      	$terms_name = join(', ', wp_list_pluck($terms_name, 'name'));
      	?>
              <a  class="postCards__card" href="<?= get_the_permalink() ?>">
                  <div class="postCards__card--thumb">
                      <?= the_post_thumbnail() ?>
                  </div>
                  <div class="postCards__card--group">
                      <p class="postCards__card--taxname"><?= $terms_name ?></p>
                      <h3 class="postCards__card--title"><?= the_title() ?></h3>
                  </div>
              </a>
      <?php
      endwhile; ?>
  </div>

          <div class="postCards__buttons container">
                <a class="less__specialAjax" onclick="btnLess_Special()"><?= $arrowUp_category ?>Recolher tudo</a>
                <?php if ($specialAjax_query->max_num_pages > 1) { ?>
                    <a class="more__specialAjax" onclick="btnMore_Special()"><?= $arrowDown_category ?>Ver mais</a>
                <?php } ?>
            </div>
  <?php wp_die();
}
