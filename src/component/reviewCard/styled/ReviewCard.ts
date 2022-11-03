import styled from "styled-components";

export const RootContainer = styled.div`
  border-radius: 10px;
  padding: 20px;
  background: white;
  width: 60vw;
  margin: auto;
`;

export const ContentContainer = styled.div`
  display: flex;
`;

export const ToolContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Divider = styled.hr`
  border: 1px solid lightgray;
  margin: 0px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const ReviewContainer = styled.div`
  width: 65%;
`;

export const ScoreContainer = styled.div`
  width: 32%;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.p`
  font-size: 1.2em;
  margin: 0px;
  margin-right: 10px;
`;

export const TitleInput = styled.input`
  font-size: 1.2em;
  margin-right: 10px;
  margin-top: 1.5px;
  width: 100%;
`;

export const Id = styled.p`
  color: #7b7b7b;
  margin: 0px;
  font-size: 0.9em;
`;

export const Content = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const ExtendButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
`;

export const ExtendButton = styled.button`
  color: #a5a5a5;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
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
