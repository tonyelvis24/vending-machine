import PedidoState from '../context/shop/PedidoState'

const MyApp = ({ Component, pageProps}) => {
    return(
       
            <PedidoState>
                <Component {...pageProps} />
            </PedidoState>
       
    )
}

export default MyApp;
