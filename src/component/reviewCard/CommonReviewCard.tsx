import { Review, ReviewIncludeSubject } from "../../model/review";
import * as Style from "./styled/ReviewCard";
import { useState } from "react";
import RatingScoreCard from "./RatingScoreCard";
import Toolbar from "./Toolbar";
import ReviewInfoCard from "./ReviewInfoCard";

interface Props {
  review: Review | ReviewIncludeSubject;
  onEdit: () => void;
  onDelete: (reviewId: number) => void;
  onGood: (reviewId: number) => void;
  onNotGood: (reviewId: number) => void;
  onBad: (reviewId: number) => void;
  onNotBad: (reviewId: number) => void;
}

const CommonReviewCard = ({
  review,
  onEdit,
  onDelete,
  onGood,
  onNotGood,
  onBad,
  onNotBad,
}: Props): JSX.Element => {
  return (
    <Style.RootContainer>
      <ReviewInfoCard type="with" review={review} />
      <Toolbar
        type="common"
        review={review}
        onEdit={onEdit}
        onDelete={() => onDelete(review.id)}
        onGood={() => onGood(review.id)}
        onNotGood={() => onNotGood(review.id)}
        onBad={() => onBad(review.id)}
        onNotBad={() => onNotBad(review.id)}
      />
    </Style.RootContainer>
  );
};

export default CommonReviewCard;
