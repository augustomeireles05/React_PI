import './Register.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Button from '../../components/Button/Button'



function Register() {
    return (
        <>
           <Header/>

            {/* Começo Conteúdo da Página */}
            <div className="container titulo-pagina">
                <div className="row">
                    <div className="col-12 justify-content-flex-start">
                        <h1>Cadastro</h1>
                    </div>
                </div>
            </div>
            {/*Começo Dados Pessoais*/}
            <div className="container dados-pessoais">
                <div className="col-12 titulo-dados">
                    <h2 className="h2-register">Dados Pessoais</h2>
                </div>
                <form className="row mb-2">
                    <div className="col-md-6">
                        <input type="text" className="form-control" id="inputName" placeholder="Nome" />
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" id="inputName2" placeholder="Sobrenome" />
                    </div>
                    <div className="col-md-12">
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Digite o seu email" />
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" id="inputCPF" placeholder="CPF" />
                    </div>
                    <div className="col-md-6">
                        <input placeholder="Data de Nascimento" type="text" className="form-control" onfocus="(this.type='date')" onblur="(this.type='text')" id="inputDate" />
                    </div>
                </form>
            </div>
            <div className="container endereco">
                { /*Começo Endereço*/}
                <div className="col-12 titulo-endereco">
                    <h2 className="h2-register">Endereço</h2>
                </div>
                <form className="row mb-2">
                    <div className="col-md-6">
                        <input type="text" className="form-control" id="inputCEP" placeholder="CEP" />
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" id="inputRua" placeholder="Rua" />
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" id="inputNumero" placeholder="Nº" />
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" id="inputComplemento" placeholder="Complemento" />
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" id="inputCidade" placeholder="Cidade" />
                    </div>
                    <div className="col-md-4">
                        <select name="estado" id="inputUF" className="form-select hover">
                            <option value="estado">-- UF --</option>
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
                </form>
            </div> { /*Fim Endereço*/}
            { /*Começo Senha*/}
            <div className="container senha">
                <div className="col-md-12 titulo-senha">
                    <h2 className="h2-register">Senha</h2>
                </div>
                <form className="row mb-2 justify-content-center">
                    <div className="col-md-8">
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Digite uma senha de 8-16 caracteres" />
                    </div>
                    <div className="col-md-8">
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Confirme a sua senha" />
                    </div>
                </form>

            </div>
            { /*Fim Senha*/}
            <div className="container fim-cadastro">
                <form className="row mb-2">
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" required />
                            <label className="form-check-label" for="gridCheck">
                                Li e concordo com os <a href="TERMOS E CONDIÇÕES DE USO DEV CARS™.pdf" download="TERMOS E CONDIÇÕES DE USO DEV CARS™.pdf" target="_blank">Termos e Condições de Uso</a>.
                            </label>
                        </div>
                    </div>
                    <div className="col-12 text-center mt-2">
                        {/* <button type="submit" className="btn btn_cadastrar w-25 ">Cadastrar</button> */}
                        <Button link="" name="CADASTRE-SE" />
                    </div>
                </form>
            </div>

            <Footer/>
        </>
    )
}

export default Register




