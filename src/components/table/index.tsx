import { Table, TableBody, TableHead } from "@mui/material";
import { CurrencyRate } from "../../hooks/useExchangeRates";
import { ElementContainer } from "../elementContainer";
import {
  StyledTableCell,
  StyledTableContainer,
  StyledTableHeadCell,
  StyledTableRow,
} from "./styledComponents";

interface Props {
  data: CurrencyRate[];
}

const TableHeaders = [
  "Country",
  "Amount",
  "Currency Name",
  "Currency Code",
  "Rate",
];

const ExchangeDataTable = (props: Props) => {
  return (
    <ElementContainer>
      <StyledTableContainer>
        <Table stickyHeader>
          <TableHead>
            <StyledTableRow>
              {TableHeaders.map((header) => (
                <StyledTableHeadCell key={header}>{header}</StyledTableHeadCell>
              ))}
            </StyledTableRow>
          </TableHead>

          <TableBody>
            {props.data.map((rate: CurrencyRate) => (
              <StyledTableRow key={rate.currencyCode}>
                <StyledTableCell>{rate.country}</StyledTableCell>
                <StyledTableCell>{rate.amount}</StyledTableCell>
                <StyledTableCell>{rate.currencyName}</StyledTableCell>
                <StyledTableCell>{rate.currencyCode}</StyledTableCell>
                <StyledTableCell>{rate.rate.toFixed(2)}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </ElementContainer>
  );
};

export default ExchangeDataTable;
