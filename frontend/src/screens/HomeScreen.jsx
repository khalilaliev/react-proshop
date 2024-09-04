import { Col, Row } from "react-bootstrap";
import Product from "../components/Product/Product";
import { useGetProductsQuery } from "../store/slices/productApiSlice";
import Loader from "../components/Loader/Loader";
import Message from "../components/Message/Message";
import Title from "../components/Title/Title";
import { useParams } from "react-router-dom";
import Paginate from "../components/Paginate/Paginate";

const HomeScreen = () => {
  const { pageNumber } = useParams();
  const { data, isError, isLoading } = useGetProductsQuery({ pageNumber });

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
            {data.products.map((item) => (
              <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={item} />
              </Col>
            ))}
          </Row>
          <Paginate pages={data.pages} page={data.page} />
        </>
      )}
    </>
  );
};

export default HomeScreen;
