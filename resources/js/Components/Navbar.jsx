import { Link } from "@inertiajs/react";

const Navbar = ({ user }) => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <a>NEW ARRIVAL</a>
                        </li>
                        <li>
                            <a>CATEGORY</a>
                            <ul className="p-2">
                                <li>
                                    <a>TSHIRT</a>
                                </li>
                                <li>
                                    <a>CLOTH</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a>STORE</a>
                        </li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">TRSHOFTEE</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <a>NEW ARRIVAL</a>
                    </li>
                    <li tabIndex={0}>
                        <details>
                            <summary>CATEGORY</summary>
                            <ul className="p-2">
                                <li>
                                    <a>TSHIRT</a>
                                </li>
                                <li>
                                    <a>CLOTH</a>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <a>STORE</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                            <span className="badge badge-sm indicator-item">
                                2
                            </span>
                        </div>
                    </label>
                    <div
                        tabIndex={0}
                        className="mt-3 z-[1] card card-compact dropdown-content h-56 bg-base-300 shadow"
                    >                      
                        <div className="card-body w-96">
                            {/* <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span> */}
                            <div className="flex flex-col divide-y divide-gray-200">
                                <div className="flex items-center py-2 px-2">
                                    <img
                                        className="w-16 h-16 object-cover rounded"
                                        src="https://dummyimage.com/100x100/F3F4F7/000000.jpg"
                                        alt="Product Image"
                                    />
                                    <div className="ml-3">
                                        <h3 className="text-white-100 font-semibold">
                                            Product Name asdasdas
                                        </h3>
                                        <p className="text-gray-700 mt-1">$9.99</p>
                                        <p className="text-gray-700 mt-1">
                                            Qty : 1
                                        </p>
                                    </div>
                                    <label
                                        tabIndex={0}
                                        className="btn btn-ghost btn-circle ml-auto py-2 px-4"
                                    >
                                        <div className="indicator">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                />
                                            </svg>
                                        </div>
                                    </label>

                                    {/* <button class="ml-auto py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
                                            Remove
                                        </button> */}
                                </div>
                            </div>
                            <div className="flex">
                                <p>TOTAL :</p>
                                <div className="justify-items-end">
                                    <p>Rp. 8020912</p>
                                </div>
                             </div>
                            <div className="card-actions">
                                <Link href='/cart'
                                    as="button"
                                    className="btn btn-primary btn-block"
                                >
                                    View cart
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {!user ? (
                            <>
                                <li>
                                    <Link href={route("login")} as="button">
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link href={route("register")} as="button">
                                        Daftar
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link
                                        href={route("dashboard")}
                                        as="button"
                                        className="justify-between"
                                    >
                                        Profile
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link>Settings</Link>
                                </li>
                                <li>
                                    <Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                    >
                                        Logout
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
