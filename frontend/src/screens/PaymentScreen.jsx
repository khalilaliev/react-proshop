import { useEffect, useState } from "react";
import FormContainer from "../components/FormContainer/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps/CheckoutSteps";
import Title from "../components/Title/Title";
import { Button, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { savePaymentMethod } from "../store/slices/cardSlice";

const PaymentScreen = () => {
  const [payment, setPayment] = useState("PayPal");
  const shippingAddress = useSelector((state) => state.cart.shippingAddress);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!shippingAddress) {
      navigate("/shipping");
    }
  }, [navigate, shippingAddress]);

  const handlePaymentMethodChange = (e) => setPayment(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(payment));
    navigate("/placeorder");
  };

  return (
    <FormContainer>
      <CheckoutSteps first second third />
      <Title text="Payment Method" />
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              className="my-2"
              label="PayPal or Credit Card"
              id="PayPal"
              name="paymentMethod"
              value={payment}
              checked
              onChange={handlePaymentMethodChange}
            ></Form.Check>
          </Col>
        </Form.Group>
        <Button type="submit" variant="primary" className="my-2">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;
