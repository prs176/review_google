import styled from "styled-components";

export const RootContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.img<{ type: string }>`
  height: ${({ type }) => (type === "big" ? "80px" : "50px")};
`;
