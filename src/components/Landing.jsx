import React from 'react';
import { Jumbotron } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button'
// import { Redirect } from 'react-router-dom';
// import Header from './Header';
import { Link } from 'react-router-dom';
// import './App.css';


const Landing = () => {
        return (
            <div className="container">
           <Jumbotron>
                <h1>Welcome to Feel Good Wellness!</h1>
                    <p>
                    Developing a healthy lifestyle is really important for your
                        overall health and especially your mental well-being. 
                        Adding yoga to your daily routine can improve strength, balance, 
                        flexibility and circulation. Yoga can help you manage stress, 
                        ease back pain and even help you sleep better.
                    </p>
                <h3>
                Click the button below to learn more about the yoga poses you can add to your daily fitness routine 
                </h3>
                <br />
                    <ul>
                        <li><Link to="/yoga"><button type="button" class="btn btn-primary btn-lg">Learn more</button></Link></li>
                    </ul>
            </Jumbotron>
            </div>
        )
    }

export default Landing;