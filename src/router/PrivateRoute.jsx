import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoute = ({children}) => {
    const token = localStorage.getItem('token');

    if(!token){
        return <Navigate to="/login"  replace />
    }

    return children; 
};

export default PrivateRoute;


PrivateRoute.propTypes = {
    children: PropTypes.any
  };