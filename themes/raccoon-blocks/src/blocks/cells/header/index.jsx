import "./style.scss";
import { registerBlockType } from "@wordpress/blocks";
import { InnerBlocks } from "@wordpress/block-editor";
import metadata from "./block.json";
import Controls from "./controls.jsx";

// Register block.
registerBlockType(metadata.name, {
	title: metadata.title,
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
				<path d="M18.5 10.5H10v8h8a.5.5 0 00.5-.5v-7.5zm-10 0h-3V18a.5.5 0 00.5.5h2.5v-8zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"></path>
			</svg>
		),
	},
	edit: EditorComponent,
	save: () => <InnerBlocks.Content />,
});

/**
 * Editor view
 * @param {*} props Block's properties
 * @returns JSX
 */
export default function EditorComponent({attributes, setAttributes}) {
	const imagePath = "/wp-content/themes/raccoon-blocks/images/";

	return (
		<>
			{/* Editor controls */}
			<Controls attributes={attributes} setAttributes={setAttributes} />

			<div class="header" style={{backgroundColor: attributes.bgColor}}>
				<div class="container">
					<a href="/">
						<img src={imagePath + "logo.png"} alt="Raccoon.Monks" width="89" height="22" class="logo" />
					</a>

					<InnerBlocks />
				</div>
			</div>
		</>
	);
}
