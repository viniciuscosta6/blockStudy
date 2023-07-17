<?
// avoid global style change when there is more than 1 of same component in editor
$randomComponentId = random_int(1, 10000);
?>

<section class="hero hero-<?= $randomComponentId ?>" style="background: <?= $attributes["bgColor"] ?>">
    <div class="container">
        <div class="text-wrapper">
            <style>
                .hero-<?= $randomComponentId ?> {
                    margin-bottom: <?= $attributes["marginM"] ?>px
                }

                .hero .container .text-wrapper .title<?= $randomComponentId ?>>p {
                    color: <?= $attributes["titleColor"] ?>;
                    background: <?= $attributes["titleBgColor"] ?>
                }

                .hero .container .text-wrapper .subtitle<?= $randomComponentId ?>>p {
                    color: <?= $attributes["subtitleColor"] ?>;
                    background: <?= $attributes["subtitleBgColor"] ?>
                }

                @media (min-width: 768px) {
                    .hero-<?= $randomComponentId ?> {
                        margin-bottom: <?= $attributes["marginD"] ?>px
                    }
                }
            </style>

            <div class="title title<?= $randomComponentId ?>">
                <?= $attributes["title"] ?>
            </div>

            <div class="subtitle subtitle<?= $randomComponentId ?>">
                <p>Somos a maior agência de</p>
                <p>marketing digital full service da</p>
                <p>América Latina! Venha ser parte da</p>
                <p>nossa história!</p>
            </div>
        </div>

        <div class="form-wrapper">
            <div class="shadow"></div>
            <form action="" class="form">
                <p class="title">Deseja receber novidades?</p>
                <p class="subtitle">Receba notificações da nossa plataforma e faça parte do mundo Raccoon.Monks.</p>
                <label>
                    Nome
                    <input type="text" name="name" />
                </label>
                <label>
                    Email
                    <input type="email" name="email" />
                </label>
                <button class="button">Inscrever</button>
                <label class="label-checkbox">
                    <input type="checkbox" value="1" />
                    Declaro que li a Política de Privacidade da Raccoon.Monks e aceito receber notificações neste e-mail cadastrado.
                </label>
            </form>
        </div>
    </div>
</section>