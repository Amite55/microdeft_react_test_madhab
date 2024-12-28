
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { MdAddComment } from "react-icons/md";

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        localStorage.removeItem('token');
        toast.success('User Logout.');
        navigate("/login")
    }

    return (

            <nav className="bg-white border-gray-200 drop-shadow-lg ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/microdeft_logo.jpeg" className="h-8" alt="Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap ">Micro Deft</span>
                    </a>
                    <a href="/addCourse">
                    <button className="flex items-center gap-2 font-bold hover:text-red-500 duration-300 delay-150">Add New Course <MdAddComment /></button>
                    </a>

                    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse font-semibold">
                    <button 
                    onClick={handleLogout}
                    className="mr-4 text-red-500 hover:bg-slate-600 hover:text-white px-3 py-2 rounded-md duration-1000 delay-100">Logout</button>
                        <button type="button" className="flex rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 " id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                        <FaUserCircle size={40} />
                        </button>
  
                    </div>
                </div>
            </nav>
    );
};

export default Navbar;