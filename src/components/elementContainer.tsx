import styled from "@emotion/styled";
import { Container } from "@mui/material";
import { theme, spacing } from "../constants/styling";

export const ElementContainer = styled(Container)`
  background-color: ${theme.palette.secondary.main};
  padding: ${spacing};
  border-radius: ${spacing};
  margin-bottom: ${spacing};
  display: flex;
  flex-direction: column;
  min-height: 150px;
`;
