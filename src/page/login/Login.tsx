import AuthContainer from "../../component/authContainer/AuthContainer";
import LabelButton from "../../component/labelButton/LabelButton";
import Logo from "../../component/logo/Logo";
import TextField from "../../component/textField/TextField";
import * as Style from "./styled/Login";

const Login = (): JSX.Element => {
  return (
    <Style.RootContainer>
      <AuthContainer>
        <Style.LogoWrapper>
          <Logo type="big" />
        </Style.LogoWrapper>
        <Style.InputContainer>
          <TextField label="아이디" placeholder="아이디"></TextField>
          <TextField label="비밀번호" placeholder="비밀번호"></TextField>
        </Style.InputContainer>
        <Style.ButtonConatiner>
          <LabelButton>로그인</LabelButton>
          <Style.RegisterTextContainer>
            <Style.RegisterText>계정이 없으신가요?</Style.RegisterText>
            <Style.UnderlineButton>회원가입</Style.UnderlineButton>
          </Style.RegisterTextContainer>
        </Style.ButtonConatiner>
      </AuthContainer>
    </Style.RootContainer>
  );
};

export default Login;
