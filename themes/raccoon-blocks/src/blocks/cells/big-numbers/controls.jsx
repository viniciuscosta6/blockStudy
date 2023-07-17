import { InspectorControls } from "@wordpress/block-editor";
import ColorPanel from "../../../panels/ColorPanel";
import { Panel, PanelBody } from "@wordpress/components";

export default function Controls({ attributes, setAttributes }) {
    return <InspectorControls>
        <Panel>
            <PanelBody title="Seção">
                <ColorPanel
                    label="Cor do Título"
                    attributeName="titleColor"
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
            <PanelBody title="Cards" initialOpen={false}>
                <ColorPanel
                    label="Cor do Texto"
                    attributeName="cardTextColor"
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
                <ColorPanel
                    label="Cor do Fundo"
                    attributeName="cardBgColor"
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
            </PanelBody>
        </Panel>
    </InspectorControls>
}



