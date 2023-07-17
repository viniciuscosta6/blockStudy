import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { Button, PanelRow } from "@wordpress/components";
import { getImageUrlById } from "../hooks/image";

export default function ImagePanel({ attributes, setAttributes, attributeName, label = "" }) {

	// handle image change
	const handleFileSelect = async (upload) => {
		let newAttributes = { ...attributes };

		newAttributes[attributeName] = {
			"id": upload.id,
			"src": await getImageUrlById(upload.id)
		}

		setAttributes(newAttributes);
	};

	// handle reset image button
	const handleResetButton = () => {
		let newAttributes = { ...attributes };

		newAttributes[attributeName] = {
			"id": "",
			"src": ""
		}
		setAttributes(newAttributes);
	};

	return (
		<>
			{
				attributes[attributeName].id ? (
					<PanelRow>
						<img src={attributes[attributeName].src} alt={label} style={{width: "100%"}} />
					</PanelRow>
				) : null
			}

			<PanelRow>
				<label>{label}</label>
				<MediaUploadCheck>
					<MediaUpload
						onSelect={handleFileSelect}
						value={attributes[attributeName].id}
						render={({ open }) => {
							return (
								<Button onClick={open} className="is-primary">
									Escolher Imagem
								</Button>
							);
						}}
					/>
				</MediaUploadCheck>
			</PanelRow>
			{
				attributes[attributeName].id && (
					<PanelRow>
						<Button className="is-secondary" onClick={handleResetButton}>
							Restaurar Padrão
						</Button>
					</PanelRow>
				)
			}
		</>
	);
}
