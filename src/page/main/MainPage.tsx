import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyUser } from "../../api/api/user";
import { getToken } from "../../api/token/token";
import Profile from "../../component/header/Profile";
import Logo from "../../component/logo/Logo";
import { User } from "../../model/user";
import * as Style from "./styled/MainPage";

const MainPage = (): JSX.Element => {
  const navigate = useNavigate();

  const [user, setUser] = useState<User>();
  const [keyword, setKeyword] = useState("");

  const setup = async () => {
    try {
      if (getToken()) {
        const user = await getMyUser();
        setUser(user);
      }
    } catch (err) {}
  };
  const onChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => setKeyword(e.target.value);

  useEffect(() => {
    setup();
  }, []);

  return (
    <Style.RootContainer>
      <Style.ProfileWrapper>
        <Profile email={user && user.email}></Profile>
      </Style.ProfileWrapper>
      <Style.SearchContainer>
        <Style.LogoWrapper>
          <Logo type="big"></Logo>
        </Style.LogoWrapper>
        <Style.SearchBar
          placeholder="리뷰 주제를 입력하세요"
          value={keyword}
          onChange={onChangeKeyword}
          onKeyDown={(e) => {
            if (e.key === "Enter" && keyword) {
              navigate(`/search_subject/${keyword}`);
            }
          }}
        ></Style.SearchBar>
        <Style.ShowAllButtonWrapper>
          <Style.ShowAllButton onClick={() => navigate(`/search_subject/${""}`)}>
            전체보기
          </Style.ShowAllButton>
        </Style.ShowAllButtonWrapper>
      </Style.SearchContainer>
    </Style.RootContainer>
  );
};

export default MainPage;
