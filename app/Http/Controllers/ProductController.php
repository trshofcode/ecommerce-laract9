<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductCollection;
use App\Http\Controllers\CartController;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;


class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {    
        $products = new ProductCollection(Product::OrderbyDesc('id')->paginate(8));         
       return Inertia::render('Homepage', [
            'title' => 'TRSHOFTEE',
            'description' => 'OFFICIAL STORE TRSHOFTEE',
            'product' => $products,            
        ]);            
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {    
        
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }

    public function addToCart($id)
    {
        $product = Product::findOrFail($id);

        $cart = session()->get('cart', []);
        return Inertia::render('Homepage',[
            'carts' => $cart
        ]);

        if(isset($cart[$id])) {
            $cart[$id]['quantity']++;
        } else{
            $cart [$id] = [
                'title' => $product->title,                
                'price' => $product->price,                
                'pict' => $product->pict,                
                'quantity' => 1            
            ];
        }

        session()->put('cart', $cart);
        return redirect()->back()->with('success', 'Produk berhasil ditambahkan ke keranjang');
    }
}
