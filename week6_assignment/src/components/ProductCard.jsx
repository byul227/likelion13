// src/components/ProductCard.jsx
import styled from "styled-components";

export default function ProductCard({ brand, name, price, trades, image }) {
  return (
    <Card>
      <img src={image} alt={name} />
      <div>{brand}</div>
      <div>{name}</div>
      <div>{price.toLocaleString()}원</div>
      <div>거래 {trades.toLocaleString()}회</div>
    </Card>
  );
}

const Card = styled.div`
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  width: 240px;
  margin: 12px;
  padding: 12px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  img {
    width: 100%;
    height: auto;
    border-radius: 6px;
  }
`;
