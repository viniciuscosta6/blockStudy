import "./style.scss";
import { registerBlockType } from "@wordpress/blocks";
import { InnerBlocks, InspectorControls, MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { Button, PanelBody, PanelRow, Panel } from "@wordpress/components";
import { getImageUrlById } from "../../../hooks/image";
import metadata from "./block.json";
import ColorPanel from "../../../panels/ColorPanel";
import ImagePanel from "../../../panels/ImagePanel";

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
				<path d="M18.5 5.5V8H20V5.5h2.5V4H20V1.5h-1.5V4H16v1.5h2.5zM12 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-6h-1.5v6a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5h6V4z"></path>
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
function EditorComponent({ attributes, setAttributes }) {
	const imagePath = "/wp-content/themes/raccoon-blocks/images/";

	return (
		<>
			<InspectorControls>
				<Panel>
					<PanelBody title="Cor do Fundo">
						<ColorPanel attributeName="bgColor" attributes={attributes} setAttributes={setAttributes} />
					</PanelBody>
					<PanelBody title="Imagem de Fundo" initialOpen={true}>
						<ImagePanel
							attributeName="bgImage"
							attributes={attributes}
							setAttributes={setAttributes}
						/>
					</PanelBody>
				</Panel>
			</InspectorControls>

			<section
				class="section"
				style={{
					backgroundImage: `url(${attributes.bgImage.src})`,
					backgroundColor: attributes.bgColor,
				}}
			>
				<InnerBlocks />
			</section>
		</>
	);
}
