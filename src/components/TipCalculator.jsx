import { useSelector, useDispatch } from "react-redux";
import {
  setBillAmount,
  setPercent,
  setPeople,
  setRounding,
} from "../features/tip/tipSlice";
import { Container, Row, Col, Input, Label } from "reactstrap";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function TipCalculator() {
  const dispatch = useDispatch();
  const { billAmount, percent, people, rounding } = useSelector(
    (state) => state.tip
  );

  let tip = billAmount * percent;
  let total = billAmount + tip;

  if (rounding === "TIP") tip = Math.ceil(tip);
  if (rounding === "TOTAL") total = Math.ceil(total);

  const perPerson = total / people;

  return (
    <Container className="calculator">
      <Row>
        <Col xs="12">
          <Input
            type="number"
            placeholder="Enter Bill Amount"
            onChange={(e) =>
              dispatch(setBillAmount(Number(e.target.value || 0)))
            }
          />
        </Col>
      </Row>

      <Row className="mt-3">
        <Col xs="12">
          <Label>Tip Percentage: {(percent * 100).toFixed(0)}%</Label>
          <Input
            type="range"
            min="0"
            max="30"
            value={percent * 100}
            onChange={(e) => dispatch(setPercent(e.target.value / 100))}
          />
        </Col>
      </Row>

      <Row className="mt-3 text-center">
        <Col md="4">Tip: {currency.format(tip)}</Col>
        <Col md="4">Total: {currency.format(total)}</Col>
        <Col md="4">Per Person: {currency.format(perPerson)}</Col>
      </Row>

      <Row className="mt-4">
        <Col md="6">
          <Label>People</Label>
          <Input
            type="select"
            onChange={(e) => dispatch(setPeople(Number(e.target.value)))}
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n}>{n}</option>
            ))}
          </Input>
        </Col>

        <Col md="6">
          <Label>Rounding</Label>
          <Input
            type="select"
            onChange={(e) => dispatch(setRounding(e.target.value))}
          >
            <option value="NO">No</option>
            <option value="TIP">Tip</option>
            <option value="TOTAL">Total</option>
          </Input>
        </Col>
      </Row>
    </Container>
  );
}
