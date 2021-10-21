import React, { useState, useEffect, useContext } from 'react'
import './StepSlick.scss'
import SVG, { Props as SVGProps } from 'react-inlinesvg';


import Components from "../components";
import {AppContext, SET_STEP_DATA} from '../components/AppContext'

function StepSlick({title, id, fields, containerClass, onChange}){
    const { state, dispatch } = useContext(AppContext);
    const [stepId, setStepId] = useState(0);
    const slider = document.getElementsByClassName('slick-slider')


    const handleClick = (e) => {
        onChange(parseInt(e.currentTarget.id), e.currentTarget.value);
    };

    useEffect(() => {
        //console.log(fields)
        //console.log(id)
    }, [state]);

    return (
        <div className="slickItemContainer">

            {(title) && (
                <h1 className="mainTitle uk-heading uk-heading-primary">{title}</h1>
            )}
            <div className={`formElementsContainer ${containerClass}`}>
                {fields.map(block => Components(block))}
            </div>

            <button
                className="imageButton"
                onClick={handleClick}
                value="1"
                id={id}
            >
                {title}__{id}
            </button>

        </div>
    )
}
export default StepSlick;