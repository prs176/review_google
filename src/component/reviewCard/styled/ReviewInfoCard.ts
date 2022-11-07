import styled from "styled-components";

export const ContentContainer = styled.div<{ type: "single" | "with" }>`
  display: flex;
  ${({ type }) =>
    type === "single"
      ? "border-radius: 10px; padding: 20px; background: white; width: 60vw; margin: auto;"
      : ""}
`;

export const ReviewContainer = styled.div`
  width: 65%;
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

export const Divider = styled.hr`
  border: 1px solid lightgray;
  margin: 0px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const ScoreContainer = styled.div`
  width: 32%;
`;
