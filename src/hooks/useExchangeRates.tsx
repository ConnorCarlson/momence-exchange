import { useQuery } from 'react-query';

export interface CurrencyRate {
  country: string;
  currencyName: string;
  currencyCode: string;
  amount: number;
  rate: number;
};

export const useExchangeRates = () => {
  const fetchExchangeRates = async () => {
    const response = await fetch(
        '/exchange-rates',
      );
    return JSON.parse(await response.text());
  };

  return useQuery<CurrencyRate[], Error>({
    queryKey: 'exchangeRates',
    queryFn: fetchExchangeRates,
  });
};