<?php
global $ids_not_home;
$ids_not_home = [];
if (!empty(get_field('carousel_post_object', 'Options'))):
	/* acf variables */


	$aux = 0;
	$carousel = get_field('carousel_post_object');
	$destaques = get_field('destaques_post_object');
	?>
<!-- Mobile Structure-->
<section class="home-hero mobile">
  <div class="home-banner">
    <div class="carousel home-slider">
<?php if ($carousel):
	foreach ($carousel as $post): ?>
          <div class="hero-card wrapper" style="background-image: url(<?= get_the_post_thumbnail_url() ?>)">
          <div class="overlay-gradient">
            <div class="card-text">
              <?php if (get_post_type(get_the_ID()) == 'post') {
              	$thePostTitle = get_the_title();
              	$icon = $icon_post;
              	if (reading_time()) {
              		$consume = reading_time();
              	} else {
              		$consume = '';
              	}
              } elseif (get_post_type(get_the_ID()) == 'video') {
              	$thePostTitle = get_the_field('video_post_title_text');
              	$icon = $videoIcon;
              	if (get_field('media-time')) {
              		$consume = get_field('media-time') . ' min. de vídeo';
              	} else {
              		$consume = '';
              	}
              } elseif (get_post_type(get_the_ID()) == 'podcast') {
              	$thePostTitle = get_the_field('podcast_post_title_text');
              	$icon = $podcastIcon;
              	if (get_field('media-time')) {
              		$consume = get_field('media-time') . ' min. de áudio';
              	} else {
              		$consume = '';
              	}
              } ?>
              <p class="post-categories"><?= $icon ?>
              <?= get_the_category()[0]->name ?></p>

                  <p class="post-title">
                    <?= $thePostTitle ?>
                  </p>
                  <div class="post-infos">
                    <div class="post-date">
                      <?= get_the_date('d/m/Y') ?>
                    </div>
                    <div class="post-time">
                      <?= $consume ?>
                    </div>
                  </div><!-- post-info -->
                </div><!-- card-text -->
          </div><!-- overlay-gradient -->
          </div><!-- wrapper -->
   <?php array_push($ids_not_home, get_the_ID());endforeach;
	wp_reset_postdata();
endif; ?>
          </div><!-- carousel -->
            <div><!-- home-banner -->

  <div class="news-wrapper">
      <?php if ($destaques):
      	foreach ($destaques as $post): ?>
                <div class="card-news">
                  <a href="<?= esc_url(get_the_permalink()) ?>">
                  <div class="wrapper-post-link">

                    <div class="card-image">
                  <?php if (has_post_thumbnail()): ?>
                    <?php the_post_thumbnail(); ?>
                  <?php else: ?>
                    <img src=<?php echo get_template_directory_uri() .
                    	'/assets/images/default/Placement-Area.png'; ?> alt="Avatar"  title="Avatar" style="width: 100%; height:100%">
                  <?php endif; ?>
                    </div>
                    <div class="card-news__text">
                    <?php if (get_post_type(get_the_ID()) == 'post') {
                    	$thePostTitle = get_the_title();
                    	$icon = $icon_post;
                    	if (reading_time()) {
                    		$consume = reading_time();
                    	} else {
                    		$consume = '';
                    	}
                    } elseif (get_post_type(get_the_ID()) == 'video') {
                    	$thePostTitle = get_the_field('video_post_title_text');
                    	$icon = $videoIcon;
                    	if (get_field('media-time')) {
                    		$consume = get_field('media-time') . ' min. de áudio';
                    	} else {
                    		$consume = '';
                    	}
                    } elseif (get_post_type(get_the_ID()) == 'podcast') {
                    	$thePostTitle = get_the_field('podcast_post_title_text');
                    	$icon = $podcastIcon;
                    	if (get_field('media-time')) {
                    		$consume = get_field('media-time') . ' min. de áudio';
                    	} else {
                    		$consume = '';
                    	}
                    } ?>
                      <p class="post-categories"><?= $icon ?>
                      <?= get_the_category()[0]->name ?></p>
                      <p class="post-title">
                        <?= $thePostTitle ?>
                      </p>
                    </div>
                  </div>
          </a>
        </div><!-- card-news -->

 <?php array_push($ids_not_home, get_the_ID());endforeach;
      	wp_reset_postdata();
      endif; ?>
     </div>
</section>

