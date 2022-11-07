import * as Style from "./styled/Toolbar";
import EditIcon from "@mui/icons-material/Edit";
import DeletIcon from "@mui/icons-material/Delete";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import { IconButton } from "@mui/material";
import { Review } from "../../model/review";
import { ErrorText } from "../../styled/Common";

interface Props {
  type: "common" | "edit";
  errorMessage?: string;
  onDone?: () => void;
  review?: Review;
  onEdit?: () => void;
  onDelete?: () => void;
  onGood?: () => void;
  onNotGood?: () => void;
  onBad?: () => void;
  onNotBad?: () => void;
}

const Toolbar = ({
  type,
  errorMessage,
  onDone,
  review,
  onEdit,
  onDelete,
  onGood,
  onNotGood,
  onBad,
  onNotBad,
}: Props): JSX.Element => {
  return (
    <>
      {type === "edit" ? (
        <Style.ToolContainer>
          <div></div>
          <Style.ButtonErrorMessageContainer>
            <ErrorText display={errorMessage ? "visible" : "hidden"}>{errorMessage}</ErrorText>
            <Style.DoneButton onClick={onDone}>완료</Style.DoneButton>
          </Style.ButtonErrorMessageContainer>
        </Style.ToolContainer>
      ) : (
        <Style.ToolContainer>
          {review!.isMine ? (
            <div>
              <IconButton onClick={onEdit}>
                <EditIcon />
              </IconButton>
              <IconButton onClick={onDelete}>
                <DeletIcon />
              </IconButton>
            </div>
          ) : (
            <div></div>
          )}
          <div>
            <Style.GoodBadContainer>
              <Style.ButtonWrapper>
                <Style.GoodBadLabel>{review!.good}</Style.GoodBadLabel>
                {review!.isGood ? (
                  <IconButton onClick={onNotGood}>
                    <ThumbUpAltIcon />{" "}
                  </IconButton>
                ) : (
                  <IconButton onClick={onGood}>
                    <ThumbUpOffAltIcon />
                  </IconButton>
                )}
              </Style.ButtonWrapper>
              <Style.ButtonWrapper>
                <Style.GoodBadLabel>{review!.bad}</Style.GoodBadLabel>
                {review!.isBad ? (
                  <IconButton onClick={onNotBad}>
                    <ThumbDownAltIcon />{" "}
                  </IconButton>
                ) : (
                  <IconButton onClick={onBad}>
                    <ThumbDownOffAltIcon />
                  </IconButton>
                )}
              </Style.ButtonWrapper>
            </Style.GoodBadContainer>
          </div>
        </Style.ToolContainer>
      )}
    </>
  );
};

export default Toolbar;
