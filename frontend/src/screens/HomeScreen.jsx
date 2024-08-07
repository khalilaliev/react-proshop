import { Col, Row } from "react-bootstrap";
import Product from "../components/Product/Product";
import { useGetProductsQuery } from "../store/slices/productApiSlice";
import Loader from "../components/Loader/Loader";
import Message from "../components/Message/Message";
import Title from "../components/Title/Title";

const HomeScreen = () => {
  const { data: products, isError, isLoading } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="danger">
          {isError?.data?.message || isError.error}
        </Message>
      ) : (
        <>
          <Title text="Latest Products" />
          <Row>
            {products.map((item) => (
              <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={item} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default HomeScreen;
