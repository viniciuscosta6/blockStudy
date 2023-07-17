import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';

import './style.scss';
import metadata from './block.json';
import Controls from "./controls.jsx";

registerBlockType(metadata.name, {
	title: metadata.title,
	attributes: metadata.attributes,
	example: metadata.example,
	category: metadata.category,
	icon: 'text',
	edit: EditorComponent,
	save: () => {},
});

/**
 * Block component at wp-admin
 * @param {*} props Block's properties
 * @returns JSX
 */
export default function EditorComponent({ attributes, setAttributes }) {
	const randomComponentId = Math.floor(Math.random() * 10000);

	const { tag, size, marginM, marginD } = attributes;

	const marginStyle = `
		.typography-${randomComponentId} {
			margin-bottom: ${marginM}px
		}

		
		@media (min-width: 768px) {
			.typography-${randomComponentId} {
				margin-bottom: ${marginD}px
			}
		}
	`;

	return (
		<>
			{/* Editor controls */}
			<Controls attributes={attributes} setAttributes={setAttributes} />

			<style>{marginStyle}</style>

			<RichText
				allowedFormats={[]}
				tagName={tag}
				className={`typography ${size} typography-${randomComponentId}`}
				value={attributes.content}
				onChange={content => setAttributes({ content: content })}
				placeholder="Call to action"
				style={{
					color: attributes.color,
					backgroundColor: attributes.bgColor,
				}}
			/>
		</>
	);
}
