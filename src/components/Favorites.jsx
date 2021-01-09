import React, { useState } from "react";
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';

const Favorites = (props) => {
const [favorites, setFavorites] = useState(props.isfavorites);
// const [favorites, setFavorites] = useState(props.favorites);


    return (
      <div>
        <h3>Favorite Yoga Pose:{favorites}</h3>
        <div style={styles.heartStyle}>
        {favorites ? (<IoIosHeart size={32} onClick={() => setFavorites(1)} />
        ) : (
          <IoIosHeartEmpty size={32}/>
        )}
        {/* {favorites >= 2 ? (
          <IoIosHeart size={32} onClick={() => setFavorites(2)} />
        ) : (
          <IoIosHeartEmpty size={32} onClick={() => setFavorites(2)} />
        )} */}
        {/* {favorites >= 3 ? (
          <IoIosHeart size={32} onClick={() => setFavorites(3)} />
        ) : (
          <IoIosHeartEmpty size={32} onClick={() => setFavorites(3)} />
        )}
        {favorites >= 4 ? (
          <IoIosHeart size={32} onClick={() => setFavorites(4)} />
        ) : (
          <IoIosHeartEmpty size={32} onClick={() => setFavorites(4)} />
        )}
        {favorites >= 5 ? (
          <IoIosHeart size={32} onClick={() => setFavorites(5)} />
        ) : (
          <IoIosHeartEmpty size={32} onClick={() => setFavorites(5)} />
        )} */}
        </div>
      </div>
    );
}
export default Favorites;

const styles={
    heartStyle: {
        color: 'red'
    }
}