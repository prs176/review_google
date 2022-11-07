import { CategoryToNumber } from "../../model/subject";
import * as Style from "./styled/EditSubjectCard";
import { Image } from "./styled/SubjectCard";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useState } from "react";
import { ErrorText } from "../../styled/Common";
import EditSubjectInfoCard from "./EditSubjectInfoCard";
import ImageInput from "./ImageInput";

interface Props {
  onAdd: (file: File, category: CategoryToNumber, title: string, from: string) => void;
}

const EditSubjectCard = ({ onAdd }: Props): JSX.Element => {
  const [image, setImage] = useState<string>("");
  const [file, setFile] = useState<File>();
  const [category, setCategory] = useState<CategoryToNumber>(CategoryToNumber.FOOD);
  const [title, setTitle] = useState<string>("");
  const [from, setFrom] = useState<string>("");

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

  const [errorMessage, setErrorMessage] = useState("");

  return (
    <Style.RootContainer>
      <ImageInput image={image} onChangeFile={onChangeFile} />
      <EditSubjectInfoCard
        category={category}
        onChangeCategory={onChangeCategory}
        title={title}
        onChangeTitle={onChangeTitle}
        from={from}
        onChangeFrom={onChangeFrom}
      />
      <Style.ToolWrapper>
        <ErrorText display={errorMessage ? "visible" : "hidden"}>{errorMessage}</ErrorText>
        <Style.DoneButton
          onClick={() => {
            if (file && category && title && from) {
              onAdd(file!, category, title, from);
            } else {
              setErrorMessage("값이 비어있습니다.");
            }
          }}
        >
          완료
        </Style.DoneButton>
      </Style.ToolWrapper>
    </Style.RootContainer>
  );
};

export default EditSubjectCard;
