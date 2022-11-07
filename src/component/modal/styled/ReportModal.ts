import styled from "@emotion/styled";

export const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 550px;
  min-height: 350px;
  background: white;
  border-radius: 10px;
`;

export const Title = styled.p`
  margin-left: 20px;
  font-size: 1.3em;
`;

export const TabButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Divider = styled.hr`
  border: 0.5px solid lightgray;
  height: 20px;
  margin: 0px;
`;

export const TabButton = styled.button<{ selected: boolean }>`
  width: 30%;
  border: none;
  background: none;
  font-size: 0.9em;
  outline: none;
  cursor: pointer;
  color: ${({ selected }) => (selected ? "black" : "#a5a5a5")};
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 30px;
  margin-right: 30px;
`;

export const ReportButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
  margin-top: auto;
  margin-bottom: 20px;
  margin-right: 20px;
  align-items: center;
  > button {
    width: 180px;
  }
  > * {
    margin-left: 10px;
  }
`;

export const ReportContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  margin-left: 30px;
`;

export const EditSubjectInfoCardWrapper = styled.div`
  margin-left: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
`;

export const GuideText = styled.p`
  margin: 0px;
  margin-top: 12px;
  color: #7b7b7b;
  font-size: 12px;
  color: darkgray;
`;

export const ReasonTextArea = styled.textarea`
  width: 90.4%;
  padding: 10px;
  height: 90px;
  border: none;
  outline: none;
  background: #efefef;
  font-family: inherit;
  resize: none;
`;
