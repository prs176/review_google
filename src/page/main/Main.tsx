import { useState } from "react";
import Profile from "../../component/header/Profile";
import Logo from "../../component/logo/Logo";
import { User } from "../../model/user";
import * as Style from "./styled/Main";

const Main = (): JSX.Element => {
  const [user, setUser] = useState<User>({
    idx: 0,
    name: "로미",
    birth: "2013년 9월 10일",
    id: "romicat77@gmail.com",
  });
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  return (
    <Style.RootContainer>
      <Style.ProfileWrapper>
        <Profile userId={user.id} isLoggedIn={isLoggedIn}></Profile>
      </Style.ProfileWrapper>
      <Style.SearchContainer>
        <Style.LogoWrapper>
          <Logo type="big"></Logo>
        </Style.LogoWrapper>
        <Style.SearchBar placeholder="리뷰 주제를 입력하세요"></Style.SearchBar>
        <Style.ShowAllButtonWrapper>
          <Style.ShowAllButton onClick={() => {}}>전체보기</Style.ShowAllButton>
        </Style.ShowAllButtonWrapper>
      </Style.SearchContainer>
    </Style.RootContainer>
  );
};

export default Main;
