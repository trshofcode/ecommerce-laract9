import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import ProductList from "@/Components/Homepage/ProductList";
import Paginator from "@/Components/Homepage/Paginator";
import Carousel from "@/Components/Homepage/Carousel";

export default function Homepage(props) {     
          
    return (
        <div className="min-h-screen">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <Carousel />
            <h1 className="p-4 items-center"> PRODUK TERBARU</h1>
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4">            
                <ProductList products={props.product.data}/>
            </div>
            {/* <div>
                <Paginator meta={props.product.meta} />
            </div>      */}
        </div>
    );
}
