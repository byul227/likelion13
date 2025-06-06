// src/pages/Shop.jsx
import { useState, useEffect } from "react";
import styled from "styled-components";
import ProductCard from "../components/ProductCard";
import axios from "axios";

export default function Shop() {
  const [sortType, setSortType] = useState("low");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/clothes")
     .then((res) => setProducts(res.data)) 
     .catch((err) => console.error("API 호출 오류:", err));
  }, []);

  const sortedProducts = [...products].sort((a, b) => {
    return sortType === "low" ? a.price - b.price : b.price - a.price;
  });

  return (
    <>
      <Container>
        <Title>SHOP</Title>

        <FilterBar>
          <TagGroup>
            <Tag>⚡ 빠른배송</Tag>
            <Tag>🚚 브랜드배송</Tag>
            <Tag>✈️ 해외배송</Tag>
            <Tag>🅿️ 프리미엄배송</Tag>
          </TagGroup>

          <FilterOptions>
            <FilterBtn>카테고리 ▼</FilterBtn>
            <FilterBtn>성별 ▼</FilterBtn>
            <FilterBtn>색상 ▼</FilterBtn>
            <FilterBtn>혜택/할인 ▼</FilterBtn>
            <FilterBtn>브랜드 ▼</FilterBtn>
            <FilterBtn>컬렉션 ▼</FilterBtn>
            <FilterBtn>사이즈 ▼</FilterBtn>
            <FilterBtn>가격대 ▼</FilterBtn>
          </FilterOptions>

          <CheckGroup>
            <label>
              <input type="checkbox" />
              정가이하
            </label>
            <label>
              <input type="checkbox" />
              품절제외
            </label>
          </CheckGroup>
        </FilterBar>

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
  max-width: 1280px;
  margin: 0 auto;
  padding: 24px 40px;
`;

const Title = styled.h1`
  font-size: 28px;
  text-align: center;
  font-weight: 600;
  margin: 40px 0 24px;
`;

const FilterBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px 16px;
  margin-bottom: 24px;
`;

const TagGroup = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 999px;
  font-size: 13px;
  background: #fff;
`;

const FilterOptions = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const FilterBtn = styled.button`
  background: #f2f2f2;
  border: none;
  border-radius: 16px;
  padding: 8px 12px;
  font-size: 13px;
  cursor: pointer;
`;

const CheckGroup = styled.div`
  display: flex;
  gap: 12px;
  font-size: 13px;

  label {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

const SortBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

const Select = styled.select`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 40px 20px;
  justify-content: center;
`;
