import { Col, Row } from "react-bootstrap";
import Product from "../components/Product/Product";
import { useGetProductsQuery } from "../store/slices/productApiSlice";
import Loader from "../components/Loader/Loader";
import Message from "../components/Message/Message";
import Title from "../components/Title/Title";
import { useParams } from "react-router-dom";
import Paginate from "../components/Paginate/Paginate";
import ButtonLink from "../components/Button/ButtonLink";
import { FaArrowLeftLong } from "react-icons/fa6";
import CarouselProducts from "../components/CarouselProducts/CarouselProducts";

const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();
  const { data, isError, isLoading } = useGetProductsQuery({
    pageNumber,
    keyword,
  });

  console.log(data);

  return (
    <>
      {!keyword ? (
        <CarouselProducts />
      ) : (
        <ButtonLink
          icon={<FaArrowLeftLong />}
          text="Go back to products"
          to="/"
        />
      )}
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="danger">
          {isError?.data?.message || isError.error}
        </Message>
      ) : (
        <>
          {keyword ? (
            <Title text={`Results '${data.products.length}' items:`} />
          ) : (
            <Title text="Latest Products" />
          )}
          <Row>
            {data.products.map((item) => (
              <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={item} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
