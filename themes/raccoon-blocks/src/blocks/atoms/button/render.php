<?
// dd($attributes);
?>

<a href="<?= $attributes["link"]["url"] ?>" class="button" style="background-color: <?= $attributes[
	"bgColor"
] ?>; color: <?= $attributes["color"] ?>">
    <?= $attributes["content"] ?>
</a>