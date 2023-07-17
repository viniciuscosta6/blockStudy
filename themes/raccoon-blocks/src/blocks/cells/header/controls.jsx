import { InspectorControls } from "@wordpress/block-editor";
import ColorPanel from "../../../panels/ColorPanel";

export default function Controls({ attributes, setAttributes }) {
    return <InspectorControls>
        <ColorPanel
            title="Cor do Fundo"
            attributeName="bgColor"
            attributes={attributes}
            setAttributes={setAttributes}
        />
    </InspectorControls>
}

