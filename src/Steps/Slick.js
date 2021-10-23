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
    const [sliderData, setSliderData] = useState(state.slider || [0]);
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
        //setSliderData(state.slider);
        //sliderRef.current.slickNext()
        console.log('state', state.slider)
        console.log('sliderData', sliderData)

    }, [state]);

    const handleChange = (sliderData, currentFormData) => {
        //setSliderData(oldArray => [...oldArray,stepId + 1] );
        //sliderRef.current.slickGoTo(parseInt(stepId + 1))
        setSliderData(sliderData)
        sliderRef.current.slickNext()
        console.log('logger Slick',sliderData, currentFormData)
    };

    return (
        <div className="formOuterContainer">
            <Slider {...settings} id="formulator" ref={sliderRef}>
                {sliderData.map(function(index){
                    return <StepSlick onClick={handleChange} title={ jsonData[index].question } id={index} fields={jsonData[index].fields} containerClass={jsonData[index].containerClass} />;
                })}
            </Slider>
        </div>
    )
}
export default Slick;