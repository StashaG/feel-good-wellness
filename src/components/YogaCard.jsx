import React from 'react';


const YogaCard = (props)=> {

    return (
      <div className="main-content">
        {!isLoading &&
          yogaData.map((yoga, id) =>
            <div key={id}>
              <CardDeck>
                <Card>
                  <Card.Img variant="top" src={props.yoga.image} />
                  <Card.Body>
                    <Card.Title>{props.yoga.name}</Card.Title>
                    <Card.Text>
                      Add Yoga pose description here
                    </Card.Text>
                    <button className="favButton" onClick={handleAdd}> 
                Add to Favorites
              </button>{' '}
              <button className="removeButton" onClick={''}>
                Remove Favorite
              </button>{' '}
              <button className="clearButton" onClick={''}>
                Clear Favorite
              </button>
                  </Card.Body>
                </Card>
              </CardDeck>
            </div>
          )
        }
      </div>
        )
      }  
    

export default YogaCard;