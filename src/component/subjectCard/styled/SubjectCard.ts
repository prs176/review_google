import styled from "styled-components";
import { CategoryToColor, CategoryToNumber } from "../../../model/subject";

export const RootContainer = styled.div<{ cursor: "pointer" | "auto" }>`
  margin: 20px;
  margin-top: 30px;
  width: 235px;
  cursor: ${(props) => props.cursor};
`;

export const Image = styled.img`
  width: 235px;
  height: 250px;
  border-radius: 10px;
  object-fit: cover;
`;

export const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const CategoryBar = styled.div<{ category: CategoryToNumber }>`
  width: 30px;
  height: 12px;
  border-radius: 10px;
  background-color: ${(props) =>
    CategoryToColor[CategoryToNumber[props.category] as keyof typeof CategoryToColor]};
`;

export const CategoryText = styled.p`
  margin: 0px;
  margin-left: 8px;
  color: #7b7b7b;
`;

export const Title = styled.h2`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin: 0px;
`;

export const From = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin: 0px;
`;

export const CountWrapper = styled.div`
  display: flex;
  justify-content: right;
`;

export const Count = styled.p`
  margin: 0px;
  margin-top: 5px;
  font-size: 0.9em;
  color: #a5a5a5;
`;
