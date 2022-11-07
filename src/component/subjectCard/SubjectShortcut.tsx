import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Subject } from "../../model/subject";
import * as Style from "./styled/SubjectShortcut";
import SubjectInfoCard from "./SubjectInfoCard";

interface Props {
  subject: Subject;
}

const SubjectShortcut = ({ subject }: Props): JSX.Element => {
  const navigate = useNavigate();

  return (
    <Style.RootContainer>
      <div>
        <IconButton
          onClick={() => {
            navigate(`/detail_subject/${subject.id}`);
          }}
        >
          <ArrowBackIcon />
        </IconButton>
      </div>
      <div>
        <SubjectInfoCard subject={subject} />
      </div>
    </Style.RootContainer>
  );
};

export default SubjectShortcut;
