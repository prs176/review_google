import { Review } from "../../model/review";
import { Score } from "../../model/score";
import CommonReviewCard from "./CommonReviewCard";
import EditReviewCard from "./EditReviewCard";

interface Props {
  type: "common" | "edit";
  review: Review;
  onEdit: () => void;
  onDone: (
    reviewId: number,
    title: string,
    content: string,
    raiting: number,
    scores: Score[]
  ) => void;
  onGood: (reviewId: number) => void;
  onNotGood: (reviewId: number) => void;
  onBad: (reviewId: number) => void;
  onNotBad: (reviewId: number) => void;
  onDelete: (reviewId: number) => void;
}

const ReviewCard = ({
  type,
  review,
  onEdit,
  onDone,
  onDelete,
  onGood,
  onNotGood,
  onBad,
  onNotBad,
}: Props): JSX.Element => {
  return (
    <>
      {type === "common" ? (
        <CommonReviewCard
          review={review}
          onEdit={onEdit}
          onDelete={onDelete}
          onGood={onGood}
          onNotGood={onNotGood}
          onBad={onBad}
          onNotBad={onNotBad}
        ></CommonReviewCard>
      ) : (
        <EditReviewCard review={review} onDone={onDone}></EditReviewCard>
      )}
    </>
  );
};

export default ReviewCard;
