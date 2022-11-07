import styled from "styled-components";

export const RootContainer = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
`;

export const BodyContainer = styled.div`
  display: flex;
  overflow: hidden;
`;

export const SubjectContainer = styled.div`
  width: 25%;
  overflow-x: hidden;
  overflow-y: scroll;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 30px;
`;

export const SubjectWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SubjectInfoContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

export const CommonRatingScoreCardWrapper = styled.div`
  margin-left: -8px;
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: block;
`;

export const ReviewContainer = styled.div`
  width: 100%;
  height: 88%;
  padding-top: 20px;
  padding-bottom: 20px;
  overflow-y: scroll;
  display: block;
  background: #efeff4;
`;

export const SubjectToolContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Subtitle = styled.p`
  font-size: 1.2em;
  margin: 0px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const KeywordContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const KeywordWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  padding-left: 3px;
  padding-right: 3px;
  margin-right: 5px;
  border: 1px solid lightgray;
  border-radius: 5px;
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
