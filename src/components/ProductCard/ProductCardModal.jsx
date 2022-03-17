import React, { Component } from 'react'
import './ProductCardModal.css'

export default class ProductCardModal extends Component {
    render() {

        let modelStyle = {
            display: 'block',
            backgroundColor: 'rgba(0,0,0,0.8)',

        }

        return (
            <div className="modal show fade" style={modelStyle}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{this.props.brand} {this.props.model}</h5>
                            <button type="button" className="btn-close" onClick={this.props.hide}></button>
                        </div>
                        <div className="modal-body row-cols-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="col-12 col-md-12 col-lg-12 justify-content-center">
                                <img src={this.props.image} className="img-fluid" />
                            </div>
                            
                            <div className="mt-2">
                                <div className="row justify-content-center col-12 border border-dark mx-0 d-flex align-items-center">
                                    <p className="col-6 text-center fs-6 my-0">Modelo:</p>
                                    <p className="col-6 css-font-family-modal text-center fs-6 my-0">{this.props.model}</p>
                                </div>
                                <div className="">
                                    <p className="css-font-family-modal">{this.props.color}</p>
                                </div>
                                <div className="">
                                    <p className="css-font-family-modal">{this.props.year}</p>
                                </div>
                                <div className="">
                                    <p className="css-font-family-modal">{this.props.engine}</p>
                                </div>
                                <div className="">
                                    <p className="css-font-family-modal">{this.props.potency}</p>
                                </div>
                                <div className="">
                                    <p className="css-font-family-modal">{this.props.price}</p>
                                </div>
                                <div className="">
                                    <p className="css-font-family-modal">{this.props.gearshift}</p>
                                </div>
                                <div className="">
                                    <p className="css-font-family-modal">{this.props.fuel}</p>
                                </div>
                                <div className="">
                                    <p className="css-font-family-modal">{this.props.inventory}</p>
                                </div>
                                
                            </div>

                            <div className="">
                                    <p className="css-font-family-modal css.description">{this.props.description}</p>
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