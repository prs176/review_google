import { useState } from "react";
import { Review } from "../../model/review";
import RatingScoreCard from "./RatingScoreCard";
import * as Style from "./styled/ReviewInfoCard";

interface Props {
  type: "single" | "with";
  review: Review;
}

const ReviewInfoCard = ({ type, review }: Props): JSX.Element => {
  const [isExtended, setIsExtended] = useState<boolean>(false);

  return (
    <Style.ContentContainer type={type}>
      <Style.ReviewContainer>
        <Style.UserInfoContainer>
          <Style.Title>{review.title}</Style.Title>
          <Style.Id>{review.user.email}</Style.Id>
        </Style.UserInfoContainer>
        {isExtended ? <p>{review.content}</p> : <Style.Content>{review.content}</Style.Content>}
        <Style.ExtendButtonWrapper>
          {isExtended ? (
            <Style.ExtendButton onClick={() => setIsExtended(false)}>접기</Style.ExtendButton>
          ) : (
            <Style.ExtendButton onClick={() => setIsExtended(true)}>더보기</Style.ExtendButton>
          )}
        </Style.ExtendButtonWrapper>
      </Style.ReviewContainer>
      <Style.Divider />
      <Style.ScoreContainer>
        <RatingScoreCard rating={review.raiting} scores={review.scores} />
      </Style.ScoreContainer>
    </Style.ContentContainer>
  );
};

export default ReviewInfoCard;
