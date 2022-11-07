import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useCallback, useEffect, useState } from "react";
import Header from "../../component/header/Header";
import SubjectCard from "../../component/subjectCard/SubjectCard";
import { CategoryToNumber, Subject } from "../../model/subject";
import * as Style from "./styled/SearchSubjectPage";
import EditSubjectCard from "../../component/subjectCard/EditSubjectCard";
import { useNavigate, useParams } from "react-router-dom";
import { getSubjects, postImage, postSubject } from "../../api/api/subject";
import { getMyUser } from "../../api/api/user";
import { User } from "../../model/user";
import { MessageResponse } from "../../api/response/response";
import { AxiosError } from "axios";
import { getToken } from "../../api/token/token";

const SearchSubjectPage = (): JSX.Element => {
  const navigate = useNavigate();
  var { keyword } = useParams();

  const [user, setUser] = useState<User>();
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const setup = useCallback(async () => {
    try {
      if (getToken()) {
        const user = await getMyUser();
        setUser(user);
      }

      const subjects = await getSubjects(encodeURIComponent(keyword || ""));
      setSubjects(subjects);
    } catch (err) {}
  }, [keyword]);
  const onAdd = async (file: File, category: CategoryToNumber, title: string, from: string) => {
    try {
      const image = await postImage(file);
      await postSubject({ image, category, title, from });

      const subjects = await getSubjects(keyword || "");
      setSubjects(subjects);

      keyword = title;
      const url = encodeURIComponent(title);
      navigate(`/search_subject/${url}`);
    } catch (err) {
      const axiosError = err as AxiosError;
      if (axiosError.response) {
        alert((axiosError.response.data as MessageResponse).message);
      }
    }
  };

  useEffect(() => {
    setup();
  }, [setup]);

  return (
    <>
      <Header value={keyword} isLoggedIn={user ? true : false} type="common"></Header>
      <Style.ToolContainer>
        <IconButton
          onClick={() => {
            if (!getToken()) {
              alert("로그인이 필요한 서비스입니다.");
              navigate("/login");
              return;
            }
            if (isEdit) {
              return;
            }
            setIsEdit(true);
          }}
        >
          <AddIcon />
        </IconButton>
      </Style.ToolContainer>
      <Style.SubjectContainer>
        {isEdit && (
          <EditSubjectCard
            onAdd={(file, category, title, from) => {
              setIsEdit(false);
              onAdd(file, category, title, from);
            }}
          />
        )}
        {subjects.map((subject) => (
          <SubjectCard cursor="pointer" key={subject.id} subject={subject} />
        ))}
        {!subjects.length && !isEdit && (
          <Style.PlaceHolder>
            검색 결과가 없습니다.
            <br />+ 버튼을 통해 새로운 페이지를 만들 수 있습니다.
          </Style.PlaceHolder>
        )}
      </Style.SubjectContainer>
    </>
  );
};

export default SearchSubjectPage;
