import styled from "styled-components";

export const RootContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
`;

export const ToolContainer = styled.div`
  display: flex;
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
  outline: none;
`;

export const LogoutButton = styled.button`
  border: none;
  font-size: 1.1em;
  color: #a5a5a5;
  background: none;
  border: none;
  margin: 10px;
  cursor: pointer;
`;

export const Profile = styled.div`
  background: #ffc000;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  margin-left: 10px;
  cursor: pointer;
`;

export const Divider = styled.hr`
  border: 1px solid lightgray;
  margin: 0px;
  margin-left: 20px;
  margin-right: 20px;
`;
