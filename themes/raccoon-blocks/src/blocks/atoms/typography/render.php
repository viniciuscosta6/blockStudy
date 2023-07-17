<?
// dd($attributes);
$randomComponentId = random_int(1, 10000);
?>


<<?= $attributes["tag"] ?> class="typography typography-<?= $randomComponentId ?> <?= $attributes["size"] ?>">
    <style>
        .typography-<?= $randomComponentId ?> {
            color: <?= $attributes["color"] ?>;
            background-color: <?= $attributes["bgColor"] ?>;
            margin-bottom: <?= $attributes["marginM"] ?>px
        }

        @media (min-width: 768px) {
            .typography-<?= $randomComponentId ?> {
                margin-bottom: <?= $attributes["marginD"] ?>px
            }
        }
    </style>

    <?= $attributes["content"] ?>
</<?= $attributes["tag"] ?>>