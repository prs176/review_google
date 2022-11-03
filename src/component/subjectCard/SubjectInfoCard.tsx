import { Category, CategoryToNumber, Subject } from "../../model/subject";
import * as Style from "./styled/SubjectCard";

interface Props {
  subject: Subject;
}

const SubjectInfoCard = ({ subject }: Props): JSX.Element => {
  return (
    <>
      <Style.CategoryContainer>
        <Style.CategoryBar category={subject.category} />
        <Style.CategoryText>
          {Category[CategoryToNumber[subject.category] as keyof typeof Category]}
        </Style.CategoryText>
      </Style.CategoryContainer>
      <Style.Title>{subject.title}</Style.Title>
      <Style.From>{subject.from}</Style.From>
      <Style.CountWrapper>
        <Style.Count>리뷰 수 {subject.count}</Style.Count>
      </Style.CountWrapper>
    </>
  );
};
export default SubjectInfoCard;
