import { Link } from "react-router-dom/";
import "./SupportButton.css";

function SupportButton(props) {
    return (
        <>
            <div className="col-12 text-center mt-2" >
                <button type={props.type} classname="btn btn-Apoio w-25">
                    <Link to={props.href} className="link-referencia">{props.name}</Link>
                </button>
            </div>
        </>
    );
}

export default SupportButton;