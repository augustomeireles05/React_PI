import React from 'react'


import Input from '../../components/Input/Input'
import Label from '../../components/Input/Label'
import Subtitle from '../../components/Subtittle/Subtittle'
import Button from '../../components/Button/Button'


function FormRegisterPF() {
    return (
        <>
            <div className="collapse d-flex justify-content-center show" id="collapseExample">

                <form className="col-12 col-md-10 mb-2 justify-content-start gy-3 dados-pessoais ps-md-5 pe-md-5 h-100">
                    <Subtitle menu="Dados Pessoais" />
                    <div className="row">
                        <div className="col-12 col-md-10 col-lg-6 mb-3">
                            <Label label="Email" htmlFor="email" />
                            <Input type="email" aria-label="email" id="emailPF" />
                        </div>
                        <div className="col-12 col-md-10 col-lg-6 mb-3">
                            <Label label="CPF" htmlFor="cpf" />
                            <Input type="text" aria-label="cpf" id="cpf" />
                        </div>
                    </div>
                    <div className="col-md-10 mb-3">
                        <Label label="Nome" htmlFor="name" />
                        <Input type="text" aria-label="name" id="name" />
                    </div>
                    <div className="col-12 col-md-10 col-lg-6 mb-5">
                        <Label label="Data de Nascimento" htmlFor="dtNascimento" />
                        <Input type="date" aria-label="dtNascimento" id="dtNascimento" />
                    </div>



                    { /*Começo Senha*/}


                    <Subtitle subtitulo="Senha" />
                    <div className="col-12 col-md-10 col-lg-6 mb-3">
                        <Label label="Informe sua senha atual" htmlFor="current-passwordPF" />
                        <Input type="password" aria-label="password-register" id="current-passwordPF" />
                        {/* <span className="fs-6">Digite uma senha de 8-16 caracteres</span> */}
                    </div>


                    <div className="col-12 col-md-10 col-lg-6 mb-3">
                        <Label label="Escolha um senha" htmlFor="password-registerPF" />
                        <Input type="password" aria-label="password-register" id="password-registerPF" />
                        {/* <span className="fs-6">Digite uma senha de 8-16 caracteres</span> */}
                    </div>

                    <div className="col-12 col-md-10 col-lg-6 mb-3">
                        <Label label="Confirme sua nova senha" htmlFor="password-register-confirmPF" />
                        <Input type="password" aria-label="password-register-confirm" id="password-register-confirmPF" />
                    </div>

                    <div className="col-12 mt-4">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheckPF" required defaultChecked />
                            <label className="form-check-label" htmlFor="gridCheckPF">
                                Li e concordo com os <a href="TERMOS E CONDIÇÕES DE USO DEV CARS™.pdf" download="TERMOS E CONDIÇÕES DE USO DEV CARS™.pdf" target="_blank">Termos e Condições de Uso</a>.
                            </label>
                        </div>
                    </div>

                    <div className="col-12 col-md-3 text-center mt-2">
                        <Button link="" name="CADASTRE-SE" />
                    </div>
                </form>
            </div>

        </>
    )
}

export default FormRegisterPF