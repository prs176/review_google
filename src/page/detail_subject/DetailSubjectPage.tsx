import { IconButton } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Header from "../../component/header/Header";
import ReviewCard from "../../component/reviewCard/ReviewCard";
import { Review } from "../../model/review";
import { CategoryToNumber, DetailSubject } from "../../model/subject";
import { User } from "../../model/user";
import * as Style from "./styled/DetailSubjectPage";
import SubjectCard from "../../component/subjectCard/SubjectCard";
import RatingScoreCard from "../../component/reviewCard/RatingScoreCard";
import EditReviewCard from "../../component/reviewCard/EditReviewCard";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useParams } from "react-router-dom";
import { getToken } from "../../api/token/token";
import { getMyUser } from "../../api/api/user";
import { getDetailSubject } from "../../api/api/subject";
import {
  deleteReview,
  getReviews,
  postReview,
  postReviewBad,
  postReviewGood,
  postReviewNotBad,
  postReviewNotGood,
  putReview,
} from "../../api/api/review";
import { AxiosError } from "axios";
import { MessageResponse } from "../../api/response/response";
import { Score } from "../../model/score";
import { postExtractKeyword } from "../../api/api/keyword";

const DetailSubjectPage = (): JSX.Element => {
  const { id } = useParams();

  const [user, setUser] = useState<User>();
  const [subject, setSubject] = useState<DetailSubject>({
    subject: {
      id: 0,
      image: "",
      category: CategoryToNumber.FOOD,
      title: "",
      from: "",
      count: 0,
    },
    raiting: 0,
    scores: [],
    keywords: [],
  });
  const [reviews, setReviews] = useState<Review[]>([]);
  const [sort, setSort] = useState<"recent" | "popular">("popular");
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
    } catch (err) {}
  }, [id]);
  const onFetchReviews = useCallback(async () => {
    try {
      const reviews = await getReviews(parseInt(id!, 10), sort);
      setReviews(reviews);
    } catch (err) {}
  }, [id, sort]);
  const onAdd = async (title: string, content: string, raiting: number, scores: Score[]) => {
    try {
      var keywords = await postExtractKeyword({ document: title + ". " + content });
      await postReview({
        subjectId: parseInt(id!, 10),
        title,
        content,
        raiting,
        scores,
        keywords,
      });

      setSort("recent");
      const reviews = await getReviews(parseInt(id!, 10), "recent");
      setReviews(reviews);

      const subject = await getDetailSubject(parseInt(id!, 10));
      setSubject(subject);
    } catch (err) {
      const axiosError = err as AxiosError;
      if (axiosError.response) {
        alert((axiosError.response.data as MessageResponse).message);
      }
    }
  };
  const onEdit = async (
    reviewId: number,
    title: string,
    content: string,
    raiting: number,
    scores: Score[]
  ) => {
    try {
      var keywords = await postExtractKeyword({ document: title + ". " + content });
      await putReview(reviewId, {
        subjectId: parseInt(id!, 10),
        title,
        content,
        raiting,
        scores,
        keywords,
      });

      const reviews = await getReviews(parseInt(id!, 10), sort);
      setReviews(reviews);

      const subject = await getDetailSubject(parseInt(id!, 10));
      setSubject(subject);
    } catch (err) {
      const axiosError = err as AxiosError;
      console.log(axiosError);
      if (axiosError.response) {
        alert((axiosError.response.data as MessageResponse).message);
      }
    }
  };
  const onGood = async (reviewId: number) => {
    try {
      await postReviewGood(reviewId);

      const reviews = await getReviews(parseInt(id!, 10), sort);
      setReviews(reviews);
    } catch (err) {
      const axiosError = err as AxiosError;
      if (axiosError.response) {
        alert((axiosError.response.data as MessageResponse).message);
      }
    }
  };
  const onNotGood = async (reviewId: number) => {
    try {
      await postReviewNotGood(reviewId);

      const reviews = await getReviews(parseInt(id!, 10), sort);
      setReviews(reviews);
    } catch (err) {
      const axiosError = err as AxiosError;
      if (axiosError.response) {
        alert((axiosError.response.data as MessageResponse).message);
      }
    }
  };
  const onBad = async (reviewId: number) => {
    try {
      await postReviewBad(reviewId);

      const reviews = await getReviews(parseInt(id!, 10), sort);
      setReviews(reviews);
    } catch (err) {
      const axiosError = err as AxiosError;
      if (axiosError.response) {
        alert((axiosError.response.data as MessageResponse).message);
      }
    }
  };
  const onNotBad = async (reviewId: number) => {
    try {
      await postReviewNotBad(reviewId);

      const reviews = await getReviews(parseInt(id!, 10), sort);
      setReviews(reviews);
    } catch (err) {
      const axiosError = err as AxiosError;
      if (axiosError.response) {
        alert((axiosError.response.data as MessageResponse).message);
      }
    }
  };
  const onDelete = async (reviewId: number) => {
    try {
      await deleteReview(reviewId);

      const reviews = await getReviews(parseInt(id!, 10), sort);
      setReviews(reviews);

      const subject = await getDetailSubject(parseInt(id!, 10));
      setSubject(subject);
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

  useEffect(() => {
    onFetchReviews();
  }, [onFetchReviews]);

  return (
    <Style.RootContainer>
      <Header isLoggedIn={user ? true : false} type="common" />
      <Style.BodyContainer>
        <Style.SubjectContainer>
          <Style.SubjectWrapper>
            <SubjectCard cursor="auto" subject={subject.subject} />
          </Style.SubjectWrapper>

          <Style.Divider />

          <Style.SubjectInfoContainer>
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
            <Style.CommonRatingScoreCardWrapper>
              {reviews.length ? (
                <RatingScoreCard
                  rating={subject.raiting}
                  scores={
                    isExtendedScores && subject.scores.length > 3
                      ? subject.scores
                      : subject.scores.slice(0, 3)
                  }
                ></RatingScoreCard>
              ) : (
                <></>
              )}
            </Style.CommonRatingScoreCardWrapper>
          </Style.SubjectInfoContainer>

          <Style.SubjectInfoContainer>
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
            <Style.KeywordContainer>
              {subject.keywords.map((keyword, id) => {
                if (!isExtendedKeywords && id > 5) {
                  return <div key={id}></div>;
                }
                return (
                  <Style.KeywordWrapper key={id}>
                    {keyword.word} <Style.Count>{keyword.freq}번 언급</Style.Count>
                  </Style.KeywordWrapper>
                );
              })}
            </Style.KeywordContainer>
          </Style.SubjectInfoContainer>
        </Style.SubjectContainer>
        <Style.ContentContainer>
          <Style.ToolContainer>
            <Style.ButtonConatiner>
              {sort === "popular" ? (
                <>
                  <Style.SelectedToolButton
                    onClick={() => {
                      setSort("popular");
                    }}
                  >
                    인기순
                  </Style.SelectedToolButton>
                  <Style.ButtonDivider />
                  <Style.ToolButton
                    onClick={() => {
                      setSort("recent");
                    }}
                  >
                    최신순
                  </Style.ToolButton>
                </>
              ) : (
                <>
                  <Style.ToolButton
                    onClick={() => {
                      setSort("popular");
                    }}
                  >
                    인기순
                  </Style.ToolButton>
                  <Style.ButtonDivider />
                  <Style.SelectedToolButton
                    onClick={() => {
                      setSort("recent");
                    }}
                  >
                    최신순
                  </Style.SelectedToolButton>
                </>
              )}
            </Style.ButtonConatiner>
            <Style.ButtonConatiner>
              <IconButton
                onClick={() => {
                  if (!getToken()) {
                    alert("로그인이 필요한 서비스입니다.");
                    return;
                  }
                  setIsEdit(true);
                }}
              >
                <AddIcon />
              </IconButton>
            </Style.ButtonConatiner>
          </Style.ToolContainer>

          <Style.ReviewContainer>
            {isEdit && editedReviewId === 0 && (
              <Style.ReviewCardWrapper>
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
                  onDone={(_, title, content, raiting, scores) => {
                    onAdd(title, content, raiting, scores);
                    setIsEdit(false);
                  }}
                />
              </Style.ReviewCardWrapper>
            )}
            {reviews.map((review) => {
              return (
                <Style.ReviewCardWrapper key={review.id}>
                  <ReviewCard
                    key={review.id}
                    type={review.id === editedReviewId ? "edit" : "common"}
                    review={review}
                    onEdit={() => {
                      setEditedReviewId(review.id);
                      setIsEdit(true);
                    }}
                    onDone={(reviewId, title, content, raiting, scores) => {
                      onEdit(reviewId, title, content, raiting, scores);
                      setEditedReviewId(0);
                      setIsEdit(false);
                    }}
                    onGood={(reviewId) => {
                      onGood(reviewId);
                    }}
                    onNotGood={(reviewId) => {
                      onNotGood(reviewId);
                    }}
                    onBad={(reviewId) => {
                      onBad(reviewId);
                    }}
                    onNotBad={(reviewId) => {
                      onNotBad(reviewId);
                    }}
                    onDelete={(reviewId) => {
                      onDelete(reviewId);
                    }}
                  />
                </Style.ReviewCardWrapper>
              );
            })}
          </Style.ReviewContainer>
        </Style.ContentContainer>
      </Style.BodyContainer>
    </Style.RootContainer>
  );
};

export default DetailSubjectPage;
