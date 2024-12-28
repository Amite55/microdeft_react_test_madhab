import { Outlet } from "react-router-dom";
import Navbar from "./home/Navbar";
import './App.css'

const MainLayout = () => {

    const token = localStorage.getItem('token');

    return (
        <div>
           {
            token ?  <Navbar/> : null
           }
            <Outlet/>
        </div>
    );
};

export default MainLayout;