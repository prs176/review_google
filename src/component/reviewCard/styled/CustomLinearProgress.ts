import { styled } from "@mui/material/styles";
import { LinearProgress, linearProgressClasses } from "@mui/material";

const CustomLinearProgress = styled(LinearProgress)(() => ({
  height: 10,
  width: 165,
  marginLeft: 4,
  marginRight: 4,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#e7e7e7",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#bfbfbf",
  },
}));

export default CustomLinearProgress;
