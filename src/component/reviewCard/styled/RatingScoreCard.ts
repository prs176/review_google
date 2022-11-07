import styled from "styled-components";

export const RootContainer = styled.div`
  min-height: 170px;
`;

export const RaitingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  width: 300px;
`;

export const ScoreContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: 300px;
  height: 20px;
`;

export const DisabledIconWrapper = styled.div`
  display: flex;
  color: #5b5b5b;
`;

export const IconWrapper = styled.div`
  display: flex;
  color: #bfbfbf;
`;

export const RatingName = styled.p`
  width: 40px;
  font-size: 0.9em;
  margin: 0px;
  margin-right: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const RatingGuideText = styled.p`
  width: 40px;
  font-size: 0.8em;
  color: #7b7b7b;
  margin: 0px;
  margin-left: 10px;
`;

export const ScoreNameInput = styled.input`
  width: 40px;
  font-size: 0.9em;
  margin-right: 10px;
`;

export const ScoreWrapper = styled.div`
  width: 40px;
  display: flex;
  align-items: center;
`;

export const ScoreInput = styled.input`
  font-size: 0.85em;
  width: 22px;
  margin-left: 10px;
  color: #7b7b7b;
`;

export const ScoreGuideText = styled.p`
  margin: 0px;
  font-size: 0.8em;
  margin-left: 12px;
  color: #7b7b7b;
`;

export const PercentageText = styled.p`
  margin: 0px;
  font-size: 0.8em;
  margin-left: 2px;
  color: #7b7b7b;
`;
