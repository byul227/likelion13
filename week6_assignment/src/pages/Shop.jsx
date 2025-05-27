// src/pages/Shop.jsx
import { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import productsData from "../data/Products";

export default function Shop() {
  const [sortType, setSortType] = useState("low");

  const sortedProducts = [...productsData].sort((a, b) => {
    return sortType === "low" ? a.price - b.price : b.price - a.price;
  });

  return (
    <>
      <Header />
      <Container>
        <SortBox>
            <Select onChange={(e) => setSortType(e.target.value)}>
                <option value="low">낮은 가격순</option>
                <option value="high">높은 가격순</option>
            </Select>
        </SortBox>
        <Grid>
          {sortedProducts.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </Grid>
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: 40px;
`;

const SortBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px 0;
  max-width: 1530px;   
  padding: 0 20px;   
  width: 100%;
  box-sizing: border-box;
`;

const Select = styled.select`
  padding: 8px 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  height: 44px;        
  min-width: 160px;     
  cursor: pointer;

  &:hover {
    border-color: #999;
  }
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
