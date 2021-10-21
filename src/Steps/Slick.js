import React, {useState, useEffect, useRef, useContext} from 'react'
import Slider from "react-slick";
import StepSlick from "./StepSlick";
import './StepSlick.scss'


import { useHistory } from 'react-router-dom';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import jsonData from '../steps.json';
import Components from "../components";
import {AppContext, SET_STEP_DATA} from "../components/AppContext";

function Slick({title}){
    const { state, dispatch } = useContext(AppContext);
    const [stepId, setStepId] = useState(0);
    const [sliderData, setSliderData] = useState(state?.slider || [0]);
    const history = useHistory();

    const sliderRef = useRef();

    const settings = {
        infinite: false,
        slidesToShow: 1,
        autoplay: false,
        dots: true,
        arrows: false,
        id: 'test'
    };

    useEffect(() => {
       //setSliderData(state?.slider || [jsonData]);

        console.log('sliderData', sliderData)
    }, [state]);

    useEffect(() => {
        //setStepId(parseInt(id) - 1);
        //console.log('Slider',Slider)
    });

    const handleChange = (stepId, value) => {
        setSliderData(oldArray => [...oldArray,stepId + 1] );
        sliderRef.current.slickGoTo(parseInt(stepId + 1))
        console.log('merged',sliderData)

        dispatch({
            type: SET_STEP_DATA,
            slider: sliderData,
        });
    };


    return (
        <div className="formOuterContainer">
            <Slider {...settings} id="formulator" ref={sliderRef}>
                {sliderData.map(function(index){
                    return <StepSlick onChange={handleChange} title={ jsonData[index].name } id={index} fields={jsonData[index].fields} containerClass={jsonData[index].containerClass} />;
                })}
            </Slider>
        </div>
    )
}
export default Slick;