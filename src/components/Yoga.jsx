import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Jumbotron } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
// import Card from "react-bootstrap/Card";
import OAuth from "oauth";
import { addFavorite, removeFavorite, clearFavorite } from "../redux/actions";

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

const Yoga = (props) => {
  const [yogaData, setYogaData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

  const handleAdd = () => {
    const newFav = yogaData.concat({ favorites });
    setFavorites(newFav);
  }

// const handleFavSubmit = () => {
// props.addFavorites(favorite);
// props.removeFavorites(favorite);
// props.clearFavorites(favorite);
// setFavorite({});
// }

  useEffect(() => {
    oauth.get(
      "https://api.thenounproject.com/collection/yoga-pose-set-1/icons",
      null,
      null,
      function (e, data, res) {
        if (e) console.error(e);
        const yd = JSON.parse(data); //convert text yoga data into a JS object
        // console.log(props);
        const yogaItems = []; //yogaItems = empty array
        // mark the yogaItems as favorite (true/false)
        for (let i = 0; i < 10; i++) {
          
          const handleAdd = () => {
          if (favorites) {
            removeFavorite(i);
          } else {
          props.addFavorite(i);
          setFavorites();
          }
        }
            // const isFavorite = search favorites for this index (i)
            // if you find it, then isFavorite is true
            yogaItems.push({ //push yoga items onto the array
                id: i,
                name: yd.icons[i].term,
                image: yd.icons[i].preview_url,
                isFavorite: false, 
            });

        }
        setYogaData(yogaItems);
        setIsLoading(false);
      }
    );
  }, []);

  return (
    <div className="container">
      <Jumbotron fluid>
        <Container>
          <h1 className="title-heading">Yoga</h1>
          <br />
          <p className="pose-description">
            Cobra pose is a floor pose which gently stretches and flexes the body. 
            Its head-up position is reminiscent of a cobra rising up off the ground. 
            It brings flexibility and strength.  Cat Pose, or Marjaryasana, is one of the most commonly recognized yoga poses. 
          The shape of the body resembles a stretching, arching cat. This pose is usually 
          done as a partner to Cow Pose, as Cat Pose has the back high while Cow Pose has the back low.
          </p>
          <h4>
            Listed below are great yoga poses you could try at home. Select one of the poses to add 
            to a favorites list to try at home. 
          </h4>
        </Container>
      </Jumbotron>
      <div className="main-content">
        {!isLoading &&
          yogaData.map((yoga, id) =>
            <div key={id}>
              <h1>{yoga.name}</h1>
              <img src={yoga.image} />
              <>
              <button className="button" onClick={handleAdd}>
                Add to Favorites
              </button>{' '}
              <button className="button" onClick={''}>
                Remove Favorite
              </button>{' '}
              <button className="button" onClick={''}>
                Clear Favorite
              </button>
              </>
            </div>
          )
        }
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
    addFavorite: (index) => dispatch(addFavorite(index)),
    removeFavorite: (index) => dispatch(removeFavorite(index)),
    clearFavorite: (index) => dispatch(clearFavorite(index))
  });
  
const mapStateToProps = state => ({
  favorites: state.favorites,
  favorites: state.slice,
  favorites: []
});

export default connect (mapStateToProps, mapDispatchToProps)(Yoga);
