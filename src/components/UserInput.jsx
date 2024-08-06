import Input from "./Input";

export default function UserInput({ onInputChange, value }) {
  return (
    <div id="user-input">
      <div className="input-container">
        <div className="input-group">
          <Input
            label="Initial Investment"
            type="number"
            value={value["initialInvestment"].toString()}
            onChange={(e) => onInputChange("initialInvestment", e.target.value)}
          />
          <Input
            label="Annual Investment"
            type="number"
            value={value["annualInvestment"].toString()}
            onChange={(e) => onInputChange("annualInvestment", e.target.value)}
          />
        </div>
        <div className="input-group">
          <Input
            label="Expected Return"
            type="number"
            value={value["expectedReturn"].toString()}
            onChange={(e) => onInputChange("expectedReturn", e.target.value)}
          />
          <Input
            label="Duration"
            type="number"
            value={value["duration"].toString()}
            onChange={(e) => onInputChange("duration", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
