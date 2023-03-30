import { TableBody, TableHead } from '@mui/material';
import React from 'react';
import './App.css';
import { StyledTable } from './components/table/styled/styledTable';
import { CurrencyRate, useExchangeRates } from './hooks/useExchangeRates';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const {data, isLoading, error} = useExchangeRates();
  console.log(data);
  if(isLoading || !data) {
    return <></>;
  }

  if(error) {
    return <></>;
  }

  return (

    <div>
      <header>
        CHZ Exchange rates
      </header>
      <StyledTable>
        <TableHead>

        </TableHead>
        <TableBody>
          {data.map((rate: CurrencyRate) => (
          <tr key={rate.country}>
            <td>{rate.country}</td>
            <td>{rate.amount}</td>
            <td>{rate.currencyName}</td>
            <td>{rate.rate.toFixed(2)}</td>
          </tr>
        ))}
          </TableBody>
      </StyledTable>
    </div>

  );
}

export default App;
