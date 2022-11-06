import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import * as Style from "./styled/RatingScoreCard";
import { useState } from "react";
import CustomLinearProgress from "./styled/CustomLinearProgress";
import { Score } from "../../model/score";

interface Props {
  raiting: number;
  scores: Score[];
}

const EditRatingScoreCard = ({ raiting, scores }: Props): JSX.Element => {
  const [rating, setRating] = useState<number>(raiting);
  const [scoreName1, setScoreName1] = useState<string>((scores[0] && scores[0].name) || "");
  const [scoreName2, setScoreName2] = useState<string>((scores[1] && scores[1].name) || "");
  const [scoreName3, setScoreName3] = useState<string>((scores[2] && scores[2].name) || "");
  const [score1, setScore1] = useState<number>((scores[0] && scores[0].score) || 0);
  const [score2, setScore2] = useState<number>((scores[1] && scores[1].score) || 0);
  const [score3, setScore3] = useState<number>((scores[2] && scores[2].score) || 0);

  const onChangeRating = (e: React.SyntheticEvent<Element, Event>, value: number | null) =>
    setRating(value || 0);
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

  return (
    <>
      <Style.RatingScoreContainer>
        <Style.RatingName>평점</Style.RatingName>
        <Rating
          value={rating}
          onChange={onChangeRating}
          icon={
            <Style.IconWrapper>
              <StarIcon fontSize="large" />
            </Style.IconWrapper>
          }
          emptyIcon={<StarBorderIcon fontSize="large" />}
        ></Rating>
        <Style.RatingGuideText>{rating}점</Style.RatingGuideText>
      </Style.RatingScoreContainer>

      <Style.RatingScoreContainer>
        <Style.ScoreNameInput
          placeholder="점수1"
          value={scoreName1}
          onChange={onChangeScoreName1}
        />
        <CustomLinearProgress variant="determinate" value={score1} />
        <Style.ScoreContainer>
          <Style.ScoreInput placeholder="???" value={score1} onChange={onChangeScore1} />
          <Style.ScoreGuideText>%</Style.ScoreGuideText>
        </Style.ScoreContainer>
      </Style.RatingScoreContainer>

      <Style.RatingScoreContainer>
        <Style.ScoreNameInput
          placeholder="점수2"
          value={scoreName2}
          onChange={onChangeScoreName2}
        />
        <CustomLinearProgress variant="determinate" value={score2} />
        <Style.ScoreContainer>
          <Style.ScoreInput placeholder="???" value={score2} onChange={onChangeScore2} />
          <Style.ScoreGuideText>%</Style.ScoreGuideText>
        </Style.ScoreContainer>
      </Style.RatingScoreContainer>

      <Style.RatingScoreContainer>
        <Style.ScoreNameInput
          placeholder="점수3"
          value={scoreName3}
          onChange={onChangeScoreName3}
        />
        <CustomLinearProgress variant="determinate" value={score3} />
        <Style.ScoreContainer>
          <Style.ScoreInput placeholder="???" value={score3} onChange={onChangeScore3} />
          <Style.ScoreGuideText>%</Style.ScoreGuideText>
        </Style.ScoreContainer>
      </Style.RatingScoreContainer>
    </>
  );
};

export default EditRatingScoreCard;
