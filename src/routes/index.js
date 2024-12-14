
import { Routes, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/signUp';
import Dashboard from '../pages/Dashboard';

function RoutesApp() {
    return (
        <Routes>
            <Route path='/' element={ <SignIn/> }/>
            <Route path='/signup' element={ <SignUp/> }/>
            <Route path='/dashboard' element={ <Dashboard/> }/>
        </Routes>
    )
    
}

export default RoutesApp;