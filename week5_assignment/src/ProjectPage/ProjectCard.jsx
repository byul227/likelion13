// src/components/ProjectCard.jsx
import styled from "styled-components";

export default function ProjectCard({ image, alt }) {
  return (
    <Card>
      <img src={image} alt={alt} />
    </Card>
  );
}

const Card = styled.div`
  width: 843.291px;
  height: 474.032px;
  flex-shrink: 0;
  img {
    width: 100%;
    border-radius: 12px;
  }
`;
