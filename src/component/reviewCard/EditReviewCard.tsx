import { Review } from "../../model/review";
import * as Style from "./styled/ReviewCard";
import EditRatingScoreCard from "./EditRatingScoreCard";
import React, { useState } from "react";
import CustomTextareaAutosize from "./styled/CustomTextareaAutosize";

interface Props {
  review: Review;
  onDone: () => void;
}

const EditReviewCard = ({ review, onDone }: Props): JSX.Element => {
  const [title, setTitle] = useState<string>(review.title);
  const [content, setContent] = useState<string>(review.content);

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value);

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
          <EditRatingScoreCard
            raiting={review.raiting}
            scores={review.scores}
          ></EditRatingScoreCard>
        </Style.ScoreContainer>
      </Style.ContentContainer>
      <Style.ToolContainer>
        <div></div>
        <div>
          <Style.DoneButton onClick={onDone}>완료</Style.DoneButton>
        </div>
      </Style.ToolContainer>
    </Style.RootContainer>
  );
};

export default EditReviewCard;
