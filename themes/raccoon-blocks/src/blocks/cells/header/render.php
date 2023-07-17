<? $template_uri = get_template_directory_uri() ?>

<div class="header" style="background-color: <?= $attributes["bgColor"] ?>">
    <div class="container">
        <a href="/">
            <img loading="eager" src="<?= $template_uri ?>/images/logo.png" alt="Raccoon.Monks" width="89" height="22" class="logo" />
        </a>

        <?= $content ?>
    </div>
</div>
