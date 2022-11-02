import styled from "styled-components";

export const RootContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
`;

export const SearchInput = styled.input`
  border: none;
  background: #efefef;
  width: 400px;
  height: 36px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 20px;
  margin: 10px;
`;

export const Divider = styled.hr`
  border: 1px solid lightgray;
  margin: 0px;
  margin-left: 20px;
  margin-right: 20px;
`;
