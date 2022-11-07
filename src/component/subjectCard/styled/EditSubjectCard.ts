import styled from "styled-components";

export const RootContainer = styled.div`
  margin: 20px;
  margin-top: 30px;
  width: 235px;
`;

export const ImageInputLabel = styled.div`
  display: flex;
  width: 235px;
  height: 250px;
  border-radius: 10px;
  background: #efefef;
  cursor: pointer;
`;

export const ImageInputIconWrapper = styled.div`
  color: gray;
  margin: auto;
`;

export const ImageInput = styled.input`
  display: none;
`;

export const ToolWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
`;

export const DoneButton = styled.button`
  color: #7b7b7b;
  margin-top: 5px;
  font-size: 1em;
  font-weight: bold;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
`;
