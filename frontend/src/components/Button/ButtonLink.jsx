import { Link } from "react-router-dom";

const ButtonLink = ({ icon, text, to }) => {
  return (
    <>
      <Link
        className="gap-2 btn btn-light my-3 d-inline-flex align-items-center"
        to={to}
      >
        {icon} {text}
      </Link>
    </>
  );
};

export default ButtonLink;
