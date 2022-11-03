import { Category, CategoryToNumber } from "../../model/subject";
import * as Style from "./styled/EditSubjectCard";
import { CategoryBar, Image } from "./styled/SubjectCard";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useState } from "react";

interface Props {
  onAdd: () => void;
}

const EditSubjectCard = ({ onAdd }: Props): JSX.Element => {
  const categories = Object.keys(CategoryToNumber)
    .map((category) => Number(category))
    .filter((cateogory) => !isNaN(cateogory));

  const [image, setImage] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
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

  return (
    <Style.RootContainer>
      <label htmlFor="file">
        <Style.ImageInputLabel>
          {image ? (
            <Image src={image} />
          ) : (
            <Style.ImageInputIconWrapper>
              <CameraAltIcon />
            </Style.ImageInputIconWrapper>
          )}
        </Style.ImageInputLabel>
      </label>
      <Style.ImageInput
        id="file"
        type="file"
        accept="image/jpg, image/png, image/jpeg"
        onChange={onChangeFile}
      />
      <Style.CategoryContainer>
        <CategoryBar category={category} />
        <Style.CategorySelect onChange={onChangeCategory} value={category}>
          {categories.map((category) => (
            <option value={category}>
              {Category[CategoryToNumber[category] as keyof typeof Category]}
            </option>
          ))}
        </Style.CategorySelect>
      </Style.CategoryContainer>
      <Style.TitleInput type="text" placeholder="제목" onChange={onChangeTitle} value={title} />
      <Style.FromInput
        type="text"
        placeholder="제작/배급/소유"
        onChange={onChangeFrom}
        value={from}
      />
      <Style.ToolWrapper>
        <Style.DoneButton onClick={onAdd}>완료</Style.DoneButton>
      </Style.ToolWrapper>
    </Style.RootContainer>
  );
};

export default EditSubjectCard;
