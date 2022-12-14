import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import useBuyer from '../Hooks/useBuyer';
import useSeller from '../Hooks/useSeller';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="drawer-menu" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <Outlet></Outlet>
                    <label htmlFor="drawer-menu" className="btn btn-primary drawer-button lg:hidden">Dashboard</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="drawer-menu" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/users'>All Users</Link></li>
                                <li><Link to='/dashboard/buyers'>All Buyers</Link></li>
                                <li><Link to='/dashboard/sellers'>All Sellers</Link></li>
                                <li><Link to='/dashboard/reports'>Reported items</Link></li>
                            </>
                        }
                        {
                            isSeller && <>
                                <li><Link to='/dashboard/my-products'>My Products</Link></li>
                                <li><Link to='/dashboard/add-product'>Add a product</Link></li>
                            </>
                        }
                        {
                            isBuyer && <>
                                <li><Link to='/dashboard/my-orders'>My Orders</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;