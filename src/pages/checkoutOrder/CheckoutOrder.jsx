import './CheckoutOrder.css';

import React from 'react';

import Header from '../../components/header/Header.jsx';
import Footer from '../../components/footer/Footer.jsx';

import Button from '../../components/Button/Button.jsx';
import SupportButton from '../../components/Button/SupportButton';

import Input from '../../components/Input/Input'
import Label from '../../components/Input/Label'


import Editar from '../../assets/images/CheckoutOrder/edit.png';
import Lixeira from '../../assets/images/CheckoutOrder/trash.png';
import Adicionar from '../../assets/images/CheckoutOrder/plus.png';
import Boleto from '../../assets/images/CheckoutOrder/barcode.png';
import Pix from '../../assets/images/CheckoutOrder/pix.png';

function CheckoutOrder() {

  return (
    <>
      <Header />
      {/* INÍCIO DO TÍTULO DA PÁGINA */}
      <div className="title-page background font-text-bold">
        <h3>Confira e finalize seu pedido</h3>
        <hr />
      </div>

      {/* FIM DO TÍTULO DA PÁGINA */}

      <div className="row background d-flex justify-content-center">
        {/* INÍCIO DO CARD ENDERECO */}
        <div className="col-md-5 col-lg-5 row d-flex justify-content-center background">


          {/* INICIO DO CARD DOS MEUS DADOS */}
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 row justify-content-between px-md-0 align-items-center">
            <div className="col-10 col-sm-10 col-md-10 col-lg-10 ps-0">
              <h4 className="font-text">Meus Dados</h4>
            </div>


            <div className="col-2 col-sm-2 col-md-2 col-lg-2 text-end pe-0 pe-md-0">

              <button type="button" className="btn px-0 mb-2" data-bs-toggle="modal" data-bs-target="#modal-endereco" >
                <img src={Adicionar} width="30" alt="Adicionar" />
              </button>

            </div>


          </div>
          {/* FIM DO CARD DOS MEUS DADOS */}

          {/* INICIO MEUS DADOS */}

          <div className="card text-black bg-white mb-3 px-0">

            <div className=" col-md-12 card-header">
              <div className="form-check font-text d-flex justify-content-between">
                <div className="d-grid d-flex justify-content-start">
                  <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1" />
                  <span className="space-input">Meus Dados</span>
                </div>
                <div className="d-grid d-md-flex justify-content-end">
                  <img className="btn " src={Editar} width="45" alt="Editar" />
                  <img className="btn " src={Lixeira} width="45" alt="Lixeira" />
                </div>
              </div>
            </div>

            <div className="card-body">
              <h5 className="card-title font-text">Dados Pessoais</h5>
              <p className="card-text font-text">
                Nome: Cristiano Ronaldo
                <br />
                Sobrenome: Alves
                <br />
                E-mail Cadastrado: cr7@gmail.com
                <br />
                Telefone Cadastrado: 9 9999-8888
                <br />
                CPF: 234.000.000-00
                <br />
                RG: 12.000.000-0
              </p>
            </div>


          </div>


          {/* FIM DOS MEUS DADOS */}









          <div className="col-12 col-sm-12 col-md-12 col-lg-12 row justify-content-between px-md-0 align-items-center">
            <div className="col-10 col-sm-10 col-md-10 col-lg-10 ps-0">
              <h4 className="font-text">Endereços de Entrega</h4>
            </div>

            {/* INÍCIO DO BOTÃO DE ADICIONAR ENDEREÇO */}
            <div className="col-2 col-sm-2 col-md-2 col-lg-2 text-end pe-0 pe-md-0">
              {/* Início botão padrão que abre o modal Endereco */}
              <button type="button" className="btn px-0 mb-2" data-bs-toggle="modal" data-bs-target="#modal-endereco" >
                <img src={Adicionar} width="30" alt="Adicionar" />
              </button>
              {/* Início botão padrão que abre o modal Endereco */}
            </div>
            {/* FIM DO BOTÃO DE ADICIONAR ENDEREÇO */}
            {/* FIM DO CARD ENDERECO */}

          </div>




          <div className="card text-black bg-white mb-3 px-0">
            {/* Início Endereço 01 */}
            <div className=" col-md-12 card-header">
              <div className="form-check font-text d-flex justify-content-between align-items-center">
                <div className="d-grid d-flex justify-content-start">
                  <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1" />
                  <span className="space-input">Endereço 01</span>
                </div>
                <div className="d-flex d-md-flex justify-content-end">
                  <button type="button" className="btn px-0 mb-2" data-bs-toggle="modal" data-bs-target="#staticBackdropEdit">
                    <img className="btn " src={Editar} width="45" alt="Editar" />
                  </button>
                  <button type="button" className="btn px-0 mb-2" data-bs-toggle="modal" data-bs-target="#staticBackdropDeleteAdress">
                    <img className="btn " src={Lixeira} width="45" alt="Lixeira" />
                  </button>
                </div>
              </div>
            </div>

            <div className="card-body">
              <p className="card-text font-text">
              Praça Roberto Pedro Gomes, 101
                <br />
                Morumbi (São Paulo/SP)
                <br />
                CEP: 12332-032
              </p>
            </div>
            {/* Fim Endereço 01 */}

            {/* Início Endereço 02 */}
            <div className=" col-md-12 card-header">
              <div className="form-check font-text d-flex justify-content-between">
                <div className="d-grid d-flex justify-content-start">
                  <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1" />
                  <span className="space-input">Endereço 02</span>
                </div>
                <div className="d-flex d-md-flex justify-content-end">
                  <img className="btn " src={Editar} width="45" alt="Editar" />
                  <img className="btn " src={Lixeira} width="45" alt="Lixeira" />
                </div>
              </div>
            </div>

            <div className="card-body font-text">
              <p className="card-text">
                Av. 7 de Setembro, 111
                <br />
                Vitória (Salvador/BA)
                <br />
                CEP: 00000-000
              </p>
            </div>
            {/* Fim Endereço 02 */}
          </div>



          {/* Início modal adicionar endereço*/}
          <div className="modal fade" id="modal-endereco" tabIndex={-1} aria-labelledby="inicioModal" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                {/* header do modal */}
                <div className="modal-header">

                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <h5 className="modal-title text-center" id="inicioModal">
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




          {/* modal editar endereço */}
          <div className="modal fade" id="staticBackdropEdit" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content background-modal-checkoutorder">
                <div className="modal-header">

                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <h5 className="modal-title text-center text-black" id="staticBackdropLabel">Editar Endereço</h5>
                <div className="modal-body">

                  {/* corpo do modal Editar Endereço */}
                  <div className="modal-body">
                    <div className="container">
                      <div className="col-12 col-sm-12 col-md-12 px-0">
                        <Label label="Logradouro" for="logradouro" />
                        <Input type="text" aria-label="logradouro" id="logradouro" value="Praça Roberto Pedro Gomes" />
                      </div>

                      <div className="col-12 col-sm-12 col-md-12 row justify-content-between px-0 mx-0">
                        <div className="col-12 col-sm-12 col-md-6 pe-md-2 ps-0 ps-md-0 pe-0">
                          <Label label="Cidade" for="cidade" />
                          <Input type="text" aria-label="cidade" id="cidade" value="São Paulo" />
                        </div>

                        <div className="col-12 col-sm-12 col-md-4 pe-md-2 ps-0 ps-md-0 pe-0">
                          <Label label="Bairro" for="bairro" />
                          <Input type="text" aria-label="bairro" id="bairro" value="Morumbi" />
                        </div>

                        <div className="col-12 col-sm-12 col-md-2 px-0">
                          <Label label="UF" for="uf" />
                          <Input type="text" aria-label="uf" id="uf" value="SP" />
                        </div>
                      </div>

                      <div className="col-12 col-sm-12 col-md-12 row justify-content-between px-0 mx-0">
                        <div className="col-12 col-sm-12 col-md-10 pe-md-2 ps-0 ps-md-0 pe-0">
                          <Label label="Cep" for="cep" />
                          <Input type="text" aria-label="cep" id="cep" value="12332-032" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-2 px-0">
                          <Label label="Nº" for="numero" />
                          <Input type="text" aria-label="uf" id="numero" value="101" />
                        </div>
                      </div>

                      <div className="col-12 col-sm-12 col-md-12 text-center mx-0 m-4">
                        <button type="submit" className="col-12 col-md-4 btn-modal-checkoutorder pt-2 pb-2 pe-3 ps-3">
                          Salvar
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* fim do corpo do modal Editar Endereço */}
                </div>
              </div>
            </div>
          </div>
          {/* fim do do modal editar endereço */}




          {/* modal editar cartão */}
          <div className="modal fade" id="staticBackdropEditCard" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content background-modal-checkoutorder">
                <div className="modal-header">

                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <h5 className="modal-title text-center text-black" id="staticBackdropLabel">Editar Cartão</h5>


                {/* corpo do modal Cartão */}
                <div className="modal-body">
                  <div className="container">
                    <div className="col-12 col-sm-12 col-md-12 px-0">
                      <Label label="Número do cartão" for="cardnumber" />
                      <Input type="text" aria-label="cardnumber" id="cardnumber" value="**** **** **** 0564" />
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 row justify-content-between px-0 mx-0">
                      <div className="col-12 col-sm-12 col-md-6 pe-md-2 ps-0 ps-md-0 pe-0">
                        <Label label="Nome do titular" for="ownnername" />
                        <Input type="text" aria-label="ownnername" id="ownnername" value="Maria Auxiliadora de Jesus" />
                      </div>

                      <div className="col-12 col-sm-12 col-md-4 pe-md-2 ps-0 ps-md-0 pe-0">
                        <Label label="Data de validade" for="validdate" />
                        <Input type="text" aria-label="validdate" id="validdate" value="03/30" />
                      </div>

                      <div className="col-12 col-sm-12 col-md-2 px-0">
                        <Label label="CVV" for="cvv" />
                        <Input type="text" aria-label="uf" id="cvv" value="xxx" />
                      </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 row justify-content-between px-0 mx-0">
                      <div className="col-12 col-sm-12 col-md-10 pe-md-2 ps-0 ps-md-0 pe-0">
                        <Label label="CPF do titular" for="ownnercpf" />
                        <Input type="text" aria-label="cep" id="ownnercpf" value="099.345.666-09" />
                      </div>
                      <div className="col-12 col-sm-12 col-md-2 px-0">
                        <Label label="Bandeira" for="bandeira" />
                        <Input type="text" aria-label="uf" id="bandeira" value="VISA" />
                      </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 text-center mx-0 m-4">
                      <button type="submit" className="col-12 col-md-4 btn-modal-checkoutorder pt-2 pb-2 pe-3 ps-3">
                        Salvar
                      </button>
                    </div>
                  </div>

                  {/* fim do corpo do modal Cartão */}
                </div>
              </div>
            </div>
          </div>
          {/* fim do do modal editar Cartão */}




          {/* modal excluir Cartão */}
          <div className="modal fade" id="staticBackdropDeleteCard" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content background-modal-checkoutorder">
                <div className="modal-header">

                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <h5 className="modal-title text-center text-black" id="staticBackdropLabel">Excluir cartão </h5>


                {/* corpo do modal excluir Cartão */}
                <div className="modal-body">
                  <div className="container">

                    <div>
                      <h5 className="text-dark text-center">Tem certeza que deseja excluir o cartão</h5>
                      <h4 className="text-center">**** **** **** 0564 ?</h4>
                    </div>




                    <div className="col-12 col-sm-12 col-md-12 text-center mx-0 m-4">
                      <button type="submit" className="col-12 col-md-4 btn-modal-checkoutorder pt-2 pb-2 pe-3 ps-3">
                        Excluir
                      </button>
                    </div>
                  </div>

                  {/* fim do corpo do excluir Cartão */}
                </div>
              </div>
            </div>
          </div>
          {/* fim do modal excluir Cartão */}



          <hr />

          <div className="col-12 col-sm-12 col-md-12 col-lg-12 row justify-content-between align-items-center p-0 p-md-0">
            <div className="col-10 col-sm-10 col-md-10 col-lg-10 ps-0">
              <h4 className="mb-3 font-text">Formas de Pagamento</h4>
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
              <div className="form-check font-text d-flex justify-content-between align-items-center">
                <div className="d-grid d-flex justify-content-start">
                  <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2" />
                  <span className="space-input">(Crédito) Mastercard</span>
                </div>
                <div className="d-flex d-md-flex justify-content-end">
                  <button type="button" className="btn px-0 mb-2" data-bs-toggle="modal" data-bs-target="#staticBackdropEditCard">
                    <img className="btn " src={Editar} width="45" alt="Editar" />
                  </button>

                  <button type="button" className="btn px-0 mb-2" data-bs-toggle="modal" data-bs-target="#staticBackdropDeleteCard">
                    <img className="btn " src={Lixeira} width="45" alt="Lixeira" />
                  </button>
                </div>
              </div>
            </div>

            <div className="card-body font-text">
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
                <div className="d-flex d-md-flex justify-content-end">
                  <img className="btn " src={Editar} width="45" alt="Editar" />
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

            {/* Início Cartão 03 */}
            <div className=" col-md-12 card-header">
              <div className="form-check font-text d-flex justify-content-between">
                <div className="d-grid d-flex justify-content-start">
                  <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2" />
                  <span className="space-input">Paypal</span>
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
            {/* Fim Cartão 03 */}
          </div>



          {/* Início modal adicionar cartão*/}
          <div className="modal fade" id="modal-cartao" tabIndex={-1} aria-labelledby="inicioModal" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                {/* header do modal */}
                <div className="modal-header">

                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <h5 className="modal-title text-center" id="inicioModal">
                  Adicione um novo cartão
                </h5>
                {/* fim da header do modal */}



                {/* corpo do modal Endereço */}
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
                {/* fim do corpo do modal Endereço */}
              </div>
            </div>


          </div>
          {/* fim do modal adicionar endereço */}




          {/* modal excluir endereço */}
          <div className="modal fade" id="staticBackdropDeleteAdress" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content background-modal-checkoutorder">
                <div className="modal-header">

                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <h5 className="modal-title text-center text-black" id="staticBackdropLabel">Excluir Endereço </h5>


                {/* corpo do modal excluir endereço */}
                <div className="modal-body">
                  <div className="container">

                    <div>
                      <h5 className="text-dark text-center">Tem certeza que deseja excluir o endereço? </h5>
                      <div>
                        <h5 className="text-justify text-dark">PRAÇA ROBERTO PEDRO GOMES Nº 101 Morumbi (São Paulo/SP) <br/> CEP: 12332-032
                        </h5>
                        
                      </div>

                    </div>




                    <div className="col-12 col-sm-12 col-md-12 text-center mx-0 m-4">
                      <button type="submit" className="col-12 col-md-4 btn-modal-checkoutorder pt-2 pb-2 pe-3 ps-3">
                        Excluir
                      </button>
                    </div>
                  </div>

                  {/* fim do corpo do excluir endereço */}
                </div>
              </div>
            </div>
          </div>
          {/* fim do modal excluir endereço */}




          <hr />

          <div className="card text-black bg-white mb-3 font-text px-0">
            {/* Início do Card do Pix */}
            <div className="card-header">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2" />
                <span className="icon-payment">
                  Pix
                  <img src={Pix} width="30" alt="Pix" className="ms-2" />
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
                  <img src={Boleto} width="30" alt="Boleto" className="ms-2"/>
                </span>
              </div>
            </div>

            <div className="d-grid gap-2 d-md-block pt-2">
              {/* <Button type="button" name="Voltar para Carrinho"> */}
              {/* <SupportButton link="/Cart" name="Voltar para o Carrinho"/> */}

              <div className="mt-3"></div>

              {/* <Link to="/cart"></Link> */}
              {/* </Button> */}
              {/* <Button type="button" name="Finalizar Compra"> */}
              {/* <Link to="/orderResume"></Link> */}
              {/* <Button link="/orderResume" name="Finalizar Compra"/> */}
              {/* </Button> */}
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
        <div className="col-md-6 col-lg-5 order-md-last mt-2">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-black">Resumo do Pedido</span>
          </h4>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between">
              <div>
                <h6 className="my-0">Nome do 1º Carro</h6>
                <small className="">
                  Descrição do 1º Carro
                </small>
              </div>
              <span className="text-muted font-text">R$ 2.500.000,00</span>
            </li>
            <li className="list-group-item d-flex justify-content-between bg-light">
              <div className="text-success">
                <h6 className="my-0 font-text">Preço do Frete</h6>
                <small className="font-text">Cep</small>
              </div>
              <span className="text-success font-text">R$ 65.500,00</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span className="font-text-bold">Total (R$)</span>
              <strong className="font-text-bold">R$ 4.756.100,00</strong>
            </li>
          </ul>
          <div className="d-grid gap-2 d-md-block pt-2">
            <div className="col-sm-12">
              <SupportButton link="/Cart" name="Voltar para o Carrinho" />
              <Button link="/orderResume" name="Finalizar Compra" />
            </div>
          </div>

          {/* </Button> */}
        </div>
        {/* FIM DO CARD DO RESUMO  */}
      </div>
      <Footer />
    </>
  );
}

export default CheckoutOrder;