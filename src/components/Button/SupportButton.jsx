import { Link } from "react-router-dom/";
import "./SupportButton.css";

function SupportButton(props) {
    return (

        <>
            <div className="d-flex justify-content-center ">
                <button className="btn btn-secundario" type="submit"><a href={props.link} className="link-referencia fw-normal">{props.name}</a></button>
            </div>

        {/* // estava justify-content-center  */}
        </>
    );
}

export default SupportButton;