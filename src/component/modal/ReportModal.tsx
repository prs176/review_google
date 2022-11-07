import { useState } from "react";
import { CategoryToNumber } from "../../model/subject";
import { ErrorText } from "../../styled/Common";
import LabelButton from "../labelButton/LabelButton";
import EditSubjectInfoCard from "../subjectCard/EditSubjectInfoCard";
import ImageInput from "../subjectCard/ImageInput";
import TextField from "../textField/TextField";
import * as Style from "./styled/ReportModal";

interface Props {
  onReportReduplication: (url: string) => void;
  onReportModification: (
    file: File,
    category: CategoryToNumber,
    title: string,
    from: string
  ) => void;
  onReportDeletion: (reason: string) => void;
}

const ReportModal = ({
  onReportReduplication,
  onReportModification,
  onReportDeletion,
}: Props): JSX.Element => {
  const [tab, setTab] = useState(1);
  const [url, setUrl] = useState("");
  const [image, setImage] = useState<string>("");
  const [file, setFile] = useState<File>();
  const [category, setCategory] = useState<CategoryToNumber>(CategoryToNumber.FOOD);
  const [title, setTitle] = useState<string>("");
  const [from, setFrom] = useState<string>("");
  const [reason, setReason] = useState<string>("");

  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImage((reader.result as string) || "");
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const onChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setCategory(Number(e.target.value));
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const onChangeFrom = (e: React.ChangeEvent<HTMLInputElement>) => setFrom(e.target.value);
  const onChangeReason = (e: React.ChangeEvent<HTMLTextAreaElement>) => setReason(e.target.value);

  const [errorMessage, setErrorMessage] = useState<string>("");

  return (
    <Style.RootContainer>
      <Style.Title>페이지 신고</Style.Title>
      <Style.TabButtonContainer>
        <Style.TabButton
          selected={tab === 1}
          onClick={() => {
            setErrorMessage("");
            setTab(1);
          }}
        >
          중복되는 주제
        </Style.TabButton>
        <Style.Divider />
        <Style.TabButton
          selected={tab === 2}
          onClick={() => {
            setErrorMessage("");
            setTab(2);
          }}
        >
          주제 수정 요청
        </Style.TabButton>
        <Style.Divider />
        <Style.TabButton
          selected={tab === 3}
          onClick={() => {
            setErrorMessage("");
            setTab(3);
          }}
        >
          주제 삭제 요청
        </Style.TabButton>
      </Style.TabButtonContainer>
      {tab === 1 ? (
        <Style.InputWrapper>
          <TextField
            label="중복되는 주제의 URL을 입력해주세요. 후에 페이지가 병합될 수 있습니다."
            placeholder="http://localhost:3000/detail_subject/"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </Style.InputWrapper>
      ) : tab === 2 ? (
        <Style.ReportContainer>
          <Style.GuideText>정정을 요청할 페이지 정보를 입력해주세요.</Style.GuideText>
          <Style.InputContainer>
            <ImageInput image={image} onChangeFile={onChangeFile} />
            <Style.EditSubjectInfoCardWrapper>
              <EditSubjectInfoCard
                category={category}
                onChangeCategory={onChangeCategory}
                title={title}
                onChangeTitle={onChangeTitle}
                from={from}
                onChangeFrom={onChangeFrom}
              />
            </Style.EditSubjectInfoCardWrapper>
          </Style.InputContainer>
        </Style.ReportContainer>
      ) : (
        <>
          <Style.ReportContainer>
            <Style.GuideText>삭제를 요청하는 사유를 입력해주세요.</Style.GuideText>
            <Style.ReasonTextArea
              value={reason}
              onChange={onChangeReason}
              placeholder="사유"
            ></Style.ReasonTextArea>
          </Style.ReportContainer>
        </>
      )}

      <Style.ReportButtonWrapper>
        <ErrorText display={errorMessage ? "visible" : "hidden"}>{errorMessage}</ErrorText>
        <LabelButton
          onClick={() => {
            if (tab === 1) {
              if (url) {
                onReportReduplication(url);
              } else {
                setErrorMessage("값이 비어있습니다.");
              }
            } else if (tab === 2) {
              if (file && category && title && from) {
                onReportModification(file, category, title, from);
              } else {
                setErrorMessage("값이 비어있습니다.");
              }
            } else {
              if (reason) {
                onReportDeletion(reason);
              } else {
                setErrorMessage("값이 비어있습니다.");
              }
            }
          }}
        >
          신고
        </LabelButton>
      </Style.ReportButtonWrapper>
    </Style.RootContainer>
  );
};

export default ReportModal;
