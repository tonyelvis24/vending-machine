import React,{ useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';






const Header = () => {

    const router = useRouter();

    return (
       
       <header>
       <div className="container mx-auto px-6 py-3">
            <div className="flex items-center justify-between">
                <div className="hidden w-full text-gray-600 md:flex md:items-center">
                    
                </div>
                <div className="w-full text-gray-700 md:text-center text-2xl font-semibold">
                    Products
                </div>
                <div className="flex items-center justify-end w-full">
                                    
                </div>
            </div>
            <nav  className="sm:flex sm:justify-center sm:items-center mt-4">
                <div className="flex flex-col sm:flex-row">
                
                    
                    <Link href="/">
                        <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0">
                        home
                        </a>
                    </Link>
                
                    <Link href="/shopping">
                        <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0">
                        Shopping car
                        </a>
                    </Link>
                
                </div>
            </nav>
            
        </div>       
       </header>
       
    );
}

export default Header