import './Register.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Button from '../../components/Button/Button'

import MainTittle from '../../components/Tittle/MainTittle'
import Input from '../../components/Input/Input'
import Label from '../../components/Input/Label'
import Subtitle from '../../components/Subtittle/Subtittle'

function Register() {
    return (
        <>
           <Header/>
            <MainTittle tittle="Cadastro"/>
            {/* Começo Conteúdo da Página */}
            {/* <div className="container titulo-pagina">
                <div className="row">
                    <div className="col-12 justify-content-flex-start">
                        <h1>Cadastro</h1>
                    </div>
                </div>
            </div> */}
            {/*Começo Dados Pessoais*/}
            <div className="container dados-pessoais">
                
                <Subtitle menu="Dados Pessoais" />
                <form className="row mb-2">
                    <div className="col-12">
                        <Label label="Nome" for="name"/>
                        <Input type="text" aria-label="name" id="name"/>
                    </div>
                    <div className="col-12 col-md-6">
                        <Label label="Email" for="email"/>
                        <Input type="email" aria-label="email" id="email"/>
                    </div>
                    <div className="col-md-6">
                        <Label label="CPF" for="cpf"/>
                        <Input type="text" aria-label="cpf" id="cpf"/>
                    </div>
                    <div className="col-md-6">
                        <Label label="Data de Nascimento" for="dtNascimento"/>
                        <Input type="date" aria-label="dtNascimento" id="dtNascimento"/>
                    </div>
                </form>
            </div>
            
            { /*Começo Senha*/}
            <div className="container senha">
              
                <Subtitle subtitulo="Senha" />
                <form className="row mb-2 justify-content-start">
                    <div className="col-md-8">
                        <Label label="Escolha um senha" for="password-register"/>
                        <Input type="password" aria-label="password-register" id="password-register"/>
                        {/* <span className="fs-6">Digite uma senha de 8-16 caracteres</span> */}
                    </div>

                    <div className="col-md-8">
                        <Label label="Confirme sua senha" for="password-register-confirm"/>
                        <Input type="password" aria-label="password-register-confirm" id="password-register-confirm"/>
                    </div>
                
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" required defaultChecked />
                            <label className="form-check-label" for="gridCheck">
                                Li e concordo com os <a href="TERMOS E CONDIÇÕES DE USO DEV CARS™.pdf" download="TERMOS E CONDIÇÕES DE USO DEV CARS™.pdf" target="_blank">Termos e Condições de Uso</a>.
                            </label>
                        </div>
                    </div>

                    <div className="col-12 text-center mt-2">
                        <Button link="" name="CADASTRE-SE" />
                    </div>
                </form>
            </div>

            <Footer/>
        </>
    )
}

export default Register




