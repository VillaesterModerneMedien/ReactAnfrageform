import React, { useState } from 'react'
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

    const { id } = useParams();
    const [ state, setState ] = useState({
        book: null
    })

    console.log(jsonData[id])

    let fields = [];

    if(jsonData[id])
    {
        fields = jsonData[id]?.fields
        console.log(fields)
    }
    else{
        fields = false
    }



    return (
        <div>

            {(fields) && (
                console.log('felder',fields),
                fields.map(block => Components(block))
            )}

            <ul className="navButtons">
                <li>Previous</li>
                <li>Next</li>
            </ul>
        </div>
    )
}
export default Step;