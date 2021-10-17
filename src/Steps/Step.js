import React, { useState, useEffect } from 'react'
import './Step.scss'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes,
    useParams
} from "react-router-dom";

import jsonData from '../steps.json';
import Components from "../components";

function Step({title}){
    const [stepId, setStepId] = useState(0);
    const { id } = useParams();
    const navState = jsonData[stepId]['includeNav']

    useEffect(() => {
       setStepId(parseInt(id) - 1);
    });

    let fields = [];


    if(jsonData[stepId])
    {
        fields = jsonData[stepId]?.fields
        //console.log(fields)
    }
    else{
        fields = false
    }

    //console.log(jsonData[stepId]);

    return (
        <div className="stepContainer">
            <h1>{jsonData[stepId]['name']}</h1>
            <p>{jsonData[stepId]['question']}</p>
            {(fields) && (
                //console.log('felder',fields),
                fields.map(block => Components(block))
            )}

            {(navState) && (
                <ul className="navButtons">
                    <li>Previous</li>
                    <li>Next</li>
                </ul>
            )}

        </div>
    )
}
export default Step;