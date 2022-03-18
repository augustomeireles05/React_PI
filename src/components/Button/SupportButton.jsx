import { Link } from "react-router-dom/";
import "./SupportButton.css";

function SupportButton(props) {
    return (
        // estava justify-content-center 
        <>      
            <div className="d-flex justify-content-end me-3 me-md-0 ">
                <button className="btn btn-secundario" type="submit"><a href={props.link} className="link-referencia">{props.name}</a></button>
            </div>
        </>
    );
}

export default SupportButton;