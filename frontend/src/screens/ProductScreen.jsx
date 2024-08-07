import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import ButtonLink from "../components/Button/ButtonLink";
import {
  Col,
  Row,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import Rating from "../components/Rating/Rating";
import { useGetProductDetailsQuery } from "../store/slices/productApiSlice";
import Loader from "../components/Loader/Loader";
import Message from "../components/Message/Message";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCard } from "../store/slices/cardSlice";

const ProductScreen = () => {
  const { id: productId } = useParams();
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    data: product,
    isError: error,
    isLoading,
  } = useGetProductDetailsQuery(productId);

  const handleChange = (e) => {
    setQty(Number(e.target.value));
  };

  const handleAddToCart = () => {
    dispatch(addToCard({ ...product, qty }));
    navigate("/cart");
  };

  return (
    <>
      <ButtonLink icon={<FaArrowLeftLong />} text="Go back" to="/" />

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <Row>
          <Col md={5}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={4}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price: {product.price}</ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>$ {product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      <strong>
                        {product.countInStock > 0 ? "In stock" : "Out of stock"}
                      </strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Quantity: </Col>
                      <Col>
                        <Form.Control
                          as="select"
                          value={qty}
                          onChange={handleChange}
                        >
                          {[...Array(product.countInStock).keys()].map((s) => {
                            return (
                              <option key={s + 1} value={s + 1}>
                                {s + 1}
                              </option>
                            );
                          })}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}
                <ListGroup.Item>
                  <Button
                    className="btn-block"
                    type="button"
                    disabled={product.countInStock === 0}
                    onClick={handleAddToCart}
                  >
                    Add to cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductScreen;
