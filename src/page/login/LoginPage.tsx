import { AxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../api/api/user";
import { MessageResponse } from "../../api/response/response";
import AuthContainer from "../../component/authContainer/AuthContainer";
import LabelButton from "../../component/labelButton/LabelButton";
import Logo from "../../component/logo/Logo";
import TextField from "../../component/textField/TextField";
import { ErrorText } from "../../styled/Common";
import * as Style from "./styled/LoginPage";

const LoginPage = (): JSX.Element => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const [errorMessage, setErrorMessage] = useState("");

  const onLogin = async () => {
    if (email === "" || password === "") {
      setErrorMessage("아이디와 비밀번호를 입력해주세요.");
      return;
    }
    try {
      await postLogin({ email, password });
      if (window.history.state) {
        navigate(-1);
      } else {
        navigate("/", { replace: true });
      }
    } catch (err) {
      const axiosError = err as AxiosError;
      if (axiosError.response) {
        setErrorMessage((axiosError.response.data as MessageResponse).message);
      }
    }
  };

  return (
    <Style.RootContainer>
      <AuthContainer>
        <Style.LogoWrapper>
          <Logo type="big" />
        </Style.LogoWrapper>
        <Style.InputContainer>
          <TextField
            type="email"
            label="아이디"
            placeholder="아이디"
            value={email}
            onChange={onChangeEmail}
          />
          <TextField
            type="password"
            label="비밀번호"
            placeholder="비밀번호"
            value={password}
            onChange={onChangePassword}
          />
        </Style.InputContainer>
        <Style.ButtonConatiner>
          <ErrorText display={errorMessage ? "visible" : "hidden"}>{errorMessage}</ErrorText>
          <LabelButton onClick={onLogin}>로그인</LabelButton>
          <Style.RegisterTextContainer>
            <Style.RegisterText>계정이 없으신가요?</Style.RegisterText>
            <Style.UnderlineButton onClick={() => navigate("/register")}>
              회원가입
            </Style.UnderlineButton>
          </Style.RegisterTextContainer>
        </Style.ButtonConatiner>
      </AuthContainer>
    </Style.RootContainer>
  );
};

export default LoginPage;
