import React from 'react'


function SearchFilter() {
    return (
        <>
            <hr />
            <div className="row-cols-1 row-cols-md-12 g-4 justify-content-center mt-4">

                <form className=" filtro-de-busca row gx-12 align-items-center rounded p-3 mt-5 ">
                    <legend className="text-center">ENCONTRE SEU CARRO</legend>

                    <div className="col-md-3 ">
                        <select id="inputState" className="form-select fundo-filtro">
                            <option selected>Selecione a Marca</option>
                            <option>Ferrari</option>
                            <option>Bentley</option>
                            <option>Porsche</option>
                            <option>Ford</option>
                            <option>Audi</option>
                            <option>Mazda</option>
                            <option>Masserati</option>
                            <option>Jaguar</option>
                        </select>
                    </div>
                    <div className="col-md-4 ">
                        <select id="inputState" className="form-select fundo-filtro">
                            <option selected>Selecione o Modelo</option>
                            <option>aaaaa</option>
                            <option>bbbbb</option>
                            <option>ccccc</option>
                            <option>ddddd</option>

                        </select>
                    </div>
                    <div className="col-md-2 ">
                        <select id="inputState" className="form-select fundo-filtro">
                            <option selected>Selecione o Ano</option>
                            <option>2022</option>
                            <option>2021</option>
                            <option>2020</option>
                            <option>2019</option>
                            <option>2018</option>
                        </select>

                    </div>

                    <div className="botao-buscar col-md-3 text-center btn p-0">
                        <button type="submit" className="btn botao-buscar-home">BUSCAR</button>
                    </div>


                </form>
            </div>
        </>
    )

}

export default SearchFilter