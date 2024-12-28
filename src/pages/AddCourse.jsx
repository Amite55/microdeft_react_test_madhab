import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddCourse = () => {
    const navigate = useNavigate();
    const badgeOptions = ["Featured", "Popular", "New"];
    const badgeColor = ['#FFD700 (Golden)', '#FF4500 (OrangeRed)', '#32CD32 (LimeGreen)']

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const instructor_name = form.instructorName.value;
        const badge_text = form.badgeText.value;
        const badge_color = form.badge_color.value;
        const newCourse = { title, description, badge_text, badge_color, instructor_name };
        console.log(newCourse);

        try {
            const token = localStorage.getItem('token');
            if(!token){
                toast.success('Authentication token is missing!');
                return;
            }

            const { data } = await axios.post(`https://react-interview.crd4lc.easypanel.host/api/course`, newCourse, {
                headers:{
                    'Authorization': `Bearer ${token}`,
                }
            });

            toast.success('Add Your New Course')
            console.log(data);
            navigate('/')
        } catch (err) {
            console.log(err);
            toast.error("Please try again!")
        }
    }

    return (
        <section className="my-10">
            <div className="w-full mx-auto text-center my-8 space-y-4">
                <h3 className="text-4xl font-bold">Add Your New Courses</h3>
                <p className="text-normal text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, libero</p>
            </div>


            <form onSubmit={handleSubmit} className="w-8/12 mx-auto">
                <div className="relative z-0 w-full mb-5 group text-gray-900">
                    <input type="text" name="title" id="title" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Course Title</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="description" id="description" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                </div>
                <div className="relative z-0 w-full mb-10 group">
                    <input type="text" name="instructorName" id="instructor_name" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Instructor Name</label>
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <select type="text" name="badge_color" id="badge_color" className="block py-2.5 px-0 w-full text-md text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Select your Badge Color (hex)" required >

                            {badgeColor.map((color) => (
                                <option className="text-black" key={color} value={color}>
                                    {color}
                                </option>
                            ))}
                        </select>
                        <label className="peer-focus:font-medium absolute text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-semibold">Select your Badge Color <span className="text-red-500">(hex)</span></label>
                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                        <select type="text" name="badgeText" id="badgeText" className="block py-2.5 px-0 w-full text-md text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Select Your Badge" required >

                            {badgeOptions.map((option) => (
                                <option className="text-black" key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                        <label className="peer-focus:font-medium absolute text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-semibold">Select Your Badge</label>
                    </div>
                </div>



                <div className="w-full mx-auto text-center ">
                    <button type="submit" className=" mx-auto max-w-lg text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </div>
            </form>



        </section>
    );
};

export default AddCourse;