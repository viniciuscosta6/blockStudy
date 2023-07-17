import { registerBlockType } from "@wordpress/blocks";
import "./style.scss";
import metadata from "./block.json";
import { RichText } from "@wordpress/block-editor";
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
				<path d="M11.1 15.8H20v-1.5h-8.9v1.5zm0-8.6v1.5H20V7.2h-8.9zM5 6.7V10h1V5.3L3.8 6l.4 1 .8-.3zm-.4 5.7c-.3.1-.5.2-.7.3l.1 1.1c.2-.2.5-.4.8-.5.3-.1.6 0 .7.1.2.3 0 .8-.2 1.1-.5.8-.9 1.6-1.4 2.5h2.7v-1h-1c.3-.6.8-1.4.9-2.1.1-.3 0-.8-.2-1.1-.5-.6-1.3-.5-1.7-.4z"></path>
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
	return (
		<>
			{/* Editor controls */}
			<Controls attributes={attributes} setAttributes={setAttributes} />

			<section class="big-numbers" style={{background: attributes.bgColor}}>
				<div class="container">
					<RichText
						allowedFormats={[]}
						tagName="h2"
						className="number"
						value={attributes.title}
						onChange={(title) => setAttributes({title: title})}
						style={{color: attributes.titleColor}}
					/>

					<div class="cards-wrapper">
						<div class="card" style={{background: attributes.cardBgColor}}>
							<RichText
								allowedFormats={[]}
								tagName="p"
								className="number"
								value={attributes.number1}
								onChange={(number) => setAttributes({number1: number})}
								style={{color: attributes.cardTextColor}}
							/>

							<RichText
								allowedFormats={[]}
								tagName="p"
								className="text"
								value={attributes.text1}
								onChange={(text) => setAttributes({text1: text})}
								style={{color: attributes.cardTextColor}}
							/>
						</div>
						<div class="card" style={{background: attributes.cardBgColor}}>
							<RichText
								allowedFormats={[]}
								tagName="p"
								className="number"
								value={attributes.number2}
								onChange={(number) => setAttributes({number2: number})}
								style={{color: attributes.cardTextColor}}
							/>

							<RichText
								allowedFormats={[]}
								tagName="p"
								className="text"
								value={attributes.text2}
								onChange={(text) => setAttributes({text2: text})}
								style={{color: attributes.cardTextColor}}
							/>
						</div>
						<div class="card" style={{background: attributes.cardBgColor}}>
							<RichText
								allowedFormats={[]}
								tagName="p"
								className="number"
								value={attributes.number3}
								onChange={(number) => setAttributes({number3: number})}
								style={{color: attributes.cardTextColor}}
							/>

							<RichText
								allowedFormats={[]}
								tagName="p"
								className="text"
								value={attributes.text3}
								onChange={(text) => setAttributes({text3: text})}
								style={{color: attributes.cardTextColor}}
							/>
						</div>
						<div class="card" style={{background: attributes.cardBgColor}}>
							<RichText
								allowedFormats={[]}
								tagName="p"
								className="number"
								value={attributes.number4}
								onChange={(number) => setAttributes({number4: number})}
								style={{color: attributes.cardTextColor}}
							/>

							<RichText
								allowedFormats={[]}
								tagName="p"
								className="text"
								value={attributes.text4}
								onChange={(text) => setAttributes({text4: text})}
								style={{color: attributes.cardTextColor}}
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
