import "./Button.css";

function Button(props) {
  return (
    <>
      <div className="row d-flex justify-content-center ">
        {/* <button type={props.type} className="btn btn-principal w-25">
          {props.name}
        </button> */}
        <button className="btn d-block w-25 btn-principal" type="submit"><a href={props.link} className="link-referencia">{props.name}</a></button>
      </div>
    </>
  );
}

export default Button;
