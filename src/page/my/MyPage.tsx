import { useState } from "react";
import Header from "../../component/header/Header";
import ReviewCard from "../../component/reviewCard/ReviewCard";
import SubjectShortcut from "../../component/subjectCard/SubjectShortcut";
import UserCard from "../../component/userCard/UserCard";
import { ReviewIncludeSubject } from "../../model/review";
import { CategoryToNumber } from "../../model/subject";
import { User } from "../../model/user";
import * as Style from "./styled/MyPage";

const MyPage = (): JSX.Element => {
  const [user, setUser] = useState<User>({
    id: 0,
    name: "로미",
    birth: "2013년 9월 10일",
    email: "romicat77@gmail.com",
  });
  const [reviews, setReviews] = useState<ReviewIncludeSubject[]>([
    {
      id: 0,
      subject: {
        id: 0,
        image: "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86217/86217_1000.jpg",
        category: CategoryToNumber.MOVIE,
        title: "아바타 리마스터링",
        from: "제임스 카메론",
        count: 100,
      },
      user: { id: 1, email: "romicat77@gmail.com" },
      title: "옷장에서 잠자느라 못봄",
      content:
        "This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77.",
      raiting: 4,
      scores: [
        {
          name: "작품성",
          score: 5,
        },
      ],
      good: 0,
      bad: 0,
      isMine: false,
      isGood: false,
      isBad: false,
    },
  ]);
  const [editedReviewId, setEditedReviewId] = useState<number>(0);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedInt] = useState<boolean>(true);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} type="logout" />
      <Style.UserInfoContainer>
        <UserCard user={user} />
        <Style.GuideTextWrapper>
          <Style.GuideText>내가 쓴 리뷰</Style.GuideText>
        </Style.GuideTextWrapper>
      </Style.UserInfoContainer>
      <Style.ReviewContainer>
        {reviews.map((review) => {
          return (
            <Style.SubjectReviewContainer>
              <SubjectShortcut subject={review.subject} />
              <ReviewCard
                key={review.id}
                type={review.id === editedReviewId ? "edit" : "common"}
                review={review}
                onEdit={() => {
                  setEditedReviewId(review.id);
                  setIsEdit(true);
                }}
                onDone={() => {
                  setEditedReviewId(0);
                  setIsEdit(false);
                }}
              />
            </Style.SubjectReviewContainer>
          );
        })}
      </Style.ReviewContainer>
    </>
  );
};

export default MyPage;
