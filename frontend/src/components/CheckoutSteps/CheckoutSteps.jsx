import { Nav } from "react-bootstrap";
import { FaLongArrowAltRight } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";

const CheckoutSteps = ({ first, second, third, fourth }) => {
  return (
    <Nav className="justify-content-center mb-4 align-items-center">
      <Nav.Item>
        {first ? (
          <LinkContainer to="/login">
            <Nav.Link className="text-success">Sign in</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Sign in</Nav.Link>
        )}
      </Nav.Item>
      <FaLongArrowAltRight className="fs-5" />
      <Nav.Item>
        {second ? (
          <LinkContainer to="/shipping">
            <Nav.Link className="text-success">Shipping</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Shipping</Nav.Link>
        )}
      </Nav.Item>
      <FaLongArrowAltRight className="fs-5" />
      <Nav.Item>
        {third ? (
          <LinkContainer to="/payment">
            <Nav.Link className="text-success">Payment</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Payment</Nav.Link>
        )}
      </Nav.Item>
      <FaLongArrowAltRight className="fs-5" />
      <Nav.Item>
        {fourth ? (
          <LinkContainer to="/placeorder">
            <Nav.Link className="text-success">Place Order</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Place Order</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;
