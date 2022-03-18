import '../../components/Input/Label.css'

function Label(props) {


    return (
        <>
            <label className="label font-recuperarsenha" for={props.for}>{props.label}</label>
        </>
    )
}

export default Label