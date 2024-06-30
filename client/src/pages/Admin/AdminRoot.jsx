import React, { useEffect } from 'react'
import Header from '../../layout/Admin/Header/Index'
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllQuestions } from '../../redux/slices/faqSlice';
// import { getAllOrders } from '../../redux/slices/orderSlice';
// import { getAllSubscribers } from '../../redux/slices/subscribersSlice';
import { getAllUsers} from '../../redux/slices/userSlice';
import { getAllProducts } from '../../redux/slices/productSlice';
import { getAllBlog } from '../../redux/slices/blogSlice';
import Sidebar from '../../layout/Admin/Sidebar/Index';

const AdminRoot = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getAllQuestions())
        // dispatch(getAllOrders())
        // dispatch(getAllSubscribers())
        dispatch(getAllUsers())
        dispatch(getAllProducts())
        dispatch(getAllBlog())

    }, [])

    return (
        <div style={{ position: 'relative', overflow: "hidden", display: 'flex' }}>

            <Sidebar />
            <Header />
            <Outlet />
        </div>
    )
}

export default AdminRoot
