import React from "react";
import Step from "./Steps/Step"
import ImageButton from "./HTMLElements/ImageButton"
const Components = {
    step: Step,
    imageButton: ImageButton
};

export default block => {
    if (typeof Components[block.component] !== "undefined") {
        return React.createElement(Components[block.component], {
            key: block._uid,
            block: block,
            name: block.name
        });
    }
    return React.createElement(
        () => <div>The component {block.component} has not been created yet.</div>,
        { key: block._uid }
    );
};