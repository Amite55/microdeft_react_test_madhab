import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CoursesCard from "./CoursesCard";

const Courses = () => {
    const [loading, setLoading] = useState(true);
    const [coursesData, setCoursesData] = useState();
    const navigate = useNavigate();

    const loadData = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            toast.success('Authentication token is missing!');
            navigate('/login')
        }

        try {
            const { data } = await axios.get('https://react-interview.crd4lc.easypanel.host/api/course', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            })
            setCoursesData(data.data.data);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false)
        }
    }
    console.log(coursesData, ";alksjdf;alksjdf");

    useEffect(() => {
        loadData()
    }, [])

    if (loading) {
        return <p className="loading">Loading courses Page...</p>;
    }
    return (

        <>
            {
                coursesData.length > 0 ? <section className="course__container">
                    <div className="course__content__header ">
                        <h3>See Our Courses</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, libero?</p>
                    </div>

                    <div className="course__content md:grid-cols-2 lg:grid-cols-3 ">
                        {
                            coursesData?.map(course => <CoursesCard key={course.id} course={course} />)
                        }
                    </div>
                </section> : <div className="no__data">
                    <h3>No Course For you!</h3>
                    <a href="/addCourse" className=" ">Please Add a New Course.</a>
                </div>
            }

        </>


    );
};

export default Courses;