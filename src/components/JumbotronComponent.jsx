import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const JumbotronComponent = (props) => {
  return (   
      <div className="jumbo-container">
      <p>hello</p>
        <Jumbotron>
          <h1>{props.heading}</h1>
              <br />
            <p>{props.content}</p>
              <br />
          <h4>{props.selection}</h4>
        </Jumbotron>
      </div>
  )
}

export default JumbotronComponent;