import React from 'react'


import Input from '../../components/Input/Input'
import Label from '../../components/Input/Label'
import Subtitle from '../../components/Subtittle/Subtittle'
import Button from '../../components/Button/Button'


function FormRegisterPJ() {
    return (
        <>
            <div className="collapse d-flex justify-content-center" id="collapseExample2">


                {/* <form className="row mb-2 gy-3"> */}
                <form className="col-12 col-md-10 mb-2 justify-content-start gy-3 dados-pessoais ps-md-5 pe-md-5 h-100">
                    <Subtitle menu="Dados Pessoais" />
                    <div className="row">
                        <div className="col-12 col-md-10 col-lg-6 mb-3">
                            <Label label="Email" htmlFor="email" />
                            <Input type="email" aria-label="email" id="emailPJ" />
                        </div>
                        <div className="col-12 col-md-10 col-lg-6 mb-3">
                            <Label label="CNPJ" htmlFor="cnpj" />
                            <Input type="text" aria-label="cnpj" id="cnpj" />
                        </div>
                    </div>
                    <div className="col-md-10 mb-3">
                        <Label label="Razão Social" htmlFor="rzSocial" />
                        <Input type="text" aria-label="rzSocial" id="rzSocial" />
                    </div>

                    <div className="col-12 col-md-10 col-lg-6 mb-5">
                        <Label label="Inscrição Estadual" htmlFor="inscrEstadual" />
                        <Input type="text" aria-label="inscrEstadual" id="inscrEstadual" />
                    </div>



                    { /*Começo Senha*/}


                    <Subtitle subtitulo="Senha" />
                    <div className="col-12 col-md-10 col-lg-6 mb-3">
                        <Label label="Informe sua senha atual" htmlFor="current-passwordPJ" />
                        <Input type="password" aria-label="password-register" id="current-passwordPJ" />
                        {/* <span className="fs-6">Digite uma senha de 8-16 caracteres</span> */}
                    </div>


                    <div className="col-12 col-md-10 col-lg-6 mb-3">
                        <Label label="Escolha um senha" htmlFor="password-registerPJ" />
                        <Input type="password" aria-label="password-register" id="password-registerPJ" />
                        {/* <span className="fs-6">Digite uma senha de 8-16 caracteres</span> */}
                    </div>

                    <div className="col-12 col-md-10 col-lg-6 mb-3">
                        <Label label="Confirme sua nova senha" htmlFor="password-register-confirmPJ" />
                        <Input type="password" aria-label="password-register-confirm" id="password-register-confirmPJ" />
                    </div>

                    <div className="col-12 mt-4">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheckPJ" required defaultChecked />
                            <label className="form-check-label" htmlFor="gridCheckPJ">
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

export default FormRegisterPJ