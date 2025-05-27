
import {Navigate} from "react-router-dom"
import SignIn from "../SignIn/SignIn"
import HomePage from "../HomePage"
import Profile from "../Profile/Profile";
const routes = [
    {
        path: "/",
        element: <Navigate to="/home" replace/>
    },
    {
        path: "/signIn",
        element: <SignIn/>
    },
    {
        path: "/home",
        element: <HomePage/>
    },
    {
        path: "/profile",
        element: <Profile/>
    }
];
export default routes;