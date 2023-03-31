import { Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { CurrencyRate } from "../../hooks/useExchangeRates";
import { ElementContainer } from "../elementContainer";
import {
  ConvertedOutput,
  FloatInput,
  PrimaryButton,
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
  button: "Convert",
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

  const convertOnClick = () => {
    if (currencyRate && currencyAmount) {
      const { amount, rate, currencyCode } = currencyRate;
      const converted = (+currencyAmount * amount) / rate;
      setConvertedAmount(getMoneyFormat(currencyCode, converted));
    } else {
      setConvertedAmount("");
    }
  }

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
        <Grid item xs={4}>
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
        <Grid item xs={6}>
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
        <Grid item xs={2}>
            <PrimaryButton variant="outlined" onClick={convertOnClick}>{strings.button}</PrimaryButton>
        </Grid>
      </Grid>
      <ConvertedOutput>{convertedAmount}</ConvertedOutput>
    </ElementContainer>
  );
};

export default ConverterForm;
