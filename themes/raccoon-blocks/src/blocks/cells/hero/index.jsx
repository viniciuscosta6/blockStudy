import {registerBlockType} from "@wordpress/blocks";
import "./style.scss";
import metadata from "./block.json";
import {RichText} from "@wordpress/block-editor";
import Controls from "./controls.jsx";

// Register block.
registerBlockType(metadata.name, {
	title: metadata.title,
	description: metadata.description,
	attributes: metadata.attributes,
	category: metadata.category,
	icon: {
		src: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width="48"
				height="48"
				aria-hidden="true"
				focusable="false"
			>
				<path d="M19 3H5c-.6 0-1 .4-1 1v7c0 .5.4 1 1 1h14c.5 0 1-.4 1-1V4c0-.6-.4-1-1-1zM5.5 10.5v-.4l1.8-1.3 1.3.8c.3.2.7.2.9-.1L11 8.1l2.4 2.4H5.5zm13 0h-2.9l-4-4c-.3-.3-.8-.3-1.1 0L8.9 8l-1.2-.8c-.3-.2-.6-.2-.9 0l-1.3 1V4.5h13v6zM4 20h9v-1.5H4V20zm0-4h16v-1.5H4V16z"></path>
			</svg>
		),
	},

	edit: EditorComponent,
	save: () => {},
});

/**
 * Block component at wp-admin
 * @param {*} props Block's properties
 * @returns JSX
 */
export default function EditorComponent({attributes, setAttributes}) {
	// avoid global style change when there is more than 1 of same component in editor
	const randomComponentId = Math.floor(Math.random() * 10000);
	const { marginM, marginD } = attributes;

	const titleStyle = `
		.editor-styles-wrapper .hero .title${randomComponentId} p {
			background: ${attributes.titleBgColor} !important;
			color: ${attributes.titleColor} !important;
		}
	`;
	const subtitleStyle = `
		.editor-styles-wrapper .hero .subtitle${randomComponentId} p {
			background: ${attributes.subtitleBgColor} !important;
			color: ${attributes.subtitleColor} !important;
		}
	`;

	const marginStyle = `
		.hero.margin-bottom-${randomComponentId} {
			margin-bottom: ${marginM}px;
		}
		
		@media (min-width: 768px) {
			.hero.margin-bottom-${randomComponentId} {
				margin-bottom: ${marginD}px;
			}
		}
	`;

	return (
		<>
			{/* Editor controls */}
			<Controls attributes={attributes} setAttributes={setAttributes} />

			<section class={`hero margin-bottom-${randomComponentId}`} style={{background: attributes.bgColor}}>
				<div class="container">
					<div class="text-wrapper">
						<style>
							{titleStyle} {subtitleStyle} {marginStyle}
						</style>
						<RichText
							allowedFormats={[]}
							tagName="div"
							className={["title", `title${randomComponentId}`]}
							value={attributes.title}
							onChange={(title) => setAttributes({title: title})}
							multiline="p"
						/>

						<RichText
							allowedFormats={[]}
							tagName="div"
							className={["subtitle", `subtitle${randomComponentId}`]}
							value={attributes.subtitle}
							onChange={(subtitle) => setAttributes({subtitle: subtitle})}
							multiline="p"
						/>
					</div>

					<div class="form-wrapper">
						<div class="shadow"></div>
						<form action="" class="form">
							<p class="title">Deseja receber novidades?</p>
							<p class="subtitle">
								Receba notificações da nossa plataforma e faça parte do mundo Raccoon.Monks.
							</p>
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
								Declaro que li a Política de Privacidade da Raccoon.Monks e aceito receber notificações
								neste e-mail cadastrado.
							</label>
						</form>
					</div>
				</div>
			</section>
		</>
	);
}
