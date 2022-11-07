import { Category, CategoryToNumber } from "../../model/subject";
import * as Style from "./styled/EditSubjectInfoCard";
import { CategoryBar } from "./styled/SubjectCard";

interface Props {
  category: CategoryToNumber;
  title: string;
  from: string;
  onChangeCategory: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeFrom: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EditSubjectInfoCard = ({
  category,
  title,
  from,
  onChangeCategory,
  onChangeTitle,
  onChangeFrom,
}: Props): JSX.Element => {
  const categories = Object.keys(CategoryToNumber)
    .map((category) => Number(category))
    .filter((cateogory) => !isNaN(cateogory));

  return (
    <>
      <Style.CategoryContainer>
        <CategoryBar category={category} />
        <Style.CategorySelect onChange={onChangeCategory} value={category}>
          {categories.map((category) => (
            <option key={category} value={category}>
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
    </>
  );
};

export default EditSubjectInfoCard;
