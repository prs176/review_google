import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import * as Style from "./styled/RatingScoreCard";
import { Score } from "../../model/review";
import CustomLinearProgress from "./styled/CustomLinearProgress";

interface Props {
  rating: number;
  scores: Score[];
}

const CommonRatingScoreCard = ({ rating, scores }: Props): JSX.Element => {
  return (
    <>
      <Style.RatingScoreContainer>
        <Style.RatingName>평점</Style.RatingName>
        <Rating
          disabled
          value={rating}
          icon={<StarIcon color="disabled" fontSize="large" />}
          emptyIcon={<StarBorderIcon fontSize="large" />}
        ></Rating>
        <Style.RatingGuideText>{rating}점</Style.RatingGuideText>
      </Style.RatingScoreContainer>

      {scores.map((score) => (
        <Style.RatingScoreContainer key={score.idx}>
          <Style.RatingName>{score.name}</Style.RatingName>
          <CustomLinearProgress variant="determinate" value={score.score} />
          <Style.ScoreContainer>
            <Style.ScoreGuideText>{score.score}%</Style.ScoreGuideText>
          </Style.ScoreContainer>
        </Style.RatingScoreContainer>
      ))}
    </>
  );
};

export default CommonRatingScoreCard;
