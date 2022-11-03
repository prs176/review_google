import { IconButton } from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Header from "../../component/header/Header";
import ReviewCard from "../../component/reviewCard/ReviewCard";
import { Review, Score } from "../../model/review";
import { CategoryToNumber, Subject } from "../../model/subject";
import { User } from "../../model/user";
import { Keyword } from "../../model/keyword";
import * as Style from "./styled/DetailSubject";
import SubjectCard from "../../component/subjectCard/SubjectCard";
import CommonRatingScoreCard from "../../component/reviewCard/CommonRatingScoreCard";
import EditReviewCard from "../../component/reviewCard/EditReviewCard";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const DetailSubject = (): JSX.Element => {
  const [user, setUser] = useState<User>({
    idx: 0,
    name: "로미",
    birth: "2013년 9월 10일",
    id: "romicat77@gmail.com",
  });
  const [isLoggedIn, setIsLoggedInt] = useState<boolean>(true);

  const [subject, setSubject] = useState<Subject>({
    idx: 0,
    image: "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86217/86217_1000.jpg",
    category: CategoryToNumber.MOVIE,
    title: "아바타 리마스터링",
    from: "제임스 카메론",
    count: 100,
  });
  const [subjectRating, setSubjectRating] = useState<number>(5);
  const [subjectScores, setSubjectScores] = useState<Score[]>([
    {
      idx: 0,
      reviewIdx: 0,
      name: "작품성",
      score: 5,
    },
  ]);
  const [keywords, setKeywords] = useState<Keyword[]>([
    { word: "로미", freq: 5 },
    { word: "부들부들", freq: 6 },
  ]);

  const [reviews, setReviews] = useState<Review[]>([
    {
      idx: 0,
      subjectIdx: 0,
      title: "옷장에서 잠자느라 못봄",
      userId: "romicat77@gmail.com",
      content:
        "This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77.",
      raiting: 4,
      scores: [
        {
          idx: 0,
          reviewIdx: 0,
          name: "작품성",
          score: 5,
        },
      ],
    },
  ]);

  const [editedReviewIdx, setEditedReviewIdx] = useState<number>(-1);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isExtendedScores, setIsExtendedScores] = useState<boolean>(false);
  const [isExtendedKeywords, setIsExtendedKeywords] = useState<boolean>(false);

  return (
    <Style.RootContainer>
      <Header isLoggedIn={isLoggedIn} type="common" />
      <Style.BodyContainer>
        <Style.SubjectContainer>
          <Style.SubjectWrapper>
            <SubjectCard subject={subject} />
          </Style.SubjectWrapper>

          <Style.Divider />

          <Style.SubjectToolContainer>
            <Style.Subtitle>전체 평균</Style.Subtitle>
            <IconButton
              onClick={() => {
                setIsExtendedScores(!isExtendedScores);
              }}
            >
              {isExtendedScores ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Style.SubjectToolContainer>
          <Style.ScoreWrapper>
            <CommonRatingScoreCard
              rating={subjectRating}
              scores={
                isExtendedScores && subjectScores.length > 3
                  ? subjectScores.slice(0, 3)
                  : subjectScores
              }
            ></CommonRatingScoreCard>
          </Style.ScoreWrapper>

          <Style.SubjectToolContainer>
            <Style.Subtitle>키워드</Style.Subtitle>
            <IconButton
              onClick={() => {
                setIsExtendedKeywords(!isExtendedKeywords);
              }}
            >
              {isExtendedKeywords ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Style.SubjectToolContainer>
          {keywords
            .sort((keyword1, keyword2) => keyword2.freq - keyword1.freq)
            .map((keyword, idx) => {
              if (isExtendedKeywords && idx > 2) {
                return <></>;
              }
              return (
                <Style.KeywordContainer>
                  {keyword.word} <Style.Count>{keyword.freq}번 언급</Style.Count>
                </Style.KeywordContainer>
              );
            })}
        </Style.SubjectContainer>

        <Style.ReviewContainer>
          <Style.ToolContainer>
            <Style.ButtonConatiner>
              <Style.SelectedToolButton>인기순</Style.SelectedToolButton>
              <Style.ButtonDivider />
              <Style.ToolButton>최신순</Style.ToolButton>
            </Style.ButtonConatiner>
            <Style.ButtonConatiner>
              <IconButton
                onClick={() => {
                  setIsEdit(true);
                }}
              >
                <AddIcon />
              </IconButton>
            </Style.ButtonConatiner>
          </Style.ToolContainer>
          {reviews.map((review) => {
            return (
              <Style.ReviewCardWrapper>
                <ReviewCard
                  key={review.idx}
                  type={review.idx === editedReviewIdx ? "edit" : "common"}
                  review={review}
                  onEdit={() => {
                    setEditedReviewIdx(review.idx);
                    setIsEdit(true);
                  }}
                  onDone={() => {
                    setEditedReviewIdx(-1);
                    setIsEdit(false);
                  }}
                />
              </Style.ReviewCardWrapper>
            );
          })}
          {isEdit && editedReviewIdx === -1 && (
            <EditReviewCard
              review={{
                idx: -1,
                subjectIdx: subject.idx,
                title: "",
                userId: user.id,
                content: "",
                raiting: 0,
                scores: [],
              }}
              onDone={() => {
                setEditedReviewIdx(-1);
                setIsEdit(false);
              }}
            />
          )}
        </Style.ReviewContainer>
      </Style.BodyContainer>
    </Style.RootContainer>
  );
};

export default DetailSubject;
