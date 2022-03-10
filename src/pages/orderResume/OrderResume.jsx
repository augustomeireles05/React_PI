import Sidebar from '../../components/Sidebar/Sidebar'
import Subtittle from '../../components/Subtittle/Subtittle'
import React from 'react'

function OrderResume() {
    return (

        <div className="col-md-4 flex-row justify-content-center text-center">
            <Subtittle menu='MENU'></Subtittle>
            <Subtittle menu='PEDIDOS'></Subtittle>
            <Sidebar></Sidebar>
        </div>

    )
}

export default OrderResume