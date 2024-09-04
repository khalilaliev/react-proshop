import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const { keyword: urlKeyword } = useParams();
  const [keyword, setKeyword] = useState(urlKeyword || "");
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
      setKeyword("");
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmitForm} className="d-flex">
        <Form.Control
          type="text"
          name="search"
          onChange={(e) => setKeyword(e.target.value)}
          value={keyword}
          placeholder="Search Products..."
          className="mr-sm-2 ml-sm-2"
        ></Form.Control>
        <Button type="submit" variant="outline-light" className="p-2 mx-2">
          Search
        </Button>
      </Form>
    </>
  );
};

export default Search;
