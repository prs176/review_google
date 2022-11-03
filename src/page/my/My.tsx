import { useState } from "react";
import Header from "../../component/header/Header";
import ReviewCard from "../../component/reviewCard/ReviewCard";
import SubjectShortcut from "../../component/subjectCard/SubjectShortcut";
import UserCard from "../../component/userCard/UserCard";
import { Review } from "../../model/review";
import { CategoryToNumber, Subject } from "../../model/subject";
import { User } from "../../model/user";
import * as Style from "./styled/My";

const My = (): JSX.Element => {
  const [user, setUser] = useState<User>({
    idx: 0,
    name: "로미",
    birth: "2013년 9월 10일",
    id: "romicat77@gmail.com",
  });
  const [subjectReviews, setSubjectReviews] = useState<[Subject, Review][]>([
    [
      {
        idx: 0,
        image: "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86217/86217_1000.jpg",
        category: CategoryToNumber.MOVIE,
        title: "아바타 리마스터링",
        from: "제임스 카메론",
        count: 100,
      },
      {
        idx: 0,
        subjectIdx: 0,
        title: "옷장에서 잠자느라 못봄",
        userId: "romicat77@gmail.com",
        content:
          "This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77. This is a review from romicat77.",
        raiting: 4,
        scores: [
          {
            idx: 0,
            reviewIdx: 0,
            name: "작품성",
            score: 5,
          },
        ],
      },
    ],
  ]);
  const [editedReviewIdx, setEditedReviewIdx] = useState<number>(-1);
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
        {subjectReviews.map((subjectReview) => {
          const [subject, review] = subjectReview;
          return (
            <Style.SubjectReviewContainer>
              <SubjectShortcut subject={subject} />
              <ReviewCard
                key={review.idx}
                type={review.idx === editedReviewIdx ? "edit" : "common"}
                review={review}
                onEdit={() => {
                  setEditedReviewIdx(review.idx);
                  setIsEdit(true);
                }}
                onDone={() => {
                  setEditedReviewIdx(-1);
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

export default My;
