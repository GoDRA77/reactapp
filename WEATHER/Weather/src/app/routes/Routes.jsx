import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Main from "@/pages/main/Main.jsx";
import Error from "@/pages/error/Error.jsx";
import Profile from "@/pages/profile/Profile.jsx";
import Login from "@/pages/Login/Login.jsx";
import Registration from "@/pages/Registration/Registration.jsx";
import Weather from "@/pages/weather/Weather.jsx";
import Contact from "@/pages/contact/Contact.jsx";
const Rout = () => {
    return (
        <div>
           <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Registration />} />
                    <Route path="/profile"  element={<Profile/>} />
                    <Route path="/weather" element={<Weather />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Error />} />


                </Routes>
           </BrowserRouter>
        </div>
    );
};

export default Rout;