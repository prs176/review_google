import { useNavigate } from "react-router-dom";
import { Subject } from "../../model/subject";
import * as Style from "./styled/SubjectCard";
import SubjectInfoCard from "./SubjectInfoCard";

interface Props {
  subject: Subject;
}

const SubjectCard = ({ subject }: Props): JSX.Element => {
  const navigate = useNavigate();

  return (
    <Style.RootContainer onClick={() => navigate(`/detail_subject/${subject.id}`)}>
      <Style.Image src={subject.image} />
      <SubjectInfoCard subject={subject} />
    </Style.RootContainer>
  );
};

export default SubjectCard;
