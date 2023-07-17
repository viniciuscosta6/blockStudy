import { InspectorControls } from "@wordpress/block-editor";
import ColorPanel from "../../../panels/ColorPanel";
import ImagePanel from "../../../panels/ImagePanel";
import MarginPanel from '../../../panels/MarginPanel';
import { Panel, PanelBody } from "@wordpress/components";

export default function Controls({ attributes, setAttributes }) {
    return <InspectorControls>
        <Panel>
            <PanelBody title="Fundo" className="color-panel">
                <ColorPanel
                    label="Cor do Fundo (Hero)"
                    attributeName="bgColor"
                    attributes={attributes}
                    setAttributes={setAttributes}
                    initialOpen={false}
                />
            </PanelBody>
            <PanelBody title="Título" initialOpen={false} className="color-panel">
                <ColorPanel
                    label="Cor do Texto (Título)"
                    attributeName="titleColor"
                    attributes={attributes}
                    setAttributes={setAttributes}
                    initialOpen={false}
                />
                <ColorPanel
                    label="Cor do Fundo (Título)"
                    attributeName="titleBgColor"
                    attributes={attributes}
                    setAttributes={setAttributes}
                    initialOpen={false}
                />
            </PanelBody>
            <PanelBody title="Subtítulo" initialOpen={false} className="color-panel">
                <ColorPanel
                    label="Cor do Texto (Subtítulo)"
                    attributeName="subtitleColor"
                    attributes={attributes}
                    setAttributes={setAttributes}
                    initialOpen={false}
                />
                <ColorPanel
                    label="Cor do Fundo (Subtítulo)"
                    attributeName="subtitleBgColor"
                    attributes={attributes}
                    setAttributes={setAttributes}
                    initialOpen={false}
                />
            </PanelBody>

            <MarginPanel attributes={attributes} setAttributes={setAttributes} />
        </Panel>
    </InspectorControls>
}

