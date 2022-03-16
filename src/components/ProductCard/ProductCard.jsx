// import './ProductCard.css'

function ProductCard(props) {
    return (
        <>
            <div className="card mb-5" style={{width: 19 + 'em'}}>
                <img src={props.image} className="card-img" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title titulo-card">{props.brand} {props.model}</h5>
                    <p className="card-text text-center"><strong> {props.price} </strong></p>
                    <div className="btn mt-3 btn_buscar btn-detalhes mb-2" role="button">VER DETALHES</div>
                </div>
            </div>
        </>
    )
}

export default ProductCard


