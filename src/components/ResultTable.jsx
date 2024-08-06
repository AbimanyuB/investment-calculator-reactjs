import { formatter } from "../util/investment";

export default function ResultTable({ investment }) {
  const initialInvestment =
    investment[0].valueEndOfYear -
    investment[0].interest -
    investment[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      {investment.map((investmentValue) => {
        const { annualInvestment, interest, valueEndOfYear, year } =
          investmentValue;
        const totalInterest =
          valueEndOfYear - annualInvestment * year - initialInvestment;
        const totalAmountInvested = valueEndOfYear - totalInterest;
        return (
          <tbody>
            <tr>
              <td>{year}</td>
              <td>{formatter.format(valueEndOfYear)}</td>
              <td>{formatter.format(interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
}
