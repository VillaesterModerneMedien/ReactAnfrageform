import React, { useState, useEffect, useContext } from 'react'
import './StepSlick.scss'
import Components from "../components";
import ImageButton from "../HTMLElements/ImageButton";


function StepSlick({title, id, fields, containerClass, onChange, onClick}){
    const [sliderData, setSliderData] = useState([0]);
    const [formData, setFormData] = useState({})

    useEffect(() => {
        //console.log('SliderData', sliderData)
        //console.log('SliderData', formData)
    }, []);

    const handleClick = (e, stepToGo) => {
        const newSliderData = sliderData
        newSliderData.push(parseInt(stepToGo))

        const currentFormData = {...formData, [e.currentTarget.id]:e.currentTarget.value}
        setFormData(currentFormData);

        onClick(sliderData, currentFormData)

        //console.log('StepSlick stepToGo',stepToGo)
        //console.log('StepSlick SliderData', sliderData)
        //console.log('StepSlick FormData', formData)
        //console.log('StepSlick CurrentFormData', currentFormData)
        //console.log('StepSlick', e.currentTarget.id,e.currentTarget.value)
    };

    return (
        <div className="slickItemContainer">

            {(title) && (
                <h1 className="mainTitle uk-heading uk-heading-primary">{title}</h1>
            )}
            <div className={`formElementsContainer ${containerClass}`}>
                {fields.map(block => Components({...block, onClick: handleClick}))}
            </div>

        </div>
    )
}
export default StepSlick;