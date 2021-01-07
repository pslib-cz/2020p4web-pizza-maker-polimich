import React from "react";
import { Input, Label, ListGroup, ListGroupItem } from "reactstrap";

const Ingredient = ({ name }) => {
  return (
    <ListGroupItem>
      <Input type="checkbox" /> {name}
    </ListGroupItem>
  );
};

export default Ingredient;
