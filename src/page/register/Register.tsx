import { IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import AuthContainer from "../../component/authContainer/AuthContainer";
import LabelButton from "../../component/labelButton/LabelButton";
import TextField from "../../component/textField/TextField";
import * as Style from "./styled/Register";

const Register = (): JSX.Element => {
  return (
    <Style.RootContainer>
      <AuthContainer>
        <Style.ToolContainer>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
        </Style.ToolContainer>
        <Style.InputContainer>
          <TextField label="아이디" placeholder="아이디"></TextField>
          <TextField label="비밀번호" placeholder="비밀번호"></TextField>
          <TextField label="이름" placeholder="이름"></TextField>
          <TextField label="생년월일" placeholder="생년월일"></TextField>
          <TextField label="한 줄 소개" placeholder="한 줄 소개"></TextField>
        </Style.InputContainer>
        <Style.ButtonConatiner>
          <LabelButton>회원가입</LabelButton>
        </Style.ButtonConatiner>
      </AuthContainer>
    </Style.RootContainer>
  );
};

export default Register;
