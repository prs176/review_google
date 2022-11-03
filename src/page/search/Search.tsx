import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import Header from "../../component/header/Header";
import SubjectCard from "../../component/subjectCard/SubjectCard";
import { CategoryToNumber, Subject } from "../../model/subject";
import * as Style from "./styled/Main";
import EditSubjectCard from "../../component/subjectCard/EditSubjectCard";

const Search = (): JSX.Element => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [subjects, setSubject] = useState<Subject[]>([
    {
      idx: 0,
      image: "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86217/86217_1000.jpg",
      category: CategoryToNumber.MOVIE,
      title: "아바타 리마스터링",
      from: "제임스 카메론",
      count: 100,
    },
  ]);

  return (
    <>
      <Header type="common"></Header>
      <Style.ToolContainer>
        <IconButton
          onClick={() => {
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
        {subjects.map((subject) => (
          <SubjectCard key={subject.idx} subject={subject} />
        ))}
        {isEdit && (
          <EditSubjectCard
            onAdd={() => {
              setIsEdit(false);
            }}
          />
        )}
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

export default Search;
