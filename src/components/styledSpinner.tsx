import styled from "@emotion/styled";
import { Box, CircularProgress } from "@mui/material";
import { theme } from "../constants/styling";

const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const StyledCircularProgress = styled(CircularProgress)`
  color: ${theme.palette.primary.main};
`

const StyledSpinner = () => {
  return (
    <StyledBox>
      <StyledCircularProgress size={100}/>
    </StyledBox>
  );
};

export default StyledSpinner;
