import React from 'react';
import { Redirect } from 'react-router-dom';


const Landing = () => {
        return (
            <div className="container">
                <h1>
                    Feel Good Wellness!
                </h1>
                <p>Incorporating a healthy lifestyle can really help improve your day and even your week and give you mental clarity.</p>
                <p>Try incorporating one of these options into your day:</p>
                <p>Choose one:</p>
                <ul>
                    <li><button type="button" class="btn btn-primary btn-lg">Yoga</button></li>
                    <li><button type="button" class="btn btn-primary btn-lg">Mediation</button></li>
                    <li><button type="button" class="btn btn-primary btn-lg">Smoothies</button></li>
                    <li><button type="button" class="btn btn-primary btn-lg">Juicing</button></li>
                    <li><button type="button" class="btn btn-primary btn-lg">Plant-based Meals</button></li>
                </ul>
                <button onClick={() => <Redirect to="results" />}>Results</button>
            </div>
        )
    }

export default Landing;