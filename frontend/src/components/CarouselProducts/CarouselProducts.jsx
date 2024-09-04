import "./style.css";
import { Carousel, Image } from "react-bootstrap";
import { useGetTopProductsQuery } from "../../store/slices/productApiSlice";
import Loader from "../Loader/Loader";
import Message from "../Message/Message";
import { Link } from "react-router-dom";

const CarouselProducts = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  console.log(products);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Carousel pause="hover" className="bg-primary mb-4">
          {products.map((product) => (
            <Carousel.Item key={product._id}>
              <Link to={`/product/${product._id}`}>
                <Image src={product.image} alt={product.name} />
                <Carousel.Caption>
                  <h2>
                    {product.name} $ {product.price}
                  </h2>
                  <p>{product.description}</p>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </>
  );
};

export default CarouselProducts;
