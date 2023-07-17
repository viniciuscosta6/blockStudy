import {PanelRow, ColorPalette, SelectControl} from "@wordpress/components";
import { colors, pallets } from '../colors';
import { useState } from '@wordpress/element';

export default function ColorPanel({attributes, setAttributes, attributeName, label = ""}) {
	const [palette, setPalette] = useState('colorsPrimary');
	const [selectedPalette, setSelectedPalette] = useState(colors[palette]);

	// handle color change
	const handleColorChange = colorCode => {
		if (colorCode === undefined) colorCode = 'transparent';
		// deep clone attributes
		var object = structuredClone(attributes);
		object[attributeName] = colorCode;
		setAttributes(object);
	};

	//handle palette color change
	const handlePaletteChange = palette => {
		setSelectedPalette(colors[palette]);
		setPalette(palette);
	};

	return (
		<PanelRow className="palette-panel">
			<label>
				<strong className="palette-label">{label}</strong>

				<SelectControl
					label="Selecione a paleta"
					className="select-palette"
					value={palette}
					options={pallets}
					onChange={newPalette => handlePaletteChange(newPalette)}
					__nextHasNoMarginBottom
				/>

				<p className="palette-label">Selecione a cor</p>
				<ColorPalette
					label="Selecione a paleta"
					colors={selectedPalette}
					value={attributes[attributeName]}
					onChange={handleColorChange}
					headingLevel={5}
					style={{ marginTop: 5 }}
				/>
			</label>
		</PanelRow>
	);
}
