// src/components/ProductCard.jsx
import styled from "styled-components";

export default function ProductCard({ brand, name, price, trades, image }) {
  return (
    <Card>
      <ImageWrapper>
        <TopText>거래 {trades.toLocaleString()}회</TopText>
        <ProductImage src={image} alt={name} />
      </ImageWrapper>
      <Brand>{brand}</Brand>
      <Name>{name}</Name>
      <Price>{price.toLocaleString()}원</Price>
    </Card>
  );
}

const Card = styled.div`
  padding: 8px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 8px;
`;

const ImageWrapper = styled.div`
  position: relative;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 24px;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TopText = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 12px;
  color: #888;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 160px;
  object-fit: contain;
`;

const Brand = styled.div`
  font-weight: bold;
`;

const Name = styled.div`
  color: #555;
  font-size: 13px;
`;

const Price = styled.div`
  font-weight: bold;
`;
