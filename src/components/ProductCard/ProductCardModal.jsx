import React, { Component } from 'react'
import '../../components/ProductCard/ProductCardModal.css'

export default class ProductCardModal extends Component {
    render() {

        let modelStyle = {
            display: 'block',
            backgroundColor: 'rgba(0,0,0,0.8)',

        }

        return (
            <div className="modal show fade" style={modelStyle}>
                <div className="modal-dialog">
                    <div className="modal-content background-modal">
                        <div className="modal-header">
                            <h5 className="modal-title font-title-modal">{this.props.brand} {this.props.model}</h5>
                            <button type="button" className="btn-close" onClick={this.props.hide}></button>
                        </div>
                        <div className="modal-body row-cols-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="col-12 col-md-12 col-lg-12 justify-content-center">
                                <img src={this.props.image} className="img-fluid" />
                            </div>
                            
                            <h4 className="text-center my-2">Ficha Técnica</h4>

                            <div className="mt-2 border border-dark p-3 background-datasheet">
                                <div className="row justify-content-center col-12 border border-dark mx-0 d-flex align-items-center">
                                    <p className="col-6 text-start fs-6 my-0">Modelo:</p>
                                    <p className="col-6 css-font-family-modal text-end fs-6 my-0">{this.props.model}</p>
                                </div>
                                <div className="row justify-content-center col-12 border border-dark mx-0 d-flex align-items-center mt-2">
                                    <p className="col-6 text-start fs-6 my-0">Cor:</p>
                                    <p className=" col-6 css-font-family-modal text-end fs-6 my-0 css-font-family-modal">{this.props.color}</p>
                                </div>
                                <div className="row justify-content-center col-12 border border-dark mx-0 d-flex align-items-center mt-2">
                                    <p className="col-6 text-start fs-6 my-0">Ano de Fabricação:</p>
                                    <p className="col-6 css-font-family-modal text-end fs-6 my-0 css-font-family-modal">{this.props.year}</p>
                                </div>
                                <div className="row justify-content-center col-12 border border-dark mx-0 d-flex align-items-center mt-2">
                                    <p className="col-6 text-start fs-6 my-0">Motor:</p>
                                    <p className="col-6 css-font-family-modal text-end fs-6 my-0 css-font-family-modal">{this.props.engine}</p>
                                </div>
                                <div className="row justify-content-center col-12 border border-dark mx-0 d-flex align-items-center mt-2">
                                    <p className="col-6 text-start fs-6 my-0">Potência:</p>
                                    <p className="col-6 css-font-family-modal text-end fs-6 my-0 css-font-family-modal">{this.props.potency}</p>
                                </div>
                                <div className="row justify-content-center col-12 border border-dark mx-0 d-flex align-items-center mt-2">
                                    <p className="col-6 text-start fs-6 my-0">Câmbio:</p>
                                    <p className="col-6 css-font-family-modal text-end fs-6 my-0 css-font-family-modal">{this.props.gearshift}</p>
                                </div>
                                <div className="row justify-content-center col-12 border border-dark mx-0 d-flex align-items-center mt-2">
                                    <p className="col-6 text-start fs-6 my-0">Combustível:</p>
                                    <p className="col-6 css-font-family-modal text-end fs-6 my-0 css-font-family-modal">{this.props.fuel}</p>
                                </div>
                                <div className="row justify-content-center col-12 border border-dark mx-0 d-flex align-items-center mt-2">
                                    <p className="col-6 text-start fs-6 my-0">Preço:</p>
                                    <p className="col-6 css-font-family-modal text-end fs-6 my-0 css-font-family-modal">{this.props.price}</p>
                                </div>
                                
                            </div>

                            <h4 className="text-center my-2">Descrição do veículo</h4>

                            <div className="mt-2 border border-dark p-3 background-datasheet">
                                    <p className="css-font-family-modal">{this.props.description}</p>
                            </div>
                            
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}