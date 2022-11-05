import React from "react";
import {
  FormContainer,
  HeaderContainer,
  MainHeader,
  FoodInput,
  Button,
  Select,
} from "./HeaderStyles";

const Header = ({ ögün, query, setQuery, setOgun, getData }) => {
//  console.log(getData);
const handelSubmit=(e)=>{
  e.preventDefault()
  getData()
}
  return (
    <HeaderContainer>
      <MainHeader>Food App</MainHeader>
      <FormContainer onSubmit={handelSubmit}>
        <FoodInput
          type="text"
          id="query"
          placeholder="search"
          onInput={(e) => setQuery(e.target.value)}
        />
        <Button type="submit">Search</Button>
        <Select  id="ögün" onChange={(e) => setOgun(e.target.value)}>
        
          <option>breakfast</option>
          <option>lunch</option>
          <option>dinner</option>
          <option>snack</option>
          <option>teatime</option>
        </Select>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
