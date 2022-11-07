import { useNavigate } from "react-router-dom";
import { Subject } from "../../model/subject";
import * as Style from "./styled/SubjectCard";
import SubjectInfoCard from "./SubjectInfoCard";

interface Props {
  cursor: "pointer" | "auto";
  subject: Subject;
}

const SubjectCard = ({ cursor, subject }: Props): JSX.Element => {
  const navigate = useNavigate();

  return (
    <Style.RootContainer
      cursor={cursor}
      onClick={() => {
        if (cursor === "pointer") {
          navigate(`/detail_subject/${subject.id}`);
        }
      }}
    >
      <Style.Image src={subject.image} />
      <SubjectInfoCard subject={subject} />
    </Style.RootContainer>
  );
};

export default SubjectCard;
