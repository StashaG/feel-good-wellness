import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import JumbotronComponent from "./JumbotronComponent";
// import Favorites from "./Favorites";
// import YogaCard from './components/YogaCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import '../index.css';
// import ButtonGroup from "react-bootstrap/ButtonGroup";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import OAuth from "oauth";
import { addFavorite, removeFavorite, clearItems, addYogaItems } from "../redux/actions";

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
  background-color: #7986cb;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: #3f51b5;
  }
  `

const Yoga = (props) => {
  const [yogaData, setYogaData] = useState({});
  const [yogaItems, setYogaItems] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  
  const handleAddFav = (item) => {
    props.addFavorite(item)
  }

  // useEffect(() => {
  //   oauth.get(
  //     "https://api.thenounproject.com/collection/yoga-pose-set-1/icons",
  //     null,
  //     null,
  //     function (e, data, res) {
  //       if (e) console.error(e);
  //       const yd = JSON.parse(data); //convert text yoga data into a JS object
  //       console.log(data);
  //       const yogaItems = []; //yogaItems = empty array
  //       // mark the yogaItems as favorite (true/false)
  //       for (let i = 0; i < 5; i++) {
          
        
  //           // const isFavorite = search favorites for this index (i)
  //           // if you find it, then isFavorite is true
  //           yogaItems.push({ //push yoga items onto the array
  //               id: yd.icons[i].term_id,
  //               name: yd.icons[i].term,
  //               image: yd.icons[i].preview_url,
  //               isFavorite: false, 
  //           });

  //       }
  //       setYogaData(yogaItems);
  //       setIsLoading(false);
  //     }
  //   );
  // }, [props.favorites]);

  return (
    <div className="container">
      {props.favorites && props.favorites[0].id}
      <JumbotronComponent heading="Yoga" 
           content="Cobra pose is a floor pose which gently stretches and flexes the body. 
            Its head-up position is reminiscent of a cobra rising up off the ground. 
            It brings flexibility and strength.  Cat Pose, or Marjaryasana, is one of the most commonly recognized yoga poses. 
          The shape of the body resembles a stretching, arching cat. This pose is usually 
          done as a partner to Cow Pose, as Cat Pose has the back high while Cow Pose has the back low."
          selection="Listed below are great yoga poses you could try at home. Select one of the poses to add 
            to a favorites list to try at home."></JumbotronComponent> 
      <div className="main-content">
        {!isLoading &&
          yogaData.map((yoga, id) =>
            <div key={yoga.id}>
              <CardDeck>
                <Card>
                  <Card.Img variant="top" src={yoga.image} />
                  <Card.Body>
                    <Card.Title>{yoga.name}</Card.Title>
                    <Card.Text>
                      Add Yoga pose description here
                    </Card.Text>
                    {/* <Favorites /> */}
                    {/* <ButtonGroup /> */}
                    <Button className="favButton" onClick={(e) => handleAddFav(yoga)}> 
                Add to Favorites
              </Button>{' '}
              <Button className="removeButton" onClick={''}>
                Remove Favorite
              </Button>{' '}
              <Button className="clearButton" onClick={''}>
                Clear
              </Button>
                  </Card.Body>
                </Card>
              </CardDeck>
            </div>
          )
        }
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
    addFavorite: (id) => dispatch(addFavorite(id)),
   addYogaItems: (id) => dispatch(addYogaItems(id)),
    removeFavorite: (id) => dispatch(removeFavorite(id)),
    clearItems: (id) => dispatch(clearItems(id))
  });
  
const mapStateToProps = state => ({
  favorites: state.favorites,
  yogaData: state.yogaItems

});

export default connect (mapStateToProps, mapDispatchToProps)(Yoga);
