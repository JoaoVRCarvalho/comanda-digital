import { React, useState } from 'react';
import Cardapio from './Cardapio.jsx'
import Pedidos from './ListaPedido.jsx';


export default function InputPedido({ idMesa }) {
    const [pedidoArr, setPedidoArr] = useState([]);

    return (
        <div className="pedido-wrapper">
            <Pedidos listaPedidos={pedidoArr}/>

            <Cardapio 
                idMesa={idMesa}
                pedidoArr={pedidoArr} 
                setPedidoArr={setPedidoArr}
            />
        </div>
    )
}