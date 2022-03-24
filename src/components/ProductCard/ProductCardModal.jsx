import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../components/ProductCard/ProductCardModal.css'
import CurrencyFormat from 'react-currency-format';
import Button from '../../components/Button/Button'

export default class ProductCardModal extends Component {

    limitValue = 999999.99

    constructor(props) {
        super(props)
    }

    //INÍCIO: TRANSFORMAÇÃO PARA SEPARAÇÃO DE DEZENAS E MILHARES COM PADRÃO BRASILEIRO
    priceConverted = (number) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number)
    }
    //FIM: TRANSFORMAÇÃO PARA SEPARAÇÃO DE DEZENAS E MILHARES COM PADRÃO BRASILEIRO


    render() {


        let modelStyle = {
            display: 'block',
            backgroundColor: 'rgba(0,0,0,0.8)',

        }

        return (
            <div className="modal show fade" style={modelStyle}>
                <div className="modal-dialog modal-xl">
                    <div className="row modal-content background-modal col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 justify-content-center ms-0">
                        <div className="modal-header">
                            <h5 className="modal-title px-1 font-title-modal ms-2">{this.props.brand} {this.props.model}</h5>
                            <button type="button" className="btn-close me-2" onClick={this.props.hide}></button>
                        </div>

                        <div className="d-flex justify-content-center">
                            <div className="row modal-body row-cols-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6 mb-2 mb-md-0 mb-lg-0">
                                    <img src={this.props.image} className="img-fluid" />
                                </div>

                                <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                    <div className="background-datasheet border border-2  border-dark">
                                        <h4 className="text-center my-2">Ficha Técnica</h4>
                                    </div>

                                    <div className="mt-2 border border-2  border-dark p-3 background-datasheet">
                                        <div className="row justify-content-center col-12 border border-2  border-dark mx-0 d-flex align-items-center">
                                            <p className="col-4 text-start fs-6 my-0">Modelo:</p>
                                            <p className="col-8 css-font-family-modal text-end fs-6 my-0">{this.props.model}</p>
                                        </div>
                                        <div className="row justify-content-center col-12 border border-2  border-dark mx-0 d-flex align-items-center mt-2">
                                            <p className="col-6 text-start fs-6 my-0">Cor:</p>
                                            <p className=" col-6 css-font-family-modal text-end fs-6 my-0 css-font-family-modal">{this.props.color}</p>
                                        </div>
                                        <div className="row justify-content-center col-12 border border-2  border-dark mx-0 d-flex align-items-center mt-2">
                                            <p className="col-9 text-start fs-6 my-0">Ano de Fabricação:</p>
                                            <p className="col-3 css-font-family-modal text-end fs-6 my-0 css-font-family-modal">{this.props.year}</p>
                                        </div>
                                        <div className="row justify-content-center col-12 border border-2  border-dark mx-0 d-flex align-items-center mt-2">
                                            <p className="col-3 text-start fs-6 my-0">Motor:</p>
                                            <p className="col-9 css-font-family-modal text-end fs-6 my-0 css-font-family-modal">{this.props.engine}</p>
                                        </div>
                                        <div className="row justify-content-center col-12 border border-2  border-dark mx-0 d-flex align-items-center mt-2">
                                            <p className="col-6 text-start fs-6 my-0">Potência:</p>
                                            <p className="col-6 css-font-family-modal text-end fs-6 my-0 css-font-family-modal">{this.props.potency}</p>
                                        </div>
                                        <div className="row justify-content-center col-12 border border-2  border-dark mx-0 d-flex align-items-center mt-2">
                                            <p className="col-3 text-start fs-6 my-0">Câmbio:</p>
                                            <p className="col-9 css-font-family-modal text-end fs-6 my-0 css-font-family-modal">{this.props.gearshift}</p>
                                        </div>
                                        <div className="row justify-content-center col-12 border border-2  border-dark mx-0 d-flex align-items-center mt-2">
                                            <p className="col-6 text-start fs-6 my-0">Combustível:</p>
                                            <p className="col-6 css-font-family-modal text-end fs-6 my-0 css-font-family-modal">{this.props.fuel}</p>
                                        </div>
                                        <div className="row justify-content-center col-12 border border-2  border-dark mx-0 d-flex align-items-center mt-2">
                                            <p className="col-6 text-start fs-6 my-0">Preço:</p>

                                            {/* INICIO: APLICAÇÃO SEM O FORMATO DE MOEDA BRASILEIRA */}
                                            {/* <CurrencyFormat
                                            value={this.props.price.toFixed(2)}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                            prefix={'R$ '}
                                            renderText={value =>
                                                <p className="col-6 css-font-family-modal text-end fs-6 my-0 css-font-family-modal">
                                                    {value}
                                                </p>}
                                        /> */}
                                            {/* FIM: APLICAÇÃO SEM O FORMATO DE MOEDA BRASILEIRA */}

                                            <p className="col-6 css-font-family-modal text-end fs-6 my-0 css-font-family-modal">
                                                {this.priceConverted(this.props.price)}
                                            </p>

                                        </div>

                                    </div>
                                </div>

                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 justify-content-center">
                                    <div className="background-datasheet border border-2  border-dark mt-2">
                                        <h4 className="text-center my-2">Descrição do veículo</h4>
                                    </div>

                                    <div className="mt-2 border border-2  border-dark p-3 background-datasheet">
                                        <p className="css-font-family-modal">{this.props.description}</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {

                            this.props.price >= this.limitValue
                                ? <>
                                    <div className="modal-footer justify-content-center col-md-12 px-4 px-md-0">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-2 justify-content-center">
                                                <Button link="/checkoutScheduling" name="Agendar" />
                                        </div>
                                    </div>
                                </>
                                : <>
                                    <div className="modal-footer d-grid gap-2 d-flex justify-content-center col-md-12 px-4 px-md-0">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-2 justify-content-center">
                                            <Button link="/checkoutScheduling" name="Agendar" />
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-2">
                                            <Button to="/cart" name="Comprar" />
                                        </div>
                                    </div>
                                </>

                        }

                    </div>
                </div>
            </div>
        )
    }
}