<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $cart = Cart::all();
        return Inertia::render('CartPage', [
            'title' => 'KERANJANG',
            'cart' => $cart,    
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
        $carts = new Cart();
        $carts->product_id = $request->product_id;
        $carts->user = auth()->user()->email;
        $carts->title = $request->title;
        $carts->price = $request->price;
        $carts->pict = $request->pict;
        $carts->quantity = 1;
        $carts->save();

        return redirect()->back()->with('success', 'Produk berhasil ditambahkan ke keranjang');
    }

    /**
     * Display the specified resource.
     */
    public function show(Cart $cart)
    {
        $myCart = $cart::where('user', auth()->user()->email)->get();
        return Inertia::render('CartPage', [ 
            'title' => 'KERANJANG',           
            'myCart' => $myCart,    
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cart $cart)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Cart $cart)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $cart = Cart::find($request->id);

        $cart->delete();
        
        return redirect()->back()->with('message', 'Produk berhasil dihapus');        
    }
}