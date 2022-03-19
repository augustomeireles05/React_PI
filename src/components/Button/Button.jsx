import "./Button.css";

function Button(props) {
  return (
    <>
      {/* Estava justify-content-center */}
      <div className="d-flex justify-content-end me-3 me-md-0 "> 
        {/* <button type={props.type} className="btn btn-principal w-25">
          {props.name}
        </button> */}

        <button className="btn btn-principal fw-normal text-decoration-none" type="submit"><a href={props.link} className="link-referencia">{props.name}</a></button>

      </div>
    </>
  );
}

export default Button;
