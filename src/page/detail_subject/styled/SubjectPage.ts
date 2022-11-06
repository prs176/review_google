import styled from "styled-components";

export const RootContainer = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
`;

export const BodyContainer = styled.div`
  flex-grow: 1;
  display: flex;
  overflow: hidden;
`;

export const SubjectContainer = styled.div`
  width: 20%;
  overflow-x: hidden;
  overflow-y: scroll;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 30px;
`;

export const SubjectWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ScoreWrapper = styled.div`
  margin-left: 10px;
  margin-bottom: 50px;
`;

export const SubjectInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ReviewContainer = styled.div`
  width: 80%;
  overflow-x: hidden;
  overflow-y: scroll;
  display: block;
  background: #efeff4;
`;

export const SubjectToolContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Subtitle = styled.p`
  font-size: 1.2em;
  margin: 0px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
`;

export const KeywordContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  justify-content: center;
`;

export const Count = styled.p`
  color: #7b7b7b;
  font-size: 0.8em;
  margin: 0px;
`;

export const ToolContainer = styled.div`
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  margin-bottom: 30px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const ReviewCardWrapper = styled.div`
  margin-bottom: 20px;
`;

export const ButtonConatiner = styled.div`
  display: flex;
  align-items: center;
`;

export const SelectedToolButton = styled.p`
  font-size: 1.05em;
  cursor: pointer;
`;

export const ToolButton = styled.p`
  color: #a5a5a5;
  font-size: 1.05em;
  cursor: pointer;
`;

export const ButtonDivider = styled.hr`
  border: 0.5px solid lightgray;
  height: 30px;
  margin-left: 15px;
  margin-right: 15px;
`;

export const Divider = styled.hr`
  border: 0.5px solid lightgray;
  margin-top: 20px;
  margin-bottom: 20px;
`;
