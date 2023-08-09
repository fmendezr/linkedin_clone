import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import AuthContext from '../Context/AuthContext';

const PrivateRoute = ({ children} ) => {

    let { user } = useContext(AuthContext);

    if (!user){
        return <Navigate to='/login' replace/>
    }
    return (
        children ? children : <Outlet /> 
    )
}

export default PrivateRoute;