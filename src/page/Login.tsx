import AuthContainer from "../component/AuthContainer";
import LabelButton from "../component/LabelButton";
import Logo from "../component/Logo";
import TextField from "../component/TextField";
import {
  InputContainer,
  RootContainer,
  RegisterText,
  UnderlineButton,
  RegisterTextContainer,
  ButtonConatiner,
  LogoWrapper,
} from "./styled/Login";

const Login = (): JSX.Element => {
  return (
    <RootContainer>
      <AuthContainer>
        <LogoWrapper>
          <Logo type="big" />
        </LogoWrapper>
        <InputContainer>
          <TextField label="아이디" placeholder="아이디"></TextField>
          <TextField label="비밀번호" placeholder="비밀번호"></TextField>
        </InputContainer>
        <ButtonConatiner>
          <LabelButton>로그인</LabelButton>
          <RegisterTextContainer>
            <RegisterText>계정이 없으신가요?</RegisterText>
            <UnderlineButton>회원가입</UnderlineButton>
          </RegisterTextContainer>
        </ButtonConatiner>
      </AuthContainer>
    </RootContainer>
  );
};

export default Login;
