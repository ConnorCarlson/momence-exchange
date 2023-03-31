import { Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CurrencyRate } from "../../hooks/useExchangeRates";
import { ElementContainer } from "../elementContainer";
import {
  ConvertedOutput,
  FloatInput,
  SearchableDropdown,
  StartAdornment,
} from "./styledComponents";

interface Props {
  data: CurrencyRate[];
}

const strings = {
  amountFromLabel: "Amount to convert",
  currencyFormLabel: "Convert to",
  czkSymbol: "Kč",
};

const getMoneyFormat = (code: string, amount: number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: code,
  });

  return formatter.format(amount);
};

const ConverterForm = (props: Props) => {
  const [currencyAmount, setCurrencyAmount] = useState("");
  const [currencyRate, setCurrencyRate] = useState<CurrencyRate | null>();
  const [currencyLabel, setCurrencyLabel] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");

  useEffect(() => {
    if (currencyRate && currencyAmount) {
      const { amount, rate, currencyCode } = currencyRate;
      const converted = (+currencyAmount * amount) / rate;
      setConvertedAmount(getMoneyFormat(currencyCode, converted));
    } else {
      setConvertedAmount("");
    }
  }, [currencyRate, currencyAmount, setConvertedAmount]);

  const handleAmountInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    if (!isNaN(+value) && value.split(".").length <= 2) {
      setCurrencyAmount(value);
    }
  };

  const handleCurrencyDropdownInputChange = (
    _event: React.SyntheticEvent<Element, Event>,
    newInputValue: string
  ) => {
    setCurrencyLabel(newInputValue);
  };

  const handleCurrencyDropdownValueChange = (
    _event: React.SyntheticEvent<Element, Event>,
    newValue: unknown
  ) => {
    setCurrencyRate((newValue as any)?.rate as CurrencyRate);
  };

  return (
    <ElementContainer>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <FloatInput
            size="small"
            type="text"
            value={currencyAmount}
            label={strings.amountFromLabel}
            onChange={handleAmountInputChange}
            InputProps={{
              startAdornment: (
                <StartAdornment>{strings.czkSymbol}</StartAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={7}>
          <SearchableDropdown
            size="small"
            freeSolo
            options={props.data.map((rate) => {
              return {
                label: `${rate.country} (${rate.currencyName})`,
                rate: rate,
              };
            })}
            renderInput={(params) => (
              <TextField
                {...params}
                label={strings.currencyFormLabel}
                InputLabelProps={{ shrink: true }}
              />
            )}
            value={currencyRate}
            inputValue={currencyLabel}
            onInputChange={handleCurrencyDropdownInputChange}
            onChange={handleCurrencyDropdownValueChange}
          />
        </Grid>
      </Grid>
      <ConvertedOutput>{convertedAmount}</ConvertedOutput>
    </ElementContainer>
  );
};

export default ConverterForm;
