import { IconButton } from "@mui/material";
import { Review } from "../../model/review";
import * as Style from "./styled/ReviewCard";
import DeletIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { useState } from "react";
import CommonRatingScoreCard from "./CommonRatingScoreCard";

interface Props {
  review: Review;
  onEdit: () => void;
}

const CommonReviewCard = ({ review, onEdit }: Props): JSX.Element => {
  const [isExtended, setIsExtended] = useState<boolean>(false);

  return (
    <Style.RootContainer>
      <Style.ContentContainer>
        <Style.ReviewContainer>
          <Style.UserInfoContainer>
            <Style.Title>{review.title}</Style.Title>
            <Style.Id>{review.userId}</Style.Id>
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
          <CommonRatingScoreCard rating={review.raiting} scores={review.scores} />
        </Style.ScoreContainer>
      </Style.ContentContainer>
      <Style.ToolContainer>
        <div>
          <IconButton onClick={onEdit}>
            <EditIcon />
          </IconButton>
          <IconButton>
            <DeletIcon />
          </IconButton>
        </div>
        <div>
          <IconButton>
            <ThumbUpAltIcon />
          </IconButton>
          <IconButton>
            <ThumbDownAltIcon />
          </IconButton>
        </div>
      </Style.ToolContainer>
    </Style.RootContainer>
  );
};

export default CommonReviewCard;
