import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Logo from "./Logo";
import { Divider, RootContainer, SearchInput } from "./styled/Header";

const Header = (): JSX.Element => {
  return (
    <div>
      <RootContainer>
        <Logo type="small"></Logo>
        <div>
          <SearchInput></SearchInput>
          <IconButton>
            <HomeIcon />
          </IconButton>
        </div>
      </RootContainer>
      <Divider></Divider>
    </div>
  );
};

export default Header;
