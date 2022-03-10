import './CheckoutScheduling.css';

import React from 'react';

import Button from '../../components/Button/Button.jsx'

function CheckoutScheduling() {

    return (
        <>
            <div className="title-page background font-text-bold">
                <h3>Finalize seu Agendamento</h3>
                <hr/>
            </div>

            {/* FIM DO TÍTULO DA PÁGINA */}

            <div className="row background d-flex justify-content-center">

                {/* INÍCIO DO CARD ENDERECO */}
                <div className="col-md-5 col-lg-5 row d-flex justify-content-center background">
                    <h4 className="mb-3 font-text">Meus Dados</h4>
                    <div className="card text-black bg-white mb-3 px-0">

                        {/* Início Meus dados */}

                        <form className="card-header">
                            <div className="row meus-dados ">
                                <div className="col-6">
                                    <div className="mb-3 mt-2 ">
                                        <input placeholder="Nome do Cadastro" type="email" className="form-control"
                                        id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mb-3 mt-2">
                                        <input placeholder="Sobrenome do Cadastro" type="email" className="form-control"
                                        id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mb-3">
                                        <input placeholder="e-mail Cadastro" type="email" className="form-control"
                                        id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="mb-3">
                                        <input placeholder="Telefone Cadastro" type="email" className="form-control"
                                        id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                            </div>
                        </form>

                    {/* Fim Endereço 02 */}
                    </div>

                    {/* FIM DO CARD ENDERECO */}

                    {/* Início modal adicionar endereço*/}
                    <div className="modal fade" id="modal-endereco" tabindex="-1" aria-labelledby="inicioModal" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">


                                {/* header do modal */}
                                <div className="modal-header">
                                    <h5 className="modal-title text-center" id="inicioModal">ENDEREÇO</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                {/* fim da header do modal */}

                                {/* corpo do modal Endereço */}
                                <div className="modal-body">
                                    <form className="formulario-cadastro container">

                                        <div className="row alinha-campos d-flex justify-content-start gy-2">
                                            <div className="cep col-sm-4">
                                                <label label for="cep" className="form-label">CEP</label>
                                                <input type="text" className="form-control" id="cep" />
                                            </div>

                                            <div className="rua col-sm-8">
                                                <label for="rua" className="form-label">LOGRADOURO</label>
                                                <input type="text" className="form-control" id="rua" />
                                            </div>
                                        </div>

                                        <div className="row alinha-campos d-flex justify-content-start gy-2">
                                            <div className="numero col-sm-3">
                                                <label label for="numero" className="form-label">NUMERO</label>
                                                <input type="number" className="form-control" id="numero" />
                                            </div>

                                            <div className="bairro col-sm-9">
                                                <label for="bairro" className="form-label">BAIRRO</label>
                                                <input type="text" className="form-control" id="bairro" />
                                            </div>
                                        </div>


                                        <div className="row alinha-campos d-flex justify-content-start gy-2">
                                            <div className="uf col-sm-3">
                                                <label for="uf" className="form-label">UF</label>
                                                <select name="uf" id="UF" className="form-control">
                                                    <option value="estado" selected disabled>- UF -</option>
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
                                                <label for="cidade" className="form-label">CIDADE</label>
                                                <input type="text" name="" id="cidade" className="form-control input-cidade" />
                                            </div>
                                        </div>

                                        <div className="complemento">
                                            <label for="complemento" className="form-label">COMPLEMENTO</label>
                                            <input type="text" className="form-control" id="complemento" />
                                        </div>

                                        <div className="row justify-content-center">
                                            <Button type="submit" href="" name="Gravar"/>
                                        </div>

                                    </form>
                                </div>
                                {/* fim do corpo do modal Endereço */}

                            </div>
                        </div>
                    </div>
                    {/* fim do modal adicionar endereço */}
                    <hr />

                    <h4 className="mb-3 font-text">AGENDAMENTO</h4>
                    <div className="card text-black bg-white mb-3 px-0">

                        {/* Início Agendamento */}
                        <div className=" col-md-12 card-header">

                            <div className="form-check font-text d-flex justify-content-between">

                                <div className="d-grid d-flex justify-content-start ">
                                    <p>Datas Disponiveis</p>                             
                                </div>
                                <div className="d-grid d-md-flex justify-content-end">
                                    {/* <img className="btn " src="" width="45" /> */}                     
                                </div>
                            </div>
                        </div>

                        <div className="contaniner ">
                            <div className="row">
                                <div className="col-6 ">
                                    <div className="card-body font-text ">                    
                                        <p className="card-text">Confira Datas Disponiveis</p>
                                    </div>
                                </div>
                                <div className="col-2 ">
                                    <label  for="data"></label>
                                    <input type="date" id="data" name="Agenda" />
                                </div>
                            </div>
                        </div>
                        <div className="card-body font-text card-header">
                    
                            <p className="card-text"></p>
                        </div>                
                    </div>
            
                    {/* FIM DO BOTÃO DE ADICIONAR FORMA DE PAGAMENTO */}
                    <hr />
                </div>


                {/* INICIO DO CARD DO RESUMO  */}
                <div className="col-md-6 col-lg-5 order-md-last">

                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-black font-text">Resumo Agendamento</span>
                        <span className="badge bg-primary rounded-pill">3</span>
                    </h4>
                    <ul className="list-group mb-3">
                        <li className="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                                <h6 className="my-0 font-text">Nome do 1º Carro</h6>
                                <small className="text-mutedfont-text">Descrição do 1º Carro</small>
                            </div>
                            <span className="text-muted font-text">R$ 2.500.000,00</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                                <h6 className="my-0 font-text">Nome do 2º Carro</h6>
                                <small className="text-muted font-text">Descrição do 2º Carro</small>
                            </div>
                            <span className="text-muted font-text">R$ 1.250.500,00</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                                <h6 className="my-0 font-text">Nome do 3º Carro</h6>
                                <small className="text-muted font-text">Descrição do 3º Carro</small>
                            </div>
                            <span className="text-muted font-text">R$ 948.600,00</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between bg-light">
                            <div className="text-success">
                                <h6 className="my-0 font-text">Taxa de Reserva</h6>                        
                            </div>
                            <span className="text-success font-text"> [ 2% valor do Veiculo]</span>
                        </li>
               
                        <li className="list-group-item d-flex justify-content-between">
                            <span className="font-text-bold">Total (R$)</span>
                            <strong className="font-text-bold">R$ 4.756.100,00</strong>
                        </li>
                    </ul>
            
                    <div className="container btn-responsividade">
                        <div className="row">
                            <div className="col-4 btn-responsividade ">
                                <div className=" col-12 d-grid gap-1 pt-3 justify-content-center  ">
                                    <a href="./carrinho.html"><button className="btn button font-text vtcarrinho" type="button">Voltar para o
                                    Carrinho</button>
                                    </a>
                                </div>
                            </div>
                            <div className="col-8 btn-responsividade">
                                <div className="d-grid gap-2 pt-3 ">               
                                    <Button type="submit" name="Confirmar Agendamento" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckoutScheduling;