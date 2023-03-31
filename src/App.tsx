import { useExchangeRates } from "./hooks/useExchangeRates";
import { Container } from "@mui/system";
import ExchangeDataTable from "./components/table";
import Header from "./components/header";
import ConverterForm from "./components/converterForm";
import StyledSpinner from "./components/styledSpinner";

function App() {
  const { data, isLoading, error } = useExchangeRates();
  if (isLoading || !data) {
    return <StyledSpinner />;
  }

  if (error) {
    return <></>;
  }

  return (
    <Container maxWidth="sm">
      <Header />
      <ConverterForm data={data} />
      <ExchangeDataTable data={data} />
    </Container>
  );
}

export default App;
