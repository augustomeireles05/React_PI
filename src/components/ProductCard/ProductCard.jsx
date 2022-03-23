import React, { useState } from 'react'
import List from './List'
import ProductCardModal from './ProductCardModal'
import './ProductCard.css'
import CurrencyFormat from 'react-currency-format';

const ProductCard = () => {

    const [model, setModel] = useState(false);
    const [tempdata, setTempData] = useState([]);


    const getData = (brand, model, color, year, engine, potency, price, gearshift, fuel, inventory, enphasis, image, description) => {
        let tempData = [
            brand, model, color, year, engine, potency, price, gearshift, fuel, inventory, enphasis, image, description
        ];

        // console.warn(tempData)
        setTempData(item => [1, ...tempData])

        return setModel(true);
    }

    return (
        <>
            <section className="py-4 py-lg-5 col-12 col-sm-12 col-md-12 justify-content-around">
                <div className="row justify-content-evenly align-item-center">


                    {List.cardData.map((item, index) => {

                        return (

                            <div className="row justify-content-around col-12 col-md-10 col-lg-3 mx-0 mb-4" key={index} style={{ width: 23 + 'em' }}>
                                <div className="card p-0 overflow-hidden h-100 shadow" >
                                    <img src={item.image} className="card-img-top" />
                                    <div className="text-center mb-3">
                                        <h5 className="card-title mb-4 css-font-family" >{item.brand} {item.model}</h5>

                                        <CurrencyFormat
                                            value={item.price.toFixed(2)}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                            prefix={'R$ '}
                                            renderText={value =>
                                                <p className="font-price">
                                                    {value}
                                                </p>}
                                        />
                                        <button className="btn mt-3 color-button"
                                            onClick={() => getData(item.brand, item.model, item.color, item.year, item.engine, item.potency, item.price, item.gearshift, item.fuel, item.image, item.description)}>
                                            Ver detalhes
                                        </button>
                                    </div>

                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>

            {
                model === true ?
                    <ProductCardModal
                        brand={tempdata[1]}
                        model={tempdata[2]}
                        color={tempdata[3]}
                        year={tempdata[4]}
                        engine={tempdata[5]}
                        potency={tempdata[6]}
                        price={tempdata[7]}
                        gearshift={tempdata[8]}
                        fuel={tempdata[9]}
                        image={tempdata[10]}
                        description={tempdata[11]}

                        hide={() => setModel(false)}
                    /> : ''
            }


        </>
    )

}

export default ProductCard;