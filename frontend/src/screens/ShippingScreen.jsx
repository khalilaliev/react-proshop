import { useEffect, useState } from "react";
import FormContainer from "../components/FormContainer/FormContainer";
import Title from "../components/Title/Title";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveShippingAddress } from "../store/slices/cardSlice";

const ShippingScreen = () => {
  const { cart: shippingAddress } = useSelector((state) => state.cart);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");

  useEffect(() => {
    if (shippingAddress) {
      setAddress(shippingAddress.address || "");
      setCity(shippingAddress.city || "");
      setCountry(shippingAddress.country || "");
      setPostalCode(shippingAddress.postalCode || "");
    }
  }, [shippingAddress]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    navigate("/payment");
  };

  const handleAddressChange = (e) => setAddress(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);
  const handleCountryChange = (e) => setCountry(e.target.value);
  const handlePostalCodeChange = (e) => setPostalCode(e.target.value);

  return (
    <FormContainer>
      <Title text="Shipping" />
      <Form onSubmit={handleSubmitForm}>
        <Form.Group controlId="address" className="my-2">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            value={address}
            onChange={handleAddressChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="city" className="my-2">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={handleCityChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="postalCode" className="my-2">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter postal code"
            value={postalCode}
            onChange={handlePostalCodeChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="country" className="my-2">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter country"
            value={country}
            onChange={handleCountryChange}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary" className="my-2">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;
