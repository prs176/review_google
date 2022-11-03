import { Subject } from "../../model/subject";
import * as Style from "./styled/SubjectCard";
import SubjectInfoCard from "./SubjectInfoCard";

interface Props {
  subject: Subject;
}

const SubjectCard = ({ subject }: Props): JSX.Element => {
  return (
    <Style.RootContainer>
      <Style.Image src={subject.image} />
      <SubjectInfoCard subject={subject} />
    </Style.RootContainer>
  );
};

export default SubjectCard;
