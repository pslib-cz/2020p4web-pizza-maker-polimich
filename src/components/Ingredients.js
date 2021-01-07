import React, { useContext, useState } from "react";
import {
  Label,
  ListGroup,
  ListGroupItem,
  Collapse,
  Button,
  Badge,
  InputGroup,
  Input,
  InputGroupButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import IngredientsContext from "../contexts/IngredientsContext";

const Ingredients = () => {
  const context = useContext(IngredientsContext);
  const [ingredienty, setIngredienty] = useState(context.ingredients);
  const [isOpenMeat, setIsOpenMeat] = useState(false);
  const [isOpenVegetables, setIsOpenVegetables] = useState(false);
  const [isOpenCheese, setIsOpenCheese] = useState(false);

  const [cat, setCat] = useState("Select Category");
  const [name, setName] = useState("");
  const [isDropdownInputOpen, setIsDropdownInputOpen] = useState(false);
  const toggleDropDownInput = () =>
    setIsDropdownInputOpen(!isDropdownInputOpen);

  const toggleMeat = () => setIsOpenMeat(!isOpenMeat);
  const toggleVegetables = () => setIsOpenVegetables(!isOpenVegetables);
  const toggleCheese = () => setIsOpenCheese(!isOpenCheese);

  const meat = ingredienty.filter(function (ingredient) {
    return ingredient.category === "meat";
  });
  const renderMeat = meat.map((ingredient) => (
    <ListGroupItem key={ingredient.name}>{ingredient.name}</ListGroupItem>
  ));
  const vegetables = ingredienty.filter(function (ingredient) {
    return ingredient.category === "vegetables";
  });
  const renderVegetables = vegetables.map((ingredient) => (
    <ListGroupItem key={ingredient.name}>{ingredient.name}</ListGroupItem>
  ));
  const cheese = ingredienty.filter(function (ingredient) {
    return ingredient.category === "cheese";
  });
  const renderCheese = cheese.map((ingredient) => (
    <ListGroupItem key={ingredient.name}>{ingredient.name}</ListGroupItem>
  ));
  return (
    <div>
      <Label>Ingredients:</Label>
      <br />
      <Button outline color="danger" onClick={toggleMeat}>
        Meats <Badge color="secondary">{meat.length}</Badge>
      </Button>
      <Collapse isOpen={isOpenMeat}>
        <ListGroup>{renderMeat}</ListGroup>
      </Collapse>
      <br />
      <Button outline color="success" onClick={toggleVegetables}>
        Vegetables <Badge>{vegetables.length}</Badge>
      </Button>
      <Collapse isOpen={isOpenVegetables}>
        <ListGroup>{renderVegetables}</ListGroup>
      </Collapse>
      <br />
      <Button outline color="warning" onClick={toggleCheese}>
        Cheese <Badge>{cheese.length}</Badge>
      </Button>
      <Collapse isOpen={isOpenCheese}>
        <ListGroup>{renderCheese}</ListGroup>
      </Collapse>
      <br />
      <InputGroup>
        <Input
          onChange={(e) => {
            setName(e.target.value);
            console.log(name);
          }}
        />
        <InputGroupButtonDropdown
          addonType="append"
          isOpen={isDropdownInputOpen}
          toggle={toggleDropDownInput}
        >
          <DropdownToggle caret>{cat}</DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => setCat("meat")}>Meat</DropdownItem>
            <DropdownItem onClick={() => setCat("vegetables")}>
              Vegetable
            </DropdownItem>
            <DropdownItem onClick={() => setCat("cheese")}>Cheese</DropdownItem>
          </DropdownMenu>
        </InputGroupButtonDropdown>
      </InputGroup>
      <Button
        onClick={() => {
          context.ingredients = [
            ...context.ingredients,
            { name: name, category: cat },
          ];
          setIngredienty(context.ingredients);
        }}
      >
        Add
      </Button>
    </div>
  );
};

export default Ingredients;
console.log();
