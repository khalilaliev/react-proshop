import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import Product from "../components/Product/Product";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductsData = async () => {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) throw new Error("Error to fetch");
        const data = await res.json();
        setProducts(data);
      } catch (e) {
        console.error(e.message);
      }
    };
    getProductsData();
  }, []);

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((item) => (
          <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
