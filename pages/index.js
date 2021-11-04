import React,{ useState,useContext } from 'react';
import Layout from '../components/Layout';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';


import ProducsContext from '../context/shop/PedidoContext';



const Index = () => {

    const router = useRouter();
    const producsContext = useContext(ProducsContext);
    const {setProducts,getProducts,productsget,productos,progress} =producsContext;

    const [count, setCount] = useState(0);
    const mostrarModalActualizar = () => {
    fetch("https://products-api-ten.vercel.app/api")
      .then((response) => {
        return response.json();
      })
      .then((api) => {
        setCount(api)
      });
      
    }
    if(count==0){
        mostrarModalActualizar();
    }

    const nuevoObjeto = productos.find( productoState => productoState.state === "processing");
    if(nuevoObjeto != undefined){
    let x=progress(nuevoObjeto);}

    const [showModal, setShowModal] = useState(false);
    const addConfirm = (products) => {
        Swal.fire({
            title: 'Do you want to add this product?',
            text: "Esta acción no se puede deshacer",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'yes, Add',
            cancelButtonText: 'No, Cancel'
          }).then( async (result) => {
            if (result.value) {

                try {
                    // Eliminar por ID
                  
                     //console.log(products);
                     let x=setProducts(products);
                     //console.log("listado",x);
                    // Mostrar una alerta
                    Swal.fire(
                        'Added!',
                        products.name,
                        'success'
                    )
                } catch (error) {
                    console.log(error);
                }
            }
          })
    }
    return (
    <Layout>
       <div className="container mx-auto px-6">
            <h3 className="text-gray-700 text-2xl font-medium">Products list</h3>
            <span className="mt-3 text-sm text-gray-500">{count.length} Products</span>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
            { count!=0 ?
            count.map( Products => (
                <div key ={Products.id}>
                    <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden" >
                        <div className="flex items-end justify-end h-56 w-full bg-cover" style ={ { backgroundImage: "url('"+Products.thumbnail+"')" } }>
                            <button onClick={() => addConfirm(Products) } className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </button>
                        </div>
                        <div className="px-5 py-3">
                            <h3 className="text-gray-700 uppercase">{Products.name}</h3>
                            <span className="text-gray-500 mt-2">$123</span>
                        </div>
                    </div>
                </div>
            )): null
        }
        </div>
            
        </div>

              
    </Layout>
       
    );
}

export default Index