import styled from "styled-components";

export const ErrorText = styled.p<{ display: "hidden" | "visible" }>`
  visibility: ${(props) => props.display};
  margin: 0px;
  color: red;
  font-size: 0.8em;
`;
