import "./CheckoutScheduling.css";

import React from "react";
import { Link } from "react-router-dom";

import Header from '../../components/header/Header.jsx';
import Footer from '../../components/footer/Footer.jsx';
import Button from "../../components/Button/Button";
import SupportButton from "../../components/Button/SupportButton";




import Input from '../../components/Input/Input'
import Label from '../../components/Input/Label'
import Subtittle from '../../components/Subtittle/Subtittle'


import Editar from '../../assets/images/CheckoutOrder/edit.png';
import Lixeira from '../../assets/images/CheckoutOrder/trash.png';
import Adicionar from '../../assets/images/CheckoutOrder/plus.png';
import Boleto from '../../assets/images/CheckoutOrder/barcode.png';
import Pix from '../../assets/images/CheckoutOrder/pix.png';


function CheckoutScheduling() {
  return (
    <>
      <Header />



      {/* INÍCIO DO TÍTULO DA PÁGINA */}
      <div className="title-page background font-text-bold">
        <Subtittle menu="Finalize seu Agendamento" />
      </div>

      {/* FIM DO TÍTULO DA PÁGINA */}

      <div className="row col-11 col-md-12 col-lg-11 col-xl-11 background d-flex justify-content-center m-auto g-5">
        {/* INÍCIO DO CARD ENDERECO */}
        <div className="col-md-5 col-lg-5 row d-flex justify-content-center background">







          <div className="modal fade" id="modal-endereco" tabIndex={-1} aria-labelledby="inicioModal" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content background-modal-checkoutorder">
                {/* header do modal */}
                <div className="modal-header">

                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <h5 className="modal-title text-center text-dark" id="inicioModal">
                  Cadastre um novo endereço
                </h5>
                {/* fim da header do modal */}

                {/* corpo do modal Endereço */}
                <div className="modal-body">
                  <div className="container">
                    <div className="col-12 col-sm-12 col-md-12 px-0">
                      <Label label="Logradouro" for="logradouro" />
                      <Input type="text" aria-label="logradouro" id="logradouro" />
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 row justify-content-between px-0 mx-0">
                      <div className="col-12 col-sm-12 col-md-6 pe-md-2 ps-0 ps-md-0 pe-0">
                        <Label label="Cidade" for="cidade" />
                        <Input type="text" aria-label="cidade" id="cidade" />
                      </div>

                      <div className="col-12 col-sm-12 col-md-4 pe-md-2 ps-0 ps-md-0 pe-0">
                        <Label label="Bairro" for="bairro" />
                        <Input type="text" aria-label="bairro" id="bairro" />
                      </div>

                      <div className="col-12 col-sm-12 col-md-2 px-0">
                        <Label label="UF" for="uf" />
                        <Input type="text" aria-label="uf" id="uf" />
                      </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 row justify-content-between px-0 mx-0">
                      <div className="col-12 col-sm-12 col-md-10 pe-md-2 ps-0 ps-md-0 pe-0">
                        <Label label="Cep" for="cep" />
                        <Input type="text" aria-label="cep" id="cep" />
                      </div>
                      <div className="col-12 col-sm-12 col-md-2 px-0">
                        <Label label="Nº" for="numero" />
                        <Input type="text" aria-label="uf" id="numero" />
                      </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 text-center mx-0 m-4">
                      <button type="submit" className="col-12 col-md-4 btn-modal-checkoutorder pt-2 pb-2 pe-3 ps-3">
                        Salvar
                      </button>
                    </div>
                  </div>
                </div>
                {/* fim do corpo do modal Endereço */}
              </div>
            </div>
          </div>
          {/* fim do modal adicionar endereço */}

          <div className="col-12 col-sm-12 col-md-12 col-lg-12 row justify-content-between align-items-center p-0 p-md-0">
            <div className="col-10 col-sm-10 col-md-10 col-lg-10 ps-0">
              <h4 className="mb-2 font-text">Formas de Pagamento</h4>
            </div>
            {/* INÍCIO DO BOTÃO DE ADICIONAR FORMA DE PAGAMENTO */}

            <div className="col-2 col-sm-2 col-md-2 col-lg-2 text-end pe-0 pe-md-0">
              {/* botão padrão que abre o modal Cartão */}
              <button type="button" className="btn px-0 mb-2" data-bs-toggle="modal" data-bs-target="#modal-cartao">
                <img src={Adicionar} width="30" alt="Adicionar" />
              </button>
              {/* fim do botão que abre o modal Cartão  */}
            </div>
            {/* FIM DO BOTÃO DE ADICIONAR FORMA DE PAGAMENTO */}
          </div>


          <div className="card text-black bg-white mb-3 px-0">
            {/* Início Cartão 01 */}
            <div className=" col-md-12 card-header">
              <div className="form-check font-text d-flex justify-content-between">
                <div className="d-grid d-flex justify-content-start">
                  <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2" />
                  <span className="space-input">(Crédito) Mastercard</span>
                </div>
                <div className="d-grid d-md-flex justify-content-end">
                  <img className="btn " src={Editar} width="45" alt="Editar" data-bs-toggle="modal" data-bs-target="#modal-cartao" />
                  <img className="btn " src={Lixeira} width="45" alt="Lixeira" />
                </div>
              </div>
            </div>

            <div className="card-body font-text">
              <h5 className="card-title">Secondary card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            {/* Fim Cartão 01 */}

            {/* Início Cartão 02 */}
            <div className=" col-md-12 card-header">
              <div className="form-check font-text d-flex justify-content-between">
                <div className="d-grid d-flex justify-content-start">
                  <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2" />
                  <span className="space-input">(Débito) Visa</span>
                </div>
                <div className="d-grid d-md-flex justify-content-end">
                  <img className="btn " src={Editar} width="45" alt="Editar" data-bs-toggle="modal" data-bs-target="#modal-cartao" />
                  <img className="btn " src={Lixeira} width="45" alt="Lixeira" />
                </div>
              </div>
            </div>

            <div className="card-body font-text margin-card">
              <h5 className="card-title">Secondary card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            {/* Fim Cartão 02 */}
          </div>



          {/* Início modal adicionar cartão*/}
          <div className="modal fade" id="modal-cartao" tabIndex={-1} aria-labelledby="inicioModal" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content background-modal-checkoutorder">
                {/* header do modal */}
                <div className="modal-header">

                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <h5 className="modal-title text-center text-dark" id="inicioModal">
                  Adicione um novo cartão
                </h5>
                {/* fim da header do modal */}



                {/* corpo do modal Aicionar Cartão */}
                <div className="modal-body">
                  <div className="container">
                    <div className="col-12 col-sm-12 col-md-12 px-0">
                      <Label label="Número do cartão" for="cardnumber" />
                      <Input type="text" aria-label="cardnumber" id="cardnumber" />
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 row justify-content-between px-0 mx-0">
                      <div className="col-12 col-sm-12 col-md-6 pe-md-2 ps-0 ps-md-0 pe-0">
                        <Label label="Nome do titular" for="ownnername" />
                        <Input type="text" aria-label="ownnername" id="ownnername" />
                      </div>

                      <div className="col-12 col-sm-12 col-md-4 pe-md-2 ps-0 ps-md-0 pe-0">
                        <Label label="Data de validade" for="validdate" />
                        <Input type="text" aria-label="validdate" id="validdate" />
                      </div>

                      <div className="col-12 col-sm-12 col-md-2 px-0">
                        <Label label="CVV" for="cvv" />
                        <Input type="text" aria-label="uf" id="cvv" />
                      </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 row justify-content-between px-0 mx-0">
                      <div className="col-12 col-sm-12 col-md-10 pe-md-2 ps-0 ps-md-0 pe-0">
                        <Label label="CPF do titular" for="ownnercpf" />
                        <Input type="text" aria-label="cep" id="ownnercpf" />
                      </div>
                      <div className="col-12 col-sm-12 col-md-2 px-0">
                        <Label label="Bandeira" for="bandeira" />
                        <Input type="text" aria-label="uf" id="bandeira" />
                      </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 text-center mx-0 m-4">
                      <button type="submit" className="col-12 col-md-4 btn-modal-checkoutorder pt-2 pb-2 pe-3 ps-3">
                        Salvar
                      </button>
                    </div>
                  </div>
                </div>
                {/* fim do corpo do modal Cartão */}
              </div>
            </div>
          </div>


          <hr />

          <div className="card text-black bg-white mb-3 font-text px-0">
            {/* Início do Card do Pix */}
            <div className="card-header">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2" />
                <span className="icon-payment">
                  Pix
                  <img src={Pix} width="30" alt="Pix" />
                </span>
              </div>
            </div>
            <div className="card-body">
              <p className="card-text">
                Vencimento em 30 minutos. Após o pagamento seu pedido será
                processado.
              </p>
            </div>
            {/* Fim do Card do Pix */}

            {/* Início do Card do Boleto */}
            <div className="card-header">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2" />
                <span className="icon-payment">
                  Boleto
                  <img src={Boleto} width="30" alt="Boleto" />
                </span>
              </div>
            </div>

            <div className="card-body">
              {/* <h5 className="card-title">Secondary card title</h5> */}
              <p className="card-text">
                Vencimento em 1 dia útil. A data de entrega será alterada
                devido ao tempo de processamento do Boleto.
              </p>
            </div>
            {/* Fim do Card do Boleto */}
          </div>
        </div>


        {/* INICIO DO CARD DO RESUMO  */}
        <div className="col-md-6 col-lg-5 order-md-last mt-0">

          <div className="my-2 mb-3">
            <h4 className=" font-text">Insira a data do agendamento</h4>
          </div>


          <div className="row col-12 col-md-12 col-lg-12 col-xl-12 p-2 bg-body m-0 rounded-3">

            <div className="col-12 d-flex justify-content-center p-4">
              <input type="date" className="" id="data" name="Agenda" className="calendar" />
            </div>
          </div>




          <hr />


          <h4 className="d-flex justify-content-between align-items-center mt-4 mb-3">
            <span className="text-black">Resumo do Agendamento</span>
          </h4>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between align-items-center gx-2">
              <div>
                <h6 className="my-2">Bugatti Chiron</h6>
                <small className="col-8 col-md-7 col-lg-7">
                  Descrição Breve do Bugatti Chiron
                </small>
              </div>
              <div className="col-4 col-md-5 col-lg-5 text-end">
                <span className="text-muted font-md-text font-lg-text">R$ 22.000.000,00</span>
              </div>
              
            </li>
            <li className="list-group-item d-flex justify-content-between bg-light">
              <div className="text-success">
                <h6 className="my-0 font-text">Valor do Agendamento</h6>
                <small className="font-text">0,1 % do valor do veículo</small>
              </div>
              <span className="text-success font-text">R$ 22.000,00</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span className="font-text-bold">Total (R$)</span>
              <strong className="font-text-bold">R$ 22.000,00</strong>
            </li>
          </ul>
          <div className="d-grid gap-2 d-md-block pt-2">
            <div className="col-sm-12">
              <SupportButton link="/Cart" name="Voltar para o Estoque" />
              <Button link="/orderResume" name="Finalizar Agendamento" />
            </div>
          </div>

          {/* </Button> */}
        </div>
        {/* FIM DO CARD DO RESUMO  */}
      </div>




      <Footer />
    </>
  )
}

export default CheckoutScheduling;

