import React from "react";
import {
  Button,
  FoodInput,
  FormContainer,
  HeaderContainer,
  MainHeader,
  Select,
} from "./HeaderStyles";
const Header = ({ setOgun, setQuery, getData }) => {
  const yapSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  return (
    <HeaderContainer>
      <MainHeader>FOOD APP</MainHeader>
      <FormContainer onSubmit={yapSubmit}>
        <FoodInput
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search"
        />
        <Button type="submit">Search</Button>
        <Select
          name="ögünTypes"
          id="ögünTypes"
          onChange={(e) => setOgun(e.target.value)}
        >
          <option>Breakfast</option>
          <option>Lunc</option>
          <option>Teatime</option>
        </Select>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
