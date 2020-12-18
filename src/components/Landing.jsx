import React from 'react';
import { Jumbotron } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button'
import { Redirect } from 'react-router-dom';
import { Link, Route, Switch } from 'react-router-dom';



const Landing = () => {
        return (
            <div className="container">
           <Jumbotron>
                <h1>Welcome to Feel Good Wellness!</h1>
                    <p>
                    Developing a healthy lifestyle is really important for your
                        overall health and especially your mental well-being. 
                        Adding yoga, meditation, smoothies, juicing, or even plant-based 
                        meals into your daily routine can really help you develop healthy 
                        habits that could improve your health.
                    </p>
                <h3>
                What you like to add to your daily routine? 
                </h3>
                <h5>Choose one:</h5>
                    <ul>
                        <li><Link to="/yoga"><button type="button" class="btn btn-primary btn-lg">Yoga</button></Link></li>
                        <li><Link to="/smoothie"><button type="button" class="btn btn-primary btn-lg">Smoothies</button></Link></li>
                        <li><Link to="/food"><button type="button" class="btn btn-primary btn-lg">Plant-based Meals</button></Link></li>
                    </ul>
                
            </Jumbotron>
                
                
                <button onClick={() => <Redirect to="results" />}>Results</button>
            </div>
        )
    }

export default Landing;