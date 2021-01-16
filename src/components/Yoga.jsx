import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import JumbotronComponent from "./JumbotronComponent";
import { FaHeart } from 'react-icons/fa';
// import YogaCard from './components/YogaCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import '../index.css';
import '../App.css';
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import OAuth from "oauth";
import { addFavorite, removeFavorite, clearItems } from "../redux/actions";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_SECRET = process.env.REACT_APP_API_SECRET;
const oauth = new OAuth.OAuth(
  "http://api.thenounproject.com",
  "http://api.thenounproject.com",
  API_KEY,
  API_SECRET,
  "1.0",
  null,
  "HMAC-SHA1"
);

const Button = styled.button`
  background-color: transparent;
  padding: 5px 10px;
  border-radius: 6px;
  outline: 0;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: #6200ea;
  }
  `

  const Container = styled.div`
  text-align: right;
  `;

const Yoga = (props) => {

  const handleAddFav = (id) => {
    props.addFavorite(id)    
  }

  const handleClear = (item) => {
    props.clearItems(item)
  }
  
  return (
      <div className="container">
        <JumbotronComponent heading="Yoga" 
            content="Cobra pose is a floor pose which gently stretches and flexes the body. 
              Its head-up position is reminiscent of a cobra rising up off the ground. 
              It brings flexibility and strength.  Cat Pose, or Marjaryasana, is one of the most commonly recognized yoga poses. 
            The shape of the body resembles a stretching, arching cat. This pose is usually 
            done as a partner to Cow Pose, as Cat Pose has the back high while Cow Pose has the back low."
            selection="Listed below are great yoga poses you could try at home. Select one of the poses to add 
              to a favorites list to try at home."></JumbotronComponent> 
        <div className="main-content">
          <Container>
            <Button className="clearButton" onClick={() => handleClear()}>
              Clear
            </Button>
          </Container>
          <div className="card-grid">
          {props.yogaData &&
            props.yogaData.map((yoga, id) =>
            <div key={yoga.id}>
              <Container>
              <div className="jumbotron-holder">
                <CardDeck>
                  <Card>
                    <Card.Img variant="top" src={yoga.image} />
                    <Card.Body>
                      <Card.Title>{yoga.name}</Card.Title>
                      <Button className={yoga.isFavorite ? "red": "grey"} onClick={() => handleAddFav(yoga.id)}> 
                        <FaHeart/>
                      </Button>{' '}
                    </Card.Body>
                  </Card>
                </CardDeck>
                </div>
                </Container>
                </div>
            )
          }
          </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
    addFavorite: (id) => dispatch(addFavorite(id)),
    removeFavorite: (id) => dispatch(removeFavorite(id)),
    clearItems: (id) => dispatch(clearItems(id))
  });
  
const mapStateToProps = state => ({
  yogaData: state.yoga

});

export default connect (mapStateToProps, mapDispatchToProps)(Yoga);
