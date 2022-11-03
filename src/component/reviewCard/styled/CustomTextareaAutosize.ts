import { styled } from "@mui/material/styles";
import { TextareaAutosize } from "@mui/material";

const CustomTextareaAutosize = styled(TextareaAutosize)(() => ({
  fontFamily: "inherit",
  fontSize: "inherit",
  resize: "none",
  width: "100%",
  height: 200,
  padding: 0,
  margin: 0,
  marginTop: 17,
  border: "none",
  outline: "none",
}));

export default CustomTextareaAutosize;
