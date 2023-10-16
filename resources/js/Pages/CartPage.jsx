import React, { useEffect, useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import CartList from '@/Components/Cartpage/CartList';

export default function CartPage (props) {   

    console.log(props.myCart)       
    
    const [cart, setCart] = useState(props.myCart);
    const [price, setPrice] = useState(0);
    const [tax, setTax] = useState(0);
    const [total, setTotal] = useState(0);

    function handleIncreaseItems(itemId){
        setCart(cart.map(item => {
            if (item.id === itemId){
                return {                
                    ...item, 
                    quantity: item.quantity + 1
                };
            } else {
                return item;
            }        
        }))            
    }

    function handleDecreaseItems(itemId){    
        let removeProduct = cart.map(item => {
            if (item.id === itemId){
                return {                
                    ...item, 
                    quantity: item.quantity - 1,                    
                };
            } else {
                return item;
            }                
        });
        removeProduct = removeProduct.filter(p =>
            p.quantity > 0 )
            setCart(removeProduct)                            
    }        

    const handlePrice = () => {
        let prc = 0;
        cart.map((item) => (prc += item.quantity * item.price));
        setPrice(prc);
    }
    
    const handleTax = () => {
        let tax = 1.0725;
        cart.map((item) => (tax += (item.quantity * item.price)* tax));
        setTax(tax);
    }

    useEffect(()=> {
        handlePrice();
        handleTax();
    });

    return (   
        <div>
            <Head title = {props.title}/>                
        <div className="bg-black-100 h-screen py-8">
            <div className="container mx-auto px-4">
                <div className='flex'>
                    <div>
                        <Link href= '/'>
                            <label tabIndex={0} className="btn btn-ghost btn-circle mb-2">
                                <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                                </svg>
                                </div>
                            </label>
                        </Link>
                    </div>
                    <h1 className="text-2xl font-semibold mt-2">Shopping Cart</h1>
                </div>                            
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="md:w-3/4"> 
                    <div className="flex flex-col gap-4">            
                <div className="bg-neutral rounded-lg shadow-md p-6 mb-4 overflow-x-auto">
                    <table className="table">
                    <thead>
                            <tr>
                                <th className="text-center font-semibold">Product</th>
                                <th className="text-center font-semibold">Price</th>
                                <th className="text-center font-semibold">Quantity</th>
                                <th className="text-center font-semibold">Total</th>  
                                <th className="text-center font-semibold"></th>                                
                            </tr>
                        </thead>                                               
                        <tbody>
                        {props.myCart.length > 0 ? props.myCart.map((item, i)=>{
                            return (
                            <tr key={i}>
                                <td className="py-2 px-4">
                                    <div className="flex-wrap lg:flex items-center">
                                        <img className="h-16 w-16 mr-4" src={item.pict} alt="Product image"/>
                                        <span className="font-semibold">{item.title}</span>
                                    </div>
                                </td>
                                <td className="py-2">
                                    <div className="justify-items-center">Rp. {item.price}</div>
                                    </td>
                                <td className="py-2">
                                    <div className="flex items-center">                                                                                   
                                        <button onClick={()=> {handleDecreaseItems(item.id)}} className="border rounded-md py-1 px-2 ml-8">-</button>
                                        <span className="text-center w-8">{item.quantity}</span>                                        
                                        <button onClick={()=> {handleIncreaseItems(item.id)}} className="border rounded-md py-1 px-2 mr-8">+</button>
                                    </div>
                                </td>
                                <td className="py-2">
                                    <div className="flex justify-items-center">
                                        Rp. {(item.price)*item.quantity}
                                    </div>
                                </td>    
                                <td className="py-4">
                                    <Link href="/item/delete" method="post" data={{id: item.id}} as="button">
                                        <div className="flex justify-items-center mr">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                        </div>
                                    </Link>
                                </td>                                
                            </tr>        
                            )                
                            }): <p className='items-center'> Belum ada Keranjang</p>}       
                        </tbody>                                                                                                   
                    </table>
                    {/* <CartList myCart = {props.myCart}/>                     */}
                    </div>
                    </div>
                    </div>
                    <div className="md:w-1/4">
                <div className="bg-neutral rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-4">Summary</h2>
                    <div className="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>Rp. {price}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Taxes</span>
                        <span>Rp. {tax}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Shipping</span>
                        <span>$0.00</span>
                    </div>                    
                    <div className="flex justify-between mb-2">
                        <span className="font-semibold">Total</span>
                        <span className="font-semibold">$21.98</span>
                    </div>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
                </div>
            </div>
                </div>
            </div>
        </div>    
        </div> 
    )
}
