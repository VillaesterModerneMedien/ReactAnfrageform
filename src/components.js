import React from "react";
import Step from "./Steps/Step"
import ImageButton from "./HTMLElements/ImageButton"
import Button from "./HTMLElements/Button"
import Input from "./HTMLElements/Input"
const Components = {
    step: Step,
    imageButton: ImageButton,
    Button: Button,
    input: Input
};

export default block => {

    //console.log(block)

    if (typeof Components[block.component] !== "undefined") {
        return React.createElement(Components[block.component], {
            key: block._uid,
            block: block,
            name: block.name,
            image: block.image,
            type: block.type,
            label: block.label,
            value: block.value,
            stepToGo: block.stepToGo,
            onChange: block.onChange,
            onClick: block.onClick
        });
    }
    return React.createElement(
        () => <div>The component {block.component} has not been created yet.</div>,
        { key: block._uid }
    );
};