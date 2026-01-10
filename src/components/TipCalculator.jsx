import { useSelector, useDispatch } from "react-redux";
import { setBillAmount, setPercent } from "../features/tip/tipSlice";

// Currency formatter
const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function TipCalculator() {
  const dispatch = useDispatch();
  const { billAmount, percent } = useSelector((state) => state.tip);

  const tip = billAmount * percent;
  const total = billAmount + tip;

  return (
    <div className="calculator-grid">
      {/* ROW 1 – EditText + overlay TextView */}
      <input
        className="bill-input"
        type="number"
        placeholder="Enter Amount"
        onChange={(e) => dispatch(setBillAmount(Number(e.target.value || 0)))}
      />

      <div className="bill-display">{currency.format(billAmount)}</div>

      {/* ROW 2 – Percent Text + SeekBar */}
      <div className="label right">{(percent * 100).toFixed(0)}%</div>

      <input
        type="range"
        min="0"
        max="30"
        value={percent * 100}
        onChange={(e) => dispatch(setPercent(e.target.value / 100))}
      />

      {/* ROW 3 – Tip */}
      <div className="label right">Tip</div>
      <div className="value-box">{currency.format(tip)}</div>

      {/* ROW 4 – Total */}
      <div className="label right">Total</div>
      <div className="value-box">{currency.format(total)}</div>
    </div>
  );
}
