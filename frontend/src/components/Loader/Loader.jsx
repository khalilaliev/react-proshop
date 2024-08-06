import "./style.css";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Spinner animation="border" role="status" className="spinner"></Spinner>
  );
};

export default Loader;
