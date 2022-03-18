import '../../components/Input/Input.css'

function Input(props) {


    return (
        <>
            <input className="input-style col-12 p-3 p-md-2 h-100 fs-6" type={props.type} aria-label={props.ariaLabel} id={props.id} autocomplete="off"/>
        </>
    )
}

export default Input