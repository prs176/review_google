import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import * as Style from "./styled/RatingScoreCard";
import { Score } from "../../model/score";
import CustomLinearProgress from "./styled/CustomLinearProgress";

interface Props {
  rating: number;
  scores: Score[];
}

const RatingScoreCard = ({ rating, scores }: Props): JSX.Element => {
  return (
    <Style.RootContainer>
      <Style.RaitingContainer>
        <Style.RatingName>평점</Style.RatingName>
        <Rating
          disabled
          precision={0.1}
          value={Math.round(rating * 2) / 2}
          icon={
            <Style.DisabledIconWrapper>
              <StarIcon fontSize="large" />
            </Style.DisabledIconWrapper>
          }
          emptyIcon={<StarBorderIcon fontSize="large" />}
        ></Rating>
        <Style.RatingGuideText>{Math.round(rating * 10) / 10}점</Style.RatingGuideText>
      </Style.RaitingContainer>

      {scores.map((score, id) => (
        <Style.ScoreContainer key={id}>
          <Style.RatingName title={score.name}>{score.name}</Style.RatingName>
          <CustomLinearProgress variant="determinate" value={score.score} />
          <Style.ScoreWrapper>
            <Style.ScoreGuideText>{Math.round(score.score * 10) / 10}%</Style.ScoreGuideText>
          </Style.ScoreWrapper>
        </Style.ScoreContainer>
      ))}
    </Style.RootContainer>
  );
};

export default RatingScoreCard;
