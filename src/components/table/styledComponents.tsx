import styled from "@emotion/styled";
import { TableCell, TableRow, Container } from "@mui/material";
import { theme, spacing } from "../../constants/styling";

export const StyledTableContainer = styled(Container)`
  max-height: 500px;
  overflow: auto;
  display: block;
  overflow-x: hidden;
`;

export const StyledTableRow = styled(TableRow)`
  border-bottom: 1px solid ${theme.palette.secondary.dark};
`;

export const StyledTableCell = styled(TableCell)`
  padding: ${spacing};
`;

export const StyledTableHeadCell = styled(StyledTableCell)`
  font-weight: bold;
  background-color: ${theme.palette.secondary.main};
`;
