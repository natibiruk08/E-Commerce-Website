import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "../components/Product";
import axios from "axios";
import Navbar from "../components/Navbar";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const NavContainer = styled.nav`
  width: 100vw;
`;

const Search = ({ result, setResults }) => {
  console.log(result);
  return (
    <Container>
      <NavContainer>
        <Navbar setResults={setResults} />
      </NavContainer>
      {result.slice(0, 8).map((item) => {
        return <Product item={item} key={item.id} />;
      })}
    </Container>
  );
};

export default Search;
