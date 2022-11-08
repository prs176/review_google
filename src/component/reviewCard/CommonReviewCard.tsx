import { IconButton } from "@mui/material";
import { Review, ReviewIncludeSubject } from "../../model/review";
import * as Style from "./styled/ReviewCard";
import DeletIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import { useState } from "react";
import RatingScoreCard from "./RatingScoreCard";

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
  const [isExtended, setIsExtended] = useState<boolean>(false);

  return (
    <Style.RootContainer>
      <Style.ContentContainer>
        <Style.ReviewContainer>
          <Style.UserInfoContainer>
            <Style.Title>{review.title}</Style.Title>
            <Style.Id>{review.user.email}</Style.Id>
          </Style.UserInfoContainer>
          {isExtended ? (
            <Style.ExtnededContent>{review.content}</Style.ExtnededContent>
          ) : (
            <Style.Content>{review.content}</Style.Content>
          )}
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
      <Style.ToolContainer>
        {review.isMine ? (
          <div>
            <IconButton onClick={onEdit}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => onDelete(review.id)}>
              <DeletIcon />
            </IconButton>
          </div>
        ) : (
          <div></div>
        )}
        <div>
          <Style.GoodBadContainer>
            <Style.ButtonWrapper>
              <Style.GoodBadLabel>{review.good}</Style.GoodBadLabel>
              {review.isGood ? (
                <IconButton onClick={() => onNotGood(review.id)}>
                  <ThumbUpAltIcon />{" "}
                </IconButton>
              ) : (
                <IconButton onClick={() => onGood(review.id)}>
                  <ThumbUpOffAltIcon />
                </IconButton>
              )}
            </Style.ButtonWrapper>
            <Style.ButtonWrapper>
              <Style.GoodBadLabel>{review.bad}</Style.GoodBadLabel>
              {review.isBad ? (
                <IconButton onClick={() => onNotBad(review.id)}>
                  <ThumbDownAltIcon />{" "}
                </IconButton>
              ) : (
                <IconButton onClick={() => onBad(review.id)}>
                  <ThumbDownOffAltIcon />
                </IconButton>
              )}
            </Style.ButtonWrapper>
          </Style.GoodBadContainer>
        </div>
      </Style.ToolContainer>
    </Style.RootContainer>
  );
};

export default CommonReviewCard;
