import "./Button.css";

function Button(props) {
  return (
    <>
      <div className="col-12 text-center mt-2">
        <button type={props.type} className="btn btn-principal w-25">
          {props.name}
        </button>
      </div>
    </>
  );
}

export default Button;
