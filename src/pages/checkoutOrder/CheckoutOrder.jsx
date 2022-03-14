import './CheckoutOrder.css';

import React from 'react';

import Header from '../../components/header/Header.jsx';
import Footer from '../../components/footer/Footer.jsx';

import Button from '../../components/Button/Button.jsx';
import { Link } from 'react-router-dom';

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
            <h4 className="mb-3 font-text">Endereço de Entrega</h4>
            <div className="card text-black bg-white mb-3 px-0">
              {/* Início Endereço 01 */}
              <div className=" col-md-12 card-header">
                <div className="form-check font-text d-flex justify-content-between">
                  <div className="d-grid d-flex justify-content-start">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault1"
                      id="flexRadioDefault1"
                    />
                    <span className="space-input">Endereço 01</span>
                  
                  </div>
                  <div className="d-grid d-md-flex justify-content-end">
                    <img className="btn " src={Editar} width="45" alt="Editar"/>
                    <img className="btn " src={Lixeira} width="45" alt="Lixeira"/>
                  </div>
                </div>
              </div>

              <div className="card-body">
                <h5 className="card-title font-text">Secondary card title</h5>
                <p className="card-text font-text">
                  BA 099 km 08 Gleba 32C.
                  <br />
                  Bairro: Catu de Abrantes.
                  <br />
                  Cidade: Camaçari
                  <br />
                  UF: BA
                  <br />
                  CEP: 42.841-000
                  <br />
                  Complemento: Condomínio Busca Vida
                </p>
              </div>
              {/* Fim Endereço 01 */}

              {/* Início Endereço 02 */}
              <div className=" col-md-12 card-header">
                <div className="form-check font-text d-flex justify-content-between">
                  <div className="d-grid d-flex justify-content-start">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault1"
                      id="flexRadioDefault1"
                    />
                    <span className="space-input">Endereço 02</span>
                  </div>
                  <div className="d-grid d-md-flex justify-content-end">
                    <img className="btn " src={Editar} width="45" alt="Editar"/>
                    <img className="btn " src={Lixeira} width="45" alt="Lixeira"/>
                  </div>
                </div>
              </div>

              <div className="card-body font-text">
                <h5 className="card-title">João da Silva</h5>
                <p className="card-text">
                  Av. 7 de Setembro, nº 111.
                  <br />
                  Bairro: Vitória.
                  <br />
                  Cidade: Salvador
                  <br />
                  UF: BA
                  <br />
                  CEP: 00.000-000
                </p>
              </div>
              {/* Fim Endereço 02 */}
            </div>

            {/* INÍCIO DO BOTÃO DE ADICIONAR ENDEREÇO */}
            <div className="card-white font-text">
              <h6>Ou adicione um novo endereço de entrega</h6>
              {/* Início botão padrão que abre o modal Endereco */}
              <button
                type="button"
                className="btn"
                data-bs-toggle="modal"
                data-bs-target="#modal-endereco"
              >
                <img src={Adicionar} width="30" alt="Adicionar"/>
              </button>
              {/* Início botão padrão que abre o modal Endereco */}
            </div>
            {/* INÍCIO DO BOTÃO DE ADICIONAR ENDEREÇO */}
            {/* FIM DO CARD ENDERECO */}

            {/* Início modal adicionar endereço*/}
            <div
              className="modal fade"
              id="modal-endereco"
              tabIndex={-1}
              aria-labelledby="inicioModal"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  {/* header do modal */}
                  <div className="modal-header">
                    <h5 className="modal-title text-center" id="inicioModal">
                      ENDEREÇO
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  {/* fim da header do modal */}

                  {/* corpo do modal Endereço */}
                  <div className="modal-body">
                    <form className="formulario-cadastro container">
                      <div className="row alinha-campos d-flex justify-content-start gy-2">
                        <div className="cep col-sm-4">
                            <span className="text-color-modal">CEP</span>
                          <input
                            type="text"
                            className="form-control"
                            id="cep"
                          />
                        </div>

                        <div className="rua col-sm-8">
                            <span className="text-color-modal">LOGRADOURO</span>
                          <input
                            type="text"
                            className="form-control"
                            id="rua"
                          />
                        </div>
                      </div>

                      <div className="row alinha-campos d-flex justify-content-start gy-2">
                        <div className="numero col-sm-3">
                            <span className="text-color-modal">NÚMERO</span>
                          <input
                            type="number"
                            className="form-control"
                            id="numero"
                          />
                        </div>

                        <div className="bairro col-sm-9">
                            <span className="text-color-modal">BAIRRO</span>
                          <input
                            type="text"
                            className="form-control"
                            id="bairro"
                          />
                        </div>
                      </div>

                      <div className="row alinha-campos d-flex justify-content-start gy-2">
                        <div className="uf col-sm-3">
                            <span className="text-color-modal">UF</span>
                          <select name="uf" id="UF" className="form-control">
                            <option value="estado" defaultValue disabled>
                              - UF -
                            </option>
                            <option value="ac">AC</option>
                            <option value="al">AL</option>
                            <option value="am">AM</option>
                            <option value="ap">AP</option>
                            <option value="ba">BA</option>
                            <option value="ce">CE</option>
                            <option value="df">DF</option>
                            <option value="es">ES</option>
                            <option value="go">GO</option>
                            <option value="ma">MA</option>
                            <option value="mt">MT</option>
                            <option value="ms">MS</option>
                            <option value="mg">MG</option>
                            <option value="pa">PA</option>
                            <option value="pb">PB</option>
                            <option value="pr">PR</option>
                            <option value="pe">PE</option>
                            <option value="pi">PI</option>
                            <option value="rj">RJ</option>
                            <option value="rn">RN</option>
                            <option value="ro">RO</option>
                            <option value="rs">RS</option>
                            <option value="rr">RR</option>
                            <option value="sc">SC</option>
                            <option value="se">SE</option>
                            <option value="sp">SP</option>
                            <option value="to">TO</option>
                          </select>
                        </div>

                        <div className="cidade col-sm-9">
                            <span className="text-color-modal">CIDADE</span>
                          <input
                            type="text"
                            name=""
                            id="cidade"
                            className="form-control input-cidade"
                          />
                        </div>
                      </div>

                      <div className="complemento">
                          <span className="text-color-modal">COMPLEMENTO</span>
                        <input
                          type="text"
                          className="form-control"
                          id="complemento"
                        />
                      </div>

                      <div className="row justify-content-center">
                        <button
                          type="submit"
                          className="botao-salvar button btn mt-4 col-sm-4"
                        >
                          GRAVAR
                        </button>
                      </div>
                    </form>
                  </div>
                  {/* fim do corpo do modal Endereço */}
                </div>
              </div>
            </div>
            {/* fim do modal adicionar endereço */}

            <hr />

            <h4 className="mb-3 font-text">Formas de Pagamento</h4>
            <div className="card text-black bg-white mb-3 px-0">
              {/* Início Cartão 01 */}
              <div className=" col-md-12 card-header">
                <div className="form-check font-text d-flex justify-content-between">
                  <div className="d-grid d-flex justify-content-start">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault2"
                      id="flexRadioDefault2"
                    />
                      <span className="space-input">(Crédito) Mastercard</span>
                  </div>
                  <div className="d-grid d-md-flex justify-content-end">
                    <img className="btn " src={Editar} width="45" alt="Editar"/>
                    <img className="btn " src={Lixeira} width="45" alt="Lixeira"/>
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
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault2"
                      id="flexRadioDefault2"
                    />
                      <span className="space-input">(Débito) Visa</span>
                  </div>
                  <div className="d-grid d-md-flex justify-content-end">
                    <img className="btn " src={Editar} width="45" alt="Editar"/>
                    <img className="btn " src={Lixeira} width="45" alt="Lixeira"/>
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
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault2"
                      id="flexRadioDefault2"
                    />
                      <span className="space-input">Paypal</span>
                  </div>
                  <div className="d-grid d-md-flex justify-content-end">
                    <img className="btn " src={Editar} width="45" alt="Editar"/>
                    <img className="btn " src={Lixeira} width="45" alt="Lixeira"/>
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

            {/* INÍCIO DO BOTÃO DE ADICIONAR FORMA DE PAGAMENTO */}
            <div className="card-white font-text">
              <h6>Ou adicione um novo cartão</h6>
              {/* botão padrão que abre o modal Cartão */}
              <button
                type="button"
                className="btn"
                data-bs-toggle="modal"
                data-bs-target="#modal-cartao"
              >
                <img src={Adicionar} width="30" alt="Adicionar"/> 
              </button>
              {/* fim do botão que abre o modal Cartão  */}
            </div>
            {/* FIM DO BOTÃO DE ADICIONAR FORMA DE PAGAMENTO */}

            {/* Início modal adicionar cartão*/}
            <div
              className="modal fade"
              id="modal-cartao"
              tabIndex={-1}
              aria-labelledby="inicioModal"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  {/* header do modal */}
                  <div className="modal-header">
                    <h5 className="modal-title text-center" id="inicioModal">
                      ADICIONE UM NOVO CARTÃO
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  {/* fim da header do modal */}

                  {/* corpo do modal */}
                  <div className="modal-body">
                    <form className="formulario-cadastro container">
                      <div className="alinha-itens d-flex flex-column justify-content-center align-items-center">
                        <div className="row numero col-sm-8">
                            <span className="text-color-modal">
                              NÚMERO DO CARTÃO
                            </span>
                          <input
                            type="text"
                            className="form-control text-center"
                            id="numero"
                            placeholder="XXXX - XXXX - XXXX - XXXX"
                          />
                        </div>

                        <div className="row rua col-sm-8">
                            <span className="text-color-modal">
                              NOME IMPRESSO NO CARTÃO
                            </span>
                          <input
                            type="text"
                            className="form-control text-center"
                            id="nome"
                            placeholder="NOME"
                          />
                        </div>

                        <div className="row alinha-campos gy-4 justify-content-center">
                          <div className="cvv col-sm-4">
                              <span className="text-color-modal">CVV</span>
                            <input
                              type="text"
                              name=""
                              id="cvv"
                              className="form-control text-center"
                              placeholder="XXX"
                            />
                          </div>

                          <div className="complemento col-sm-4">
                              <span className="text-color-modal">
                                DATA DE VALIDADE
                              </span>
                            <input
                              type="text"
                              className="form-control text-center"
                              id="complemento"
                              placeholder="MM / AA"
                            />
                          </div>
                        </div>

                        <div className="row">
                          <button
                            type="submit"
                            className="botao-salvar button btn mt-4 col-sm-12"
                          >
                            GRAVAR
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* fim do corpo do modal */}
                </div>
              </div>
            </div>
            {/* fim do modal adicionar endereço */}

            <hr />

            <div className="card text-black bg-white mb-3 font-text px-0">
              {/* Início do Card do Pix */}
              <div className="card-header">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault2"
                    id="flexRadioDefault2"
                  />
                    <span className="icon-payment">
                      Pix
                      <img src={Pix} width="30" alt="Pix"/>
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
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault2"
                    id="flexRadioDefault2"
                  />
                    <span className="icon-payment">
                      Boleto
                      <img src={Boleto} width="30" alt="Boleto"/>
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
          <div className="col-md-6 col-lg-5 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-black font-text">Resumo do Pedido</span>
              <span className="badge bg-primary rounded-pill">3</span>
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0 font-text">Nome do 1º Carro</h6>
                  <small className="text-mutedfont-text">
                    Descrição do 1º Carro
                  </small>
                </div>
                <span className="text-muted font-text">R$ 2.500.000,00</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0 font-text">Nome do 2º Carro</h6>
                  <small className="text-muted font-text">
                    Descrição do 2º Carro
                  </small>
                </div>
                <span className="text-muted font-text">R$ 1.250.500,00</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0 font-text">Nome do 3º Carro</h6>
                  <small className="text-muted font-text">
                    Descrição do 3º Carro
                  </small>
                </div>
                <span className="text-muted font-text">R$ 948.600,00</span>
              </li>
              <li className="list-group-item d-flex justify-content-between bg-light">
                <div className="text-success">
                  <h6 className="my-0 font-text">Preço do Frete</h6>
                  <small className="font-text">Cep</small>
                </div>
                <span className="text-success font-text">R$ 65.500,00</span>
              </li>
              <li className="list-group-item d-flex justify-content-between bg-light">
                <div className="text-success">
                  <h6 className="my-0 font-text">Desconto</h6>
                  <small className="font-text">Número do Código</small>
                </div>
                <span className="text-success font-text">−R$ 8.500,00</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span className="font-text-bold">Total (R$)</span>
                <strong className="font-text-bold">R$ 4.756.100,00</strong>
              </li>
            </ul>

            <form className="card p-2">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Código de Desconto"
                />
                <button type="submit" className="btn button btn-secondary">
                  Aplicar
                </button>
              </div>
            </form>

            <div className="d-grid gap-2 d-md-block pt-2">
              <Button type="button" name="Voltar para Carrinho">
                <Link to="/cart"></Link>
              </Button>
              <Button type="button" name="Finalizar Compra">
                <Link to="/orderResume"></Link>
              </Button>
            </div>
          </div>
          {/* FIM DO CARD DO RESUMO  */}
        </div>
        <Footer />
      </>
    );
}

export default CheckoutOrder;