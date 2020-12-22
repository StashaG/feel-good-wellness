import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Jumbotron } from "react-bootstrap";
import Container from "react-bootstrap/Container";
// import Card from "react-bootstrap/Card";
import OAuth from "oauth";
// import YogaCard from "./YogaCard";
// import { IoIosHeartEmpty } from "react-icons/io";
import { doAddToFavorites } from "../redux/actions";

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
  const [yogaPoses, setYogaPoses] = useState([]);
  const [selectValue, setSelectValue] = useState("");
  // const [favorites, setFavorites] = useState([]);
  
  const favorites = {
    name: "name of the pose",
    image: "url of the pose",
    isFavorite: false,
  };

  useEffect(() => {
    oauth.get(
      "https://api.thenounproject.com/collection/yoga-pose-set-1/icons",
      null,
      null,
      function (e, data, res) {
        if (e) console.error(e);
        const yd = JSON.parse(data);
        console.log(props);
        const yogaItems = [];
        // Get access to the store from this component
        // mark the yogaItems as favorite (true/false)
        for (let i = 0; i < 10; i++) {
            // const isFavorite = search favorites for this index (i)
            // if you find it, then isFavorite is true
            yogaItems.push({
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
  const handleSelectChange = (e) => {
//     console.log(e.value);
  };

  return (
    // const yoga = this.state.isReady ? this.state.yoga.map( url => <)
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
              <button
                onClick={()=>{
console.log(favorites);

// const favoritesId = favorites.find(element => element === id)
// console.log(favoritesId);
                    if (false) {
                      // IF it is a favorite, remove
                    } else {
                      // ELSE add to favorites
                      props.doAddToFavorites(id)
                    }
                } }
              >Add to Favorites</button>
            </div>
          )
        }
      </div>
      <div className="yoga-poses">
        {/* {yogaPoses.map(yogaPose => <li>{yogaPose}</li>)} */}
      </div>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
    doAddToFavorites: (id) => dispatch(doAddToFavorites(id))
});
const mapStateToProps = state => ({
  favorites: state.favorites


});

export default connect (mapStateToProps, mapDispatchToProps)(Yoga);
