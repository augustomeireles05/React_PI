import { Link } from "react-router-dom";
import "./Button.css";

function Button(props) {
  return (
    <>
      <div className="col-12 text-center mt-2">
        <button type={props.type} className="btn btn-principal w-25">
          <Link to={props.href} className="link-referencia">{props.name}</Link>
        </button>
      </div>
    </>
  );
}

export default Button;
