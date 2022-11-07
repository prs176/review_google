import { useEffect, useState } from "react";
import { getMyReviews } from "../../api/api/review";
import { getMyUser } from "../../api/api/user";
import { getToken } from "../../api/token/token";
import Header from "../../component/header/Header";
import ReviewCard from "../../component/reviewCard/ReviewCard";
import ReviewInfoCard from "../../component/reviewCard/ReviewInfoCard";
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
  const [reviews, setReviews] = useState<ReviewIncludeSubject[]>([]);

  const setup = async () => {
    try {
      if (getToken()) {
        const user = await getMyUser();
        setUser(user);
      }

      const reviews = await getMyReviews();
      setReviews(reviews);
    } catch (err) {}
  };

  useEffect(() => {
    setup();
  }, []);

  return (
    <>
      <Header isLoggedIn={true} type="logout" />
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
              <Style.ShortCutWrapper>
                <SubjectShortcut subject={review.subject} />
              </Style.ShortCutWrapper>
              <Style.ReviewWrapper>
                <ReviewInfoCard type="single" review={review} />
              </Style.ReviewWrapper>
            </Style.SubjectReviewContainer>
          );
        })}
      </Style.ReviewContainer>
    </>
  );
};

export default MyPage;
