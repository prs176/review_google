import { IconButton } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Header from "../../component/header/Header";
import ReviewCard from "../../component/reviewCard/ReviewCard";
import { Review } from "../../model/review";
import { CategoryToNumber, DetailSubject } from "../../model/subject";
import { User } from "../../model/user";
import * as Style from "./styled/SubjectPage";
import SubjectCard from "../../component/subjectCard/SubjectCard";
import CommonRatingScoreCard from "../../component/reviewCard/CommonRatingScoreCard";
import EditReviewCard from "../../component/reviewCard/EditReviewCard";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useParams } from "react-router-dom";
import { getToken } from "../../api/token/token";
import { getMyUser } from "../../api/api/user";
import { getDetailSubject } from "../../api/api/subject";
import { getReviews } from "../../api/api/review";

const DetailSubjectPage = (): JSX.Element => {
  const { id } = useParams();

  const [user, setUser] = useState<User>();
  const [subject, setSubject] = useState<DetailSubject>();
  const [reviews, setReviews] = useState<Review[]>();
  const [sort, setSort] = useState<"recent" | "popular">("recent");
  const [editedReviewId, setEditedReviewId] = useState<number>(0);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isExtendedScores, setIsExtendedScores] = useState<boolean>(false);
  const [isExtendedKeywords, setIsExtendedKeywords] = useState<boolean>(false);

  const setup = useCallback(async () => {
    try {
      if (getToken()) {
        const user = await getMyUser();
        setUser(user);
      }

      const subject = await getDetailSubject(parseInt(id!, 10));
      setSubject(subject);

      const reviews = await getReviews(parseInt(id!, 10), sort);
      setReviews(reviews);
    } catch (err) {}
  }, [id, sort]);

  useEffect(() => {
    setup();
  }, [setup]);

  return (
    <Style.RootContainer>
      <Header isLoggedIn={user ? true : false} type="common" />
      <Style.BodyContainer>
        <Style.SubjectContainer>
          <Style.SubjectWrapper>
            <SubjectCard subject={subject!.subject} />
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
              rating={subject!.raiting}
              scores={
                isExtendedScores && subject!.scores.length > 3
                  ? subject!.scores.slice(0, 3)
                  : subject!.scores
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
          {subject!.keywords.map((keyword, idx) => {
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
          {reviews!.map((review) => {
            return (
              <Style.ReviewCardWrapper>
                <ReviewCard
                  key={review.id}
                  type={review.id === editedReviewId ? "edit" : "common"}
                  review={review}
                  onEdit={() => {
                    setEditedReviewId(review.id);
                    setIsEdit(true);
                  }}
                  onDone={() => {
                    setEditedReviewId(0);
                    setIsEdit(false);
                  }}
                />
              </Style.ReviewCardWrapper>
            );
          })}
          {isEdit && editedReviewId === 0 && (
            <EditReviewCard
              review={{
                id: 0,
                user: { id: 0, email: "" },
                title: "",
                content: "",
                raiting: 0,
                scores: [],
                good: 0,
                bad: 0,
                isMine: false,
                isGood: false,
                isBad: false,
              }}
              onDone={() => {
                setEditedReviewId(0);
                setIsEdit(false);
              }}
            />
          )}
        </Style.ReviewContainer>
      </Style.BodyContainer>
    </Style.RootContainer>
  );
};

export default DetailSubjectPage;
