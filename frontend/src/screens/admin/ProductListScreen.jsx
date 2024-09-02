import { Button, Col, Row, Table } from "react-bootstrap";
import {
  useCreateProductMutation,
  useGetProductsQuery,
  useDeleteProductMutation,
} from "../../store/slices/productApiSlice";
import { toast } from "react-toastify";
import { FaEdit, FaTrash } from "react-icons/fa";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";
import { LinkContainer } from "react-router-bootstrap";

const ProductListScreen = () => {
  const { data: products, isLoading, error, refetch } = useGetProductsQuery();

  const [createProduct, { isLoading: loadingCreate }] =
    useCreateProductMutation();

  const [deleteProduct, { isLoading: loadingDelete }] =
    useDeleteProductMutation();

  const handleDeleteItem = async (id) => {
    if (window.confirm("Are you sure?")) {
      try {
        await deleteProduct(id);
        refetch();
      } catch (e) {
        toast.error(e?.data?.message || e.error);
      }
    }
  };

  const handleCreateProduct = async () => {
    if (window.confirm("Are you sure?")) {
      try {
        await createProduct();
        refetch();
      } catch (e) {
        toast.error(e?.data?.message || e.error);
      }
    }
  };

  return (
    <>
      <Row className="align-item-center">
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className="text-end">
          <Button className="btn-sm m-3" onClick={handleCreateProduct}>
            <FaEdit /> Create product
          </Button>
        </Col>
      </Row>
      {loadingCreate && <Loader />}
      {loadingDelete && <Loader />}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Table striped responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>BRAND</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                return (
                  <tr key={product._id}>
                    <td>{product._id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.category}</td>
                    <td>{product.brand}</td>
                    <td>
                      <LinkContainer to={`/admin/product/${product._id}/edit`}>
                        <Button className="bnt-sm mx-2" variant="light">
                          <FaEdit />
                        </Button>
                      </LinkContainer>
                      <Button
                        className="bnt-sm mx-2"
                        variant="danger"
                        onClick={() => handleDeleteItem(product._id)}
                      >
                        <FaTrash />
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </>
      )}
    </>
  );
};

export default ProductListScreen;
