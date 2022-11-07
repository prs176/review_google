import { Review } from "../../model/review";
import * as Style from "./styled/ReviewCard";
import * as Style2 from "./styled/RatingScoreCard";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import React, { useState } from "react";
import CustomTextareaAutosize from "./styled/CustomTextareaAutosize";
import CustomLinearProgress from "./styled/CustomLinearProgress";
import { Rating } from "@mui/material";
import { Score } from "../../model/score";
import { ErrorText } from "../../styled/Common";

interface Props {
  review: Review;
  onDone: (
    reviewId: number,
    title: string,
    content: string,
    raiting: number,
    scores: Score[]
  ) => void;
}

const EditReviewCard = ({ review, onDone }: Props): JSX.Element => {
  const [title, setTitle] = useState<string>(review.title);
  const [content, setContent] = useState<string>(review.content);
  const [raiting, setRaiting] = useState<number>(review.raiting);
  const [scoreName1, setScoreName1] = useState<string>(
    (review.scores[0] && review.scores[0].name) || ""
  );
  const [scoreName2, setScoreName2] = useState<string>(
    (review.scores[1] && review.scores[1].name) || ""
  );
  const [scoreName3, setScoreName3] = useState<string>(
    (review.scores[2] && review.scores[2].name) || ""
  );
  const [score1, setScore1] = useState<number>((review.scores[0] && review.scores[0].score) || 0);
  const [score2, setScore2] = useState<number>((review.scores[1] && review.scores[1].score) || 0);
  const [score3, setScore3] = useState<number>((review.scores[2] && review.scores[2].score) || 0);

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value);
  const onChangeRating = (e: React.SyntheticEvent<Element, Event>, value: number | null) =>
    setRaiting(value || 0);
  const onChangeScoreName1 = (e: React.ChangeEvent<HTMLInputElement>) =>
    setScoreName1(e.target.value);
  const onChangeScoreName2 = (e: React.ChangeEvent<HTMLInputElement>) =>
    setScoreName2(e.target.value);
  const onChangeScoreName3 = (e: React.ChangeEvent<HTMLInputElement>) =>
    setScoreName3(e.target.value);
  const onChangeScore1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setScore1(0);
    }
    let value = Number(e.target.value);
    if (value) {
      setScore1(value > 100 ? 100 : value);
    }
  };
  const onChangeScore2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setScore2(0);
    }
    let value = Number(e.target.value);
    if (value) {
      setScore2(value > 100 ? 100 : value);
    }
  };
  const onChangeScore3 = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setScore3(0);
    }
    let value = Number(e.target.value);
    if (value) {
      setScore3(value > 100 ? 100 : value);
    }
  };

  const [errorMessage, setErrorMessage] = useState("");

  return (
    <Style.RootContainer>
      <Style.ContentContainer>
        <Style.ReviewContainer>
          <Style.UserInfoContainer>
            <Style.TitleInput
              type="text"
              placeholder="제목"
              onChange={onChangeTitle}
              value={title}
            ></Style.TitleInput>
          </Style.UserInfoContainer>
          <CustomTextareaAutosize placeholder="본문" onChange={onChangeContent} value={content} />
        </Style.ReviewContainer>
        <Style.Divider />
        <Style.ScoreContainer>
          <Style2.RootContainer>
            <Style2.RaitingContainer>
              <Style2.RatingName>평점</Style2.RatingName>
              <Rating
                value={raiting}
                onChange={onChangeRating}
                icon={
                  <Style2.IconWrapper>
                    <StarIcon fontSize="large" />
                  </Style2.IconWrapper>
                }
                emptyIcon={<StarBorderIcon fontSize="large" />}
              ></Rating>
              <Style2.RatingGuideText>{raiting}점</Style2.RatingGuideText>
            </Style2.RaitingContainer>

            <Style2.ScoreContainer>
              <Style2.ScoreNameInput
                placeholder="점수1"
                value={scoreName1}
                onChange={onChangeScoreName1}
              />
              <CustomLinearProgress variant="determinate" value={score1} />
              <Style2.ScoreWrapper>
                <Style2.ScoreInput placeholder="???" value={score1} onChange={onChangeScore1} />
                <Style2.PercentageText>%</Style2.PercentageText>
              </Style2.ScoreWrapper>
            </Style2.ScoreContainer>

            <Style2.ScoreContainer>
              <Style2.ScoreNameInput
                placeholder="점수2"
                value={scoreName2}
                onChange={onChangeScoreName2}
              />
              <CustomLinearProgress variant="determinate" value={score2} />
              <Style2.ScoreWrapper>
                <Style2.ScoreInput placeholder="???" value={score2} onChange={onChangeScore2} />
                <Style2.PercentageText>%</Style2.PercentageText>
              </Style2.ScoreWrapper>
            </Style2.ScoreContainer>

            <Style2.ScoreContainer>
              <Style2.ScoreNameInput
                placeholder="점수3"
                value={scoreName3}
                onChange={onChangeScoreName3}
              />
              <CustomLinearProgress variant="determinate" value={score3} />
              <Style2.ScoreWrapper>
                <Style2.ScoreInput placeholder="???" value={score3} onChange={onChangeScore3} />
                <Style2.PercentageText>%</Style2.PercentageText>
              </Style2.ScoreWrapper>
            </Style2.ScoreContainer>
          </Style2.RootContainer>
        </Style.ScoreContainer>
      </Style.ContentContainer>
      <Style.ToolContainer>
        <div></div>
        <Style.ButtonErrorMessageContainer>
          <ErrorText display={errorMessage ? "visible" : "hidden"}>{errorMessage}</ErrorText>
          <Style.DoneButton
            onClick={() => {
              if (title && content && raiting) {
                const scores = [];
                if (scoreName1) {
                  scores.push({ name: scoreName1, score: score1 });
                }
                if (scoreName2) {
                  scores.push({ name: scoreName2, score: score2 });
                }
                if (scoreName3) {
                  scores.push({ name: scoreName3, score: score3 });
                }
                onDone(review.id, title, content, raiting, scores);
              } else {
                setErrorMessage("값이 비어있습니다.");
              }
            }}
          >
            완료
          </Style.DoneButton>
        </Style.ButtonErrorMessageContainer>
      </Style.ToolContainer>
    </Style.RootContainer>
  );
};

export default EditReviewCard;
