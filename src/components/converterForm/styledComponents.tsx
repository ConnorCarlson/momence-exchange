import styled from "@emotion/styled";
import { Autocomplete, Button, TextField } from "@mui/material";
import { theme, spacing } from "../../constants/styling";

const purpleOutline = `
  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: ${theme.palette.primary.main}
  }
  & .MuiInputLabel-root.Mui-focused {
        color: ${theme.palette.primary.main};
  }
`;

export const FloatInput = styled(TextField)`
  ${purpleOutline}
`;

export const StartAdornment = styled.div`
  color: ${theme.palette.secondary.dark};
  margin-right: ${spacing};
`;

export const PrimaryButton = styled(Button)`
  border-color: ${theme.palette.primary.main};
  border-radius: ${spacing};
  color: ${theme.palette.primary.main};
  transition: 0.3s ease-in-out;
  text-transform: none;
  padding: 8px;
  &:hover {
    background-color: ${theme.palette.primary.main};
    color: ${theme.palette.secondary.light};

  }
`

export const SearchableDropdown = styled(Autocomplete)`
  ${purpleOutline}
`;

export const ConvertedOutput = styled.h2`
  color: ${theme.palette.primary.main};
  font-family:${theme.typography.fontFamily};
  text-align: left;
`;
