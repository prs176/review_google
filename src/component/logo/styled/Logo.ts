import styled from "styled-components";

export const RootContainer = styled.div<{ type: string }>`
  display: flex;
  align-items: center;
  cursor: ${({ type }) => (type === "big" ? "auto" : "pointer")};
`;

export const Image = styled.img<{ type: string }>`
  height: ${({ type }) => (type === "big" ? "80px" : "50px")};
`;
