import "./Button.css";

function Button(props) {
  return (
    <>
      <div className="d-flex justify-content-center ">
        {/* <button type={props.type} className="btn btn-principal w-25">
          {props.name}
        </button> */}
        <button className="btn btn-principal" type="submit"><a href={props.link} className="link-referencia fw-normal">{props.name}</a></button>
      </div>
    </>
  );
}

export default Button;
