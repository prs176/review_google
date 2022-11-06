import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { removeCookie } from "../../api/token/cookie";
import Logo from "../logo/Logo";
import * as Style from "./styled/Header";

interface Props {
  type: "common" | "logout";
  isLoggedIn: boolean;
  value?: string;
}

const Header = ({ isLoggedIn, type, value }: Props): JSX.Element => {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState(value);

  const onChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => setKeyword(e.target.value);

  return (
    <div>
      <Style.RootContainer>
        <Logo type="small"></Logo>
        <Style.ToolContainer>
          {type === "common" ? (
            <Style.SearchInput
              placeholder="리뷰 주제를 입력하세요"
              value={keyword}
              onChange={onChangeKeyword}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  navigate(`/search_subject/${keyword}`);
                }
              }}
            ></Style.SearchInput>
          ) : (
            <Style.LogoutButton
              onClick={() => {
                removeCookie("token");
                if (window.history.state) {
                  navigate(-1);
                } else {
                  navigate("/", { replace: true });
                }
              }}
            >
              로그아웃
            </Style.LogoutButton>
          )}
          {isLoggedIn ? <Style.LoggedInProfile /> : <Style.LoggedOutProfile />}
        </Style.ToolContainer>
      </Style.RootContainer>
      <Style.Divider></Style.Divider>
    </div>
  );
};

export default Header;
