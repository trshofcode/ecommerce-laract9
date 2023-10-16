import { Link } from "@inertiajs/react"
// import { Inertia } from '@inertiajs/inertia';
import { useState } from "react";
import { router } from '@inertiajs/react';

const isProduct = (products) => {

    const [cart, setCart] = useState([]);    
    const handleSubmite = (data) =>{        
        cart.push(data)
        const value ={
           product_id: data.id, 
           title : data.title, 
           price : data.price, 
           pict  : data.pict
         }
         router.post('/addCart', value)      
         console.log('ini value:',value)
    }    
    console.log(products)

    return products.map((data, i) => {
        return (
            <div key={i} className="card w-full lg:w-96 bg-neutral shadow-xl">
                <figure>
                    <img src={data.pict} alt="product" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {data.title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Rp. {data.price}</p>
                    <div className="card-actions justify-end">
                        {data.quantity < 15 ? (
                            <div className="badge badge-outline">
                                STOK TERBATAS
                            </div>
                        ) : (
                            <div className="badge badge-outline">
                                STOK TERSEDIA
                            </div>
                        )}
                    </div>
                    <div>
                        <button onClick = {() => handleSubmite(data)}  className="w-full btn btn-primary">
                            Add Cart
                        </button>
                    </div>
                </div>
            </div>
        );
    });
};

const noProduct = () => {
    return <div>Belum ada produk</div>;
};

const ProductList = ({ products }) => {
    return !products ? noProduct() : isProduct(products);
};

export default ProductList;
