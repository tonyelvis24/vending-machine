import React from 'react'
import { useState, useEffect, useContext} from 'react';
import Layout from '../components/Layout';

import ProducsContext from '../context/shop/PedidoContext';

const Shopping = () => {

    
    const producsContext = useContext(ProducsContext);
    const {productos} =producsContext;
    let precio =2;

    

    const [ minutes, setMinutes ] = useState(1);
    const [seconds, setSeconds ] =  useState(1);
    const [end, setEnd ] =  useState(59);

    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    setEnd(59);
                    setMinutes(1);
                    setSeconds(1);
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(end);
                }
            } 
        }, 1000)
        return ()=> {
            setEnd(59);
            setMinutes(1);
            setSeconds(1);
            clearInterval(myInterval);
          };
        
    });
    
   

    return (
        <Layout>
        <div className="flex justify-center my-6">
            <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
                <div className="flex-1">
                <table className="w-full text-sm lg:text-base" cellSpacing="0">
                    <thead>
                    <tr className="h-12 uppercase">
                        <th className="hidden md:table-cell"></th>
                        <th className="text-left">Product</th>
                        <th className="lg:text-right text-left pl-5 lg:pl-0">
                        <span className="lg:hidden" title="Quantity">Qtd</span>
                        <span className="hidden lg:inline">Status</span>
                        </th>
                        <th className="hidden text-right md:table-cell">Unit price</th>
                        <th className="text-right">Total price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {productos.map( Products => (
                    
                    <tr key ={Products.id}>
                        <td className="hidden pb-4 md:table-cell">
                        <a href="#">
                            <img src={Products.thumbnail} className="w-20 rounded" alt="Thumbnail"></img>
                        </a>
                        </td>
                        <td>
                        
                            <p className="mb-2 md:ml-4">{Products.name}</p>
                           
                            
                        </td>
                        <td className="justify-center md:justify-end md:flex mt-6">
                        <div className="w-20 h-10">
                            <div className="relative flex flex-row w-full h-8">
                            
                            {Products.state}
                            { Products.state == "Completed"
                                ? null
                                : <div
                                    style={{ width: `${Products.state}%` }}
                                    className={`h-full ${
                                        Products.state < (Products.preparation_time/1) ? 'bg-red-600' : 'bg-green-600'
                                    }`}
                                ></div>
                            }
                            
                            
                            </div>
                        </div>
                        </td>
                        <td className="hidden text-right md:table-cell">
                        <span className="text-sm lg:text-base font-medium">
                            ${precio}
                        </span>
                        </td>
                        <td className="text-right">
                        <span className="text-sm lg:text-base font-medium">
                        ${precio*2}
                        </span>
                        </td>
                    </tr> 
                    ))}
                    </tbody>
                </table>        
                
                </div>
            </div>
        </div>
    </Layout>
    )
}
export default Shopping