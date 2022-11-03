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
  background-color: #ececec;
  cursor: pointer;
`;

export const ImageInputIconWrapper = styled.div`
  color: gray;
  margin: auto;
`;

export const ImageInput = styled.input`
  display: none;
`;

export const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 5px;
`;

export const CategorySelect = styled.select`
  margin-left: 5px;
  width: 195px;
  color: #7b7b7b;
  border: none;
  font-size: 1em;
  outline: none;
`;

export const TitleInput = styled.input`
  font-size: 1.5em;
  width: 225px;
  font-weight: bold;
`;

export const FromInput = styled.input`
  font-size: 1em;
  width: 225px;
`;

export const ToolWrapper = styled.div`
  display: flex;
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
