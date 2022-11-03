import { Review } from "../../model/review";
import CommonReviewCard from "./CommonReviewCard";
import EditReviewCard from "./EditReviewCard";

interface Props {
  type: "common" | "edit";
  review: Review;
  onEdit: () => void;
  onDone: () => void;
}

const ReviewCard = ({ type, review, onEdit, onDone }: Props): JSX.Element => {
  return (
    <>
      {type === "common" ? (
        <CommonReviewCard review={review} onEdit={onEdit}></CommonReviewCard>
      ) : (
        <EditReviewCard review={review} onDone={onDone}></EditReviewCard>
      )}
    </>
  );
};

export default ReviewCard;
