import styled from "styled-components";

export const RootContainer = styled.div`
  border-radius: 10px;
  padding: 20px;
  background: white;
  width: 60vw;
  margin: auto;
`;

export const TitleInput = styled.input`
  font-size: 1.2em;
  margin-right: 10px;
  margin-top: 1.5px;
  width: 100%;
`;

export const ContentContainer = styled.div`
  display: flex;
`;

export const ReviewContainer = styled.div`
  width: 65%;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ScoreContainer = styled.div`
  width: 32%;
`;

export const Divider = styled.hr`
  border: 1px solid lightgray;
  margin: 0px;
  margin-left: 20px;
  margin-right: 20px;
`;
