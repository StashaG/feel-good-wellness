import React from 'react';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from 'styled-components';

const Button = styled.button`
  background-color: #7986cb;
  `

const ButtonGroup = (props) => {
  const [selection, setSelection] = useState(props.selection);

  const handleClick = sel => setSelection(sel);

  return (
    <ButtonGroup size="sm" value={selection} onClick={handleClick}>
      <Button variant="secondary">ADD FAVORITE</Button>{' '}
      <Button variant="secondary">REMOVE FAVORITE</Button>{' '}
      <Button variant="secondary">CLEAR</Button>
    </ButtonGroup>
  )
}

export default ButtonGroup;
