import { InspectorControls } from "@wordpress/block-editor";
import { Panel, PanelBody, SelectControl } from '@wordpress/components';

import ColorPanel from '../../../panels/ColorPanel';
// import MarginPanel from '../../../panels/MarginPanel';

export default function Controls({ attributes, setAttributes }) {
	const { tag, size } = attributes;

    const tags = [
		{ label: 'H1', value: 'h1' },
		{ label: 'H2', value: 'h2' },
		{ label: 'H3', value: 'h3' },
		{ label: 'H4', value: 'h4' },
		{ label: 'H5', value: 'h5' },
		{ label: 'H6', value: 'h6' },
		{ label: 'p', value: 'p' },
	];

	const sizes = [
		{ label: 'Heading 1', value: 'title-1' },
		{ label: 'Heading 2', value: 'title-2' },
		{ label: 'Heading 3', value: 'title-3' },
		{ label: 'Subtitle 1', value: 'subtitle-1' },
		{ label: 'Subtitle 2', value: 'subtitle-2' },
		{ label: 'Subtitle 3', value: 'subtitle-3' },
		{ label: 'Body 1', value: 'body-1' },
		{ label: 'Body 2', value: 'body-2' },
		{ label: 'Body 3', value: 'body-3' },
		{ label: 'Caption', value: 'caption' },
		{ label: 'Overline', value: 'overline' },
		{ label: 'Button Large', value: 'button-large' },
		{ label: 'Button', value: 'button-small' },
	];

    return <InspectorControls>
    <Panel>
        <PanelBody title="Atributos do texto" className="color-panel">
            <SelectControl
                label="Selecione a tag deste texto"
                value={tag}
                options={tags}
                onChange={newTag => setAttributes({ tag: newTag })}
            />

            <SelectControl
                label="Selecione o tamanho deste texto"
                value={size}
                options={sizes}
                onChange={newSize => setAttributes({ size: newSize })}
            />
        </PanelBody>

        <PanelBody title="Cores" initialOpen={false} className="color-panel">
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

        {/* <MarginPanel attributes={attributes} setAttributes={setAttributes} /> */}
    </Panel>
</InspectorControls>
}

