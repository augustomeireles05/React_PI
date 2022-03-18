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
            <Header />
            <div className="container">
                <MainTittle tittle="Cadastro" />
            </div>

            <div className="container px-md-5">
                <div className="row justify-content-center ">

                    {/* <form className="row mb-2 gy-3"> */}
                    <form className="col-12 col-md-10 mb-2 justify-content-start gy-3 dados-pessoais ps-md-5 pe-md-5">
                        <Subtitle menu="Dados Pessoais" />
                        <div className="col-md-10 mb-3">
                            <Label label="Nome" for="name" />
                            <Input type="text" aria-label="name" id="name" />
                        </div>
                        <div className="col-12 col-md-10 col-lg-6 mb-3">
                            <Label label="Email" for="email" />
                            <Input type="email" aria-label="email" id="email" />
                        </div>
                        <div className="col-12 col-md-10 col-lg-6 mb-3">
                            <Label label="CPF" for="cpf" />
                            <Input type="text" aria-label="cpf" id="cpf" />
                        </div>
                        <div className="col-12 col-md-10 col-lg-6 mb-5">
                            <Label label="Data de Nascimento" for="dtNascimento" />
                            <Input type="date" aria-label="dtNascimento" id="dtNascimento" />
                        </div>



                        { /*Começo Senha*/}


                        <Subtitle subtitulo="Senha" />
                        <div className="col-12 col-md-10 col-lg-6 mb-3">
                            <Label label="Informe sua senha atual" for="current-password" />
                            <Input type="password" aria-label="password-register" id="current-password" />
                            {/* <span className="fs-6">Digite uma senha de 8-16 caracteres</span> */}
                        </div>


                        <div className="col-12 col-md-10 col-lg-6 mb-3">
                            <Label label="Escolha um senha" for="password-register" />
                            <Input type="password" aria-label="password-register" id="password-register" />
                            {/* <span className="fs-6">Digite uma senha de 8-16 caracteres</span> */}
                        </div>

                        <div className="col-12 col-md-10 col-lg-6 mb-3">
                            <Label label="Confirme sua nova senha" for="password-register-confirm" />
                            <Input type="password" aria-label="password-register-confirm" id="password-register-confirm" />
                        </div>

                        <div className="col-12 mt-4">
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
            </div>

            <Footer />
        </>
    )
}

export default Register




