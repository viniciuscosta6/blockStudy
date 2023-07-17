        </main>
        <div class="footer padding-container">
            <a class="logo" href="<?php bloginfo('url'); ?>" aria-label="Ir Para a Página Inicial">
                <?= get_field('footer-logo-svg', 'option') ?>
            </a>
            <div class="menu-info-wrapper">
                <div class="menu">
                    <?php wp_nav_menu(['theme_location' => 'footer-menu']); ?>
                </div>
                <div class="info">
                    <p class="copyright"><?= get_field('footer-copyright', 'option') ?></p>
                    <p class="address"><?= get_field('footer-info', 'option') ?></p>
                </div>
            </div>
        </div>
        <?php wp_footer(); ?>
    </body>
</html>