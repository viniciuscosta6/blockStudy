import {registerBlockType} from "@wordpress/blocks";
import "./style.scss";
import {useState} from "@wordpress/element";
import {color, link} from "@wordpress/icons";
import {ToolbarGroup, ToolbarButton, Popover, Button} from "@wordpress/components";
import {
	RichText,
	BlockControls,
	__experimentalLinkControl as LinkControl,
	InspectorControls,
} from "@wordpress/block-editor";
import metadata from "./block.json";
import ColorPanel from "../../../panels/ColorPanel";
import {Panel, PanelBody} from "@wordpress/components";

registerBlockType(metadata.name, {
	title: metadata.title,
	attributes: metadata.attributes,
	category: metadata.category,
	icon: "button",
	edit: EditorComponent,
	save: () => {},
});

/**
 * Block component at wp-admin
 * @param {*} props Block's properties
 * @returns JSX
 */
export default function EditorComponent({attributes, setAttributes}) {
	const [showLinkPicker, setshowLinkPicker] = useState(false);

	const linkButtonHandler = () => {
		setshowLinkPicker((prev) => !prev);
	};

	function handleLinkChange(newLink) {
		setAttributes({link: newLink});
	}

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton onClick={linkButtonHandler} icon={link} />
				</ToolbarGroup>
			</BlockControls>

			<InspectorControls>
				<Panel>
					<PanelBody title="Botão">
						<ColorPanel
							label="Cor do Texto"
							attributeName="color"
							attributes={attributes}
							setAttributes={setAttributes}
						/>
						<ColorPanel
							label="Cor do Fundo"
							attributeName="bgColor"
							attributes={attributes}
							setAttributes={setAttributes}
						/>
					</PanelBody>
				</Panel>
			</InspectorControls>

			<RichText
				allowedFormats={[]}
				tagName="a"
				className="button"
				value={attributes.content}
				onChange={(content) => setAttributes({content: content})}
				placeholder="Call to action"
				style={{
					backgroundColor: attributes.bgColor,
					color: attributes.color,
				}}
			/>

			{showLinkPicker && (
				<Popover position="middle center">
					<LinkControl settings={[]} value={attributes.link} onChange={handleLinkChange} />
					<Button
						variant="primary"
						onClick={() => setshowLinkPicker(false)}
						style={{display: "block", width: "100%"}}
					>
						OK
					</Button>
				</Popover>
			)}
		</>
	);
}
