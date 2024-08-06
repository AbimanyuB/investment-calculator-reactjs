import { useState } from "react";
import Header from "./components/Header";
import ResultTable from "./components/ResultTable";
import UserInput from "./components/UserInput";
import { calculateInvestmentResults } from "./util/investment";

const InitialState = {
  initialInvestment: 1200,
  annualInvestment: 1500,
  expectedReturn: 5.5,
  duration: 0,
};

function App() {
  const [investment, setInvestment] = useState(InitialState);
  const onInputChange = (investmentType, value) => {
    setInvestment((prevInvestment) => {
      return { ...prevInvestment, [investmentType]: +value };
    });
  };
  const validDuration = investment.duration > 0;
  return (
    <>
      <Header />
      <UserInput onInputChange={onInputChange} value={investment} />
      {!validDuration && (
        <p className="center">Please input duration greater than zero.</p>
      )}
      {validDuration && (
        <ResultTable investment={calculateInvestmentResults(investment)} />
      )}
    </>
  );
}

export default App;
