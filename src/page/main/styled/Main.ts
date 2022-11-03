import styled from "styled-components";

export const RootContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const SearchContainer = styled.div`
  margin: auto;
  margin-top: 100px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: right;
`;

export const SearchBar = styled.input`
  padding-left: 20px;
  padding-right: 20px;
  background: #ececec;
  border-radius: 20px;
  width: 520px;
  height: 42px;
  margin-top: 30px;
`;

export const ShowAllButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: right;
`;

export const ShowAllButton = styled.button`
  cursor: pointer;
  color: #a5a5a5;
  border: none;
  background: none;
  outline: none;
`;
