import React from 'react';


const YogaCard = (props)=> {

    return(
      <div className="yoga-card">
          <div key={id}>
            <CardDeck>
              <Card>
                <Card.Img variant="top" src={props.yoga.image} />
                <Card.Body>
                  <Card.Title>{props.yoga.name}</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
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
    );
}

export default YogaCard;