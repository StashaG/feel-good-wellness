import React from 'react';
import { Jumbotron } from 'react-bootstrap';

function JumbotronComponent(props) {
  return (
    <div>
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