import { IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import AuthContainer from "../../component/authContainer/AuthContainer";
import LabelButton from "../../component/labelButton/LabelButton";
import TextField from "../../component/textField/TextField";
import * as Style from "./styled/RegisterPage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postRegister } from "../../api/api/user";
import { MessageResponse } from "../../api/response/response";
import { AxiosError } from "axios";
import { ErrorText } from "../../styled/Common";

const RegisterPage = (): JSX.Element => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const onChangeBirth = (e: React.ChangeEvent<HTMLInputElement>) => setBirth(e.target.value);

  const [errorMessage, setErrorMessage] = useState("");

  const onRegister = async () => {
    if (!(email && password && name && birth.length)) {
      setErrorMessage("값이 비어 있습니다.");
      return;
    }
    if (birth.length > 10) {
      setErrorMessage("생년월일은 년 4자, 월 2자, 일2자 이내로 입력해주세요");
      return;
    }
    try {
      await postRegister({ email, password, name, birth });
      if (window.history.state) {
        navigate(-1);
      } else {
        navigate("/login", { replace: true });
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
        <Style.ToolContainer>
          <IconButton
            onClick={() => {
              if (window.history.state) {
                navigate(-1);
              } else {
                navigate("/login");
              }
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
        </Style.ToolContainer>
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
          <TextField label="성명" placeholder="성명" value={name} onChange={onChangeName} />
          <TextField
            type="date"
            label="생년월일"
            placeholder="생년월일"
            value={birth}
            onChange={onChangeBirth}
          />
        </Style.InputContainer>
        <Style.ButtonConatiner>
          <ErrorText display={errorMessage ? "visible" : "hidden"}>{errorMessage}</ErrorText>
          <LabelButton onClick={onRegister}>회원가입</LabelButton>
        </Style.ButtonConatiner>
      </AuthContainer>
    </Style.RootContainer>
  );
};

export default RegisterPage;
