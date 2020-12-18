import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'

const Food = () => {
    return (
        <div className="container">
            <Jumbotron>
                <Container>
            <h1>
                Plant-based Meals
            </h1>
                <p>
                Plant-based means food that comes from plants and does not include animal 
                ingredients such as meat, milk, eggs, or honey.There is excellent scientific 
                evidence that many chronic diseases can be controlled, reduced, or even 
                reversed by moving to a whole-food, plant-based diet. Scientific research 
                shows that a plant-based diet can reduce the risk of type 2 diabetes, heart disease, 
                certain types of cancer like  prostate, breast and colon cancers, and other 
                major illnesses. Many people also report losing weight, having more energy, 
                reduced inflammation, and better overall health outcomes after making the switch.
                </p>
                </Container>
            </Jumbotron>
        </div>
    );
}

export default Food;