<!-- Desktop Structure -->
<section class="home-hero desktop container">
  <!-- left side -->
  <div class="hero-banner carousel">
    <div class="wrapper">
      <?php if ($carousel):
      	$i = 0;
      	foreach ($carousel as $post): ?>
       <div class="bg-hover-change" id="banner<?= ++$i ?>">
       <a href="<?= esc_url(get_the_permalink()) ?>">
              <?php if (has_post_thumbnail()):
              	the_post_thumbnail();
              endif; ?>
                </a>
        </div>
              <?php endforeach;
      	wp_reset_postdata();
      endif; ?>
    </div>
    <div class="card-hover-change" id="test">
          <?php if ($carousel):
          	$i = 0;
          	foreach ($carousel as $post): ?>
              <div class="wrapper">
                <a href="<?= esc_url(get_the_permalink()) ?>" id="hover<?= ++$i ?>">
                <?php if (get_post_type(get_the_ID()) == 'post') {
                	$thePostTitle = get_the_title();
                	$icon = $icon_post;
                	if (reading_time()) {
                		$consume = reading_time();
                	} else {
                		$consume = '';
                	}
                } elseif (get_post_type(get_the_ID()) == 'video') {
                	$thePostTitle = get_the_field('video_post_title_text');
                	$icon = $videoIcon;
                	if (get_field('media-time')) {
                		$consume = get_field('media-time') . ' min. de vídeo';
                	} else {
                		$consume = '';
                	}
                } elseif (get_post_type(get_the_ID()) == 'podcast') {
                	$thePostTitle = get_the_field('podcast_post_title_text');
                	$icon = $podcastIcon;
                	if (get_field('media-time')) {
                		$consume = get_field('media-time') . ' min. de áudio';
                	} else {
                		$consume = '';
                	}
                } ?>
                      <p class="post-categories"><?= $icon ?>
                      <?= get_the_category()[0]->name ?></p>
                      <p class="post-title">
                        <?= $thePostTitle ?>
                      </p>
                <div class="post-infos">
                  <div class="post-date">
                    <?= get_the_date('d/m/Y') ?>
                  </div>
                  <div class="post-time">
                    <?= reading_time() ?>
                  </div>
                </div><!-- post-info -->
              </a>
              </div><!-- wrapper -->
 <?php endforeach;
          	wp_reset_postdata();
          endif; ?>
    </div>
  </div>
  <!-- end carousel -->

  <!-- right side -->
  <div class="news-wrapper">
      <?php if ($destaques):
      	foreach ($destaques as $post): ?>
                <div class="card-news">
                  <a href="<?= esc_url(get_the_permalink()) ?>">
            <?php if ($aux == 0) {
            	$aux++; ?>
                  <div class="card-image">
                <?php if (has_post_thumbnail()): ?>
                  <?php the_post_thumbnail(); ?>
                <?php else: ?>
                  <img src=<?php echo get_template_directory_uri() .
                  	'/assets/images/default/Placement-Area.png'; ?> alt="Avatar"  title="Avatar" style="width: 100%; height:100%">
                <?php endif; ?>
                  </div>
            <?php
            } ?>
                    <?php if (get_post_type(get_the_ID()) == 'post') {
                    	$thePostTitle = get_the_title();
                    	$icon = $icon_post;
                    	if (reading_time()) {
                    		$consume = reading_time();
                    	} else {
                    		$consume = '';
                    	}
                    } elseif (get_post_type(get_the_ID()) == 'video') {
                    	$thePostTitle = get_the_field('video_post_title_text');
                    	$icon = $videoIcon;
                    	if (get_field('media-time')) {
                    		$consume = get_field('media-time') . ' min. de vídeo';
                    	} else {
                    		$consume = '';
                    	}
                    } elseif (get_post_type(get_the_ID()) == 'podcast') {
                    	$thePostTitle = get_the_field('podcast_post_title_text');
                    	$icon = $podcastIcon;
                    	if (get_field('media-time')) {
                    		$consume = get_field('media-time') . ' min. de áudio';
                    	} else {
                    		$consume = '';
                    	}
                    } ?>
                      <p class="post-categories"><?= $icon ?>
                      <?= get_the_category()[0]->name ?></p>
                      <p class="post-title">
                        <?= $thePostTitle ?>
                      </p>
          </a>
        </div><!-- card-news -->


 <?php endforeach;
      	wp_reset_postdata();
      endif; ?>
     </div>
  </div>

</section>

<?php
endif;
